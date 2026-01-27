# Quick Deployment Checklist

## ✅ Pre-Deployment (Local)
- [ ] Project builds successfully: `npm run build`
- [ ] All environment variables configured
- [ ] Domain DNS pointed to VPS IP (168.231.121.19)

## ✅ VPS Initial Setup
```bash
ssh root@168.231.121.19

# Run these commands:
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs nginx certbot python3-certbot-nginx
npm install -g pm2
mkdir -p /var/www/pydart.in /var/log/pm2
ufw allow OpenSSH && ufw allow 80/tcp && ufw allow 443/tcp && ufw allow 85/tcp && ufw enable
```

## ✅ Upload & Deploy
```bash
# From local machine (Windows PowerShell/CMD):
scp -r d:\pydart.in\* root@168.231.121.19:/var/www/pydart.in/

# On VPS:
cd /var/www/pydart.in
npm install
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## ✅ SSL Certificate
```bash
# Stop Nginx first
systemctl stop nginx

# Get certificate (port 80 required)
certbot certonly --standalone -d pydart.com -d www.pydart.com

# Note the certificate location (usually /etc/letsencrypt/live/pydart.com/)
```

## ✅ Nginx Configuration
```bash
cp /var/www/pydart.in/nginx-config.conf /etc/nginx/sites-available/pydart.com
ln -s /etc/nginx/sites-available/pydart.com /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl start nginx
```

## ✅ Test
- [ ] PM2 running: `pm2 status`
- [ ] Nginx running: `systemctl status nginx`
- [ ] Port 85 listening: `netstat -tulpn | grep :85`
- [ ] Access site: https://pydart.com:85

## 🚨 Troubleshooting
```bash
# View logs
pm2 logs pydart
tail -f /var/log/nginx/pydart.com-error.log

# Restart services
pm2 restart pydart
systemctl restart nginx
```

## 📝 Important Notes
1. **Port 85**: Users must access as `https://pydart.com:85`
2. **SSL Renewal**: Automatic via certbot
3. **Future Domains**: Uncomment v4.poornasreecloud.com section in nginx config when ready
