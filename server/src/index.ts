import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { getLogger } from 'log4js';

import routers from '@src/routers';
import staticRouters from '@src/routers/static';
const app = new Koa();
const { PORT } = process.env;

app.use(
  bodyParser({
    formLimit: '10mb',
    jsonLimit: '10mb',
  }),
);
app.use(async (ctx, next) => {
  ctx.logger = getLogger();
  ctx.logger.level = 'debug';
  await next();
});
app.use(async (ctx, next) => {
  ctx.logger.debug(ctx.url);
  await next();
});
// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());
app.use(staticRouters.routes()).use(staticRouters.allowedMethods());
app.listen(PORT);

console.log(`server启动成功 端口:${PORT}`);
