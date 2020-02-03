const path = require("path");
const webpack = require("webpack");

const plugins = {
  progress: require("webpackbar"),
  clean: (() => {
    const { CleanWebpackPlugin } = require("clean-webpack-plugin")
    return CleanWebpackPlugin
  })(),
  extractCSS: require("mini-css-extract-plugin"),
  sync: require("browser-sync-webpack-plugin"),
  html: require("html-webpack-plugin"),
  sri: require("webpack-subresource-integrity")
}

module.exports = (env = {}, argv) => {
  const isProduction = argv.mode === "production"

  let config = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: "",
      filename: "main.js",
      libraryTarget: "umd",
      crossOriginLoading: "anonymous"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        },
        {
          test: /\.((s[ac]|c)ss)$/,
          use: [
            {
              loader: plugins.extractCSS.loader,
              options: {
                publicPath: "../"
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: !isProduction
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                sourceMap: !isProduction,
                plugins: (() => [
                  require("autoprefixer")(),
                  ...isProduction ? [
                    require("cssnano")({
                      preset: ["default", {
                        minifySelectors: false
                      }]
                    })
                  ] : []
                ])
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("node-sass"),
                sassOptions: {
                  fiber: require("fibers"),
                  outputStyle: "expanded",
                  sourceMap: !isProduction
                }
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]"
              }
            }
          ]
        }
      ]
    },

    devServer: {
      historyApiFallback: true,
      inline: true,
      port: 8080,
      overlay: {
        warnings: true,
        errors: true
      },
      quiet: true
    },

    plugins:(() => {
      let common = [
        new plugins.extractCSS({
          filename: "[name].css"
        }),
        new plugins.html({
          template: path.resolve(__dirname, "public","index.html"),
          filename: "index.html",
          minify: {
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          }
        }),
        new plugins.progress({
          color: "#5C95EE"
        })
      ]

      const production = [
        new plugins.clean(),
        new plugins.sri({
          hashFuncNames: ["sha384"],
          enabled: true
        })
      ]

      const development = [
        new plugins.sync(
          {
            host: "localhost",
            port: 9090,
            proxy: "http://localhost:8080/"
          },
          {
            reload: false
          }
        )
      ]

      return isProduction 
        ? common.concat(production)
        : common.concat(development)
    })(),

    devtool: (() => {
      return isProduction
        ? ""
        : "source-map"
    })(),

    stats: "errors-only"
  }
  return config
}
