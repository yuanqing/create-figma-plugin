import{h as i}from"./hooks.module-6e460002.js";import{u as E}from"./use-initial-focus-83cf3b2e.js";import{T as g}from"./text-3f7573c7.js";import{T as d}from"./toggle-199fb635.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";const J={parameters:{order:2},title:"Components/Toggle/Selected"},l=function(){const[n,a]=i(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(d,{onChange:o,value:n,children:e(g,{children:"Text"})})},u=function(){const[n,a]=i(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(d,{...E(),onChange:o,value:n,children:e(g,{children:"Text"})})},s=function(){function n(){throw new Error("This function should not be called")}return e(d,{disabled:!0,onChange:n,value:!0,children:e(g,{children:"Text"})})},c=function(){const[n,a]=i(!0);function o(t){console.log(t),a(t)}return e(d,{onValueChange:o,value:n,children:e(g,{children:"Text"})})};var h,T,m;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(m=(T=l.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var p,V,f;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(f=(V=u.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var C,v,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
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
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,u as Focused,c as OnValueChange,l as Passive,L as __namedExportsOrder,J as default};
//# sourceMappingURL=toggle-selected.stories-ab401c61.js.map
