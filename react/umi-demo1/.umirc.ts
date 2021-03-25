import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '拓扑编辑器',
      path: '/editorkoni',
      component: './EditorKoni',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
    {
      path: '/login',
      component: '@/pages/',
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
});
