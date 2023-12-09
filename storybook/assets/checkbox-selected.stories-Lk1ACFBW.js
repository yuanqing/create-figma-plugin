import{h as d}from"./create-component-a83A1_Pu.js";import{u as S}from"./use-initial-focus-xmfxIugy.js";import{T as h}from"./text-SssoFudj.js";import{C as i}from"./checkbox-whaqbIRT.js";import{u as e}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./icon-control-checkbox-checked-12-1nQT_nAV.js";import"./create-icon-prVyFgUx.js";import"./no-op-Uu3q6ZSj.js";const P={tags:["2"],title:"Components/Checkbox/Selected"},u=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{onChange:o,value:n,children:e(h,{children:"Text"})})},c=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{...S(),onChange:o,value:n,children:e(h,{children:"Text"})})},l=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0,children:e(h,{children:"Text"})})},s=function(){const[n,a]=d(!0);function o(t){console.log(t),a(t)}return e(i,{onValueChange:o,value:n,children:e(h,{children:"Text"})})};var g,m,C;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(m=u.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var p,x,T;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var V,f,v;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Checkbox disabled onChange={handleChange} value={true}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,k,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const X=["Passive","Focused","Disabled","OnValueChange"];export{l as Disabled,c as Focused,s as OnValueChange,u as Passive,X as __namedExportsOrder,P as default};
