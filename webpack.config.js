import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const CURRENT_WORKING_DIR = process.cwd()

const webpackConfig = {
  target: 'electron-renderer', // Cambiamos el target a "electron-renderer" para el proceso de renderizado
  name: 'electron-app',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(CURRENT_WORKING_DIR, 'frontend', 'index.js'),
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, 'dist'),
    filename: 'renderer.bundle.js' // Usamos [name] para generar nombres de archivos dinámicos
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
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, '/frontend/public/index.html'),
      filename: 'index.html'
    })
  ]
}

export default webpackConfig
