

// 活动列表相关路由
import Router from 'koa-router';

import actController from '@src/controller/act';

const router = new Router();
// 拉取编辑器左侧展示的组件列表
router.post('/getList', actController.getList);

// 创建活动
router.post('/create', actController.create);

// 复制活动
router.post('/copy', actController.copy);

// 根据id获取活动信息
router.get('/get', actController.getInfo);

// 删除活动页面
router.post('/removePage', actController.removePage);

export default router;
