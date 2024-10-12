import{_ as l}from"./preact.module-DSfP8QVG.js";import{h as s}from"./create-component-BQOTiC4n.js";import{u as M}from"./use-initial-focus-BIYZsJcx.js";import{S as r}from"./selectable-item-CAUn2Pd2.js";import"./icon-menu-checkmark-checked-16-P6IVZz8A.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const j={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Selectable Item/Unselected"},u=function(){const[e,t]=s(!1);function o(a){const n=a.currentTarget.checked;console.log(n),t(n)}return l(r,{onChange:o,value:e},"Text")},c=function(){const[e,t]=s(!1);function o(a){const n=a.currentTarget.checked;console.log(n),t(n)}return l(r,{...M(),onChange:o,value:e},"Text")},d=function(){function e(){throw new Error("This function should not be called")}return l(r,{disabled:!0,onChange:e,value:!1},"Text")},h=function(){const[e,t]=s(!1);function o(a){const n=a.currentTarget.checked;console.log(n),t(n)}return l(r,{bold:!0,onChange:o,value:e},"Text")},i=function(){const[e,t]=s(!1);function o(a){const n=a.currentTarget.checked;console.log(n),t(n)}return l(r,{indent:!0,onChange:o,value:e},"Text")},g=function(){const[e,t]=s(!1);function o(a){console.log(a),t(a)}return l(r,{onValueChange:o,value:e},"Text")};var m,f,p;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(p=(f=u.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var V,v,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <SelectableItem {...useInitialFocus()} onChange={handleChange} value={value}>
      Text
    </SelectableItem>;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,T,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const q=["Passive","Focused","Disabled","Bold","Indent","OnValueChange"];export{h as Bold,d as Disabled,c as Focused,i as Indent,g as OnValueChange,u as Passive,q as __namedExportsOrder,j as default};
