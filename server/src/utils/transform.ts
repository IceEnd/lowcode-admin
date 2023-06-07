

import { transformSync } from '@babel/core';

import logger from '@src/utils/logger';
export function babelTransform(value) {
  const options = {
    compact: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
          },
        },
      ],
    ],
  };
  try {
    return transformSync(value, options)?.code || '';
  } catch (e) {
    logger.error(e);
    throw new Error('babel 编译失败');
  }
}
