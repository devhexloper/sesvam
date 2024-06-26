import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const CURRENT_WORKING_DIR = process.cwd()

const webpackConfig = {
  mode: 'development',
  target: 'electron-renderer',
  name: 'electron-app',

  entry: path.resolve(CURRENT_WORKING_DIR, 'frontend', 'index.js'),
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, 'dist'),
    filename: 'renderer.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true
                  }
                }
              ],
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-syntax-jsx',
         
              
              
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(CURRENT_WORKING_DIR, '/frontend/public/index.html'),
      inject: 'body'
    })
  ]
}

export default webpackConfig
