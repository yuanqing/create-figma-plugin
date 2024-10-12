import{_ as s}from"./preact.module-DSfP8QVG.js";import{h as f}from"./create-component-BQOTiC4n.js";import{u as g}from"./use-initial-focus-BIYZsJcx.js";import{D as m}from"./disclosure-XNGmtSAh.js";import"./icon-caret-right-16-BNhQlYa3.js";import"./create-icon-BACkom7L.js";import"./no-op-DX6rZLP_.js";const b={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Disclosure/Closed"},o=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"}},s(m,{onClick:r,open:e,title:"foo"},"bar"))},t=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"}},s(m,{...g(),onClick:r,open:e,title:"foo"},"bar"))};var i,c,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var u,p,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`function () {
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Focused"];export{o as Default,t as Focused,S as __namedExportsOrder,b as default};
