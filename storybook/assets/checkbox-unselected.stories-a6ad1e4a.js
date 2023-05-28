import{h as d}from"./hooks.module-6e460002.js";import{u as S}from"./use-initial-focus-83cf3b2e.js";import{T as h}from"./text-3f7573c7.js";import{C as i}from"./checkbox-ad349c84.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./icon-control-checkbox-checked-12-d0872204.js";import"./create-icon-b935921b.js";const M={parameters:{order:1},title:"Components/Checkbox/Unselected"},s=function(){const[n,o]=d(!1);function t(a){const r=a.currentTarget.checked;console.log(r),o(r)}return e(i,{onChange:t,value:n,children:e(h,{children:"Text"})})},l=function(){const[n,o]=d(!1);function t(a){const r=a.currentTarget.checked;console.log(r),o(r)}return e(i,{...S(),onChange:t,value:n,children:e(h,{children:"Text"})})},c=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1,children:e(h,{children:"Text"})})},u=function(){const[n,o]=d(!1);function t(a){console.log(a),o(a)}return e(i,{onValueChange:t,value:n,children:e(h,{children:"Text"})})};var g,m,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(C=(m=s.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var f,p,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,V,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Checkbox disabled onChange={handleChange} value={false}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(v=(V=c.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var b,k,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>;
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const P=["Passive","Focused","Disabled","OnValueChange"];export{c as Disabled,l as Focused,u as OnValueChange,s as Passive,P as __namedExportsOrder,M as default};
//# sourceMappingURL=checkbox-unselected.stories-a6ad1e4a.js.map
