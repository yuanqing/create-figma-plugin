import{c as I,T as f,h as C}from"./create-component-a83A1_Pu.js";import{g as O}from"./preact.module-pS-_M4k6.js";import{n as v}from"./no-op-Uu3q6ZSj.js";import{a as p}from"./constants-TQdAxsXB.js";import{u as n}from"./jsxRuntime.module-mP9ZGqev.js";const q="_tabs_61qsz_1",S="_label_61qsz_9",F="_input_61qsz_17",x="_value_61qsz_23",M="_children_61qsz_28",u={tabs:q,label:S,input:F,value:x,children:M},z=I(function({onChange:l=v,onKeyDown:t=v,onValueChange:r=v,options:a,propagateEscapeKeyDown:o=!0,value:s,...w},B){const A=f(function(e){l(e);const i=e.currentTarget.getAttribute(p);if(i===null)throw new Error("`id` is `null`");const y=a[parseInt(i,10)].value;r(y)},[l,r,a]),E=f(function(e){t(e),e.key==="Escape"&&(o===!1&&e.stopPropagation(),e.currentTarget.blur())},[t,o]),h=a.find(function(e){return e.value===s});return n(O,{children:[n("div",{ref:B,class:u.tabs,children:a.map(function(e,i){return n("label",{class:u.label,children:[n("input",{...w,checked:s===e.value,class:u.input,onChange:A,onKeyDown:E,tabIndex:0,type:"radio",value:e.value,[p]:`${i}`}),n("div",{class:u.value,children:e.value})]},i)})}),typeof h>"u"?null:n("div",{class:u.children,children:h.children})]})}),L={parameters:{fixedWidth:!0},title:"Components/Tabs"},c=function(){const[l,t]=C("foo"),r=[{children:n("div",{children:"Foo"}),value:"foo"},{children:n("div",{children:"Bar"}),value:"bar"},{children:n("div",{children:"Baz"}),value:"baz"}];function a(o){const s=o.currentTarget.value;console.log(s),t(s)}return n(z,{onChange:a,options:r,value:l})},d=function(){const[l,t]=C("foo"),r=[{children:n("div",{children:"Foo"}),value:"foo"},{children:n("div",{children:"Bar"}),value:"bar"},{children:n("div",{children:"Baz"}),value:"baz"}];function a(o){console.log(o),t(o)}return n(z,{onValueChange:a,options:r,value:l})};var g,b,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
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
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const N=["Passive","OnValueChange"];export{d as OnValueChange,c as Passive,N as __namedExportsOrder,L as default};
