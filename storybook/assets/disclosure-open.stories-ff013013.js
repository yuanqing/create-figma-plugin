import{h as m}from"./hooks.module-7c0d6ca2.js";import{u as g}from"./use-initial-focus-e560a4b5.js";import{D as f}from"./disclosure-de78f157.js";import{o as n}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./icon-caret-right-16-9b0e0621.js";import"./create-icon-cfa00594.js";const b={parameters:{fixedWidth:!0,order:2},title:"Components/Disclosure/Open"},t=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return n("div",{style:{height:"64px"},children:n(f,{onClick:r,open:e,title:"foo",children:"bar"})})},o=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return n("div",{style:{height:"64px"},children:n(f,{...g(),onClick:r,open:e,title:"foo",children:"bar"})})};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`function () {
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`function () {
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Focused"];export{t as Default,o as Focused,S as __namedExportsOrder,b as default};
//# sourceMappingURL=disclosure-open.stories-ff013013.js.map
