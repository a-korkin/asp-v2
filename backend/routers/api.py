from fastapi import APIRouter
from routers import persons, navigations

api_router = APIRouter()
api_router.include_router(persons.router, prefix="/persons")
api_router.include_router(navigations.router, prefix="/navigations")
