import{_ as e}from"./preact.module-DSfP8QVG.js";import{h as d}from"./create-component-BQOTiC4n.js";import{u as S}from"./use-initial-focus-BIYZsJcx.js";import{I as g}from"./icon-ellipsis-32-CK4EiLZt.js";import{I as i}from"./icon-toggle-button-p7PLV_29.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const J={tags:["2"],title:"Components/Icon Toggle Button/Selected"},l=function(){const[n,t]=d(!0);function a(o){const u=o.currentTarget.checked;console.log(u),t(u)}return e(i,{onChange:a,value:n},e(g,null))},r=function(){const[n,t]=d(!0);function a(o){const u=o.currentTarget.checked;console.log(u),t(u)}return e(i,{...S(),onChange:a,value:n},e(g,null))},s=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0},e(g,null))},c=function(){const[n,t]=d(!0);function a(o){console.log(o),t(o)}return e(i,{onValueChange:a,value:n},e(g,null))};var h,p,m;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var V,f,C;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,I,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,r as Focused,c as OnValueChange,l as Passive,L as __namedExportsOrder,J as default};
