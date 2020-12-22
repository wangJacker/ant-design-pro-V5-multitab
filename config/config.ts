// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import AppUrl from './url';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
    hash: true,
    antd: {},
    dva: {
        hmr: true,
    },
    layout: {
        name: 'Ant Design Pro',
        locale: true,
        siderWidth: 208,
        ...defaultSettings,
    },
    locale: {
        // default zh-CN
        default: 'zh-CN',
        antd: true,
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
    },
    dynamicImport: {
        loading: '@ant-design/pro-layout/es/PageLoading',
    },
    targets: {
        ie: 11,
    },
    // umi routes: https://umijs.org/docs/routing
    routes,
    // Theme for antd: https://ant.design/docs/react/customize-theme-cn
    theme: {
        'primary-color': defaultSettings.primaryColor,
        'font-size-sm': '12px',
        'text-color': '#333',
        'layout-body-background': '#f0f2f5',
        'layout-header-background': '#001529',
        'tab-left-menu': '#5E5E5E',
        'black': '#000',
        'close-icon-hover': '#ccc',
    },
    define: {
        'process.env.API_SERVER': AppUrl.API_SERVER, // 这里是重点吧，获取配置
        'process.env.API_OAUTH_SERVER': AppUrl.API_OAUTH_SERVER, // 鉴权地址
    },
    esbuild: {},
    title: false,
    ignoreMomentLocale: true,
    proxy: proxy[REACT_APP_ENV || 'dev'],
    manifest: {
        basePath: '/',
    },
    // https://github.com/zthxxx/react-dev-inspector
    plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
    inspectorConfig: {
        // loader options type and docs see below
        exclude: [],
        babelPlugins: [],
        babelOptions: {},
    },
    resolve: {
        includes: ['src/components'],
    },
});
