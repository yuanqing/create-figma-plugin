import{y as e}from"./preact.module-Cko36Lti.js";import{u as H}from"./use-initial-focus-DfmxErEH.js";import{B as o}from"./button-Nh83xXAg.js";import"./create-component-B1Y1oDBF.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";const q={tags:["2"],title:"Components/Button/Danger"},a=function(){function n(t){console.log(t)}return e(o,{danger:!0,onClick:n},"Text")},c=function(){function n(t){console.log(t)}return e(o,{...H(),danger:!0,onClick:n},"Text")},i=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,disabled:!0,onClick:n},"Text")},u=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,loading:!0,onClick:n},"Text")},l=function(){function n(){throw new Error("This function should not be called")}return e(o,{...H(),danger:!0,loading:!0,onClick:n},"Text")},s=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,disabled:!0,loading:!0,onClick:n},"Text")},r=function(){function n(t){console.log(t)}return e(o,{danger:!0,fullWidth:!0,onClick:n},"Text")};r.parameters={fixedWidth:!0};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick}>
      Text
    </Button>;
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,f,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick}>
      Text
    </Button>;
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var C,k,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick}>
      Text
    </Button>;
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,b,x;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(x=(b=u.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,E,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,F,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{i as Disabled,c as Focused,r as FullWidth,u as Loading,s as LoadingDisabled,l as LoadingFocused,a as Passive,z as __namedExportsOrder,q as default};
