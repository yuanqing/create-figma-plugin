import{_ as e}from"./preact.module-DSfP8QVG.js";import{h as d}from"./create-component-BQOTiC4n.js";import{u as b}from"./use-initial-focus-BIYZsJcx.js";import{I as g}from"./icon-ellipsis-32-CK4EiLZt.js";import{I as i}from"./icon-toggle-button-p7PLV_29.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const J={tags:["1"],title:"Components/Icon Toggle Button/Unselected"},s=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(i,{onChange:t,value:n},e(g,null))},u=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(i,{...b(),onChange:t,value:n},e(g,null))},r=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1},e(g,null))},c=function(){const[n,a]=d(!1);function t(o){console.log(o),a(o)}return e(i,{onValueChange:t,value:n},e(g,null))};var h,p,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,V,C;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var v,I,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <IconToggleButton disabled onChange={handleChange} value={false}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,E,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconEllipsis32 />
    </IconToggleButton>;
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{r as Disabled,u as Focused,c as OnValueChange,s as Passive,L as __namedExportsOrder,J as default};
