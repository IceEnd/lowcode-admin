

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
