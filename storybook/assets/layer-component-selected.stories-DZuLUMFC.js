import{_ as o}from"./preact.module-DSfP8QVG.js";import{h as u}from"./create-component-BQOTiC4n.js";import{u as k}from"./use-initial-focus-BIYZsJcx.js";import{I as c}from"./icon-layer-component-16-O022xB2h.js";import{L as l}from"./layer-4NBLeU5R.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const B={parameters:{fixedWidth:!0},tags:["4"],title:"Components/Layer/Component Selected"},s=function(){const[t,a]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{component:!0,icon:o(c,null),onChange:r,value:t},"Text")},i=function(){const[t,a]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{...k(),component:!0,icon:o(c,null),onChange:r,value:t},"Text")},p=function(){const[t,a]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{bold:!0,component:!0,icon:o(c,null),onChange:r,value:t},"Text")},m=function(){const[t,a]=u(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{component:!0,description:"Description",icon:o(c,null),onChange:r,value:t},"Text")},d=function(){const[t,a]=u(!0);function r(n){console.log(n),a(n)}return o(l,{component:!0,icon:o(c,null),onValueChange:r,value:t},"Text")};var g,h,V;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var C,v,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,L,y;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description="Description" icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,E,b;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(b=(E=d.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const P=["Passive","Focused","Bold","Description","OnValueChange"];export{p as Bold,m as Description,i as Focused,d as OnValueChange,s as Passive,P as __namedExportsOrder,B as default};
