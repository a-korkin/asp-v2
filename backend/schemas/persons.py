from uuid import UUID
from .base import BaseSchema

class PersonSchema(BaseSchema):
    last_name: str
    first_name: str

class PersonOutSchema(PersonSchema):
    id: UUID
