import{u as k}from"./use-initial-focus-83cf3b2e.js";import{I as s}from"./icon-plus-32-db191914.js";import{I as l}from"./icon-button-8696ab26.js";import{o as n}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";const T={title:"Components/Icon Button"},t=function(){function o(e){console.log(e)}return n(l,{onClick:o,children:n(s,{})})},c=function(){function o(e){console.log(e)}return n(l,{...k(),onClick:o,children:n(s,{})})},r=function(){function o(e){console.log(e)}return n(l,{disabled:!0,onClick:o,children:n(s,{})})};var i,a,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <IconButton onClick={handleClick}>
      <IconPlus32 />
    </IconButton>;
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var d,m,p;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=icon-button.stories-61376ae2.js.map
