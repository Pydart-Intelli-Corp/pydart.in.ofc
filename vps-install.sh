#!/bin/bash

# VPS Setup Script for Pydart.in
# Run this script on your VPS as root

set -e

echo "=========================================="
echo "🚀 Pydart.in VPS Setup Script"
echo "=========================================="
echo ""

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 20.x LTS
echo "📦 Installing Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt install -y nodejs
    echo "✅ Node.js installed: $(node -v)"
else
    echo "✅ Node.js already installed: $(node -v)"
fi

# Install PM2
echo "📦 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo "✅ PM2 installed: $(pm2 -v)"
else
    echo "✅ PM2 already installed: $(pm2 -v)"
fi

# Install Nginx
echo "📦 Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt install -y nginx
    echo "✅ Nginx installed: $(nginx -v)"
else
    echo "✅ Nginx already installed: $(nginx -v)"
fi

# Install Certbot
echo "📦 Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    apt install -y certbot python3-certbot-nginx
    echo "✅ Certbot installed"
else
    echo "✅ Certbot already installed"
fi

# Install Git (if needed)
echo "📦 Installing Git..."
apt install -y git

# Create directories
echo "📁 Creating project directories..."
mkdir -p /var/www/pydart.in
mkdir -p /var/log/pm2
mkdir -p /var/log/nginx

# Set permissions
chmod -R 755 /var/www

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 85/tcp
echo "y" | ufw enable
ufw status

echo ""
echo "=========================================="
echo "✅ VPS Setup Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Upload your project files to /var/www/pydart.in"
echo "2. Run: cd /var/www/pydart.in && npm install && npm run build"
echo "3. Configure SSL certificates"
echo "4. Set up Nginx configuration"
echo ""
