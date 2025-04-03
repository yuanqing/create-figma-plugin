import{_ as n,k as I}from"./preact.module-7_OotSvk.js";import{c as O,q as f,d as w}from"./create-component-CR2aSVXZ.js";import{n as v}from"./no-op-DX6rZLP_.js";import{I as b}from"./constants-ByKZPpIE.js";const S="_tabs_14pnx_1",k="_tab_14pnx_1",F="_input_14pnx_22",M="_value_14pnx_28",P="_children_14pnx_42",u={tabs:S,tab:k,input:F,value:M,children:P},B=O(function({onChange:o=v,onCommand:i,onKeyDown:t=v,onValueChange:l=v,options:a,propagateEscapeKeyDown:r=!0,value:h,...x},z){const y=f(function(e){o(e);const s=e.currentTarget.getAttribute(b);if(s===null)throw new Error("`id` is `null`");const E=a[parseInt(s,10)].value;l(E)},[o,l,a]),A=f(function(e){t(e),e.key==="Escape"&&(r===!1&&e.stopPropagation(),e.currentTarget.blur())},[t,r]),p=a.find(function(e){return e.value===h});return n(I,null,n("div",{ref:z,class:u.tabs},a.map(function(e,s){return n("label",{key:s,class:u.tab},n("input",{...x,checked:h===e.value,class:u.input,onChange:y,onKeyDown:A,tabIndex:0,type:"radio",value:e.value,[b]:`${s}`}),n("div",{class:u.value},e.value))})),typeof p>"u"?null:n("div",{class:u.children},p.children))}),L={parameters:{fixedWidth:!0},title:"Components/Tabs"},c=function(){const[o,i]=w("foo"),t=[{children:n("div",null,"Foo"),value:"foo"},{children:n("div",null,"Bar"),value:"bar"},{children:n("div",null,"Baz"),value:"baz"}];function l(a){const r=a.currentTarget.value;console.log(r),i(r)}return n(B,{onChange:l,options:t,value:o})},d=function(){const[o,i]=w("foo"),t=[{children:n("div",null,"Foo"),value:"foo"},{children:n("div",null,"Bar"),value:"bar"},{children:n("div",null,"Baz"),value:"baz"}];function l(a){console.log(a),i(a)}return n(B,{onValueChange:l,options:t,value:o})};var g,m,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
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
}`,...(_=(m=c.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var V,T,C;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
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
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const N=["Passive","OnValueChange"];export{d as OnValueChange,c as Passive,N as __namedExportsOrder,L as default};
