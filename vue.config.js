module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    performance: {
      hints: false, // enum
      maxAssetSize: 10485760, // int (in bytes)  => ~10M,
      maxEntrypointSize: 10485760, // int (in bytes) => ~10M
    },
  },
};
