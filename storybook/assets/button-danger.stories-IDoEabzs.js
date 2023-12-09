import{u as H}from"./use-initial-focus-xmfxIugy.js";import{B as e}from"./button-7i81gHC9.js";import{u as o}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-component-a83A1_Pu.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";const z={tags:["2"],title:"Components/Button/Danger"},c=function(){function n(t){console.log(t)}return o(e,{danger:!0,onClick:n,children:"Text"})},i=function(){function n(t){console.log(t)}return o(e,{...H(),danger:!0,onClick:n,children:"Text"})},a=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,onClick:n,children:"Text"})},l=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,loading:!0,onClick:n,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{...H(),danger:!0,loading:!0,onClick:n,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,loading:!0,onClick:n,children:"Text"})},r=function(){function n(t){console.log(t)}return o(e,{danger:!0,fullWidth:!0,onClick:n,children:"Text"})};r.parameters={fixedWidth:!0};var d,h,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick}>
      Text
    </Button>;
}`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,f,p;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick}>
      Text
    </Button>;
}`,...(p=(f=i.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var C,k,T;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick}>
      Text
    </Button>;
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,b,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,E,v;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(v=(E=u.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,F,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled loading onClick={handleClick}>
      Text
    </Button>;
}`,...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,M,W;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick}>
      Text
    </Button>;
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const A=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{a as Disabled,i as Focused,r as FullWidth,l as Loading,s as LoadingDisabled,u as LoadingFocused,c as Passive,A as __namedExportsOrder,z as default};
