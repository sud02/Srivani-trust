from fastapi import FastAPI, HTTPException, Form, Request, File, UploadFile, Response
from pymongo import MongoClient
from pydantic import BaseModel,ValidationError
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from passlib.context import CryptContext
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from typing import Optional
import aiofiles
import os
import json

app = FastAPI()

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client['loginusers']
users_collection = db['users']
bhajana_mandir_forms_collection = db['bhajana_mandir_forms']

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Template setup
templates_directory = os.path.join(os.path.dirname(__file__), 'templates')
templates = Jinja2Templates(directory=templates_directory)

# Static files setup
static_files_path = os.path.join(os.path.dirname(__file__), 'Static')
app.mount("/Static", StaticFiles(directory=static_files_path), name="Static")

# User model for registration
class UserIn(BaseModel):
    username: str
    password: str
    email: str
    phone_number: str

# Bhajana Mandir Form model
class BhajanaMandirForm(BaseModel):
    Phases: str
    EE_Office: str
    District: str
    AssemblyConstituency: str
    Mandal: str
    Name_village: str
    Name_Hamlet: str
    Latitude_location: str
    Longitude_location: str
    Population: str
    Name_individual: str
    Name_Templeproposed: str
    Email_Address: str
    Phone_number: str
    Extent_land: str
    Details_available: str
    Title_land: str
    Survey_No: str
    Boundaries: Optional[str] = None
    Whether_acceptance: Optional[str] = None
    Details_financial: Optional[str] = None

# Hash a password
def get_password_hash(password):
    return pwd_context.hash(password)

# Verify a password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("LoginPage.html", {"request": request})

@app.get("/signup", response_class=HTMLResponse)
async def signup_page(request: Request):
    return templates.TemplateResponse("Signup.html", {"request": request})

@app.get("/Landingpage", response_class=HTMLResponse)
async def landing_page(request: Request):
    return templates.TemplateResponse("Landingpage.html", {"request": request})

@app.get("/Newtemple", response_class=HTMLResponse)
async def new_temple(request: Request):
    return templates.TemplateResponse("Newtemple.html", {"request": request})

@app.get("/users", response_class=HTMLResponse)
async def users_page(request: Request):
    return templates.TemplateResponse("users.html", {"request": request})

@app.get("/Reports", response_class=HTMLResponse)
async def reports_page(request: Request):
    return templates.TemplateResponse("Reports.html", {"request": request})

@app.post("/signup", response_class=HTMLResponse)
async def signup(user: UserIn):
    existing_user = users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    hashed_password = get_password_hash(user.password)
    user_dict = user.dict()
    user_dict['password'] = hashed_password
    users_collection.insert_one(user_dict)
    return RedirectResponse(url="/", status_code=303)

@app.post("/login", response_class=HTMLResponse)
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    existing_user = users_collection.find_one({"username": username})
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
    if verify_password(password, existing_user['password']):
        return templates.TemplateResponse("Landingpage.html", {"request": request, "username": username})
    else:
        raise HTTPException(status_code=400, detail="Incorrect password")
    
@app.post("/submit_bhajana_mandir_form", response_class=HTMLResponse)
async def submit_bhajana_mandir_form(
    form_data: str = Form(...),
    documents_requestee: Optional[UploadFile] = File(None),
):
    try:
        data = json.loads(form_data)
        form = BhajanaMandirForm(**data)
    except ValidationError as e:
        return JSONResponse(content={"detail": e.errors()}, status_code=422)
    except json.JSONDecodeError:
        return JSONResponse(content={"detail": "Invalid JSON format"}, status_code=400)
    
    UPLOAD_DIRECTORY = "/Users/sud/Desktop/Project/Requested_doc"
    os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)
    
    if documents_requestee:
        file_path = os.path.join(UPLOAD_DIRECTORY, documents_requestee.filename)
        async with aiofiles.open(file_path, 'wb') as out_file:
            content = await documents_requestee.read()  
            await out_file.write(content) 
        form_dict = form.dict()
        form_dict['Documents_requestee'] = documents_requestee.filename 
    
    insert_result = bhajana_mandir_forms_collection.insert_one(form_dict)
    
    return RedirectResponse(url="/Landingpage", status_code=303)

if __name__ =="__main__":
    app.run()
