import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Navi Mumbai House Price Predictor"
    BASE_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    # In a real app, these would come from env vars
    API_V1_STR: str = "/api/v1"

settings = Settings()
