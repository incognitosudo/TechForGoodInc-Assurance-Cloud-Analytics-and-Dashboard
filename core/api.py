from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
from connect import crsr, cnxn

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



