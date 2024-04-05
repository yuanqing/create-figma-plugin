import{y as r}from"./preact.module-Cko36Lti.js";import{p as u}from"./create-component-B1Y1oDBF.js";import{u as M}from"./use-initial-focus-DfmxErEH.js";import{S as l}from"./selectable-item-mwBlhBvK.js";import"./icon-menu-checkmark-checked-16-CcodR_Ny.js";import"./create-icon-D5KCgWRi.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const j={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Selectable Item/Selected"},c=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{onChange:o,value:e},"Text")},s=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{...M(),onChange:o,value:e},"Text")},d=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onChange:e,value:!0},"Text")},h=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{bold:!0,onChange:o,value:e},"Text")},i=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{indent:!0,onChange:o,value:e},"Text")},g=function(){const[e,a]=u(!0);function o(t){console.log(t),a(t)}return r(l,{onValueChange:o,value:e},"Text")};var m,p,V;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(V=(p=c.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var v,C,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem {...useInitialFocus()} onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,T,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <SelectableItem disabled onChange={handleChange} value={true}>
      Text
    </SelectableItem>;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var I,w,x;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(x=(w=h.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var E,k,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,J,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onValueChange={handleValueChange} value={value}>
      Text
    </SelectableItem>;
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const q=["Passive","Focused","Disabled","Bold","Indent","OnValueChange"];export{h as Bold,d as Disabled,s as Focused,i as Indent,g as OnValueChange,c as Passive,q as __namedExportsOrder,j as default};
