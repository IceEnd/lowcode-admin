import{u as m}from"./useApp-d5521bba.js";const g=Vue.defineComponent({__name:"index",props:{config:null,model:{default:()=>({})}},setup(i){var a,u;const o=i,n=Vue.ref(!1),e=Vue.inject("app"),c=(a=e==null?void 0:e.page)==null?void 0:a.getNode(o.config.id),s=()=>{n.value=!0,e&&e.emit("overlay:open",c)},l=()=>{n.value=!1,e&&e.emit("overlay:close",c)};return(u=e==null?void 0:e.page)==null||u.on("editor:select",(r,f)=>{f.find(t=>t.id===o.config.id)?s():l()}),m({config:o.config,methods:{openOverlay:s,closeOverlay:l}}),(r,f)=>{const t=Vue.resolveComponent("magic-ui-container");return n.value?(Vue.openBlock(),Vue.createBlock(t,{key:0,class:"magic-ui-overlay",config:{items:i.config.items}},{default:Vue.withCtx(()=>[Vue.renderSlot(r.$slots,"default")]),_:3},8,["config"])):Vue.createCommentVNode("",!0)}}});export{g as default};
//# sourceMappingURL=index-c5744ab4.js.map