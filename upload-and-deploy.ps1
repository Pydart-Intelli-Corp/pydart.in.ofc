# PowerShell Script to Upload and Deploy to VPS
# Run this from your local Windows machine

$VPS_HOST = "root@168.231.121.19"
$PROJECT_PATH = "D:\pydart.in"
$VPS_PATH = "/var/www/pydart.in"

Write-Host "=========================================="
Write-Host "🚀 Uploading Project to VPS"
Write-Host "=========================================="
Write-Host ""

# Upload project files (excluding node_modules and .next)
Write-Host "📤 Uploading files to VPS..."
scp -r "$PROJECT_PATH\*" "${VPS_HOST}:${VPS_PATH}/"

Write-Host ""
Write-Host "✅ Upload complete!"
Write-Host ""
Write-Host "Next: SSH into your VPS and run:"
Write-Host "  cd /var/www/pydart.in"
Write-Host "  npm install"
Write-Host "  npm run build"
Write-Host "  pm2 start ecosystem.config.js"
Write-Host ""
