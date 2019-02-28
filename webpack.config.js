
const webpack = require('webpack'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
HtmlWebpackPlugin = require('html-webpack-plugin'),
VARIABLE = require("./webpack.variable"),
JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry:VARIABLE.entry,  
  output: {
    path: VARIABLE.output.path,
    filename: VARIABLE.output.filename,
    publicPath: VARIABLE.output.publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath:VARIABLE.output.imgs
        }
      },
      {

        // 字体图标
        test: /\.(woff|woff2|svg|eot|ttf|)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: VARIABLE.output.fonts,
            }
        }]

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", 
          use: "css-loader" 
        }),//css提取到文件内；若无则加载在<style>
        //loader: 'style-loader!css-loader' 
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader','vue-style-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,  // 不跳转
    noInfo: true,
    inline: true, // 实时刷新
    hot: true,
    host:"0.0.0.0",
    port:1088
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: VARIABLE.isProduction
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({filename:VARIABLE.output.css}),// 提取css
    new HtmlWebpackPlugin({
      filename: VARIABLE.htmlPlugin.filename,
      template: VARIABLE.htmlPlugin.template,
      inject: true,
      hash: true
    })
  ]
  //devtool: '#eval-source-map'
};
if (process.env.NODE_ENV === 'production') {
  
  module.exports.plugins = (module.exports.plugins || []).concat([
    //混淆
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    //压缩
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    //加密
    new JavaScriptObfuscator({
      rotateUnicodeArray: true
    }, [])
  ])
}else{
   module.exports.devtool = '#source-map';
}