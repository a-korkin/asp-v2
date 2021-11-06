from uuid import UUID
from typing import List
from sqlalchemy.orm import Session
from models.navigations import Navigation
from schemas.navigations import NavigationSchema, NavigationOutSchema

def __get_item(db: Session, id: UUID) -> Navigation:
    return db.query(Navigation).filter_by(id=id).first()

def get_item(db: Session, id: UUID) -> NavigationOutSchema:
    item = __get_item(db=db, id=id)
    if item:
        return NavigationOutSchema.from_orm(item)
    
    return None

def get_items(db: Session) -> List[NavigationOutSchema]:
    list = db.query(Navigation).all()
    return [NavigationOutSchema.from_orm(item) for item in list]

def create_item(db: Session, item: NavigationSchema) -> NavigationOutSchema:
    item_db = Navigation(**item.dict())
    db.add(item_db)
    db.commit()
    db.refresh(item_db)
    return NavigationOutSchema.from_orm(item_db)

def update_item(db: Session, id: UUID, item: NavigationSchema) -> NavigationOutSchema:
    item_db = __get_item(db=db, id=id)        

    if item_db:
        item_db.update(**item.dict())
        db.commit()
        db.refresh(item_db)

        return NavigationOutSchema.from_orm(item_db)

    return None

def delete_item(db: Session, id: UUID) -> bool:
    item_db = __get_item(db=db, id=id)

    if item_db:
        db.delete(item_db)
        db.commit()
        return True
    
    return False
