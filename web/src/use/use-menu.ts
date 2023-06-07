

// 编辑器顶部菜单栏

import { ArrowLeft, Document, Finished } from '@element-plus/icons-vue';

import { MenuBarData } from '@tmagic/editor';

import ActInfoDrawer from '@src/components/act-info-drawer.vue';
import PublishPageList from '@src/components/publish-page-list.vue';
import router from '@src/router';
import { commitHandler } from '@src/use/use-publish';

export const topMenu = (): MenuBarData => ({
  left: [
    {
      type: 'button',
      text: '返回',
      icon: ArrowLeft,
      handler: (): void => {
        if (router) {
          router.push('/');
        }
      },
    },
  ],
  center: ['delete', 'undo', 'redo', 'zoom-in', 'zoom-out'],
  right: [
    {
      type: 'button',
      text: '保存',
      icon: Finished,
      handler: (): void => {
        commitHandler();
      },
    },
    {
      type: 'component',
      component: PublishPageList,
    },
    {
      type: 'component',
      component: ActInfoDrawer,
    },
    {
      type: 'button',
      icon: Document,
      text: '源码',
      handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc')),
    },
  ],
});
