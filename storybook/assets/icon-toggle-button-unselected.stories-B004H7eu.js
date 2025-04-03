import{_ as e}from"./preact.module-7_OotSvk.js";import{d}from"./create-component-CR2aSVXZ.js";import{u as S}from"./use-initial-focus-DTq0kKo3.js";import{I as g}from"./icon-more-24-DBIgh5tU.js";import{I as i}from"./icon-toggle-button-DQo1xPfW.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const H={tags:["1"],title:"Components/Icon Toggle Button/Unselected"},u=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(i,{onChange:t,value:n},e(g,null))},r=function(){const[n,a]=d(!1);function t(o){const l=o.currentTarget.checked;console.log(l),a(l)}return e(i,{...S(),onChange:t,value:n},e(g,null))},s=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1},e(g,null))},c=function(){const[n,a]=d(!1);function t(o){console.log(o),a(o)}return e(i,{onValueChange:t,value:n},e(g,null))};var h,m,f;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onChange={handleChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(f=(m=u.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,V,C;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(C=(V=r.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var v,I,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <IconToggleButton disabled onChange={handleChange} value={false}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,B,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconMore24 />
    </IconToggleButton>;
}`,...(b=(B=c.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const J=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,r as Focused,c as OnValueChange,u as Passive,J as __namedExportsOrder,H as default};
