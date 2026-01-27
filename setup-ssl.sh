#!/bin/bash

# SSL Certificate Setup Script
# Run this AFTER uploading Nginx configuration

set -e

echo "=========================================="
echo "🔒 SSL Certificate Setup for pydart.com"
echo "=========================================="
echo ""

# Stop Nginx to free port 80
echo "⏸️  Stopping Nginx..."
systemctl stop nginx

# Obtain SSL certificate
echo "📜 Obtaining SSL certificate..."
certbot certonly --standalone -d pydart.com -d www.pydart.com --non-interactive --agree-tos --email admin@pydart.com

# Check if certificate was obtained
if [ -d "/etc/letsencrypt/live/pydart.com" ]; then
    echo "✅ SSL certificate obtained successfully!"
    echo "Certificate location: /etc/letsencrypt/live/pydart.com/"
else
    echo "❌ Failed to obtain SSL certificate"
    exit 1
fi

# Start Nginx
echo "▶️  Starting Nginx..."
systemctl start nginx

# Test auto-renewal
echo "🔄 Testing certificate auto-renewal..."
certbot renew --dry-run

echo ""
echo "=========================================="
echo "✅ SSL Setup Complete!"
echo "=========================================="
echo ""
echo "Your certificates are ready at:"
echo "/etc/letsencrypt/live/pydart.com/fullchain.pem"
echo "/etc/letsencrypt/live/pydart.com/privkey.pem"
echo ""
