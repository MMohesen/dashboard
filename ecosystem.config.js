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
