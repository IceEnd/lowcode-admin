// web静态资源相关路由
import { pathExistsSync } from 'fs-extra';
import Router from 'koa-router';
import send from 'koa-send';

import { StaticPath } from '@src/config/config';

const router = new Router();
const options = { root: '/', gzip: true, maxage: 36000 };
router.get('/', async (ctx) => {
  await send(ctx, `${StaticPath.ASSETS}/index.html`, options);
});

router.get('/static/*', async (ctx) => {
  const file = `${StaticPath.STATIC}/${ctx.params[0]}`;
  if (pathExistsSync(file)) {
    await send(ctx, file, options);
  }
});

router.get('/*', async (ctx) => {
  const file = `${StaticPath.ASSETS}/${ctx.params[0]}`;
  if (pathExistsSync(file)) {
    await send(ctx, file, options);
  } else {
    await send(ctx, `${StaticPath.ASSETS}/index.html`, options);
  }
});

export default router;
