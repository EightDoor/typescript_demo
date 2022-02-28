const path = require("path");

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
  // 入口
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 指定webpack打包要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: "ts-loader",
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
};
