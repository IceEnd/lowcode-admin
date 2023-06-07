

import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import TMagicDesign from '@tmagic/design';
import MagicEditor, { editorService } from '@tmagic/editor';
import MagicElementPlusAdapter from '@tmagic/element-plus-adapter';
import MagicForm from '@tmagic/form';

import App from '@src/app.vue';
import editorPlugin from '@src/plugins/editor';
import router from '@src/router';
import installComponents from '@src/use/use-comp';

import 'element-plus/dist/index.css';
import '@tmagic/editor/dist/style.css';
import '@tmagic/form/dist/style.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(TMagicDesign, MagicElementPlusAdapter);
app.use(MagicEditor);
editorService.usePlugin(editorPlugin);
app.use(MagicForm, {});
app.use(router);
installComponents(app);
app.mount('#app');
