import type { ActInfo } from '@src/typings';
import fetch, { Res } from '@src/util/request';

export default {
  /**
   * 保存活动
   * @param {Object} options
   * @param {Object} options.data
   * @param {ActInfo} options.data.actInfo 活动基本信息
   * @param {string} options.data.rootInfo 页面组件配置信息
   * @returns {Promise<Res>} 保存结果
   */
  saveActInfo(options: { data: { actInfo: ActInfo; rootInfo: string } }): Promise<Res> {
    return fetch.post({
      _c: 'publish',
      _a: 'saveActInfo',
      ...options,
    });
  },

  /**
   * 发布活动
   * @param {Object} options
   * @param {Object} options.data
   * @param {number} options.data.actId 活动ID
   * @param {string[]} options.data.publishPages 待发布的页面
   * @param {string} options.data.rootInfo 页面组件配置信息
   * @returns {Promise<Res>} 发布结果
   */
  publishPage(options: { data: { actId: number; publishPages: string[]; rootInfo: string } }): Promise<Res> {
    return fetch.post({
      _c: 'publish',
      _a: 'publish',
      ...options,
    });
  },
};
