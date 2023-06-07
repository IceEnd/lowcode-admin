import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // 活动列表路由
  {
    path: '/',
    redirect: '/act/my/0',
  },
  {
    path: '/act/:type/:page?/:status?/:query?',
    name: 'ActList',
    component: () => import('@src/views/list-view.vue'),
  },
  {
    path: '/act/create',
    name: 'NewAct',
    component: () => import('@src/views/template-list.vue'),
  },
  // 编辑器路由
  {
    path: '/editor/:actId',
    name: 'Editor',
    meta: {
      hideAside: true,
    },
    component: () => import(/* webpackChunkName: "editor" */ '@src/views/editor.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
