import pandas as pd
import numpy as np
import pickle
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_absolute_error, r2_score

def train_model(data_path, model_dir):
    print(f"Loading cleaned data from {data_path}...")
    df = pd.read_csv(data_path)
    
    # Encode categorical location
    le = LabelEncoder()
    df['Location_encoded'] = le.fit_transform(df['Location'])
    
    # Define features and target
    # We won't use 'Price_per_sqft' in features as it leaks target information
    features = ['Location_encoded', 'Area_sqft', 'BHK', 'Bathrooms', 'Floor', 'Total_Floors', 'Age_of_Property', 'Parking', 'Lift']
    target = 'Actual_Price'
    
    X = df[features]
    y = df[target]
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train Model (Random Forest for robust baseline)
    print("Training Random Forest Regressor...")
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate
    predictions = model.predict(X_test)
    mae = mean_absolute_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    mape = np.mean(np.abs((y_test - predictions) / y_test)) * 100
    
    print(f"Model Training Complete.")
    print(f"MAE: {mae:,.2f}")
    print(f"R2 Score: {r2:.4f}")
    print(f"MAPE: {mape:.2f}%")
    
    # Save Model, LabelEncoder, and Feature List
    os.makedirs(model_dir, exist_ok=True)
    
    model_data = {
        'model': model,
        'label_encoder': le,
        'features': features
    }
    
    model_path = os.path.join(model_dir, 'model_bundle.pkl')
    with open(model_path, 'wb') as f:
        pickle.dump(model_data, f)
    
    print(f"Model bundle saved to {model_path}")

if __name__ == "__main__":
    data_file = "backend/data/cleaned_data.csv"
    model_output_dir = "backend/models"
    
    if os.getcwd().endswith('backend'):
        data_file = "data/cleaned_data.csv"
        model_output_dir = "models"
        
    train_model(data_file, model_output_dir)
