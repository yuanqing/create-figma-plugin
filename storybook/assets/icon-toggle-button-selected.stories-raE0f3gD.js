import{_ as e}from"./preact.module-7_OotSvk.js";import{d}from"./create-component-CR2aSVXZ.js";import{u as b}from"./use-initial-focus-DTq0kKo3.js";import{I as g}from"./icon-more-24-DBIgh5tU.js";import{I as i}from"./icon-toggle-button-DQo1xPfW.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const H={tags:["2"],title:"Components/Icon Toggle Button/Selected"},r=function(){const[n,t]=d(!0);function a(o){const u=o.currentTarget.checked;console.log(u),t(u)}return e(i,{onChange:a,value:n},e(g,null))},l=function(){const[n,t]=d(!0);function a(o){const u=o.currentTarget.checked;console.log(u),t(u)}return e(i,{...b(),onChange:a,value:n},e(g,null))},c=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0},e(g,null))},s=function(){const[n,t]=d(!0);function a(o){console.log(o),t(o)}return e(i,{onValueChange:a,value:n},e(g,null))};var h,m,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var V,f,C;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,I,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <IconToggleButton disabled onChange={handleChange} value={true}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,B,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const J=["Passive","Focused","Disabled","OnValueChange"];export{c as Disabled,l as Focused,s as OnValueChange,r as Passive,J as __namedExportsOrder,H as default};
