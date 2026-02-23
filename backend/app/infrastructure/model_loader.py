import pickle
import os
import logging
from typing import Dict, Any

class ModelLoader:
    _instance = None
    _model_data: Dict[str, Any] = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ModelLoader, cls).__new__(cls)
        return cls._instance

    def load_model(self, model_path: str):
        if self._model_data is None:
            if not os.path.exists(model_path):
                raise FileNotFoundError(f"Model file not found at {model_path}")
            
            logging.info(f"Loading model from {model_path}...")
            with open(model_path, 'rb') as f:
                self._model_data = pickle.load(f)
            logging.info("Model loaded successfully.")
        return self._model_data

    @property
    def model(self):
        return self._model_data['model']

    @property
    def label_encoder(self):
        return self._model_data['label_encoder']

    @property
    def features(self):
        return self._model_data['features']

model_loader = ModelLoader()
