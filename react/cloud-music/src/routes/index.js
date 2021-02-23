//向外输出routes 配置  前端路由 
import React from 'react'; 
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Bank from '../application/Bank';

export default [ // App.js routes 
    {
        path: '/',
        component: Home,
        routes: [
            // {
            //     path: '/',
            //     exact: true,
            //     component: Home
            // },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {
                path: '/bank',
                component: Bank
            }
        ]
    }
]
