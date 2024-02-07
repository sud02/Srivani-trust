from fastapi import FastAPI, HTTPException, Form, Request
from pymongo import MongoClient
from pydantic import BaseModel
from fastapi.responses import HTMLResponse,RedirectResponse
from passlib.context import CryptContext
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client['loginusers']
users_collection = db['users']

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

# Hash a password
def get_password_hash(password):
    return pwd_context.hash(password)

# Verify a password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
@app.get("/LoginPage", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("LoginPage.html", {"request": request})

@app.get("/signup", response_class=HTMLResponse)
async def signup_page(request: Request):
    return templates.TemplateResponse("Signup.html", {"request": request})

@app.get("/Landingpage", response_class=HTMLResponse)
async def landing_page(request: Request):
    return templates.TemplateResponse("Landingpage.html", {"request": request})

@app.post("/signup", response_class=HTMLResponse)
async def signup(user: UserIn):
    # Check if user already exists
    existing_user = users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    hashed_password = get_password_hash(user.password)
    user_dict = user.dict()
    user_dict['password'] = hashed_password
    users_collection.insert_one(user_dict)
    return RedirectResponse(url="/LoginPage", status_code=303)

@app.post("/login", response_class=HTMLResponse)
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    existing_user = users_collection.find_one({"username": username})
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
    if verify_password(password, existing_user['password']):
        return templates.TemplateResponse("Landingpage.html", {"request": request, "username": username})
    else:
        raise HTTPException(status_code=400, detail="Incorrect password")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
