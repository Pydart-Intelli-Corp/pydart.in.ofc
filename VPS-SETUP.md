# VPS Deployment Guide for Pydart.in

## Prerequisites
- VPS IP: 168.231.121.19
- Domain: pydart.com (pointed to VPS IP)
- Port: 85 (custom HTTPS port)

## Step 1: Initial VPS Setup

```bash
# SSH into your VPS
ssh root@168.231.121.19

# Update system
apt update && apt upgrade -y

# Install Node.js (v20 LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installation
node -v
npm -v

# Install PM2 globally
npm install -g pm2

# Install Nginx
apt install -y nginx

# Install Certbot for SSL
apt install -y certbot python3-certbot-nginx
```

## Step 2: Configure Firewall

```bash
# Allow SSH, HTTP, HTTPS, and custom port 85
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 85/tcp
ufw enable
ufw status
```

## Step 3: Create Project Directory

```bash
# Create directory for the application
mkdir -p /var/www/pydart.in

# Create PM2 log directory
mkdir -p /var/log/pm2

# Set permissions
chmod -R 755 /var/www
```

## Step 4: Upload Your Project

From your local machine, upload files to VPS:

```bash
# Option 1: Using SCP (from your local machine)
scp -r d:/pydart.in/* root@168.231.121.19:/var/www/pydart.in/

# Option 2: Using Git (recommended)
# First, push your code to a Git repository (GitHub/GitLab)
# Then on VPS:
cd /var/www/pydart.in
git clone https://github.com/yourusername/pydart.in.git .
```

## Step 5: Install Dependencies and Build

```bash
cd /var/www/pydart.in

# Install dependencies
npm install

# Build the Next.js application
npm run build

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
# Follow the command it gives you
```

## Step 6: Configure Nginx

```bash
# Copy the nginx configuration
cp /var/www/pydart.in/nginx-config.conf /etc/nginx/sites-available/pydart.com

# Create symbolic link
ln -s /etc/nginx/sites-available/pydart.com /etc/nginx/sites-enabled/

# Remove default Nginx configuration
rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Note: Initially comment out SSL lines in nginx config until certificates are obtained
```

## Step 7: Obtain SSL Certificate

```bash
# First, temporarily modify Nginx config to listen on port 80 for verification
# Or use standalone mode:

# Stop Nginx temporarily
systemctl stop nginx

# Obtain certificate using standalone mode on port 80
certbot certonly --standalone -d pydart.com -d www.pydart.com

# Important: When Let's Encrypt validates, it uses port 80
# After getting certificates, you can configure Nginx to use port 85

# Alternative: Use DNS challenge if port 80 is not available
certbot certonly --manual --preferred-challenges dns -d pydart.com -d www.pydart.com
```

## Step 8: Configure Nginx for Port 85 with SSL

Edit your Nginx config to enable SSL sections:

```bash
nano /etc/nginx/sites-available/pydart.com

# Make sure SSL certificate paths are correct
# Enable the HTTPS server block

# Test configuration
nginx -t

# Start/Reload Nginx
systemctl start nginx
systemctl reload nginx
```

## Step 9: Setup Auto-Renewal for SSL

```bash
# Test renewal
certbot renew --dry-run

# Certbot will automatically renew certificates
# Check renewal timer
systemctl status certbot.timer
```

## Step 10: Verify Deployment

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs pydart

# Check Nginx status
systemctl status nginx

# Check if app is running
curl http://localhost:3000

# Test external access
# https://pydart.com:85
```

## DNS Configuration

Make sure your domain DNS has these records:

```
A Record:
- Host: @
- Value: 168.231.121.19
- TTL: 3600

A Record (www):
- Host: www
- Value: 168.231.121.19
- TTL: 3600
```

## Useful Commands

```bash
# PM2 Commands
pm2 restart pydart
pm2 stop pydart
pm2 logs pydart
pm2 monit

# Nginx Commands
systemctl status nginx
systemctl restart nginx
systemctl reload nginx
nginx -t

# View logs
tail -f /var/log/nginx/pydart.com-access.log
tail -f /var/log/nginx/pydart.com-error.log
tail -f /var/log/pm2/pydart-error.log

# Check port 85
netstat -tulpn | grep :85
```

## Adding Additional Domains (Future)

When you want to add v4.poornasreecloud.com:

1. Point DNS to your VPS IP
2. Obtain SSL certificate:
   ```bash
   certbot certonly --standalone -d v4.poornasreecloud.com
   ```
3. Uncomment the v4.poornasreecloud.com section in nginx-config.conf
4. Reload Nginx:
   ```bash
   nginx -t
   systemctl reload nginx
   ```

## Troubleshooting

### If app won't start:
```bash
cd /var/www/pydart.in
pm2 logs pydart
npm run build
```

### If Nginx won't start:
```bash
nginx -t
systemctl status nginx
tail -f /var/log/nginx/error.log
```

### If SSL certificate fails:
- Make sure port 80 is accessible for verification
- Check DNS propagation: `nslookup pydart.com`
- Use DNS challenge if port 80 is blocked

### Port 85 not accessible:
```bash
# Check if Nginx is listening
netstat -tulpn | grep :85

# Check firewall
ufw status

# Allow port 85
ufw allow 85/tcp
```

## Security Recommendations

1. **Change SSH port** (optional but recommended)
2. **Disable root login** after creating a non-root user
3. **Setup fail2ban** to prevent brute force attacks
4. **Regular updates**: `apt update && apt upgrade`
5. **Setup monitoring** (e.g., PM2 Plus, Grafana)
6. **Regular backups** of `/var/www` directory

## Performance Optimization

```bash
# Enable swap if needed (for low memory VPS)
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

## Deployment Updates

To deploy new changes:

```bash
cd /var/www/pydart.in
chmod +x deploy.sh
./deploy.sh
```

Or manually:
```bash
cd /var/www/pydart.in
git pull origin main  # if using git
npm install
npm run build
pm2 restart pydart
```
