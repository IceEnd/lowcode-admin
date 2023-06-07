

// 编辑器相关路由
import Router from 'koa-router';

import editorController from '@src/controller/editor';

const router = new Router();
// 拉取编辑器左侧展示的组件列表
router.get('/getComponentList', editorController.getComponentList);

// 拉取活动配置的web插件
router.get('/getWebPlugins', editorController.getWebPlugins);

export default router;
