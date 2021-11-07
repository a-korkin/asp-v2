import uuid
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .entities import Entity

class Navigation(Entity):
    __tablename__ = "cd_navigations"    
    __table_args__ = {"schema": "public", "comment": "меню"}
    id = Column(UUID(as_uuid=True), ForeignKey("common.cd_entities.id"), primary_key=True, default=uuid.uuid4, comment="идентификатор")
    title = Column(String(500), name="c_title", nullable=False, comment="название")
    parent_id = Column(UUID(as_uuid=True), ForeignKey("public.cd_navigations.id"), name="f_parent", comment="родитель")
    # parent = relationship("Navigation", foreign_keys=[parent_id], remote_side=[id])
    # parent = relationship("Navigation", back_populates="childs")
    slug = Column(String(500), name="c_slug", nullable=False, comment="псевдоним")
    order = Column(Integer, name="n_order", nullable=False, comment="порядок")
    # childs = relationship("Navigation", foreign_keys=[parent_id], lazy="joined")
    childs = relationship("Navigation", foreign_keys=[parent_id], lazy="joined")
    