module.exports = {
  apps: [{
    name: 'ddd-landing',
    script: './build/index.js',
    env: {
      PORT: 3000,
      NODE_ENV: 'production',
      ADDRESS: '0.0.0.0',
      PROTOCOL_HEADER: 'x-forwarded-proto',
      HOST_HEADER: 'x-forwarded-host',
      DATABASE_URL: process.env.DATABASE_URL
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}; 