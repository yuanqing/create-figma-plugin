import{c as f,T as a}from"./create-component-b0512abd.js";import{c as g}from"./create-class-name-71c46838.js";import{n as e}from"./no-op-cb277961.js";import{o as c}from"./jsxRuntime.module-632ba37d.js";const m="_toggle_1rqu7_1",x="_input_1rqu7_6",q="_disabled_1rqu7_18",T="_box_1rqu7_22",k="_children_1rqu7_69",s={toggle:m,input:x,disabled:q,box:T,switch:"_switch_1rqu7_46",children:k},N=f(function({children:u,disabled:o=!1,onChange:r=e,onKeyDown:n=e,onValueChange:l=e,propagateEscapeKeyDown:i=!0,value:d=!1,..._}){const h=a(function(t){r(t);const b=t.currentTarget.checked===!0;l(b)},[r,l]),p=a(function(t){n(t),t.key==="Escape"&&(i===!1&&t.stopPropagation(),t.currentTarget.blur())},[i,n]);return c("label",{class:g([s.toggle,o===!0?s.disabled:null]),children:[c("input",{..._,checked:d===!0,class:s.input,disabled:o===!0,onChange:h,onKeyDown:p,tabIndex:0,type:"checkbox"}),c("div",{class:s.box}),c("div",{class:s.switch}),c("div",{class:s.children,children:u})]})});export{N as T};
//# sourceMappingURL=toggle-d38d149f.js.map