module.exports = {
  apps: [
    {
      name: "dashboard v3",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

//pm2 deploy deployment.json production|development