import{h as u}from"./create-component-a83A1_Pu.js";import{u as M}from"./use-initial-focus-xmfxIugy.js";import{S as r}from"./selectable-item-sN4Kf-eQ.js";import{u as l}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./icon-menu-checkmark-checked-16-YiEcMcv9.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";const y={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Selectable Item/Selected"},c=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return l(r,{onChange:o,value:e,children:"Text"})},s=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return l(r,{...M(),onChange:o,value:e,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return l(r,{disabled:!0,onChange:e,value:!0,children:"Text"})},h=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return l(r,{bold:!0,onChange:o,value:e,children:"Text"})},i=function(){const[e,a]=u(!0);function o(t){const n=t.currentTarget.checked;console.log(n),a(n)}return l(r,{indent:!0,onChange:o,value:e,children:"Text"})},g=function(){const[e,a]=u(!0);function o(t){console.log(t),a(t)}return l(r,{onValueChange:o,value:e,children:"Text"})};var m,p,V;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
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
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const z=["Passive","Focused","Disabled","Bold","Indent","OnValueChange"];export{h as Bold,d as Disabled,s as Focused,i as Indent,g as OnValueChange,c as Passive,z as __namedExportsOrder,y as default};
