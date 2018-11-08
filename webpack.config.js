const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const cleanWebpackPlugin = require("clean-webpack-plugin");

const modeConfig = env => require(`./build-utils/webpack.${env}`)();
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js",
        chunkFilename: "[name].lazy-chunk.js"
        // ,publicPath: "/"
      },
      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000 //if size <=5KB then include in the bundle.js else seperate image file
                }
              }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ["file-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({ title: "Webpack4" }),
        new webpack.ProgressPlugin(),
        new cleanWebpackPlugin(["dist"])
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
