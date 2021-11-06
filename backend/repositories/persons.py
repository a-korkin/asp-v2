from uuid import UUID
from typing import List
from sqlalchemy.orm import Session
from schemas.persons import PersonSchema, PersonOutSchema
from models.persons import Person

def __get_item(db: Session, id: UUID) -> Person:
    return db.query(Person).filter_by(id=id).first()

def get_person(db: Session, id: UUID) -> PersonOutSchema:
    person = __get_item(db=db, id=id)
    if person:
        return PersonOutSchema.from_orm(person)
    return None

def get_persons(db: Session) -> List[PersonOutSchema]:
    persons = db.query(Person).all()
    return [PersonOutSchema.from_orm(person) for person in persons]

def create_person(db: Session, person: PersonSchema) -> PersonOutSchema:
    person_db = Person(**person.dict())    
    db.add(person_db)
    db.commit()
    db.refresh(person_db)
    return PersonOutSchema.from_orm(person_db)

def update_person(db: Session, id: UUID, person: PersonSchema) -> PersonOutSchema:
    person_db = __get_item(db=db, id=id)

    if person_db:
        person_db.update(**person.dict())
        db.commit()
        db.refresh(person_db)

        return PersonOutSchema.from_orm(person_db)

    return None

def delete_person(db: Session, id: UUID) -> bool:
    person_db = __get_item(db=db, id=id)

    if person_db:
        db.delete(person_db)
        db.commit()
        return True
    
    return False
