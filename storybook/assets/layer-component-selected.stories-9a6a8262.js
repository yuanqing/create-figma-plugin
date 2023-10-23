import{h as c}from"./create-component-b0512abd.js";import{u as k}from"./use-initial-focus-57bdde46.js";import{I as u}from"./icon-layer-component-16-f7ee7cd7.js";import{L as l}from"./layer-5c2c61bd.js";import{o}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";const P={parameters:{fixedWidth:!0},tags:["4"],title:"Components/Layer/Component Selected"},s=function(){const[t,a]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{component:!0,icon:o(u,{}),onChange:r,value:t,children:"Text"})},i=function(){const[t,a]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{...k(),component:!0,icon:o(u,{}),onChange:r,value:t,children:"Text"})},d=function(){const[t,a]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{bold:!0,component:!0,icon:o(u,{}),onChange:r,value:t,children:"Text"})},p=function(){const[t,a]=c(!0);function r(n){const e=n.currentTarget.checked;console.log(e),a(e)}return o(l,{component:!0,description:"Description",icon:o(u,{}),onChange:r,value:t,children:"Text"})},m=function(){const[t,a]=c(!0);function r(n){console.log(n),a(n)}return o(l,{component:!0,icon:o(u,{}),onValueChange:r,value:t,children:"Text"})};var h,g,V;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(V=(g=s.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var C,v,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,L,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description="Description" icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,E,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(b=(E=m.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const W=["Passive","Focused","Bold","Description","OnValueChange"];export{d as Bold,p as Description,i as Focused,m as OnValueChange,s as Passive,W as __namedExportsOrder,P as default};
//# sourceMappingURL=layer-component-selected.stories-9a6a8262.js.map
