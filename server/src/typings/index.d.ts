

// 活动信息定义
export interface ActBaseInfo {
  actId: number;
  actCryptoId: string;
  actName: string;
  operator?: string;
  actStatus: number;
  actBeginTime?: string;
  actEndTime?: string;
  actModifyTime?: string;
  actCreateTime?: string;
  locker?: string;
  lockTime?: string;
  abTest?: ABTest[];
  abTestRaw?: string;
  plugins?: string[];
  id?: string;
  name?: string;
}

// 查询处理后的活动信息，含页面配置
export interface ActInfoIncludePage extends ActBaseInfo {
  pages: PageInfo[];
}
// 编辑器组件配置定义
export interface UiConfig {
  actId: number;
  type?: string;
  id?: string;
  name?: string;
  operator?: string;
  items?: PageInfo[];
  abTest?: ABTest[];
  useLastPackage?: string;
}

// 活动页面abtest定义
export interface ABTest {
  name: string;
  type: string;
  pageList?: AbTestPageList[];
}

// 活动页面abtest pagelist定义
export interface AbTestPageList {
  pageName: string;
  proportion: string;
}

// 活动页面信息定义
export interface PageInfo {
  id?: string;
  pageTitle?: string;
  title?: string;
  name?: string;
  pageName?: string;
  actId?: number;
  pageCreateTime?: string;
  pageModifyTime?: string;
  pagePublishStatus?: number;
  pagePublishTime?: string;
  pagePublishOperator?: string;
  pagePublishUiVersion?: string;
  srcCode?: string;
  distCode?: string;
  plugins?: string[];
}

// 从editor拿到的活动页面信息
export interface EditorInfo {
  type: string;
  items?: PageInfo[];
}

// 接口返回
export interface Res<T = any> {
  ret: number;
  msg: string;
  data?: T;
}
