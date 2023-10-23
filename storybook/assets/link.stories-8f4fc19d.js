import{T as i}from"./text-72c2365d.js";import{c as C,T as N}from"./create-component-b0512abd.js";import{c as S}from"./create-class-name-71c46838.js";import{n as v}from"./no-op-cb277961.js";import{o as r}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";const D="_link_xe0wi_1",F="_fullWidth_xe0wi_15",u={link:D,fullWidth:F},a=C(function({children:s,fullWidth:T=!1,href:_,onKeyDown:c=v,propagateEscapeKeyDown:l=!0,target:b,...W},y){const w=N(function(t){c(t),t.key==="Escape"&&(l===!1&&t.stopPropagation(),t.currentTarget.blur())},[l,c]);return r("a",{...W,ref:y,class:S([u.link,T===!0?u.fullWidth:null]),href:_,onKeyDown:w,tabIndex:0,target:b,children:s})}),z={title:"Inline Text/Link"},e=function(){return r(i,{children:r(a,{href:"https://figma.com",children:"Link"})})},n=function(){return r(i,{children:r(a,{href:"https://figma.com",target:"_blank",children:"Link"})})},o=function(){return r("div",{style:{backgroundColor:"var(--figma-color-bg-brand-tertiary)"},children:r(i,{children:r(a,{fullWidth:!0,href:"https://figma.com",children:"Link"})})})};var f,m,d;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com">Link</Link>
    </Text>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,p,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com" target="_blank">
        Link
      </Link>
    </Text>;
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var g,L,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)'
  };
  return <div style={style}>
      <Text>
        <Link fullWidth href="https://figma.com">
          Link
        </Link>
      </Text>
    </div>;
}`,...(x=(L=o.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const A=["Default","NewWindow","FullWidth"];export{e as Default,o as FullWidth,n as NewWindow,A as __namedExportsOrder,z as default};
//# sourceMappingURL=link.stories-8f4fc19d.js.map
