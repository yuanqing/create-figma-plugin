import{h as c}from"./hooks.module-6e460002.js";import{u as _}from"./use-initial-focus-83cf3b2e.js";import{I as l}from"./icon-layer-frame-16-6719cb4a.js";import{L as u}from"./layer-4542d067.js";import{o as n}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";const Q={parameters:{fixedWidth:!0,order:2},title:"Components/Layer/Selected"},i=function(){const[t,a]=c(!0);function o(r){const e=r.currentTarget.checked;console.log(e),a(e)}return n(u,{icon:n(l,{}),onChange:o,value:t,children:"Text"})},d=function(){const[t,a]=c(!0);function o(r){const e=r.currentTarget.checked;console.log(e),a(e)}return n(u,{..._(),icon:n(l,{}),onChange:o,value:t,children:"Text"})},g=function(){const[t,a]=c(!0);function o(r){const e=r.currentTarget.checked;console.log(e),a(e)}return n(u,{bold:!0,description:"Description",icon:n(l,{}),onChange:o,value:t,children:"Text"})},h=function(){const[t,a]=c(!0);function o(r){const e=r.currentTarget.checked;console.log(e),a(e)}return n(u,{description:"Description",icon:n(l,{}),onChange:o,value:t,children:"Text"})},p=function(){const t=Array(100).fill("Text").join(" "),[a,o]=c(!0);function r(e){const s=e.currentTarget.checked;console.log(s),o(s)}return n(u,{icon:n(l,{}),onChange:r,value:a,children:t})},m=function(){const t=Array(100).fill("Text").join(" "),a=Array(100).fill("Text").join(" "),[o,r]=c(!0);function e(s){const T=s.currentTarget.checked;console.log(T),r(T)}return n(u,{description:a,icon:n(l,{}),onChange:e,value:o,children:t})},V=function(){const t=Array(100).fill("Text").join(" "),[a,o]=c(!0);function r(e){console.log(e),o(e)}return n(u,{icon:n(l,{}),onValueChange:r,value:a,children:t})};var v,f,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var L,y,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,I;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,k,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(true);
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
  const [value, setValue] = useState<boolean>(true);
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
  const [value, setValue] = useState<boolean>(true);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description={description} icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      {longText}
    </Layer>;
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,X,O;V.parameters={...V.parameters,docs:{...(M=V.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  const [value, setValue] = useState<boolean>(true);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      {longText}
    </Layer>;
}`,...(O=(X=V.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};const R=["Passive","Focused","Bold","Description","LongText","LongTextDescription","OnValueChange"];export{g as Bold,h as Description,d as Focused,p as LongText,m as LongTextDescription,V as OnValueChange,i as Passive,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=layer-selected.stories-fb664780.js.map
