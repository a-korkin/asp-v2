import uuid
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import UUID
from db.setup import Base

class Entity(Base):
    __tablename__ = "cd_entities"
    __table_args__ = {"schema": "common", "comment": "сущности"}
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, comment="идентификатор")

    def update(self, *args, **kwargs):
        for key, value in kwargs.items():
            if hasattr(self, key):
                setattr(self, key, value)
