from uuid import UUID
from typing import List, Optional
from .base import BaseSchema

class NavigationBaseSchema(BaseSchema):
    title: str
    slug: str
    order: int
    block: bool
    parent_id: Optional[UUID]

class NavigationSchema(NavigationBaseSchema):
    id: UUID

class NavigationChildSchema(NavigationSchema):
    ...

class NavigationInSchema(NavigationBaseSchema):    
    ...

class NavigationOutSchema(NavigationSchema):    
    childs: Optional[List[NavigationChildSchema]]
