module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    performance: {
      hints: "warning", // enum
      maxAssetSize: 1048576, // int (in bytes)  => ~1M,
      maxEntrypointSize: 1048576, // int (in bytes) => ~1M
    },
  },
};
