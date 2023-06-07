

import './shims-vue';
import './axios-jsonp';

declare global {
  interface Window {
    request: Function;
  }
}
