import{h as d}from"./create-component-b0512abd.js";import{u as E}from"./use-initial-focus-57bdde46.js";import{T as g}from"./text-72c2365d.js";import{T as i}from"./toggle-d38d149f.js";import{o as e}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";const L={tags:["2"],title:"Components/Toggle/Selected"},l=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{onChange:o,value:n,children:e(g,{children:"Text"})})},u=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{...E(),onChange:o,value:n,children:e(g,{children:"Text"})})},s=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0,children:e(g,{children:"Text"})})},c=function(){const[n,a]=d(!0);function o(t){console.log(t),a(t)}return e(i,{onValueChange:o,value:n,children:e(g,{children:"Text"})})};var h,T,m;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
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
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const M=["Passive","Focused","Disabled","OnValueChange"];export{s as Disabled,u as Focused,c as OnValueChange,l as Passive,M as __namedExportsOrder,L as default};
//# sourceMappingURL=toggle-selected.stories-77ae03f0.js.map