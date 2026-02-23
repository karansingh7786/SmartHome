# Navi Mumbai House Price Predictor

A production-ready ML web application to predict property valuations in Navi Mumbai nodes (Kharghar, Vashi, Ulwe, etc.) using FastAPI and Next.js.

## Tech Stack
- **ML**: Python, Scikit-Learn (Random Forest), Pandas
- **Backend**: FastAPI (Clean Architecture)
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Framer Motion
- **DevOps**: Docker, GitHub Actions

## Structure
- `/backend`: FastAPI API, ML scripts, and exported models.
- `/frontend`: Next.js web application.
- `/.github`: CI/CD configuration.

## Setup Instructions

### Backend
1. `cd backend`
2. `pip install -r requirements.txt`
3. `python scripts/clean_data.py`
4. `python scripts/train_model.py`
5. `uvicorn main:app --reload`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Deployment
- **Backend**: Deploy to Render using the provided `Dockerfile`.
- **Frontend**: Deploy to Vercel (connect to the production backend URL).

## Features
- Interactive Valuation Form
- Verified Node Coverage
- Premium Dark UI
- Detailed Price Breakdowns
