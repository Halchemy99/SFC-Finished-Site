#!/bin/bash
set -e

echo "Installing emergentintegrations from custom index..."
python -m pip install --upgrade pip
python -m pip install --extra-index-url https://d33sy5i8bnduwe.cloudfront.net/simple/ emergentintegrations

echo "Installing other dependencies..."
python -m pip install -r requirements.txt

echo "Starting server..."
uvicorn server:app --host 0.0.0.0 --port ${PORT:-8000}
