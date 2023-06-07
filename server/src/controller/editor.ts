

// 处理编辑器请求
import Koa from 'koa';

import EditorService from '@src/service/editor';

class EditorController {
  private service: EditorService = new EditorService();

  // 拉取编辑器左侧展示的组件列表
  getComponentList = async (ctx: Koa.Context) => {
    ctx.body = {
      ret: 0,
      msg: '获取组件列表成功',
      data: await this.service.getComponentList(),
    };
  };
  // 拉取编辑器右边活动配置的web插件
  getWebPlugins = async (ctx: Koa.Context) => {
    ctx.body = await this.service.getWebPlugins();
  };
}

export default new EditorController();
