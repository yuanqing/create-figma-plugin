import{y as t,g as p}from"./preact.module-Cko36Lti.js";import{c as d,x as f}from"./create-component-B1Y1oDBF.js";import{I as m}from"./icon-caret-right-16-C_ZDkK_q.js";import{n as o}from"./no-op-DX6rZLP_.js";const b="_label_ekvh7_1",k="_input_ekvh7_5",v="_title_ekvh7_13",x="_children_ekvh7_14",y="_icon_ekvh7_29",l={label:b,input:k,title:v,children:x,icon:y},P=d(function({children:s,onClick:r=o,onKeyDown:c=o,open:e,propagateEscapeKeyDown:i=!0,title:a,...u},_){const h=f(function(n){c(n),n.key==="Escape"&&(i===!1&&n.stopPropagation(),n.currentTarget.blur())},[c,i]);return t(p,null,t("label",{class:l.label},t("input",{...u,ref:_,checked:e===!0,class:l.input,onClick:r,onKeyDown:h,tabIndex:0,type:"checkbox"}),t("div",{class:l.title},t("div",{class:l.icon},t(m,null)),a)),e===!0?t("div",{class:l.children},s):null)});export{P as D};
