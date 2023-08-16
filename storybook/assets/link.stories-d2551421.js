import{T as i}from"./text-a9643cae.js";import{c as W}from"./create-class-name-71c46838.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";const y="_link_xe0wi_1",T="_fullWidth_xe0wi_15",c={link:y,fullWidth:T};function o({children:s,fullWidth:L=!1,href:x,target:a,..._}){return r("a",{..._,class:W([c.link,L===!0?c.fullWidth:null]),href:x,target:typeof a>"u"?void 0:a,children:s})}const N={title:"Inline Text/Link"},t=function(){return r(i,{children:r(o,{href:"https://figma.com",children:"Link"})})},e=function(){return r(i,{children:r(o,{href:"https://figma.com",target:"_blank",children:"Link"})})},n=function(){return r("div",{style:{backgroundColor:"var(--figma-color-bg-brand-tertiary)"},children:r(i,{children:r(o,{fullWidth:!0,href:"https://figma.com",children:"Link"})})})};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com">Link</Link>
    </Text>;
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,m,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  return <Text>
      <Link href="https://figma.com" target="_blank">
        Link
      </Link>
    </Text>;
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,k,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
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
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const S=["Default","NewWindow","FullWidth"];export{t as Default,n as FullWidth,e as NewWindow,S as __namedExportsOrder,N as default};
//# sourceMappingURL=link.stories-d2551421.js.map
