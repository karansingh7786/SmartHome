from pydantic import BaseModel, Field
from typing import Optional

class PredictionRequest(BaseModel):
    location: str = Field(..., description="Location in Navi Mumbai")
    area_sqft: float = Field(..., gt=0, description="Carpet area in square feet")
    bhk: int = Field(..., gt=0, description="Number of bedrooms")
    bathrooms: int = Field(..., gt=0, description="Number of bathrooms")
    floor: int = Field(..., description="Floor number (0 for ground)")
    total_floors: int = Field(..., gt=0, description="Total floors in the building")
    age_of_property: float = Field(..., ge=0, description="Age of the property in years")
    parking: bool = Field(False, description="Whether parking is available")
    lift: bool = Field(False, description="Whether lift is available")

class PredictionResponse(BaseModel):
    estimated_price: float
    formatted_price: str
    price_per_sqft: float
    currency: str = "INR"
    status: str = "success"
