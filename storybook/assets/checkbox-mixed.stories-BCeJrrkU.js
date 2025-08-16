import{_ as e}from"./preact.module-7_OotSvk.js";import{d as g}from"./create-component-CR2aSVXZ.js";import{u as w}from"./use-initial-focus-DTq0kKo3.js";import{T as h}from"./text-Dw40dpV8.js";import{C as i}from"./checkbox-CQKt81nw.js";import{M as d}from"./mixed-values-CZ6RGhGs.js";import"./create-class-name-irFPZBOU.js";import"./icon-check-16-D7BaBx8-.js";import"./create-icon-DvrWd2n3.js";import"./icon-mixed-16-B0lFv6Hs.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";const H={tags:["3"],title:"Components/Checkbox/Mixed"},u=function(){const[n,a]=g(d);function t(o){const r=o.currentTarget.checked;console.log(r),a(r)}return e(i,{onChange:t,value:n},e(h,null,"Text"))},s=function(){const[n,a]=g(d);function t(o){const r=o.currentTarget.checked;console.log(r),a(r)}return e(i,{...w(),onChange:t,value:n},e(h,null,"Text"))},l=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:d},e(h,null,"Text"))},c=function(){const[n,a]=g(d);function t(o){console.log(o),a(o)}return e(i,{onValueChange:t,value:n},e(h,null,"Text"))};var m,p,C;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(MIXED_BOOLEAN);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(p=u.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var x,f,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(MIXED_BOOLEAN);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var V,E,v;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Checkbox disabled onChange={handleChange} value={MIXED_BOOLEAN}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var b,O,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(MIXED_BOOLEAN);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const J=["Passive","Focused","Disabled","OnValueChange"];export{l as Disabled,s as Focused,c as OnValueChange,u as Passive,J as __namedExportsOrder,H as default};
