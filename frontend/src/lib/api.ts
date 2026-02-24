import axios from "axios";
import { PredictionRequest, PredictionResponse } from "@/types";

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000") + "/api/v1";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getPrediction = async (data: PredictionRequest): Promise<PredictionResponse> => {
    const response = await api.post("/predict", data);
    return response.data;
};

export const getMarketStats = async () => {
    // High-level metrics
    return {
        avgPrice: 8450,
        priceChange: 5.2,
        activeNode: "Kharghar",
        rentalYield: 3.8,
    };
};

export const getMarketTrends = async (node?: string) => {
    return [
        { year: 2021, price: 6500, rentalPrice: 15 },
        { year: 2022, price: 7200, rentalPrice: 18 },
        { year: 2023, price: 7800, rentalPrice: 20 },
        { year: 2024, price: 8200, rentalPrice: 22 },
        { year: 2025, price: 8450, rentalPrice: 25 },
    ];
};

export default api;
