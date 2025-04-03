import{_ as e,k as T}from"./preact.module-7_OotSvk.js";import{c as b,q as O,d as _}from"./create-component-CR2aSVXZ.js";import{I as D}from"./icon-chevron-right-16-CAkIHg0F.js";import{n as u}from"./no-op-DX6rZLP_.js";import"./create-icon-DvrWd2n3.js";const S="_label_1x6ey_1",E="_input_1x6ey_6",I="_title_1x6ey_17",M="_children_1x6ey_18",B="_icon_1x6ey_33",l={label:S,input:E,title:I,children:M,icon:B},x=b(function({children:t,onClick:s=u,onKeyDown:n=u,open:c,propagateEscapeKeyDown:o=!0,title:g,...C},k){const v=O(function(i){n(i),i.key==="Escape"&&(o===!1&&i.stopPropagation(),i.currentTarget.blur())},[n,o]);return e(T,null,e("label",{class:l.label},e("input",{...C,ref:k,checked:c===!0,class:l.input,onClick:s,onKeyDown:v,tabIndex:0,type:"checkbox"}),e("div",{class:l.title},e("div",{class:l.icon},e(D,null)),g)),c===!0?e("div",{class:l.children},t):null)}),P={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Disclosure"},r=function(){const[t,s]=_(!1);function n(o){console.log(o),s(t!==!0)}return e("div",{style:{height:"64px"}},e(x,{onClick:n,open:t,title:"Title"},"Body"))},a=function(){const[t,s]=_(!0);function n(o){console.log(o),s(t!==!0)}return e("div",{style:{height:"64px"}},e(x,{onClick:n,open:t,title:"Title"},"Text"))};var p,d,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event);
    setOpen(!(open === true));
  }
  const style = {
    height: '64px'
  };
  return <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="Title">
        Body
      </Disclosure>
    </div>;
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,f,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(true);
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event);
    setOpen(!(open === true));
  }
  const style = {
    height: '64px'
  };
  return <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="Title">
        Text
      </Disclosure>
    </div>;
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const R=["Closed","Open"];export{r as Closed,a as Open,R as __namedExportsOrder,P as default};
