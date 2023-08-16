import{h as u}from"./hooks.module-7c0d6ca2.js";import{u as y}from"./use-initial-focus-e560a4b5.js";import{S as l}from"./selectable-item-7f49bb5d.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./icon-menu-checkmark-checked-16-a0c745c5.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";const K={parameters:{fixedWidth:!0,order:2},title:"Components/Selectable Item/Selected"},c=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{onChange:o,value:e,children:"Text"})},s=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{...y(),onChange:o,value:e,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onChange:e,value:!0,children:"Text"})},h=function(){const e=Array(100).fill("Text").join(" "),[a,o]=u(!0);function t(n){const V=n.currentTarget.checked;console.log(V),o(V)}return r(l,{onChange:t,value:a,children:e})},i=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{bold:!0,onChange:o,value:e,children:"Text"})},g=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return r(l,{indent:!0,onChange:o,value:e,children:"Text"})},m=function(){const[e,a]=u(!0);function o(t){console.log(t),a(t)}return r(l,{onValueChange:o,value:e,children:"Text"})};var p,v,T;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,C,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem {...useInitialFocus()} onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,w,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <SelectableItem disabled onChange={handleChange} value={true}>
      Text
    </SelectableItem>;
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var x,E,k;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      {longText}
    </SelectableItem>;
}`,...(k=(E=h.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var L,H,J;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,X,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(F=(X=g.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var O,_,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onValueChange={handleValueChange} value={value}>
      Text
    </SelectableItem>;
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const N=["Passive","Focused","Disabled","LongText","Bold","Indent","OnValueChange"];export{i as Bold,d as Disabled,s as Focused,g as Indent,h as LongText,m as OnValueChange,c as Passive,N as __namedExportsOrder,K as default};
//# sourceMappingURL=selectable-item-selected.stories-2949fa0f.js.map
