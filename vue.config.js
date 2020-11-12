module.exports = {
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    performance: {
      hints: false, // enum
      maxAssetSize: 10485760, // int (in bytes)  => ~10M,
      maxEntrypointSize: 10485760, // int (in bytes) => ~10M
    },
  },
};
