/**
 * 注意:
 * 1、wrappers: ['@/components/KeepAlive'],必须添加
 * 2、keppAlive 是否缓存当前页面
 * 3、keepAliveName 为国际化请保证以menu开头拼接
 * 4、saveScrollPosition  是否缓存滚动条位置，详情：https://github.com/CJY0208/react-activation/blob/master/README_CN.md
 */

export default [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                path: '/user',
                routes: [
                    {
                        name: 'login',
                        path: '/user/login',
                        component: './user/login',
                    },
                ],
            },
        ],
    },
    {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: false,
        keepAliveName: 'menu.welcome'
    },
    {
        path: '/welcome1',
        name: 'welcome1',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome1'
    },
    {
        path: '/welcome11',
        name: 'welcome11',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome11'
    },
    {
        path: '/welcome2',
        name: 'welcome2',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome2'
    },
    {
        path: '/welcome3',
        name: 'welcome3',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome3'
    },
    {
        path: '/welcome4',
        name: 'welcome4',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome4'
    },
    {
        path: '/welcome5',
        name: 'welcome5',
        icon: 'smile',
        component: './Welcome',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
        keepAliveName: 'menu.welcome5'
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        access: 'canAdmin',
        routes: [
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Admin',
                wrappers: ['@/components/KeepAlive'],
                keppAlive: true,
                keepAliveName: 'menu.admin.sub-page'
            },
        ],
    },
    {
        name: 'list',
        icon: 'table',
        path: '/list',
        component: './ListTableList',
        keppAlive: true,
        wrappers: ['@/components/KeepAlive'],
        keepAliveName: 'menu.list'
    },
    {
        path: '/',
        redirect: '/welcome',
    },
    {
        component: './404',
    },
    // {
    //     path: '/',
    //     wrappers: ['@/components/KeepAlive'],
    //     name: 'keppAlive',
    //     component: '@/layout/BasicLayout',
    //     icon: 'crown',
    //     routes: [

    //     ]
    // }
];
