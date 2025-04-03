import{_ as e}from"./preact.module-7_OotSvk.js";import{d}from"./create-component-CR2aSVXZ.js";import{u as S}from"./use-initial-focus-DTq0kKo3.js";import{T as h}from"./text-Dw40dpV8.js";import{C as i}from"./checkbox-l2D1aJNm.js";import"./create-class-name-irFPZBOU.js";import"./icon-check-16-D7BaBx8-.js";import"./create-icon-DvrWd2n3.js";import"./no-op-DX6rZLP_.js";const M={tags:["2"],title:"Components/Checkbox/Selected"},u=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{onChange:o,value:n},e(h,null,"Text"))},l=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{...S(),onChange:o,value:n},e(h,null,"Text"))},s=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0},e(h,null,"Text"))},c=function(){const[n,a]=d(!0);function o(t){console.log(t),a(t)}return e(i,{onValueChange:o,value:n},e(h,null,"Text"))};var g,m,C;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(m=u.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var p,x,T;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var V,f,v;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Checkbox disabled onChange={handleChange} value={true}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,k,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const P=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,l as Focused,c as OnValueChange,u as Passive,P as __namedExportsOrder,M as default};
