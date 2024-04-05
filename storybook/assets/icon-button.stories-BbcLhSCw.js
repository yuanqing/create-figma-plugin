import{y as n}from"./preact.module-Cko36Lti.js";import{u as k}from"./use-initial-focus-DfmxErEH.js";import{I as s}from"./icon-plus-32-DXnadXGb.js";import{I as l}from"./icon-button-Bn4YtboF.js";import"./create-component-B1Y1oDBF.js";import"./create-icon-D5KCgWRi.js";import"./no-op-DX6rZLP_.js";const T={title:"Components/Icon Button"},t=function(){function o(e){console.log(e)}return n(l,{onClick:o},n(s,null))},c=function(){function o(e){console.log(e)}return n(l,{...k(),onClick:o},n(s,null))},r=function(){function o(e){console.log(e)}return n(l,{disabled:!0,onClick:o},n(s,null))};var u,a,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton onClick={handleClick}>
      <IconPlus32 />
    </IconButton>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,m,p;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton {...useInitialFocus()} onClick={handleClick}>
      <IconPlus32 />
    </IconButton>;
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,C,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton disabled onClick={handleClick}>
      <IconPlus32 />
    </IconButton>;
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const b=["Passive","Focused","Disabled"];export{r as Disabled,c as Focused,t as Passive,b as __namedExportsOrder,T as default};
