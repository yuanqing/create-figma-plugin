import{u as k}from"./use-initial-focus-57bdde46.js";import{I as s}from"./icon-plus-32-8b6a0896.js";import{I as i}from"./icon-button-10110ab3.js";import{o as n}from"./jsxRuntime.module-632ba37d.js";import"./create-component-b0512abd.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./no-op-cb277961.js";const b={title:"Components/Icon Button"},t=function(){function o(e){console.log(e)}return n(i,{onClick:o,children:n(s,{})})},c=function(){function o(e){console.log(e)}return n(i,{...k(),onClick:o,children:n(s,{})})},r=function(){function o(e){console.log(e)}return n(i,{disabled:!0,onClick:o,children:n(s,{})})};var l,a,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`function () {
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
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const F=["Passive","Focused","Disabled"];export{r as Disabled,c as Focused,t as Passive,F as __namedExportsOrder,b as default};
//# sourceMappingURL=icon-button.stories-26351c6a.js.map
