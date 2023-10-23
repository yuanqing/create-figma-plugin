import{h as s}from"./create-component-b0512abd.js";import{u as M}from"./use-initial-focus-57bdde46.js";import{S as o}from"./selectable-item-c557a788.js";import{o as r}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./icon-menu-checkmark-checked-16-11f1d34a.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";const q={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Selectable Item/Unselected"},c=function(){const[e,t]=s(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{onChange:l,value:e,children:"Text"})},u=function(){const[e,t]=s(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{...M(),onChange:l,value:e,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onChange:e,value:!1,children:"Text"})},h=function(){const[e,t]=s(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{bold:!0,onChange:l,value:e,children:"Text"})},i=function(){const[e,t]=s(!1);function l(a){const n=a.currentTarget.checked;console.log(n),t(n)}return r(o,{indent:!0,onChange:l,value:e,children:"Text"})},g=function(){const[e,t]=s(!1);function l(a){console.log(a),t(a)}return r(o,{onValueChange:l,value:e,children:"Text"})};var m,f,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var V,v,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem {...useInitialFocus()} onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,T,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <SelectableItem disabled onChange={handleChange} value={false}>
      Text
    </SelectableItem>;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var I,w,x;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(x=(w=h.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var E,k,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,J,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onValueChange={handleValueChange} value={value}>
      Text
    </SelectableItem>;
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const y=["Passive","Focused","Disabled","Bold","Indent","OnValueChange"];export{h as Bold,d as Disabled,u as Focused,i as Indent,g as OnValueChange,c as Passive,y as __namedExportsOrder,q as default};
//# sourceMappingURL=selectable-item-unselected.stories-9d294fae.js.map
