System.register(["./index-legacy-5de84143.js"],(function(e,n){"use strict";var o;return{setters:[e=>{o=e.t}],execute:function(){e("_",Vue.defineComponent({__name:"Component",props:{config:{default:()=>({})},model:{default:()=>({})}},setup(e){const n=e,t=Vue.inject("app"),c=Vue.computed((()=>`magic-ui-${o(n.config.type)}`)),u=Vue.computed((()=>t?.transformStyle(n.config.style)));return(o,i)=>(()=>{const e=n.config?.display;return"function"==typeof e?e(t):!1!==e})()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(Vue.unref(c)),{key:0,ref:"component",id:e.config.id,class:Vue.normalizeClass("magic-ui-component"+(e.config.className?` ${e.config.className}`:"")),style:Vue.normalizeStyle(Vue.unref(u)),config:e.config},null,8,["id","class","style","config"])):Vue.createCommentVNode("",!0)}}))}}}));
//# sourceMappingURL=Component.vue_vue_type_script_setup_true_lang-legacy-7d113970.js.map
