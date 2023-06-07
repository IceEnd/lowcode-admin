System.register([],(function(e,t){"use strict";return{execute:function(){e("u",(({config:e,methods:t})=>{const n=Vue.inject("app"),o=n?.page?.getNode(e.id),u={config:e,...t};return o?.emit("created",u),Vue.onMounted((()=>{o?.emit("mounted",u)})),Vue.onUnmounted((()=>{o?.emit("destroy",u)})),n}))}}}));
//# sourceMappingURL=useApp-legacy-df29a66b.js.map
