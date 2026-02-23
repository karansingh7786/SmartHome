import pandas as pd
import numpy as np
import re
import os

def clean_data(input_path, output_path):
    print(f"Loading data from {input_path}...")
    df = pd.read_csv(input_path)
    
    # 1. Basic Cleaning
    df.columns = [col.strip() for col in df.columns]
    
    # Remove rows where Location is empty
    df = df[df['Location'].notna() & (df['Location'].str.strip() != "")]
    df['Location'] = df['Location'].str.strip().str.title()

    # 2. Area_sqft cleaning
    df = df[df['Area_sqft'] > 0]

    # 3. Actual_Price cleaning
    def clean_price(price):
        if pd.isna(price): return np.nan
        price_str = str(price)
        price_str = re.sub(r'[₹,INR\s]', '', price_str)
        try:
            return float(price_str)
        except:
            return np.nan

    df['Actual_Price'] = df['Actual_Price'].apply(clean_price)
    df = df[df['Actual_Price'] > 0]

    # 4. BHK cleaning
    def clean_bhk(bhk):
        if pd.isna(bhk): return np.nan
        match = re.search(r'\d+', str(bhk))
        return int(match.group()) if match else np.nan

    df['BHK'] = df['BHK'].apply(clean_bhk)

    # 5. Bathrooms cleaning
    df['Bathrooms'] = pd.to_numeric(df['Bathrooms'], errors='coerce')

    # 6. Floor cleaning
    def clean_floor(floor):
        if pd.isna(floor): return np.nan
        floor_str = str(floor).lower().strip()
        if 'ground' in floor_str: return 0
        match = re.search(r'\d+', floor_str)
        return int(match.group()) if match else np.nan

    df['Floor'] = df['Floor'].apply(clean_floor)
    df['Total_Floors'] = pd.to_numeric(df['Total_Floors'], errors='coerce')

    # 7. Boolean fields (Parking, Lift)
    def clean_bool(val):
        if pd.isna(val): return 0
        val_str = str(val).lower().strip()
        return 1 if val_str in ['yes', '1', 'true'] else 0

    df['Parking'] = df['Parking'].apply(clean_bool)
    df['Lift'] = df['Lift'].apply(clean_bool)

    # 8. Handling Nulls - Simple Imputation
    df['BHK'] = df['BHK'].fillna(df['BHK'].median())
    df['Bathrooms'] = df['Bathrooms'].fillna(df['Bathrooms'].median())
    df['Floor'] = df['Floor'].fillna(df['Floor'].median())
    df['Total_Floors'] = df['Total_Floors'].fillna(df['Total_Floors'].median())
    df['Age_of_Property'] = df['Age_of_Property'].fillna(df['Age_of_Property'].median())

    # 9. Feature Engineering: Price per sqft
    df['Price_per_sqft'] = df['Actual_Price'] / df['Area_sqft']

    print(f"Cleaning complete. Shape: {df.shape}")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    df.to_csv(output_path, index=False)
    print(f"Cleaned data saved to {output_path}")

if __name__ == "__main__":
    input_file = "navi_mumbai_real_estate_uncleaned_2500.csv"
    if not os.path.exists(input_file):
        # Check if we are in backend/
        input_file = os.path.join("..", input_file)
    
    if not os.path.exists(input_file):
        print(f"Error: Could not find {input_file}")
    else:
        output_file = "backend/data/cleaned_data.csv"
        # Adjust output if we are in backend/
        if os.getcwd().endswith('backend'):
            output_file = "data/cleaned_data.csv"
            
        clean_data(input_file, output_file)
