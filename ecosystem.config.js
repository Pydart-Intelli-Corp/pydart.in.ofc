module.exports = {
  apps: [
    {
      name: 'pydart',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/pydart.in',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/pydart-error.log',
      out_file: '/var/log/pm2/pydart-out.log',
      time: true,
    },
  ],
};
