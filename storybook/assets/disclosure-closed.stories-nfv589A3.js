import{h as m}from"./create-component-a83A1_Pu.js";import{u as g}from"./use-initial-focus-xmfxIugy.js";import{D as f}from"./disclosure-Rnx3Yv7O.js";import{u as t}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./icon-caret-right-16-4OZxGOFD.js";import"./create-icon-prVyFgUx.js";import"./no-op-Uu3q6ZSj.js";const S={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Disclosure/Closed"},n=function(){const[e,s]=m(!1);function r(l){console.log(l),s(e!==!0)}return t("div",{style:{height:"64px"},children:t(f,{onClick:r,open:e,title:"foo",children:"bar"})})},o=function(){const[e,s]=m(!1);function r(l){console.log(l),s(e!==!0)}return t("div",{style:{height:"64px"},children:t(f,{...g(),onClick:r,open:e,title:"foo",children:"bar"})})};var i,c,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
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
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Default","Focused"];export{n as Default,o as Focused,E as __namedExportsOrder,S as default};
