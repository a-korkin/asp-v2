import uuid
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from .entities import Entity

class Person(Entity):
    __tablename__ = "cd_persons"
    __table_args__ = {"schema": "common", "comment": "физлица"}
    id = Column(UUID(as_uuid=True), ForeignKey("common.cd_entities.id"), primary_key=True, default=uuid.uuid4, comment="идентификатор")
    last_name = Column(String(500), name="c_last_name", nullable=False, comment="фамилия")
    first_name = Column(String(500), name="c_first_name", nullable=False, comment="имя")
