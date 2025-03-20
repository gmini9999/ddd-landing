module.exports = {
  apps: [{
    name: 'ddd-landing',
    script: './build/index.js',
    env: {
      PORT: 8080,
      NODE_ENV: 'production',
      DATABASE_URL: process.env.DATABASE_URL
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}; 