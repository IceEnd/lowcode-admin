System.register(["./Component.vue_vue_type_script_setup_true_lang-legacy-1895e4c1.js","./useApp-legacy-df29a66b.js","./index-legacy-688915c9.js"],(function(e,n){"use strict";var t,o;return{setters:[e=>{t=e._},e=>{o=e.u},null],execute:function(){const n=e=>({show:()=>{e.config.style.display="initial"},hide:()=>{e.config.style.display="none"}}),c=["id"];e("default",Vue.defineComponent({__name:"Container",props:{config:null,model:{default:()=>({})}},setup(e){const i=e,l=Vue.inject("app"),u=Vue.computed((()=>l?.transformStyle(i.config.style||{})));return o({config:i.config,methods:{...n(i)}}),(n,o)=>(()=>{const e=i.config?.display;return"function"==typeof e?e(l):!1!==e})()?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(Vue.unref(u))},[Vue.renderSlot(n.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(e=>(Vue.openBlock(),Vue.createBlock(t,{key:e.id,config:e},null,8,["config"])))),128))],14,c)):Vue.createCommentVNode("",!0)}}))}}}));
//# sourceMappingURL=Container-legacy-84793186.js.map
