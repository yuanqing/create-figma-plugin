import{u as k}from"./use-initial-focus-e560a4b5.js";import{I as s}from"./icon-plus-32-42f95b5f.js";import{I as l}from"./icon-button-7144d6db.js";import{o as n}from"./jsxRuntime.module-3e32d480.js";import"./hooks.module-7c0d6ca2.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";const T={title:"Components/Icon Button"},t=function(){function o(e){console.log(e)}return n(l,{onClick:o,children:n(s,{})})},c=function(){function o(e){console.log(e)}return n(l,{...k(),onClick:o,children:n(s,{})})},r=function(){function o(e){console.log(e)}return n(l,{disabled:!0,onClick:o,children:n(s,{})})};var i,a,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=icon-button.stories-44c2125e.js.map
