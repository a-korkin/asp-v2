from pydantic import BaseSettings

class GlobalConfig(BaseSettings):
    DATABASE_URL: str
    API_V1 = "/api/v1"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

def create_settings() -> GlobalConfig:
    return GlobalConfig()

settings = create_settings()    
