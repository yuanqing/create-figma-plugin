import{h as c}from"./hooks.module-6e460002.js";import{u as _}from"./use-initial-focus-83cf3b2e.js";import{I as u}from"./icon-layer-component-16-214c62a0.js";import{L as l}from"./layer-4542d067.js";import{o as n}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";const Q={parameters:{fixedWidth:!0,order:4},title:"Components/Layer/Component Selected"},i=function(){const[o,t]=c(!0);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(l,{component:!0,icon:n(u,{}),onChange:a,value:o,children:"Text"})},g=function(){const[o,t]=c(!0);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(l,{..._(),component:!0,icon:n(u,{}),onChange:a,value:o,children:"Text"})},d=function(){const[o,t]=c(!0);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(l,{bold:!0,component:!0,icon:n(u,{}),onChange:a,value:o,children:"Text"})},p=function(){const[o,t]=c(!0);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(l,{component:!0,description:"Description",icon:n(u,{}),onChange:a,value:o,children:"Text"})},h=function(){const o=Array(100).fill("Text").join(" "),[t,a]=c(!0);function r(e){const s=e.currentTarget.checked;console.log(s),a(s)}return n(l,{component:!0,icon:n(u,{}),onChange:r,value:t,children:o})},m=function(){const o=Array(100).fill("Text").join(" "),t=Array(100).fill("Text").join(" "),[a,r]=c(!0);function e(s){const T=s.currentTarget.checked;console.log(T),r(T)}return n(l,{component:!0,description:t,icon:n(u,{}),onChange:e,value:a,children:o})},V=function(){const o=Array(100).fill("Text").join(" "),[t,a]=c(!0);function r(e){console.log(e),a(e)}return n(l,{component:!0,icon:n(u,{}),onValueChange:r,value:t,children:o})};var v,C,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var L,y,x;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(y=g.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,k,b;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description="Description" icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(b=(k=p.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var j,A,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,J,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const description = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description={description} icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var X,F,O;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onValueChange={handleValueChange} value={value}>
      {longText}
    </Layer>;
}`,...(O=(F=V.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const R=["Passive","Focused","Bold","Description","LongText","LongTextDescription","OnValueChange"];export{d as Bold,p as Description,g as Focused,h as LongText,m as LongTextDescription,V as OnValueChange,i as Passive,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=layer-component-selected.stories-aa3cb576.js.map
