from uuid import UUID
from typing import List, Optional
from .base import BaseSchema

class NavigationBaseSchema(BaseSchema):
    title: str

class NavigationSchema(NavigationBaseSchema):
    id: UUID
    parent_id: Optional[UUID]

class NavigationChildSchema(NavigationSchema):
    ...

class NavigationInSchema(NavigationBaseSchema):    
    ...

class NavigationOutSchema(NavigationSchema):    
    childs: Optional[List[NavigationChildSchema]]
