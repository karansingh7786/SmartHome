export interface PredictionStats {
    avgPrice: number;
    priceChange: number;
    activeNode: string;
    rentalYield: number;
}

export interface MarketTrend {
    year: number;
    price: number;
    rentalPrice: number;
}

export interface InfrastructureProject {
    id: string;
    name: string;
    description: string;
    impactScore: number;
    completionYear: number;
    distanceImpact: string;
    appreciation: string;
}

export interface PredictionRequest {
    node: string;
    bhk: number;
    area: number;
    furnishing: string;
    floor: number;
    newResale: string;
}

export interface PredictionResponse {
    estimatedPrice: number;
    confidenceRange: {
        low: number;
        mid: number;
        high: number;
    };
    comparableSales: Array<{
        area: string;
        price: number;
        date: string;
    }>;
}
