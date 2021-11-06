from uuid import UUID
from typing import List
from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from db.setup import get_db
from models.persons import Person
from schemas.persons import PersonSchema, PersonOutSchema
from repositories.persons import get_person, get_persons, create_person, update_person, delete_person

router = APIRouter()

@router.get("/", response_model=List[PersonOutSchema])
async def get_all(db: Session=Depends(get_db)) -> List[PersonOutSchema]:
    return get_persons(db=db)   

@router.get("/{id}", response_model=PersonOutSchema)
async def get_item(id: UUID, db: Session=Depends(get_db)) -> PersonOutSchema:
    person = get_person(db=db, id=id)

    if not person:
        raise HTTPException(status_code=404, detail="person not found")

    return person

@router.post("/", response_model=PersonOutSchema)    
async def create(payload: PersonSchema, db: Session=Depends(get_db)) -> PersonOutSchema:
    return create_person(db=db, person=payload)

@router.put("/{id}", response_model=PersonOutSchema)    
async def update(id: UUID, payload: PersonSchema, db: Session=Depends(get_db)) -> PersonOutSchema:
    person = update_person(db=db, id=id, person=payload)

    if not person:
        raise HTTPException(status_code=404, detail="person not found")

    return person

@router.delete("/{id}")
async def delete(id: UUID, db: Session=Depends(get_db)):
    res: bool = delete_person(db=db, id=id) 
    if res:
        return {"detail": "person deleted"}    
    
    raise HTTPException(status_code=404, detail="person not found")
