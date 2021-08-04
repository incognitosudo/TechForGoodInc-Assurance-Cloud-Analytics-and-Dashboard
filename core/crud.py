''' 
CRUD stand for: Create, Read, Update, and Delete.
'''
from sqlalchemy.orm import Session
import models, schemas
from passlib.context import CryptContext


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(db: Session, user_name: str):
    return db.query(models.User).filter(models.User.username == user_name).first()

def create_user(db: Session, user: schemas.UserCreate):
    ''' Need to hashed psw '''
    pwd = get_password_hash(user.password)
    db_user = models.User(username=user.username, password=pwd)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate_user(db: Session, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(user.password, user.hashed_password):
        return False
    return user