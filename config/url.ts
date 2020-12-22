/*
 * @Author: wangYe 
 * @Date: 2020-12-18 11:04:58 
 * @Last Modified by:   wangYe 
 * @Last Modified time: 2020-12-18 11:04:58 
 */
const configs = {
  // 测试环境
  test: {
    // API_SERVER: 'http://192.168.1.56:12009',
    API_SERVER: 'http://192.168.1.205:4442',
    API_OAUTH_SERVER: "http://192.168.1.205:4440"
  },

  // 开发环境
  development: {
    API_SERVER: 'http://192.168.1.205:4442',
    API_OAUTH_SERVER: "http://192.168.1.205:4440"
    // API_SERVER: 'http://saleapi.grasppos.cn',
    // API_SERVER: 'http://192.168.1.205:11009',
  },

  // 生产环境
  production: {
    // API_SERVER: 'http://saleapi.xzgpos.cn',
    // API_SERVER: 'http://saleapi.grasppos.cn',
    // API_SERVER: 'http://192.168.1.205:12009',
    // API_SERVER: 'http://192.168.1.205:12009',
    // API_SERVER: 'http://192.168.1.205:4442',
    API_SERVER: 'http://ver-api.xzgpos.cn',
    API_OAUTH_SERVER: "http://ver-oauth.xzgpos.cn"
    // API_SERVER: 'http://saleapi.gjpyls.cn',
  },
};

const API_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
export default configs[API_ENV];
