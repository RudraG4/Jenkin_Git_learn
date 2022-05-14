module.exports = {
  apps: [
    {
      name: 'server',
      script: './src/server.js',
      watch: false,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 5000,
        "NODE_ENV": "production",
      }
    }
  ]
};
