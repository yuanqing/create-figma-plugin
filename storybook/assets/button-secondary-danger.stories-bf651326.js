import{u as I}from"./use-initial-focus-83cf3b2e.js";import{B as e}from"./button-b81342dc.js";import{o}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";const N={parameters:{order:4},title:"Components/Button/Secondary Danger"},a=function(){function n(r){console.log(r)}return o(e,{danger:!0,onClick:n,secondary:!0,children:"Text"})},i=function(){function n(r){console.log(r)}return o(e,{...I(),danger:!0,onClick:n,secondary:!0,children:"Text"})},l=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,onClick:n,secondary:!0,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{...I(),danger:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},d=function(){function n(){throw new Error("This function should not be called")}return o(e,{danger:!0,disabled:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},t=function(){function n(r){console.log(r)}return o(e,{danger:!0,fullWidth:!0,onClick:n,secondary:!0,children:"Text"})};t.parameters={fixedWidth:!0};const c=function(){const n=Array(100).fill("Text").join(" ");function r(_){console.log(_)}return o(e,{danger:!0,fullWidth:!0,onClick:r,secondary:!0,children:n})};c.parameters={fixedWidth:!0};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var m,p,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} danger onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(C=(p=i.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,T,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var B,y,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var E,w,v;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} danger loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(v=(w=u.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,L,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button danger disabled loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,M,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(D=(M=t.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,J,X;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button danger fullWidth onClick={handleClick} secondary>
      {longText}
    </Button>;
}`,...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const Q=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","FullWidthLongText"];export{l as Disabled,i as Focused,t as FullWidth,c as FullWidthLongText,s as Loading,d as LoadingDisabled,u as LoadingFocused,a as Passive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=button-secondary-danger.stories-bf651326.js.map
