import{_ as e}from"./preact.module-7_OotSvk.js";import{d}from"./create-component-CR2aSVXZ.js";import{u as S}from"./use-initial-focus-DTq0kKo3.js";import{T as h}from"./text-Dw40dpV8.js";import{C as i}from"./checkbox-CQKt81nw.js";import"./create-class-name-irFPZBOU.js";import"./icon-check-16-D7BaBx8-.js";import"./create-icon-DvrWd2n3.js";import"./icon-mixed-16-B0lFv6Hs.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./mixed-values-CZ6RGhGs.js";const X={tags:["1"],title:"Components/Checkbox/Unchecked"},s=function(){const[n,o]=d(!1);function t(a){const r=a.currentTarget.checked;console.log(r),o(r)}return e(i,{onChange:t,value:n},e(h,null,"Text"))},l=function(){const[n,o]=d(!1);function t(a){const r=a.currentTarget.checked;console.log(r),o(r)}return e(i,{...S(),onChange:t,value:n},e(h,null,"Text"))},u=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1},e(h,null,"Text"))},c=function(){const[n,o]=d(!1);function t(a){console.log(a),o(a)}return e(i,{onValueChange:t,value:n},e(h,null,"Text"))};var g,m,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(m=s.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var p,f,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,V,v;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
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
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const j=["Passive","Focused","Disabled","OnValueChange"];export{u as Disabled,l as Focused,c as OnValueChange,s as Passive,j as __namedExportsOrder,X as default};
