import{_ as o}from"./preact.module-7_OotSvk.js";import{c as x,q as d}from"./create-component-CR2aSVXZ.js";import{I as k}from"./icon-check-16-D7BaBx8-.js";import{c as y}from"./create-class-name-irFPZBOU.js";import{n}from"./no-op-DX6rZLP_.js";const C="_selectableItem_1plom_1",g="_disabled_1plom_7",S="_input_1plom_12",T="_box_1plom_25",q="_children_1plom_48",w="_bold_1plom_58",N="_indent_1plom_61",P="_icon_1plom_65",e={selectableItem:C,disabled:g,input:S,box:T,children:q,bold:w,indent:N,icon:P},E=x(function({bold:m=!1,children:u,disabled:l=!1,indent:_=!1,onChange:c=n,onKeyDown:s=n,onValueChange:i=n,propagateEscapeKeyDown:r=!0,value:a,...p},b){const f=d(function(t){c(t);const I=t.currentTarget.checked===!0;i(I)},[c,i]),h=d(function(t){s(t),t.key==="Escape"&&(r===!1&&t.stopPropagation(),t.currentTarget.blur())},[s,r]);return o("label",{class:y([e.selectableItem,l===!0?e.disabled:null,m===!0?e.bold:null,_===!0?e.indent:null])},o("input",{...p,ref:b,checked:a===!0,class:e.input,disabled:l===!0,onChange:f,onKeyDown:l===!0?void 0:h,tabIndex:0,type:"checkbox"}),o("div",{class:e.box},o("div",{class:e.children},u),a===!0?o("div",{class:e.icon},o(k,null)):null))});export{E as S};
