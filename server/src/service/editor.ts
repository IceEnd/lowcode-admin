import componentList from '@src/template/editor/get-component-list';
import webPlugins from '@src/template/editor/get-web-plugins';

export default class EditorService {
  // 获取组件列表
  getComponentList = () => componentList;
  // 获取插件列表
  getWebPlugins = () => webPlugins;
}
