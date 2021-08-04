''' 
CRUD stand for: Create, Read, Update, and Delete.
'''
from sqlalchemy.orm import Session
import models, schemas

def get_user(db: Session, user_name: int):
    return db.query(models.User).filter(models.User.username == user_name).first()

def create_user(db: Session, user: schemas.UserCreate):
    ''' Need to hashed psw '''
    db_user = models.User(username=user.username, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user