import{_ as e}from"./preact.module-DSfP8QVG.js";import{u as D}from"./use-initial-focus-BIYZsJcx.js";import{B as o}from"./button-BwoPhB3Q.js";import"./create-component-BQOTiC4n.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";const q={tags:["3"],title:"Components/Button/Secondary"},c=function(){function n(t){console.log(t)}return e(o,{onClick:n,secondary:!0},"Text")},a=function(){function n(t){console.log(t)}return e(o,{...D(),onClick:n,secondary:!0},"Text")},s=function(){function n(){throw new Error("This function should not be called")}return e(o,{disabled:!0,onClick:n,secondary:!0},"Text")},i=function(){function n(){throw new Error("This function should not be called")}return e(o,{loading:!0,onClick:n,secondary:!0},"Text")},u=function(){function n(){throw new Error("This function should not be called")}return e(o,{...D(),loading:!0,onClick:n,secondary:!0},"Text")},l=function(){function n(){throw new Error("This function should not be called")}return e(o,{disabled:!0,loading:!0,onClick:n,secondary:!0},"Text")},r=function(){function n(t){console.log(t)}return e(o,{fullWidth:!0,onClick:n,secondary:!0},"Text")};r.parameters={fixedWidth:!0};var d,h,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,p,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,g,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var B,b,x;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var L,M,W;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button fullWidth onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{s as Disabled,a as Focused,r as FullWidth,i as Loading,l as LoadingDisabled,u as LoadingFocused,c as Passive,z as __namedExportsOrder,q as default};
