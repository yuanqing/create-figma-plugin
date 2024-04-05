import{y as e}from"./preact.module-Cko36Lti.js";import{p as i}from"./create-component-B1Y1oDBF.js";import{u as E}from"./use-initial-focus-DfmxErEH.js";import{T as g}from"./text-CSA6lMsS.js";import{T as d}from"./toggle-CQSWp7tN.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const J={tags:["1"],title:"Components/Toggle/Unselected"},s=function(){const[n,o]=i(!1);function t(a){const l=a.currentTarget.checked;console.log(l),o(l)}return e(d,{onChange:t,value:n},e(g,null,"Text"))},r=function(){const[n,o]=i(!1);function t(a){const l=a.currentTarget.checked;console.log(l),o(l)}return e(d,{...E(),onChange:t,value:n},e(g,null,"Text"))},u=function(){function n(){throw new Error("This function should not be called")}return e(d,{disabled:!0,onChange:n,value:!1},e(g,null,"Text"))},c=function(){const[n,o]=i(!1);function t(a){console.log(a),o(a)}return e(d,{onValueChange:t,value:n},e(g,null,"Text"))};var h,T,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var m,p,V;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(V=(p=r.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var C,v,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Toggle disabled onChange={handleChange} value={false}>
      <Text>Text</Text>
    </Toggle>;
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,b,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const L=["Passive","Focused","Disabled","OnValueChange"];export{u as Disabled,r as Focused,c as OnValueChange,s as Passive,L as __namedExportsOrder,J as default};
