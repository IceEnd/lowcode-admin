

// 处理活动请求
import Koa from 'koa';

import ActService, { ActInfoDetail, ActListQuery, CopyInfo } from '@src/service/act';

class ActController {
  private service: ActService = new ActService();

  // 获取活动列表
  getList = async (ctx: Koa.Context) => {
    try {
      const query: ActListQuery = JSON.parse(ctx.request.body.data);
      const [actList, count] = await Promise.all([this.service.getActList(query), this.service.getCount(query)]);
      ctx.body = {
        data: actList,
        total: count,
        fetch: true,
        errorMsg: '',
      };
    } catch (e) {
      ctx.logger.error(e);
      ctx.body = {
        data: [],
        total: 0,
        fetch: false,
        errorMsg: (e as Error).message,
      };
    }
  };

  // 新建活动
  create = async (ctx: Koa.Context) => {
    try {
      const actInfo: ActInfoDetail = JSON.parse(ctx.request.body.data);
      const actId = await this.service.create(actInfo);
      ctx.body = {
        ret: 0,
        msg: '新建活动成功',
        data: { actId },
      };
    } catch (e) {
      ctx.body = {
        ret: -1,
        msg: (e as Error).message,
      };
    }
  };

  // 复制活动
  copy = async (ctx: Koa.Context) => {
    try {
      const copyInfo: CopyInfo = JSON.parse(ctx.request.body.data);
      await this.service.copy(copyInfo);
      ctx.body = {
        ret: 0,
        msg: '复制成功',
      };
    } catch (e) {
      ctx.body = {
        ret: -1,
        msg: (e as Error).message,
      };
    }
  };

  // 根据id查询活动详情
  getInfo = async (ctx: Koa.Context) => {
    try {
      const id = Number(ctx.query.id);
      const act = await this.service.getActInfo(id);
      ctx.body = {
        ret: 0,
        msg: '获取活动信息成功',
        data: act,
      };
    } catch (e) {
      ctx.body = {
        ret: -1,
        msg: (e as Error).message,
      };
    }
  };

  // 根据页面id删除活动页面
  removePage = async (ctx: Koa.Context) => {
    try {
      const { pageId } = JSON.parse(ctx.request.body.data);
      await this.service.removePage(pageId);
      ctx.body = {
        ret: 0,
        msg: '删除活动页面成功',
      };
    } catch (e) {
      ctx.body = {
        ret: -1,
        msg: (e as Error).message,
      };
    }
  };
}

export default new ActController();
