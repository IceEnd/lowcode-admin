

import { reactive } from 'vue';

import type { MagicStore, MagicStoreType } from '@src/typings';

const state = reactive<MagicStore>({
  actInfo: {},
  pages: [],
  uiConfigs: {},
  editorDefaultSelected: '',
});

export default {
  set<T = MagicStoreType>(name: keyof MagicStore, value: T) {
    (state as any)[name] = value;
    console.log('admin store set ', name, ' ', value);
  },

  get<T = MagicStoreType>(name: keyof typeof state): T {
    return (state as any)[name];
  },
};
