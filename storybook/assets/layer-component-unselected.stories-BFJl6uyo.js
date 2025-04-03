import{_ as o}from"./preact.module-7_OotSvk.js";import{d as c}from"./create-component-CR2aSVXZ.js";import{u as k}from"./use-initial-focus-DTq0kKo3.js";import{I as u}from"./icon-component-16-sq7-newj.js";import{L as l}from"./layer-CXVfP_WR.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const B={parameters:{fixedWidth:!0},tags:["3"],title:"Components/Layer/Component Unselected"},s=function(){const[a,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return o(l,{component:!0,icon:o(u,null),onChange:r,value:a},"Text")},i=function(){const[a,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return o(l,{...k(),component:!0,icon:o(u,null),onChange:r,value:a},"Text")},p=function(){const[a,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return o(l,{bold:!0,component:!0,icon:o(u,null),onChange:r,value:a},"Text")},d=function(){const[a,t]=c(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return o(l,{component:!0,description:"Description",icon:o(u,null),onChange:r,value:a},"Text")},m=function(){const[a,t]=c(!1);function r(n){console.log(n),t(n)}return o(l,{component:!0,icon:o(u,null),onValueChange:r,value:a},"Text")};var g,h,V;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var f,C,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer {...useInitialFocus()} component icon={<IconComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,w,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer bold component icon={<IconComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var S,x,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component description="Description" icon={<IconComponent16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,E,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer component icon={<IconComponent16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(b=(E=m.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const P=["Passive","Focused","Bold","Description","OnValueChange"];export{p as Bold,d as Description,i as Focused,m as OnValueChange,s as Passive,P as __namedExportsOrder,B as default};
