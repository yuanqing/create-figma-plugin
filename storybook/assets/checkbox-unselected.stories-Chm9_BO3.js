import{y as e}from"./preact.module-Cko36Lti.js";import{p as d}from"./create-component-B1Y1oDBF.js";import{u as S}from"./use-initial-focus-DfmxErEH.js";import{T as h}from"./text-CSA6lMsS.js";import{C as i}from"./checkbox-CGKQX-wP.js";import"./create-class-name-irFPZBOU.js";import"./icon-control-checkbox-checked-12-CacV5Vho.js";import"./create-icon-D5KCgWRi.js";import"./no-op-DX6rZLP_.js";const M={tags:["1"],title:"Components/Checkbox/Unselected"},l=function(){const[n,o]=d(!1);function t(a){const s=a.currentTarget.checked;console.log(s),o(s)}return e(i,{onChange:t,value:n},e(h,null,"Text"))},r=function(){const[n,o]=d(!1);function t(a){const s=a.currentTarget.checked;console.log(s),o(s)}return e(i,{...S(),onChange:t,value:n},e(h,null,"Text"))},u=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1},e(h,null,"Text"))},c=function(){const[n,o]=d(!1);function t(a){console.log(a),o(a)}return e(i,{onValueChange:t,value:n},e(h,null,"Text"))};var g,m,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(m=l.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var f,p,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,V,v;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Checkbox disabled onChange={handleChange} value={false}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(v=(V=u.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var b,k,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const P=["Passive","Focused","Disabled","OnValueChange"];export{u as Disabled,r as Focused,c as OnValueChange,l as Passive,P as __namedExportsOrder,M as default};
