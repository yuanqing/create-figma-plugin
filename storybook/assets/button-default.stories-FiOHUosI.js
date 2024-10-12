import{_ as e}from"./preact.module-DSfP8QVG.js";import{u as _}from"./use-initial-focus-BIYZsJcx.js";import{B as o}from"./button-BwoPhB3Q.js";import"./create-component-BQOTiC4n.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";const y={tags:["1"],title:"Components/Button/Default"},c=function(){function n(t){console.log(t)}return e(o,{onClick:n},"Text")},i=function(){function n(t){console.log(t)}return e(o,{..._(),onClick:n},"Text")},l=function(){function n(){throw new Error("This function should not be called")}return e(o,{disabled:!0,onClick:n},"Text")},a=function(){function n(){throw new Error("This function should not be called")}return e(o,{loading:!0,onClick:n},"Text")},s=function(){function n(){throw new Error("This function should not be called")}return e(o,{..._(),loading:!0,onClick:n},"Text")},u=function(){function n(){throw new Error("This function should not be called")}return e(o,{disabled:!0,loading:!0,onClick:n},"Text")},r=function(){function n(t){console.log(t)}return e(o,{fullWidth:!0,onClick:n},"Text")};r.parameters={fixedWidth:!0};var d,h,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button onClick={handleClick}>Text</Button>;
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var m,p,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} onClick={handleClick}>
      Text
    </Button>;
}`,...(C=(p=i.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,g,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled onClick={handleClick}>
      Text
    </Button>;
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var B,b,x;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button loading onClick={handleClick}>
      Text
    </Button>;
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,E,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} loading onClick={handleClick}>
      Text
    </Button>;
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,F,L;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled loading onClick={handleClick}>
      Text
    </Button>;
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,M,W;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button fullWidth onClick={handleClick}>
      Text
    </Button>;
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{l as Disabled,i as Focused,r as FullWidth,a as Loading,u as LoadingDisabled,s as LoadingFocused,c as Passive,z as __namedExportsOrder,y as default};
