import{h as m}from"./create-component-b0512abd.js";import{u as g}from"./use-initial-focus-57bdde46.js";import{D as f}from"./disclosure-457591a5.js";import{o as n}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./icon-caret-right-16-f2a2bc99.js";import"./create-icon-59b2c318.js";import"./no-op-cb277961.js";const S={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Disclosure/Open"},t=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return n("div",{style:{height:"64px"},children:n(f,{onClick:r,open:e,title:"foo",children:"bar"})})},o=function(){const[e,s]=m(!0);function r(i){console.log(i),s(e!==!0)}return n("div",{style:{height:"64px"},children:n(f,{...g(),onClick:r,open:e,title:"foo",children:"bar"})})};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`function () {
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Default","Focused"];export{t as Default,o as Focused,E as __namedExportsOrder,S as default};
//# sourceMappingURL=disclosure-open.stories-5e163502.js.map
