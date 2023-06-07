const o=({config:s,methods:n})=>{var m;const e=Vue.inject("app"),t=(m=e==null?void 0:e.page)==null?void 0:m.getNode(s.id),u={config:s,...n};return t==null||t.emit("created",u),Vue.onMounted(()=>{t==null||t.emit("mounted",u)}),Vue.onUnmounted(()=>{t==null||t.emit("destroy",u)}),e};export{o as u};
//# sourceMappingURL=useApp-d5521bba.js.map
