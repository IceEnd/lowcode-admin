

import MAside from '@src/components/aside.vue';
import MHeader from '@src/components/header.vue';

const components: any[] = [MAside, MHeader];

export default (app: any) => {
  components.forEach((comp: any) => {
    app.component(comp?.name, comp);
  });
};
