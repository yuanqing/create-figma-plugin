import{h as f}from"./hooks.module-7c0d6ca2.js";import{u as C}from"./use-initial-focus-e560a4b5.js";import{D as m}from"./disclosure-de78f157.js";import{o as s}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./icon-caret-right-16-9b0e0621.js";import"./create-icon-cfa00594.js";const b={parameters:{fixedWidth:!0,order:1},title:"Components/Disclosure/Closed"},o=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(m,{onClick:r,open:e,title:"foo",children:"bar"})})},t=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(m,{...C(),onClick:r,open:e,title:"foo",children:"bar"})})};var i,c,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=disclosure-closed.stories-e11f39be.js.map
