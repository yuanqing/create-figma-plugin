import{h as f}from"./hooks.module-6e460002.js";import{u as C}from"./use-initial-focus-83cf3b2e.js";import{D as m}from"./disclosure-10ddc329.js";import{o as s}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./icon-caret-right-16-2550bbf1.js";import"./create-icon-b935921b.js";const b={parameters:{fixedWidth:!0,order:1},title:"Components/Disclosure/Closed"},o=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(m,{onClick:r,open:e,title:"foo",children:"bar"})})},t=function(){const[e,n]=f(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(m,{...C(),onClick:r,open:e,title:"foo",children:"bar"})})};var i,c,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=disclosure-closed.stories-ea3f23d3.js.map
