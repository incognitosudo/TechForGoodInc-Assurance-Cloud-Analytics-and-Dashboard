from datetime import datetime, timedelta
from fastapi import FastAPI, Path, Depends, HTTPException, status
from typing import Optional
from pydantic import BaseModel
from connect import crsr, cnxn
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
import secrets


SECRET_KEY = secrets.token_hex(20)
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

app = FastAPI()

# Classes
class User(BaseModel):
    name: str
    email: str
    password: str
    position: str


class Incident(BaseModel):
    incident_id: str
    date: str
    state: str
    city: str
    address: str
    killed: str
    injuried: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None

@app.get("/")
def testing_endpoint():
    return {"Data":"Hello World"}

# Auth Endpoints
@app.post("/sign-up")
def sign_up(user: User):
    pass


@app.get("/get-all-incidents")
def get_all_incidents():
    pass

@app.get("/get-incident/{incident_id}")
def get_incident_by_id(incident_id: str):
    pass


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
