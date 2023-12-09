import{u as D}from"./use-initial-focus-xmfxIugy.js";import{B as e}from"./button-7i81gHC9.js";import{u as o}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-component-a83A1_Pu.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";const z={tags:["3"],title:"Components/Button/Secondary"},c=function(){function n(t){console.log(t)}return o(e,{onClick:n,secondary:!0,children:"Text"})},i=function(){function n(t){console.log(t)}return o(e,{...D(),onClick:n,secondary:!0,children:"Text"})},a=function(){function n(){throw new Error("This function should not be called")}return o(e,{disabled:!0,onClick:n,secondary:!0,children:"Text"})},s=function(){function n(){throw new Error("This function should not be called")}return o(e,{loading:!0,onClick:n,secondary:!0,children:"Text"})},l=function(){function n(){throw new Error("This function should not be called")}return o(e,{...D(),loading:!0,onClick:n,secondary:!0,children:"Text"})},u=function(){function n(){throw new Error("This function should not be called")}return o(e,{disabled:!0,loading:!0,onClick:n,secondary:!0,children:"Text"})},r=function(){function n(t){console.log(t)}return o(e,{fullWidth:!0,onClick:n,secondary:!0,children:"Text"})};r.parameters={fixedWidth:!0};var d,h,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,p,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button {...useInitialFocus()} onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(C=(p=i.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,g,T;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var B,b,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button {...useInitialFocus()} loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,F;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleClick() {
    throw new Error('This function should not be called');
  }
  return <Button disabled loading onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(F=(v=u.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var L,M,W;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Button fullWidth onClick={handleClick} secondary>
      Text
    </Button>;
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const A=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth"];export{a as Disabled,i as Focused,r as FullWidth,s as Loading,u as LoadingDisabled,l as LoadingFocused,c as Passive,A as __namedExportsOrder,z as default};
