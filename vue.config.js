module.exports = {
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL,
  transpileDependencies: ["vuetify"],
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  chainWebpack: (config) => {
    // config.plugins.delete("prefetch");
    // config.plugins.delete("preload");
    config.plugin("fork-ts-checker").tap((args) => {
      args[0].memoryLimit = process.env.NODE_ENV === "production" ? 1024 : 2048;
      return args;
    });
  },
  configureWebpack: {
    performance: {
      hints: false, // enum
      maxAssetSize: 10485760, // int (in bytes)  => ~10M,
      maxEntrypointSize: 10485760, // int (in bytes) => ~10M
    },
  },
};
