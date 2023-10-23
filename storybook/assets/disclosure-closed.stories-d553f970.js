import{h as m}from"./create-component-b0512abd.js";import{u as g}from"./use-initial-focus-57bdde46.js";import{D as f}from"./disclosure-457591a5.js";import{o as s}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./icon-caret-right-16-f2a2bc99.js";import"./create-icon-59b2c318.js";import"./no-op-cb277961.js";const S={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Disclosure/Closed"},o=function(){const[e,n]=m(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(f,{onClick:r,open:e,title:"foo",children:"bar"})})},t=function(){const[e,n]=m(!1);function r(l){console.log(l),n(e!==!0)}return s("div",{style:{height:"64px"},children:s(f,{...g(),onClick:r,open:e,title:"foo",children:"bar"})})};var i,c,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function () {
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Default","Focused"];export{o as Default,t as Focused,E as __namedExportsOrder,S as default};
//# sourceMappingURL=disclosure-closed.stories-d553f970.js.map
