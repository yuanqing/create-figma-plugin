import{h as d}from"./hooks.module-7c0d6ca2.js";import{u as b}from"./use-initial-focus-e560a4b5.js";import{I as i}from"./icon-ellipsis-32-25c3c182.js";import{I as g}from"./icon-toggle-button-d95433d8.js";import{o as e}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";const J={parameters:{order:1},title:"Components/Icon Toggle Button/Unselected"},s=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(g,{onChange:t,value:n,children:e(i,{})})},r=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(g,{...b(),onChange:t,value:n,children:e(i,{})})},u=function(){function n(){throw new Error("This function should not be called")}return e(g,{disabled:!0,onChange:n,value:!1,children:e(i,{})})},c=function(){const[n,a]=d(!1);function t(o){console.log(o),a(o)}return e(g,{onValueChange:t,value:n,children:e(i,{})})};var h,p,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,V,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(C=(V=r.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var v,I,T;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <IconToggleButton disabled onChange={handleChange} value={false}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,E,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{u as Disabled,r as Focused,c as OnValueChange,s as Passive,L as __namedExportsOrder,J as default};
//# sourceMappingURL=icon-toggle-button-unselected.stories-9de9842b.js.map
