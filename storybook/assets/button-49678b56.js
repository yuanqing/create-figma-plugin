import{c as h,T as g}from"./create-component-b0512abd.js";import{c as y}from"./create-class-name-71c46838.js";import{n as s}from"./no-op-cb277961.js";import{L as C}from"./loading-indicator-a4a1d996.js";import{b as r}from"./button.module-2bfe3ef2.js";import{o as t}from"./jsxRuntime.module-632ba37d.js";const v=h(function({children:i,danger:u=!1,disabled:n=!1,fullWidth:c=!1,loading:l=!1,onClick:d=s,onKeyDown:e=s,propagateEscapeKeyDown:a=!0,secondary:f=!1,...m},p){const b=g(function(o){e(o),o.key==="Escape"&&(a===!1&&o.stopPropagation(),o.currentTarget.blur())},[e,a]);return t("div",{class:y([r.button,f===!0?r.secondary:r.default,u===!0?r.danger:null,c===!0?r.fullWidth:null,n===!0?r.disabled:null,l===!0?r.loading:null]),children:[l===!0?t("div",{class:r.loadingIndicator,children:t(C,{})}):null,t("button",{...m,ref:p,disabled:n===!0,onClick:l===!0?void 0:d,onKeyDown:b,tabIndex:0,children:t("div",{class:r.children,children:i})})]})});export{v as B};
//# sourceMappingURL=button-49678b56.js.map
