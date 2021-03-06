import uvicorn 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from routers.api import api_router

def create_app() -> FastAPI:
    app = FastAPI(
        docs_url=None,
        redoc_url=None
    )

    app.include_router(api_router, prefix=settings.API_V1)

    origins = [
        "http://localhost:3000"
    ]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )

    return app

app = create_app()    

def main():
    uvicorn.run(app="main:app", port=5000, reload=True)

if __name__ == "__main__":
    main()
    