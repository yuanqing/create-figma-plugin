import{y as r,$ as j}from"./preact.module-Cko36Lti.js";import{c as q}from"./create-component-B1Y1oDBF.js";const w="_extraSmall_1u924_1",A="_medium_1u924_4",B="_large_1u924_7",F="_small_1u924_10",G="_extraLarge_1u924_13",H="_child_1u924_17",d={extraSmall:w,medium:A,large:B,small:F,extraLarge:G,child:H},a=q(function({children:e,space:c,...D},M){return r("div",{...D,ref:M,class:typeof c>"u"?void 0:d[c]},j(e).map(function(O,$){return r("div",{key:$,class:d.child},O)}))}),N={title:"Layout/Inline"},n=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,null,r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))},t=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,{space:"extraSmall"},r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))},o=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,{space:"small"},r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))},s=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,{space:"medium"},r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))},i=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,{space:"large"},r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))},l=function(){const e={backgroundColor:"var(--figma-color-bg-brand-tertiary)"};return r(a,{space:"extraLarge"},r("div",{style:e},"foo"),r("div",{style:e},"bar"),r("div",{style:e},"baz"))};var u,m,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline>
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var y,b,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var p,f,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var _,x,I;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,C,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var L,E,h;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <Inline space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>;
}`,...(h=(E=l.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};const P=["Default","ExtraSmallSpace","SmallSpace","MediumSpace","LargeSpace","ExtraLargeSpace"];export{n as Default,l as ExtraLargeSpace,t as ExtraSmallSpace,i as LargeSpace,s as MediumSpace,o as SmallSpace,P as __namedExportsOrder,N as default};
