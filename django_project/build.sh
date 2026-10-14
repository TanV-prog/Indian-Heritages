#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "=== Building Indian Heritage Platform for Deployment ==="

# Install python dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Collect static files into staticfiles/
python manage.py collectstatic --no-input

# Apply database migrations
python manage.py migrate

# Seed sample demonstration heritage data
python manage.py seed_data

echo "=== Build and Data Seeding Completed Successfully! ==="
