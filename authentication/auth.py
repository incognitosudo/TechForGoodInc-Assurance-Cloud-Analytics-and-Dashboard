from connect import crsr, cnxn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Hello"}