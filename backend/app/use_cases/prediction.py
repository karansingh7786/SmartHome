import pandas as pd
import numpy as np
from app.domain.models import PredictionRequest, PredictionResponse
from app.infrastructure.model_loader import model_loader

class PredictionService:
    def predict_price(self, request: PredictionRequest) -> PredictionResponse:
        # Prepare input data
        # Encode location
        try:
            # We title case to match training data
            location_cleaned = request.location.strip().title()
            # If location not in encoder, we might need a fallback or return error
            # For simplicity, we assume the UI provides valid locations from a list
            location_encoded = model_loader.label_encoder.transform([location_cleaned])[0]
        except ValueError:
            # Fallback to a default or most common if unknown
            # In a real app, you'd want better handling
            location_encoded = model_loader.label_encoder.transform([model_loader.label_encoder.classes_[0]])[0]

        input_data = pd.DataFrame([{
            'Location_encoded': location_encoded,
            'Area_sqft': request.area_sqft,
            'BHK': request.bhk,
            'Bathrooms': request.bathrooms,
            'Floor': request.floor,
            'Total_Floors': request.total_floors,
            'Age_of_Property': request.age_of_property,
            'Parking': 1 if request.parking else 0,
            'Lift': 1 if request.lift else 0
        }])

        # Inference
        price_pred = model_loader.model.predict(input_data[model_loader.features])[0]
        
        return PredictionResponse(
            estimated_price=round(float(price_pred), 2),
            formatted_price=f"₹{price_pred:,.2f}",
            price_per_sqft=round(float(price_pred / request.area_sqft), 2)
        )

prediction_service = PredictionService()
