import { ElMessage, ElMessageBox } from 'element-plus';

import type { MNode } from '@tmagic/schema';
import { isPage } from '@tmagic/utils';

import actApi from '@src/api/act';

export default {
  /**
   * 编辑器删除插件(删除前hook)
   * @returns void
   */
  beforeRemove: async (node: MNode) => {
    if (!isPage(node)) return [node];

    try {
      await ElMessageBox.confirm('确认删除该页面吗？', '提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      });
    } catch (error) {
      throw new Error('delete canceled');
    }

    return [node];
  },
  /**
   * 编辑器删除插件(删除后hook)
   * @param {MNode} config 当前删除节点
   * @returns void
   */
  afterRemove: async (config: MNode) => {
    const pageId = Number(config.id);
    try {
      await actApi.removePage({ data: { pageId } });
      ElMessage({
        type: 'success',
        message: '页面删除成功',
      });
    } catch (error) {
      ElMessage({
        type: 'error',
        message: '页面删除失败',
      });
    }
  },
};
