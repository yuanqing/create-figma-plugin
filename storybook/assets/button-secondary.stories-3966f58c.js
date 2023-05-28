import{u as I}from"./use-initial-focus-83cf3b2e.js";import{B as e}from"./button-b81342dc.js";import{o}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";const N={parameters:{order:3},title:"Components/Button/Secondary"},i=function(){function n(t){console.log(t)}return o(e,{onClick:n,secondary:!0,children:"Text"})},l=function(){function n(t){console.log(t)}return o(e,{...I(),onClick:n,secondary:!0,children:"Text"})},a=function(){function n(){throw new Error("This function should not be called")}return o(e,{disabled:!0,onClick:n,secondary:!0,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{loading:!0,onClick:n,secondary:!0,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{...I(),loading:!0,onClick:n,secondary:!0,children:"Text"})},d=function(){function n(){throw new Error("This function should not be called")}return o(e,{disabled:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},r=function(){function n(t){console.log(t)}return o(e,{fullWidth:!0,onClick:n,secondary:!0,children:"Text"})};r.parameters={fixedWidth:!0};const c=function(){const n=Array(100).fill("Text").join(" ");function t(_){console.log(_)}return o(e,{fullWidth:!0,onClick:t,secondary:!0,children:n})};c.parameters={fixedWidth:!0};var h,f,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var p,C,k;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var g,T,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var B,y,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var E,w,v;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(v=(w=u.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,L,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,M,D;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button fullWidth onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,J,X;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button fullWidth onClick={handleClick} secondary>
      {longText}
    </Button>;
}`,...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const Q=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","FullWidthLongText"];export{a as Disabled,l as Focused,r as FullWidth,c as FullWidthLongText,s as Loading,d as LoadingDisabled,u as LoadingFocused,i as Passive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=button-secondary.stories-3966f58c.js.map
