from graphene_sqlalchemy import SQLAlchemyObjectType
from pydantic import BaseModel


# class UserBase(BaseModel):
#     username: str

class UserCreate(BaseModel):
    username: str
    password: str

class User(BaseModel):
    id: int
    class Config:
         orm_mode=True