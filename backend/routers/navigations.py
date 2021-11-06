from uuid import UUID
from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from fastapi.params import Depends
from sqlalchemy.orm import Session
from typing import List
from db.setup import get_db
from schemas.navigations import NavigationSchema, NavigationOutSchema
from repositories.navigations import get_item, get_items, create_item, update_item, delete_item

router = APIRouter()

@router.get("/", response_model=List[NavigationOutSchema])
async def get_all(db: Session=Depends(get_db)) -> List[NavigationOutSchema]:
    return get_items(db=db)

@router.get("/{id}", response_model=NavigationOutSchema)
async def get(db: Session=Depends(get_db)) -> NavigationOutSchema:
    item = get_item(db=db, id=id)

    if not item:
        raise HTTPException(status_code=404, detail="navigation not found")
    
    return item

@router.post("/", response_model=NavigationOutSchema)
async def create(item: NavigationSchema, db: Session=Depends(get_db)) -> NavigationOutSchema:
    return create_item(db=db, item=item)

@router.put("/{id}", response_model=NavigationOutSchema)   
async def update(item: NavigationSchema, db: Session=Depends(get_db)) -> NavigationOutSchema:
    item = update_item(db=db, id=id, item=item)   

    if not item:
        raise HTTPException(status_code=404, detail="navigation not found") 

    return item

@router.delete("/{id}")
async def delete(id: UUID, db: Session=Depends(get_db)):
    if delete_item(db=db, id=id):
        return {"detail": "navigation deleted"}
    
    raise HTTPException(status_code=404, detail="navigation not found")
