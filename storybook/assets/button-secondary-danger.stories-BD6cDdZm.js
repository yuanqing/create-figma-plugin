import{u as W}from"./use-initial-focus-xmfxIugy.js";import{B as e}from"./button-7i81gHC9.js";import{u as o}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-component-a83A1_Pu.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";const z={tags:["4"],title:"Components/Button/Secondary Danger"},c=function(){function n(r){console.log(r)}return o(e,{danger:!0,onClick:n,secondary:!0,children:"Text"})},a=function(){function n(r){console.log(r)}return o(e,{...W(),danger:!0,onClick:n,secondary:!0,children:"Text"})},i=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,onClick:n,secondary:!0,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{...W(),danger:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},l=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},t=function(){function n(r){console.log(r)}return o(e,{danger:!0,fullWidth:!0,onClick:n,secondary:!0,children:"Text"})};t.parameters={fixedWidth:!0};var d,h,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,f,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var C,k,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,b,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const A=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{i as Disabled,a as Focused,t as FullWidth,s as Loading,l as LoadingDisabled,u as LoadingFocused,c as Passive,A as __namedExportsOrder,z as default};
