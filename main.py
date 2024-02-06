from fastapi import FastAPI, HTTPException, Form, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pymongo import MongoClient
import bcrypt

app = FastAPI()

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")  # Update this with your MongoDB URI if needed
db = client["login_system"]  # Your database name
users_collection = db["users"]  # Your collection name

templates = Jinja2Templates(directory="templates")

@app.get("/LoginPage.html", response_class=HTMLResponse)
async def get_login(request: Request):
    return templates.TemplateResponse("LoginPage.html", {"request": request})

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

@app.get("/signup", response_class=HTMLResponse)
async def get_signup(request: Request):
    return templates.TemplateResponse("/Pages/Signuppage/Signup.html", {"request": request})

@app.get("/login", response_class=HTMLResponse)
async def get_login(request: Request):
    return templates.TemplateResponse("/Pages/Loginpage/LoginPage.html", {"request": request})

@app.post("/signup")
async def signup(
    request: Request,
    username: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    phone_number: str = Form(...),
    role: str = Form(...),
):
    # Check if the user already exists
    existing_user = users_collection.find_one({"username": username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    # Hash the password before storing it
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Create a new user document
    user_data = {
        "username": username,
        "email": email,
        "password": hashed_password.decode('utf-8'), 
        "phone_number": phone_number,
        "role": role,
    }

    # Insert the user document into the collection
    result = users_collection.insert_one(user_data)
    if result.inserted_id:
        # Redirect to login page after successful signup
        return RedirectResponse(url="/Pages/Loginpage/LoginPage.html", status_code=303)
    else:
        raise HTTPException(status_code=500, detail="Failed to register user")

@app.post("/login")
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    user = users_collection.find_one({"username": username})
    if user and verify_password(password, user["password"]):
        # Redirect to a success page (or wherever you'd like the user to go after login)
        # Ensure you have an appropriate route/page for this redirect
        return RedirectResponse(url="/Srivani-trust/Pages/Landingpage/Landingpage.html", status_code=303)  # Update this URL as needed
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
