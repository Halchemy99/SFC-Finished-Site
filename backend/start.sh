#!/bin/bash
pip install --extra-index-url https://d33sy5i8bnduwe.cloudfront.net/simple/ emergentintegrations
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port $PORT