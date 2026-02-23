from fastapi import APIRouter, HTTPException, Depends
from app.domain.models import PredictionRequest, PredictionResponse
from app.use_cases.prediction import prediction_service
from app.infrastructure.model_loader import model_loader

router = APIRouter()

@router.post("/predict", response_model=PredictionResponse, tags=["ML Models"])
async def predict(request: PredictionRequest):
    """
    Predict the house price based on property features.
    """
    if model_loader._model_data is None:
        raise HTTPException(status_code=503, detail="Model not initialized")
    
    try:
        return prediction_service.predict_price(request)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/locations", tags=["Metadata"])
async def get_locations():
    """
    Get the list of supported locations for prediction.
    """
    if model_loader._model_data is None:
        return []
    return sorted(model_loader.label_encoder.classes_.tolist())
