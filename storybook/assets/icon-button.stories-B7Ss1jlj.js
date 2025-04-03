import{_ as n}from"./preact.module-7_OotSvk.js";import{u as k}from"./use-initial-focus-DTq0kKo3.js";import{I as s}from"./icon-plus-24-DDHIDLz1.js";import{I as l}from"./icon-button-Btpi0KRV.js";import"./create-component-CR2aSVXZ.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const b={title:"Components/Icon Button"},t=function(){function o(e){console.log(e)}return n(l,{onClick:o},n(s,null))},c=function(){function o(e){console.log(e)}return n(l,{...k(),onClick:o},n(s,null))},r=function(){function o(e){console.log(e)}return n(l,{disabled:!0,onClick:o},n(s,null))};var u,i,a;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton onClick={handleClick}>
      <IconPlus24 />
    </IconButton>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,m,p;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton {...useInitialFocus()} onClick={handleClick}>
      <IconPlus24 />
    </IconButton>;
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,C,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton disabled onClick={handleClick}>
      <IconPlus24 />
    </IconButton>;
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const F=["Passive","Focused","Disabled"];export{r as Disabled,c as Focused,t as Passive,F as __namedExportsOrder,b as default};
