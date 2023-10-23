import{h as c}from"./create-component-b0512abd.js";import{u as b}from"./use-initial-focus-57bdde46.js";import{I as u}from"./icon-layer-frame-16-89e1c06f.js";import{L as l}from"./layer-5c2c61bd.js";import{o as a}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";const P={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Layer/Frame Selected"},s=function(){const[t,o]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{icon:a(u,{}),onChange:r,value:t,children:"Text"})},i=function(){const[t,o]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{...b(),icon:a(u,{}),onChange:r,value:t,children:"Text"})},d=function(){const[t,o]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{bold:!0,icon:a(u,{}),onChange:r,value:t,children:"Text"})},h=function(){const[t,o]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{description:"Description",icon:a(u,{}),onChange:r,value:t,children:"Text"})},g=function(){const[t,o]=c(!0);function r(n){console.log(n),o(n)}return a(l,{icon:a(u,{}),onValueChange:r,value:t,children:"Text"})};var m,p,V;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(V=(p=s.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var v,C,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var T,L,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=h.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,F,E;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(E=(F=g.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const W=["Passive","Focused","Bold","Description","OnValueChange"];export{d as Bold,h as Description,i as Focused,g as OnValueChange,s as Passive,W as __namedExportsOrder,P as default};
//# sourceMappingURL=layer-frame-selected.stories-65b266eb.js.map
