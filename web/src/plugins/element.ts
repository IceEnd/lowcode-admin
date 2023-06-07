

import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';

import 'element-plus/lib/theme-chalk/index.css';

export default (app: any) => {
  app.use(ElementPlus, { locale });
};
