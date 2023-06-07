

import serialize from 'serialize-javascript';

import { EditorInfo } from '@src/typings';

export { datetimeFormatter } from '@tmagic/utils';

export const serializeConfig = function (value: EditorInfo): string {
  return serialize(value, {
    space: 2,
    unsafe: true,
  }).replace(/"(\w+)":\s/g, '$1: ');
};
