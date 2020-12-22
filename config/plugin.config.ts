/*
 * @Author: wangYe 
 * @Date: 2020-12-18 11:04:17 
 * @Last Modified by:   wangYe 
 * @Last Modified time: 2020-12-18 11:04:17 
 */


import * as IWebpackChainConfig from 'webpack-chain';
export const webpackPlugin = (config: IWebpackChainConfig) => {
  config.when(process.env.NODE_ENV !== 'development', () => {
    config.output.filename('static/js/[name].[contenthash:8].js').chunkFilename('static/js/[name].[contenthash:8]chunk.js')
    config.output.filename('static/js/[name].[contenthash:8].js').chunkFilename('static/js/[name].[contenthash:8]chunk.js')
    config.plugin("extract-css").tap(() => {
      return [{
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        ignoreOrder: true
      }]
    })
    config.module.rule("images").use("url-loader").tap(args => {
      return { ...args, name: "static/img/[name].[hash:8].[ext]", fallback: { ...args.fallback, options: { name: 'static/img/[name].[hash:8].[ext]', esModule: false } } };
    })
  })

};
