import{h as d}from"./create-component-b0512abd.js";import{u as S}from"./use-initial-focus-57bdde46.js";import{I as i}from"./icon-ellipsis-32-ea05aaf4.js";import{I as g}from"./icon-toggle-button-911bd8b2.js";import{o as e}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";const L={tags:["2"],title:"Components/Icon Toggle Button/Selected"},u=function(){const[n,t]=d(!0);function a(o){const r=o.currentTarget.checked;console.log(r),t(r)}return e(g,{onChange:a,value:n,children:e(i,{})})},l=function(){const[n,t]=d(!0);function a(o){const r=o.currentTarget.checked;console.log(r),t(r)}return e(g,{...S(),onChange:a,value:n,children:e(i,{})})},s=function(){function n(){throw new Error("This function should not be called")}return e(g,{disabled:!0,onChange:n,value:!0,children:e(i,{})})},c=function(){const[n,t]=d(!0);function a(o){console.log(o),t(o)}return e(g,{onValueChange:a,value:n,children:e(i,{})})};var h,p,m;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(m=(p=u.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var V,f,C;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,I,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <IconToggleButton disabled onChange={handleChange} value={true}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,E,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const M=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,l as Focused,c as OnValueChange,u as Passive,M as __namedExportsOrder,L as default};
//# sourceMappingURL=icon-toggle-button-selected.stories-e7bf491b.js.map