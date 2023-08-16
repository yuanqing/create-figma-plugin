import{h as c}from"./hooks.module-7c0d6ca2.js";import{u as y}from"./use-initial-focus-e560a4b5.js";import{S as o}from"./selectable-item-7f49bb5d.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./icon-menu-checkmark-checked-16-a0c745c5.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";const G={parameters:{fixedWidth:!0,order:1},title:"Components/Selectable Item/Unselected"},s=function(){const[e,t]=c(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{onChange:l,value:e,children:"Text"})},u=function(){const[e,t]=c(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{...y(),onChange:l,value:e,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onChange:e,value:!1,children:"Text"})},h=function(){const e=Array(100).fill("Text").join(" "),[t,l]=c(!1);function a(n){const f=n.currentTarget.checked;console.log(f),l(f)}return r(o,{onChange:a,value:t,children:e})},i=function(){const[e,t]=c(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{bold:!0,onChange:l,value:e,children:"Text"})},g=function(){const[e,t]=c(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{indent:!0,onChange:l,value:e,children:"Text"})},m=function(){const[e,t]=c(!1);function l(a){console.log(a),t(a)}return r(o,{onValueChange:l,value:e,children:"Text"})};var V,p,v;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var T,C,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem {...useInitialFocus()} onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,w,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <SelectableItem disabled onChange={handleChange} value={false}>
      Text
    </SelectableItem>;
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var x,E,k;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      {longText}
    </SelectableItem>;
}`,...(k=(E=h.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var L,H,J;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,X,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(F=(X=g.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var O,_,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onValueChange={handleValueChange} value={value}>
      Text
    </SelectableItem>;
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const K=["Passive","Focused","Disabled","LongText","Bold","Indent","OnValueChange"];export{i as Bold,d as Disabled,u as Focused,g as Indent,h as LongText,m as OnValueChange,s as Passive,K as __namedExportsOrder,G as default};
//# sourceMappingURL=selectable-item-unselected.stories-8eeff3b0.js.map
