import{_ as a}from"./preact.module-DSfP8QVG.js";import{h as u}from"./create-component-BQOTiC4n.js";import{u as b}from"./use-initial-focus-BIYZsJcx.js";import{I as c}from"./icon-layer-frame-16-CZRkkCfJ.js";import{L as l}from"./layer-4NBLeU5R.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const B={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Layer/Frame Selected"},s=function(){const[t,o]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{icon:a(c,null),onChange:r,value:t},"Text")},i=function(){const[t,o]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{...b(),icon:a(c,null),onChange:r,value:t},"Text")},d=function(){const[t,o]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{bold:!0,icon:a(c,null),onChange:r,value:t},"Text")},g=function(){const[t,o]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),o(e)}return a(l,{description:"Description",icon:a(c,null),onChange:r,value:t},"Text")},h=function(){const[t,o]=u(!0);function r(n){console.log(n),o(n)}return a(l,{icon:a(c,null),onValueChange:r,value:t},"Text")};var m,p,V;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
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
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=g.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,F,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const P=["Passive","Focused","Bold","Description","OnValueChange"];export{d as Bold,g as Description,i as Focused,h as OnValueChange,s as Passive,P as __namedExportsOrder,B as default};
