import{y as a}from"./preact.module-Cko36Lti.js";const u=[{title:"Figma (Light)",value:"figma-light"},{title:"Figma (Dark)",value:"figma-dark"},{title:"FigJam",value:"figjam"}],p={theme:{defaultValue:"figma-light",name:"Theme",toolbar:{dynamicTitle:!0,icon:"mirror",items:u}}};function d(r){const o=document.body;for(const n of u)o.classList.remove(n.value);o.classList.add(r),document.body.style.backgroundColor=r==="figma-dark"?"#2c2c2c":"#ffffff"}const g=[function(r,o){const{theme:n}=o.globals;return d(n),a("div",{className:n,style:o.parameters.fixedWidth===!0?{width:"240px"}:void 0},a(r,null))}],y={layout:"centered",options:{storySort:function(o,n){function s(l){const i=l.title.split(/\//g);if(i.length===1)return{component:null,order:null,section:i[0],story:null};const m=l.tags[0]==="story"?null:parseInt(l.tags[0],10);return{component:i[1],order:m,section:i[0],story:i.slice(2).join("/")}}const c=["Index","Components","Inline Text","Icons","Layout","Hooks"],t=s(o),e=s(n);return t.section!==e.section?c.indexOf(t.section)-c.indexOf(e.section):t.component!==e.component?t.component.localeCompare(e.component,void 0,{numeric:!0}):t.order!==null&&e.order!==null?t.order-e.order:t.order!==null?-1:e.order!==null?1:t.story.localeCompare(e.story,void 0,{numeric:!0})}}};export{g as decorators,p as globalTypes,y as parameters};
