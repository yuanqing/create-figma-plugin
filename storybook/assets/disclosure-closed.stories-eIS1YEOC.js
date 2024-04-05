import{y as t}from"./preact.module-Cko36Lti.js";import{p as f}from"./create-component-B1Y1oDBF.js";import{u as g}from"./use-initial-focus-DfmxErEH.js";import{D as m}from"./disclosure-Tts4r4Ln.js";import"./icon-caret-right-16-C_ZDkK_q.js";import"./create-icon-D5KCgWRi.js";import"./no-op-DX6rZLP_.js";const b={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Disclosure/Closed"},n=function(){const[e,s]=f(!1);function r(l){console.log(l),s(e!==!0)}return t("div",{style:{height:"64px"}},t(m,{onClick:r,open:e,title:"foo"},"bar"))},o=function(){const[e,s]=f(!1);function r(l){console.log(l),s(e!==!0)}return t("div",{style:{height:"64px"}},t(m,{...g(),onClick:r,open:e,title:"foo"},"bar"))};var i,c,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Focused"];export{n as Default,o as Focused,S as __namedExportsOrder,b as default};
