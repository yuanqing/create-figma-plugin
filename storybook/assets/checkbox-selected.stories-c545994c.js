import{h as d}from"./hooks.module-6e460002.js";import{u as S}from"./use-initial-focus-83cf3b2e.js";import{T as h}from"./text-3f7573c7.js";import{C as i}from"./checkbox-ad349c84.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./icon-control-checkbox-checked-12-d0872204.js";import"./create-icon-b935921b.js";const M={parameters:{order:2},title:"Components/Checkbox/Selected"},u=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{onChange:o,value:n,children:e(h,{children:"Text"})})},c=function(){const[n,a]=d(!0);function o(t){const r=t.currentTarget.checked;console.log(r),a(r)}return e(i,{...S(),onChange:o,value:n,children:e(h,{children:"Text"})})},l=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!0,children:e(h,{children:"Text"})})},s=function(){const[n,a]=d(!0);function o(t){console.log(t),a(t)}return e(i,{onValueChange:o,value:n,children:e(h,{children:"Text"})})};var g,m,C;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
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
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const P=["Passive","Focused","Disabled","OnValueChange"];export{l as Disabled,c as Focused,s as OnValueChange,u as Passive,P as __namedExportsOrder,M as default};
//# sourceMappingURL=checkbox-selected.stories-c545994c.js.map
