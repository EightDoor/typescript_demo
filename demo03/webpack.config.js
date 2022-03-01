const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
  // 入口
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 告诉webpack 不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  mode: "development",
  // 指定webpack打包要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器
                    targets: {
                      chrome: 58,
                      ie: 11,
                    },
                    // 指定corejs版本
                    corejs: 3,
                    // 使用corejs方式  usage 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // 设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
