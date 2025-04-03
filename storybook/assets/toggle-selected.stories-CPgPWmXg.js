import{_ as e}from"./preact.module-7_OotSvk.js";import{d as i}from"./create-component-CR2aSVXZ.js";import{u as E}from"./use-initial-focus-DTq0kKo3.js";import{T as g}from"./text-Dw40dpV8.js";import{T as d}from"./toggle-7vgmKQjH.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const J={tags:["2"],title:"Components/Toggle/Selected"},u=function(){const[n,a]=i(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(d,{onChange:o,value:n},e(g,null,"Text"))},l=function(){const[n,a]=i(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(d,{...E(),onChange:o,value:n},e(g,null,"Text"))},s=function(){function n(){throw new Error("This function should not be called")}return e(d,{disabled:!0,onChange:n,value:!0},e(g,null,"Text"))},c=function(){const[n,a]=i(!0);function o(t){console.log(t),a(t)}return e(d,{onValueChange:o,value:n},e(g,null,"Text"))};var h,T,m;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(m=(T=u.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var p,V,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(f=(V=l.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var C,v,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Toggle disabled onChange={handleChange} value={true}>
      <Text>Text</Text>
    </Toggle>;
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,l as Focused,c as OnValueChange,u as Passive,L as __namedExportsOrder,J as default};
