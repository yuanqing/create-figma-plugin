import{h as c}from"./create-component-a83A1_Pu.js";import{u as b}from"./use-initial-focus-xmfxIugy.js";import{I as s}from"./icon-layer-frame-16-sVAwYanE.js";import{L as l}from"./layer-1iS7BN44.js";import{u as a}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";const P={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Layer/Frame Unselected"},u=function(){const[o,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(l,{icon:a(s,{}),onChange:r,value:o,children:"Text"})},i=function(){const[o,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(l,{...b(),icon:a(s,{}),onChange:r,value:o,children:"Text"})},d=function(){const[o,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(l,{bold:!0,icon:a(s,{}),onChange:r,value:o,children:"Text"})},h=function(){const[o,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(l,{description:"Description",icon:a(s,{}),onChange:r,value:o,children:"Text"})},g=function(){const[o,t]=c(!1);function r(n){console.log(n),t(n)}return a(l,{icon:a(s,{}),onValueChange:r,value:o,children:"Text"})};var m,p,V;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(V=(p=u.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var f,v,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,L,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=h.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,F,E;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(E=(F=g.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const U=["Passive","Focused","Bold","Description","OnValueChange"];export{d as Bold,h as Description,i as Focused,g as OnValueChange,u as Passive,U as __namedExportsOrder,P as default};
