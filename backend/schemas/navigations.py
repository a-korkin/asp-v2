from uuid import UUID
from typing import List, Optional
from .base import BaseSchema

class NavigationBaseSchema(BaseSchema):
    title: str
    slug: str
    order: int
    parent_id: Optional[UUID] 

class NavigationInSchema(NavigationBaseSchema):    
    ...

class NavigationSchema(NavigationBaseSchema):
    id: UUID

class NavigationOutSchema(NavigationSchema): 
    childs: Optional[List["NavigationOutSchema"]]

NavigationOutSchema.update_forward_refs()
