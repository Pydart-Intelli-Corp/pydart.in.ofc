# Pydart Web — Deployment Reference

## Server Info

| | |
|---|---|
| **VPS IP** | `187.127.147.191` |
| **OS** | Ubuntu 24.04.4 LTS |
| **SSH** | `ssh root@187.127.147.191` |
| **App Directory** | `/var/www/pydart` |
| **GitHub Repo** | `https://github.com/Pydart-Intelli-Corp/pydart.in.ofc.git` |
| **Live URL** | `https://pydart.com` |
| **Port** | `3002` |
| **PM2 Name** | `pydart-web` (id: 13) |

---

## Architecture

```
Browser → Cloudflare (SSL) → VPS:443 → sslh → nginx:8443 → pydart-web:3002
                                      → nginx:80  → redirect to HTTPS
```

- **Cloudflare** proxies `pydart.com` — handles external SSL termination
- **sslh** on port 443 routes HTTPS to `nginx:127.0.0.1:8443`
- **Nginx** matches `server_name pydart.com` → proxies to `127.0.0.1:3002`
- **PM2** keeps the Next.js app running on port 3002

---

## Deploy (Routine Update)

```bash
ssh root@187.127.147.191

cd /var/www/pydart
git pull origin main
npm install
npm run build
PORT=3002 pm2 restart pydart-web --update-env
```

Or use the deploy script from the project root:

```bash
bash deploy-pydart.sh
```

---

## Initial Setup (First Time)

### 1. Clone & Build

```bash
cd /var/www
git clone https://github.com/Pydart-Intelli-Corp/pydart.in.ofc.git pydart
cd pydart

# Fix case-sensitivity (Linux is case-sensitive, Windows is not)
ln -s /var/www/pydart/src/components/shared/Inputs \
      /var/www/pydart/src/components/shared/inputs

npm install
npm run build
```

### 2. Start with PM2

```bash
cd /var/www/pydart
PORT=3002 pm2 start npm --name pydart-web -- start
pm2 save
```

### 3. Nginx Config

File: `/etc/nginx/sites-available/pydart-web`

```nginx
server {
    listen 80;
    server_name pydart.com www.pydart.com;
    return 301 https://$host$request_uri;
}

server {
    listen 127.0.0.1:8443 ssl;
    server_name pydart.com www.pydart.com;

    ssl_certificate /etc/ssl/certs/pydart.com.crt;
    ssl_certificate_key /etc/ssl/private/pydart.com.key;

    add_header X-Frame-Options SAMEORIGIN always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    client_max_body_size 10m;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

Enable and reload:

```bash
ln -sf /etc/nginx/sites-available/pydart-web /etc/nginx/sites-enabled/pydart-web
nginx -t && systemctl reload nginx
```

### 4. SSL Certificate

**Current:** Self-signed cert at `/etc/ssl/certs/pydart.com.crt`
(Works because Cloudflare proxies SSL — browser never sees this cert)

**To upgrade to Let's Encrypt** (run after confirming DNS is NOT proxied through Cloudflare, or use DNS challenge):

```bash
# Option A: Temporarily disable Cloudflare proxy (DNS-only), then:
certbot --nginx -d pydart.com -d www.pydart.com

# Option B: Cloudflare DNS challenge (requires CF API token)
certbot certonly --dns-cloudflare \
  --dns-cloudflare-credentials ~/.secrets/cloudflare.ini \
  -d pydart.com -d www.pydart.com
```

After getting the cert, update nginx config paths:
```nginx
ssl_certificate /etc/letsencrypt/live/pydart.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/pydart.com/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
```

---

## Other Apps on the Same VPS

| PM2 Name | Port | Domain | Notes |
|---|---|---|---|
| `stibe-web` | 3001 | `stibe.in` | Stibe 3D marketing site |
| `stibe-erp` | 3000 | `erp.stibe.in` | Stibe ERP web |
| `stibe-general-erp-api` | 4000 | `api.erp.stibe.in` | NestJS API |
| `stibe-general-erp-web` | 4001 | `store11.stibe.in` | ERP + Socket.IO |
| `stibe-lms-admin` | 3100 | `lms.stibe.in` | LMS admin |
| `stibe-lms-portal` | 3200 | `oniion.stibe.in` | LMS portal |
| `pydart-web` | **3002** | `pydart.com` | **This app** |

---

## Useful Commands

```bash
# PM2 status
pm2 list

# View pydart logs
pm2 logs pydart-web --lines 50

# Restart pydart
PORT=3002 pm2 restart pydart-web --update-env

# Nginx reload
nginx -t && systemctl reload nginx

# Check what's listening
ss -tlnp | grep 3002

# Health check
curl -sk -o /dev/null -w '%{http_code}' -H 'Host: pydart.com' https://127.0.0.1/
```

---

## Known Issues & Fixes

### Case-Sensitivity (Linux vs Windows)
The repo has `src/components/shared/Inputs/` (capital I) but imports reference `inputs` (lowercase).
Linux filesystem is case-sensitive — fix with a symlink (already applied):

```bash
ln -s /var/www/pydart/src/components/shared/Inputs \
      /var/www/pydart/src/components/shared/inputs
```

If you ever re-clone, re-apply this symlink before building.

### pydart.com routing to wrong app
Caused by missing `:8443` SSL block — nginx falls to the first default HTTPS virtual host.
Fix: ensure `/etc/nginx/sites-enabled/pydart-web` has the `listen 127.0.0.1:8443 ssl` block.

---

*Last updated: May 2026*
