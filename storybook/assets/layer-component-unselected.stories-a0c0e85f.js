import{h as c}from"./hooks.module-7c0d6ca2.js";import{u as _}from"./use-initial-focus-e560a4b5.js";import{I as l}from"./icon-layer-component-16-e3d34f7b.js";import{L as s}from"./layer-f1dae559.js";import{o as n}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";const N={parameters:{fixedWidth:!0,order:3},title:"Components/Layer/Component Unselected"},i=function(){const[o,t]=c(!1);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(s,{component:!0,icon:n(l,{}),onChange:a,value:o,children:"Text"})},g=function(){const[o,t]=c(!1);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(s,{..._(),component:!0,icon:n(l,{}),onChange:a,value:o,children:"Text"})},d=function(){const[o,t]=c(!1);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(s,{bold:!0,component:!0,icon:n(l,{}),onChange:a,value:o,children:"Text"})},p=function(){const[o,t]=c(!1);function a(r){const e=r.currentTarget.checked;console.log(e),t(e)}return n(s,{component:!0,description:"Description",icon:n(l,{}),onChange:a,value:o,children:"Text"})},h=function(){const o=Array(100).fill("Text").join(" "),[t,a]=c(!1);function r(e){const u=e.currentTarget.checked;console.log(u),a(u)}return n(s,{component:!0,icon:n(l,{}),onChange:r,value:t,children:o})},m=function(){const o=Array(100).fill("Text").join(" "),t=Array(100).fill("Text").join(" "),[a,r]=c(!1);function e(u){const V=u.currentTarget.checked;console.log(V),r(V)}return n(s,{component:!0,description:t,icon:n(l,{}),onChange:e,value:a,children:o})},f=function(){const o=Array(100).fill("Text").join(" "),[t,a]=c(!1);function r(e){console.log(e),a(e)}return n(s,{component:!0,icon:n(l,{}),onValueChange:r,value:t,children:o})};var T,v,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var L,y,x;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(y=g.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold component icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,k,b;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
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
  const [value, setValue] = useState<boolean>(false);
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
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description={description} icon={<IconLayerComponent16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var X,F,O;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconLayerComponent16 />} onValueChange={handleValueChange} value={value}>
      {longText}
    </Layer>;
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Q=["Passive","Focused","Bold","Description","LongText","LongTextDescription","OnValueChange"];export{d as Bold,p as Description,g as Focused,h as LongText,m as LongTextDescription,f as OnValueChange,i as Passive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=layer-component-unselected.stories-a0c0e85f.js.map
