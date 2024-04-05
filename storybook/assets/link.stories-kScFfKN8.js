import{y as t}from"./preact.module-Cko36Lti.js";import{T as i}from"./text-CSA6lMsS.js";import{c as C,x as N}from"./create-component-B1Y1oDBF.js";import{c as S}from"./create-class-name-irFPZBOU.js";import{n as v}from"./no-op-DX6rZLP_.js";const D="_link_xe0wi_1",F="_fullWidth_xe0wi_15",u={link:D,fullWidth:F},a=C(function({children:s,fullWidth:_=!1,href:b,onKeyDown:l=v,propagateEscapeKeyDown:c=!0,target:y,...T},W){const w=N(function(n){l(n),n.key==="Escape"&&(c===!1&&n.stopPropagation(),n.currentTarget.blur())},[c,l]);return t("a",{...T,ref:W,class:S([u.link,_===!0?u.fullWidth:null]),href:b,onKeyDown:w,tabIndex:0,target:y},s)}),q={title:"Inline Text/Link"},r=function(){return t(i,null,t(a,{href:"https://figma.com"},"Link"))},e=function(){return t(i,null,t(a,{href:"https://figma.com",target:"_blank"},"Link"))},o=function(){return t("div",{style:{backgroundColor:"var(--figma-color-bg-brand-tertiary)"}},t(i,null,t(a,{fullWidth:!0,href:"https://figma.com"},"Link")))};var f,m,d;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com">Link</Link>
    </Text>;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,k,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com" target="_blank">
        Link
      </Link>
    </Text>;
}`,...(h=(k=e.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,x,L;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
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
}`,...(L=(x=o.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const z=["Default","NewWindow","FullWidth"];export{r as Default,o as FullWidth,e as NewWindow,z as __namedExportsOrder,q as default};
