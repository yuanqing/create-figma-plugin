import{T as f,c as Z,_ as P,h as U,p as ee,z as te}from"./create-component-b0512abd.js";import{u as ne,m as M}from"./use-mouse-down-outside-bb94ce97.js";import{g as x}from"./get-current-from-ref-47f174f6.js";import{I as oe}from"./icon-control-chevron-down-8-c2f32eaf.js";import{I as re}from"./icon-menu-checkmark-checked-16-11f1d34a.js";import{c as C}from"./create-class-name-71c46838.js";import{n as B}from"./no-op-cb277961.js";import{a as V,I as H,V as b}from"./constants-4a59d305.js";import{o as m}from"./jsxRuntime.module-632ba37d.js";function le(n){const{itemIdDataAttributeName:e,menuElementRef:o,selectedId:r,setSelectedId:g}=n,p=f(function(){return Array.from(x(o).querySelectorAll(`[${e}]`)).filter(function(d){return d.hasAttribute("disabled")===!1})},[e,o]),i=f(function(d){if(d===null)return-1;const a=p().findIndex(function(h){return h.getAttribute(e)===d});if(a===-1)throw new Error("`index` is `-1`");return a},[p,e]),_=f(function(d){const a=p(),h=i(d),l=a[h],w=l.getBoundingClientRect().top,c=x(o),v=c.getBoundingClientRect().top;if(w<v){l.scrollIntoView();return}w+l.offsetHeight>v+c.offsetHeight&&l.scrollIntoView()},[i,p,o]),T=f(function(d){const a=d.key;if(a==="ArrowDown"||a==="ArrowUp"){const h=p(),l=i(r);let w;a==="ArrowDown"?w=l===-1||l===h.length-1?0:l+1:w=l===-1||l===0?h.length-1:l-1;const v=h[w].getAttribute(e);g(v),_(v)}},[p,i,e,g,r,_]);return{handleScrollableMenuItemMouseMove:f(function(d){const a=d.currentTarget.getAttribute(e);a!==r&&g(a)},[e,r,g]),handleScrollableMenuKeyDown:T}}const ie="_dropdown_l9ibg_1",ce="_disabled_l9ibg_12",se="_menu_l9ibg_17",ue="_icon_l9ibg_25",de="_empty_l9ibg_37",ae="_value_l9ibg_41",fe="_hasIcon_l9ibg_55",he="_placeholder_l9ibg_59",me="_chevronIcon_l9ibg_63",pe="_border_l9ibg_74",ge="_hasBorder_l9ibg_83",we="_underline_l9ibg_94",I={dropdown:ie,disabled:ce,menu:se,icon:ue,empty:de,value:ae,hasIcon:fe,placeholder:he,chevronIcon:me,border:pe,hasBorder:ge,underline:we};function be(n,e,o){const r=n.getBoundingClientRect(),g=n.offsetWidth,p=n.offsetHeight,i=r.left,_=r.top;e.style.minWidth=`${g}px`;const T=window.innerWidth-2*b;e.style.maxWidth=`${T}px`;const u=window.innerHeight-2*b;e.style.maxHeight=`${u}px`;const d=e.offsetWidth,a=e.offsetHeight,h=e.scrollHeight,l=parseInt(window.getComputedStyle(e).paddingTop,10),w=Ie(e,o),c=_e({menuWidth:d,rootLeft:i});e.style.left=`${c}px`;const v=ye({menuHeight:a,rootTop:_,selectedTop:w.offsetTop});e.style.top=`${v}px`,h>a!==!1&&(e.scrollTop=ve({menuHeight:a,menuPaddingTop:l,menuScrollHeight:h,rootHeight:p,rootTop:_,selectedTop:w.offsetTop}))}function Ie(n,e){const o=n.querySelector(e===V?`[${H}]`:`[${H}='${e}']`);if(o===null)throw new Error("`inputElement` is `null`");const r=o.parentElement;if(r===null)throw new Error("`labelElement` is `null`");return r}function _e(n){const{menuWidth:e,rootLeft:o}=n;if(o<=b)return b;const r=window.innerWidth;return o+e>r-b?r-b-e:o}function ye(n){const{menuHeight:e,rootTop:o,selectedTop:r}=n,g=window.innerHeight;if(o<=b||e===g-2*b)return b;const p=o-r,i=b,_=g-b-e;return L(p,i,_)}function ve(n){const{menuHeight:e,menuPaddingTop:o,menuScrollHeight:r,rootHeight:g,rootTop:p,selectedTop:i}=n,_=L(p,b,window.innerHeight-b-g+o/2),T=i-(_-b),u=0,d=r-e;return L(T,u,d)}function L(n,e,o){return Math.min(Math.max(n,e),o)}const Ce=Z(function({disabled:n=!1,icon:e,onChange:o=B,onKeyDown:r=B,onMouseDown:g=B,onValueChange:p=B,options:i,placeholder:_,propagateEscapeKeyDown:T=!0,value:u,variant:d,...a},h){if(typeof e=="string"&&e.length!==1)throw new Error(`String \`icon\` must be a single character: "${e}"`);const l=P(null),w=P(null),[c,v]=U(!1),E=q(i,u);if(u!==null&&E===-1)throw new Error(`Invalid \`value\`: ${u}`);const[S,k]=U(E===-1?V:`${E}`),F=typeof i[E]>"u"?"":Me(i[E]),{handleScrollableMenuKeyDown:N,handleScrollableMenuItemMouseMove:K}=le({itemIdDataAttributeName:H,menuElementRef:w,selectedId:S,setSelectedId:k}),R=f(function(){x(l).blur()},[]),D=f(function(){x(l).focus()},[]),W=f(function(t){const s=x(l),A=x(w);be(s,A,t)},[]),y=f(function(){v(!1),k(V)},[]),$=f(function(){if(c===!0)return;if(v(!0),u===null){W(S);return}const t=q(i,u);if(t===-1)throw new Error(`Invalid \`value\`: ${u}`);const s=`${t}`;k(s),W(s)},[c,i,S,W,u]),z=f(function(t){r(t);const s=t.key;if(s==="ArrowUp"||s==="ArrowDown"){if(t.preventDefault(),c===!1){$();return}N(t);return}if(s==="Escape"){if(t.preventDefault(),T===!1&&t.stopPropagation(),c===!0){y();return}R();return}if(s==="Enter"){if(t.preventDefault(),c===!1){$();return}if(S!==V){const A=x(w).querySelector(`[${H}='${S}']`);if(A===null)throw new Error("`selectedElement` is `null`");A.checked=!0;const O=new window.Event("change",{bubbles:!0,cancelable:!0});A.dispatchEvent(O)}y();return}if(s==="Tab"){y();return}},[N,c,r,T,S,y,$,R]),G=f(function(t){g(t),c===!1&&$()},[c,g,$]),j=f(function(t){t.stopPropagation()},[]),J=f(function(t){o(t);const s=t.currentTarget.getAttribute(H);if(s===null)throw new Error("`id` is `null`");const O=i[parseInt(s,10)].value;p(O),D(),y()},[o,p,i,y,D]),Q=f(function(){D(),y()},[y,D]),X=f(function(){c!==!1&&(y(),R())},[c,R,y]);ne({onMouseDownOutside:X,ref:l}),ee(function(){function t(){c!==!1&&(D(),y())}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[c,y,D]);const Y=f(function(t){if(l.current=t,h!==null){if(typeof h=="function"){h(t);return}h.current=t}},[h,l]);return m("div",{...a,ref:Y,class:C([I.dropdown,d==="border"?I.hasBorder:null,typeof e<"u"?I.hasIcon:null,n===!0?I.disabled:null]),onKeyDown:n===!0?void 0:z,onMouseDown:G,tabIndex:0,children:[typeof e>"u"?null:m("div",{class:I.icon,children:e}),u===null?typeof _>"u"?m("div",{class:I.empty}):m("div",{class:C([I.value,I.placeholder]),children:_}):m("div",{class:I.value,children:F}),m("div",{class:I.chevronIcon,children:m(oe,{})}),d==="underline"?m("div",{class:I.underline}):null,m("div",{class:I.border}),te(m("div",{ref:w,class:C([M.menu,I.menu,n===!0||c===!1?M.hidden:null]),onMouseDown:j,children:i.map(function(t,s){return typeof t=="string"?m("hr",{class:M.optionSeparator},s):"header"in t?m("h1",{class:M.optionHeader,children:t.header},s):m("label",{class:C([M.optionValue,t.disabled===!0?M.optionValueDisabled:null,t.disabled!==!0&&`${s}`===S?M.optionValueSelected:null]),children:[m("input",{checked:u===t.value,class:M.input,disabled:t.disabled===!0,onChange:u===t.value?void 0:J,onClick:u===t.value?Q:void 0,onMouseMove:K,tabIndex:-1,type:"radio",value:`${t.value}`,[H]:`${s}`}),t.value===u?m("div",{class:M.checkIcon,children:m(re,{})}):null,typeof t.text>"u"?t.value:t.text]},s)})}),document.body)]})});function Me(n){if(typeof n!="string"){if("text"in n)return n.text;if("value"in n)return n.value}throw new Error("Invariant violation")}function q(n,e){if(e===null)return-1;let o=0;for(const r of n){if(typeof r!="string"&&"value"in r&&r.value===e)return o;o+=1}return-1}export{Ce as D};
//# sourceMappingURL=dropdown-b1c572a4.js.map