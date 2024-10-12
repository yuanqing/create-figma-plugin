import{_ as t}from"./preact.module-DSfP8QVG.js";import{T as i}from"./text-akKGtnT_.js";import{c as C,q as N}from"./create-component-BQOTiC4n.js";import{c as S}from"./create-class-name-irFPZBOU.js";import{n as v}from"./no-op-DX6rZLP_.js";const D="_link_xe0wi_1",F="_fullWidth_xe0wi_15",u={link:D,fullWidth:F},a=C(function({children:s,fullWidth:_=!1,href:b,onKeyDown:l=v,propagateEscapeKeyDown:c=!0,target:T,...W},y){const w=N(function(r){l(r),r.key==="Escape"&&(c===!1&&r.stopPropagation(),r.currentTarget.blur())},[c,l]);return t("a",{...W,ref:y,class:S([u.link,_===!0?u.fullWidth:null]),href:b,onKeyDown:w,tabIndex:0,target:T},s)}),j={title:"Inline Text/Link"},n=function(){return t(i,null,t(a,{href:"https://figma.com"},"Link"))},e=function(){return t(i,null,t(a,{href:"https://figma.com",target:"_blank"},"Link"))},o=function(){return t("div",{style:{backgroundColor:"var(--figma-color-bg-brand-tertiary)"}},t(i,null,t(a,{fullWidth:!0,href:"https://figma.com"},"Link")))};var f,m,d;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com">Link</Link>
    </Text>;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,k,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com" target="_blank">
        Link
      </Link>
    </Text>;
}`,...(h=(k=e.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,L,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
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
}`,...(x=(L=o.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const z=["Default","NewWindow","FullWidth"];export{n as Default,o as FullWidth,e as NewWindow,z as __namedExportsOrder,j as default};
