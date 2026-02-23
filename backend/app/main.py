import logging
import uvicorn
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.interfaces.api import router
from app.infrastructure.model_loader import model_loader
from app.core.config import settings

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load model on startup
    model_path = os.path.join(settings.BASE_DIR, "models", "model_bundle.pkl")
    model_loader.load_model(model_path)
    yield
    # Clean up on shutdown if needed

app = FastAPI(
    title="Navi Mumbai House Price Predictor",
    description="API for predicting house prices in Navi Mumbai based on historical data.",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health", tags=["Monitoring"])
async def health_check():
    return {"status": "healthy", "model_loaded": model_loader._model_data is not None}

# Include routes
app.include_router(router, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
