

import Cookies from 'js-cookie';

import { getUrlParam } from '@src/util/url';

const env = getUrlParam('magic_env');
if (env) {
  Cookies.set('env', env === 'test' ? env : 'production', {
    expires: 365,
    path: '/',
  });
}
