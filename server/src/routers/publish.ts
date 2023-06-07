

// 保存发布的相关路由
import Router from 'koa-router';

import PublishController from '@src/controller/publish';

const router = new Router();
// 保存活动基础信息
router.post('/saveActInfo', PublishController.saveActInfo);

// 发布
router.post('/publish', PublishController.publish);

export default router;
