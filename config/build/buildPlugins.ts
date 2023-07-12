import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'

export default function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins
}
