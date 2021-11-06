from uuid import UUID
from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from db.setup import get_db
from models.persons import Person
from schemas.persons import PersonSchema
from typing import List

router = APIRouter()

@router.get("/", response_model=List[PersonSchema])
async def get_all(db: Session=Depends(get_db)):
    persons = db.query(Person).all()
    return [PersonSchema.from_orm(p) for p in persons]     

@router.post("/", response_model=PersonSchema)    
async def create(payload: PersonSchema, db: Session=Depends(get_db)):
    person = Person(**payload.dict())
    db.add(person)
    db.commit()
    db.refresh(person)
    
    return PersonSchema.from_orm(person)

@router.put("/{id}", response_model=PersonSchema)    
async def update(id: UUID, payload: PersonSchema, db: Session=Depends(get_db)):
    person: Person = db.query(Person).filter_by(id=id).first()
    person.update(**payload.dict())
    db.commit()
    db.refresh(person)

    return PersonSchema.from_orm(person)
