import{h as m}from"./create-component-a83A1_Pu.js";import{u as g}from"./use-initial-focus-xmfxIugy.js";import{D as f}from"./disclosure-Rnx3Yv7O.js";import{u as o}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./icon-caret-right-16-4OZxGOFD.js";import"./create-icon-prVyFgUx.js";import"./no-op-Uu3q6ZSj.js";const S={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Disclosure/Open"},n=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return o("div",{style:{height:"64px"},children:o(f,{onClick:r,open:e,title:"foo",children:"bar"})})},t=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return o("div",{style:{height:"64px"},children:o(f,{...g(),onClick:r,open:e,title:"foo",children:"bar"})})};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(true);
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event);
    setOpen(!(open === true));
  }
  const style = {
    height: '64px'
  };
  return <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="foo">
        bar
      </Disclosure>
    </div>;
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(true);
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event);
    setOpen(!(open === true));
  }
  const style = {
    height: '64px'
  };
  return <div style={style}>
      <Disclosure {...useInitialFocus()} onClick={handleClick} open={open} title="foo">
        bar
      </Disclosure>
    </div>;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Default","Focused"];export{n as Default,t as Focused,E as __namedExportsOrder,S as default};
