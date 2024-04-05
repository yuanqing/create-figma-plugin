import{y as a}from"./preact.module-Cko36Lti.js";import{p as l}from"./create-component-B1Y1oDBF.js";import{u as b}from"./use-initial-focus-DfmxErEH.js";import{I as s}from"./icon-layer-frame-16-Bjyv49bR.js";import{L as c}from"./layer-CO3p0MQy.js";import"./create-icon-D5KCgWRi.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";const B={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Layer/Frame Unselected"},u=function(){const[o,t]=l(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(c,{icon:a(s,null),onChange:r,value:o},"Text")},i=function(){const[o,t]=l(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(c,{...b(),icon:a(s,null),onChange:r,value:o},"Text")},d=function(){const[o,t]=l(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(c,{bold:!0,icon:a(s,null),onChange:r,value:o},"Text")},g=function(){const[o,t]=l(!1);function r(n){const e=n.currentTarget.checked;console.log(e),t(e)}return a(c,{description:"Description",icon:a(s,null),onChange:r,value:o},"Text")},h=function(){const[o,t]=l(!1);function r(n){console.log(n),t(n)}return a(c,{icon:a(s,null),onValueChange:r,value:o},"Text")};var m,p,V;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
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
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,S,x;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer description="Description" icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>;
}`,...(x=(S=g.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,F,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Layer icon={<IconLayerFrame16 />} onValueChange={handleValueChange} value={value}>
      Text
    </Layer>;
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const P=["Passive","Focused","Bold","Description","OnValueChange"];export{d as Bold,g as Description,i as Focused,h as OnValueChange,u as Passive,P as __namedExportsOrder,B as default};
