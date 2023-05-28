import{h as c}from"./hooks.module-6e460002.js";import{u as _}from"./use-initial-focus-83cf3b2e.js";import{I as l}from"./icon-layer-frame-16-6719cb4a.js";import{L as s}from"./layer-4542d067.js";import{o as n}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";const N={parameters:{fixedWidth:!0,order:1},title:"Components/Layer/Unselected"},i=function(){const[a,o]=c(!1);function t(r){const e=r.currentTarget.checked;console.log(e),o(e)}return n(s,{icon:n(l,{}),onChange:t,value:a,children:"Text"})},d=function(){const[a,o]=c(!1);function t(r){const e=r.currentTarget.checked;console.log(e),o(e)}return n(s,{..._(),icon:n(l,{}),onChange:t,value:a,children:"Text"})},g=function(){const[a,o]=c(!1);function t(r){const e=r.currentTarget.checked;console.log(e),o(e)}return n(s,{bold:!0,description:"Description",icon:n(l,{}),onChange:t,value:a,children:"Text"})},h=function(){const[a,o]=c(!1);function t(r){const e=r.currentTarget.checked;console.log(e),o(e)}return n(s,{description:"Description",icon:n(l,{}),onChange:t,value:a,children:"Text"})},p=function(){const a=Array(100).fill("Text").join(" "),[o,t]=c(!1);function r(e){const u=e.currentTarget.checked;console.log(u),t(u)}return n(s,{icon:n(l,{}),onChange:r,value:o,children:a})},m=function(){const a=Array(100).fill("Text").join(" "),o=Array(100).fill("Text").join(" "),[t,r]=c(!1);function e(u){const V=u.currentTarget.checked;console.log(V),r(V)}return n(s,{description:o,icon:n(l,{}),onChange:e,value:t,children:a})},f=function(){const a=Array(100).fill("Text").join(" "),[o,t]=c(!1);function r(e){console.log(e),t(e)}return n(s,{icon:n(l,{}),onValueChange:r,value:o,children:a})};var T,v,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var L,y,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,I;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,k,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var b,j,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var D,H,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const description = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description={description} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,X,O;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      {longText}
    </Layer>;
}`,...(O=(X=f.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};const Q=["Passive","Focused","Bold","Description","LongText","LongTextDescription","OnValueChange"];export{g as Bold,h as Description,d as Focused,p as LongText,m as LongTextDescription,f as OnValueChange,i as Passive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=layer-unselected.stories-8f52e3fd.js.map
