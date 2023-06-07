import path from 'path';
// 活动状态
export enum ActStatus {
  ALL = -1, // 查询传参使用：全部状态占位
  MODIFYING, // 修改中
  PART_PUBLISHED, // 部分页面已发布
  PUBLISHED, // 全部页面已发布
}

// 页面状态
export enum PageStatus {
  MODIFYING = 0, // 修改中
  PUBLISHED, // 已预发布
}

// 静态资源根目录
export const StaticPath = {
  ASSETS: path.resolve(__dirname, '../../assets'),
  TEMPLATE: path.resolve(__dirname, '../template'),
  STATIC: path.resolve(__dirname, '../../static'),
  PUBLISH: path.resolve(__dirname, '../../assets/publish'),
};

export const UiRuntimeJS = '<script src="https://unpkg.com/vue@next/dist/vue.runtime.global.js"></script>';
