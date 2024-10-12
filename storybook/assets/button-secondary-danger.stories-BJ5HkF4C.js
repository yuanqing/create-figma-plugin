import{_ as e}from"./preact.module-DSfP8QVG.js";import{u as W}from"./use-initial-focus-BIYZsJcx.js";import{B as o}from"./button-BwoPhB3Q.js";import"./create-component-BQOTiC4n.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";const q={tags:["4"],title:"Components/Button/Secondary Danger"},a=function(){function n(r){console.log(r)}return e(o,{danger:!0,onClick:n,secondary:!0},"Text")},c=function(){function n(r){console.log(r)}return e(o,{...W(),danger:!0,onClick:n,secondary:!0},"Text")},s=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,disabled:!0,onClick:n,secondary:!0},"Text")},u=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,loading:!0,onClick:n,secondary:!0},"Text")},i=function(){function n(){throw new Error("This function should not be called")}return e(o,{...W(),danger:!0,loading:!0,onClick:n,secondary:!0},"Text")},l=function(){function n(){throw new Error("This function should not be called")}return e(o,{danger:!0,disabled:!0,loading:!0,onClick:n,secondary:!0},"Text")},t=function(){function n(r){console.log(r)}return e(o,{danger:!0,fullWidth:!0,onClick:n,secondary:!0},"Text")};t.parameters={fixedWidth:!0};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,f,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var C,k,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,b,x;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(b=u.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var L,D,M;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{s as Disabled,c as Focused,t as FullWidth,u as Loading,l as LoadingDisabled,i as LoadingFocused,a as Passive,z as __namedExportsOrder,q as default};
