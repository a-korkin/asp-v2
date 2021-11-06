from uuid import UUID
from typing import Optional
from .base import BaseSchema

class NavigationSchema(BaseSchema):
    title: str
    parent_id: Optional[UUID]

class NavigationOutSchema(NavigationSchema):
    id: UUID
