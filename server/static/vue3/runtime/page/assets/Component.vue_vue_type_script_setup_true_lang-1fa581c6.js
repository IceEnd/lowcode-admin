import{t as u}from"./index-b136d64e.js";const f=Vue.defineComponent({__name:"Component",props:{config:{default:()=>({})},model:{default:()=>({})}},setup(e){const t=e,n=Vue.inject("app"),i=Vue.computed(()=>`magic-ui-${u(t.config.type)}`),s=Vue.computed(()=>n==null?void 0:n.transformStyle(t.config.style)),a=()=>{var c;const o=(c=t.config)==null?void 0:c.display;return typeof o=="function"?o(n):o!==!1};return(o,c)=>a()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(Vue.unref(i)),{key:0,ref:"component",id:e.config.id,class:Vue.normalizeClass(`magic-ui-component${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(Vue.unref(s)),config:e.config},null,8,["id","class","style","config"])):Vue.createCommentVNode("",!0)}});export{f as _};
//# sourceMappingURL=Component.vue_vue_type_script_setup_true_lang-1fa581c6.js.map
