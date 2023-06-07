

// 整合所有子路由
import Router from 'koa-router';

import act from '@src/routers/act';
import editor from '@src/routers/editor';
import publish from '@src/routers/publish';

const router = new Router({
  prefix: '/api',
});
// 编辑器相关路由
router.use('/editor', editor.routes(), editor.allowedMethods());

// 活动列表相关路由
router.use('/act', act.routes(), act.allowedMethods());

// 保存发布相关路由
router.use('/publish', publish.routes(), publish.allowedMethods());

export default router;
