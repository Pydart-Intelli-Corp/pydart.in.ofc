#!/bin/bash

# Deployment script for Pydart.in
# Run this script on your VPS

set -e

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/pydart.in

# Pull latest changes (if using git)
# git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production=false

# Build the application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "♻️  Restarting application..."
pm2 restart ecosystem.config.js

echo "✅ Deployment complete!"
