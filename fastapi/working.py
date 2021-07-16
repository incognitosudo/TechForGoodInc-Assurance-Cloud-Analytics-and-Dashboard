from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

# GET
# POST
# PUT
# DELETE


class Item(BaseModel):
    name: str
    price: float
    brand: Optional[str] = None


class UpdateItem(BaseModel):
    name: Optional[str] = None  # optionals
    price: Optional[float] = None  # optionals
    brand: Optional[str] = None  # optionals


inventory = {}  # holds instances of Item


@app.get("/get-item/{item_id}")
def get_item(item_id: int = Path(None, description="The ID of the item you would like to view", gt=0)):
    # le = less than equal to, ge = greater than equal to, gt = greater than, lt = less than to strict what number can be passed
    return inventory[item_id]


# making str = Optional(str) or str = None from typing makes it optional
@app.get("/get-by-name")
def get_by_name(name: Optional[str] = None):
    # le = less than equal to, ge = greater than equal to, gt = greater than, lt = less than to strict what number can be passed
    for item_id in inventory:
        if(inventory[item_id].name == name):
            return inventory[item_id]
    return {"Data": "Not found"}


# making str = Optional(str) or str = None from typing makes it optional
@app.get("/get-by-brand")
def get_by_name(brand: Optional[str] = None):
    # le = less than equal to, ge = greater than equal to, gt = greater than, lt = less than to strict what number can be passed
    for item_id in inventory:
        if(inventory[item_id].brand == brand):
            return inventory[item_id]
    return {"Data": "Not found"}


@app.post("/create-item/{item_id}")
# Item Class which extends Base Model will help us get the request body for the POST request
def create_item(item_id: int, item: Item):
    if item_id in inventory:
        return {"Error": "Item ID already exists"}
    # it will take the object and convert it into JSON
    inventory[item_id] = item
    return inventory[item_id]


@app.put("/update-item/{item_id}")
# Update Class which extends Base Model will help us get the request body for the POST request for update because fields will be optional
def create_item(item_id: int, item: UpdateItem):
    if item_id not in inventory:
        return {"Error": "Item ID already exists"}
    # it will take the object and convert it into JSON
    inventory[item_id].update(item)
    return inventory[item_id]
