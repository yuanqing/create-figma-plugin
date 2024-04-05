import{y as n,g as I}from"./preact.module-Cko36Lti.js";import{c as O,x as p,p as C}from"./create-component-B1Y1oDBF.js";import{n as v}from"./no-op-DX6rZLP_.js";import{a as f}from"./constants-sCBnAk_k.js";const q="_tabs_61qsz_1",S="_label_61qsz_9",x="_input_61qsz_17",F="_value_61qsz_23",k="_children_61qsz_28",i={tabs:q,label:S,input:x,value:F,children:k},z=O(function({onChange:o=v,onKeyDown:t=v,onValueChange:r=v,options:a,propagateEscapeKeyDown:l=!0,value:s,...w},B){const y=p(function(e){o(e);const u=e.currentTarget.getAttribute(f);if(u===null)throw new Error("`id` is `null`");const E=a[parseInt(u,10)].value;r(E)},[o,r,a]),A=p(function(e){t(e),e.key==="Escape"&&(l===!1&&e.stopPropagation(),e.currentTarget.blur())},[t,l]),h=a.find(function(e){return e.value===s});return n(I,null,n("div",{ref:B,class:i.tabs},a.map(function(e,u){return n("label",{key:u,class:i.label},n("input",{...w,checked:s===e.value,class:i.input,onChange:y,onKeyDown:A,tabIndex:0,type:"radio",value:e.value,[f]:`${u}`}),n("div",{class:i.value},e.value))})),typeof h>"u"?null:n("div",{class:i.children},h.children))}),J={parameters:{fixedWidth:!0},title:"Components/Tabs"},c=function(){const[o,t]=C("foo"),r=[{children:n("div",null,"Foo"),value:"foo"},{children:n("div",null,"Bar"),value:"bar"},{children:n("div",null,"Baz"),value:"baz"}];function a(l){const s=l.currentTarget.value;console.log(s),t(s)}return n(z,{onChange:a,options:r,value:o})},d=function(){const[o,t]=C("foo"),r=[{children:n("div",null,"Foo"),value:"foo"},{children:n("div",null,"Bar"),value:"bar"},{children:n("div",null,"Baz"),value:"baz"}];function a(l){console.log(l),t(l)}return n(z,{onValueChange:a,options:r,value:o})};var g,b,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TabsOption> = [{
    children: <div>Foo</div>,
    value: 'foo'
  }, {
    children: <div>Bar</div>,
    value: 'bar'
  }, {
    children: <div>Baz</div>,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Tabs onChange={handleChange} options={options} value={value} />;
}`,...(m=(b=c.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var _,V,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TabsOption> = [{
    children: <div>Foo</div>,
    value: 'foo'
  }, {
    children: <div>Bar</div>,
    value: 'bar'
  }, {
    children: <div>Baz</div>,
    value: 'baz'
  }];
  function handleValueChange(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Tabs onValueChange={handleValueChange} options={options} value={value} />;
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const L=["Passive","OnValueChange"];export{d as OnValueChange,c as Passive,L as __namedExportsOrder,J as default};
