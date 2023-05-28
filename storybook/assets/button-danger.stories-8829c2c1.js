import{u as _}from"./use-initial-focus-83cf3b2e.js";import{B as e}from"./button-b81342dc.js";import{o}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";const N={parameters:{order:2},title:"Components/Button/Danger"},i=function(){function n(t){console.log(t)}return o(e,{danger:!0,onClick:n,children:"Text"})},l=function(){function n(t){console.log(t)}return o(e,{..._(),danger:!0,onClick:n,children:"Text"})},a=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,onClick:n,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,loading:!0,onClick:n,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{..._(),danger:!0,loading:!0,onClick:n,children:"Text"})},d=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,loading:!0,onClick:n,children:"Text"})},r=function(){function n(t){console.log(t)}return o(e,{danger:!0,fullWidth:!0,onClick:n,children:"Text"})};r.parameters={fixedWidth:!0};const c=function(){const n=Array(100).fill("Text").join(" ");function t(j){console.log(j)}return o(e,{danger:!0,fullWidth:!0,onClick:t,children:n})};c.parameters={fixedWidth:!0};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick}>
      Text
    </Button>;
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var m,p,C;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick}>
      Text
    </Button>;
}`,...(C=(p=l.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,T,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick}>
      Text
    </Button>;
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var B,b,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(E=(b=u.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var w,v,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick}>
      Text
    </Button>;
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var S,F,W;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled loading onClick={handleClick}>
      Text
    </Button>;
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,D,H;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick}>
      Text
    </Button>;
}`,...(H=(D=r.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,X,I;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick}>
      {longText}
    </Button>;
}`,...(I=(X=c.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};const Q=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","FullWidthLongText"];export{a as Disabled,l as Focused,r as FullWidth,c as FullWidthLongText,u as Loading,d as LoadingDisabled,s as LoadingFocused,i as Passive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=button-danger.stories-8829c2c1.js.map
