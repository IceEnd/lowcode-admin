import { ComponentGroup } from '@tmagic/editor';

import fetch, { Res } from '@src/util/request';
// 编辑器左侧组件分类
export interface CompClassifyForEditor {
  title: string;
  items: CompListInClassify[];
}

// 编辑器左侧组件列表
export interface CompListInClassify {
  icon: string;
  id: number;
  renderType: number;
  reportType: string;
  text: string;
  type: string;
}

export default {
  /**
   * 获取组件列表
   * @returns {Promise<Res>} 查询结果
   */
  getComponentList(): Promise<Res<ComponentGroup[]>> {
    return fetch.get({
      _c: 'editor',
      _a: 'getComponentList',
    });
  },
};
