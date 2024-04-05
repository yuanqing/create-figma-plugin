import{y as o}from"./preact.module-Cko36Lti.js";import{p as m}from"./create-component-B1Y1oDBF.js";import{u as g}from"./use-initial-focus-DfmxErEH.js";import{D as f}from"./disclosure-Tts4r4Ln.js";import"./icon-caret-right-16-C_ZDkK_q.js";import"./create-icon-D5KCgWRi.js";import"./no-op-DX6rZLP_.js";const b={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Disclosure/Open"},n=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return o("div",{style:{height:"64px"}},o(f,{onClick:r,open:e,title:"foo"},"bar"))},t=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return o("div",{style:{height:"64px"}},o(f,{...g(),onClick:r,open:e,title:"foo"},"bar"))};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`function () {
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Focused"];export{n as Default,t as Focused,S as __namedExportsOrder,b as default};
