import{c as y,T as f,h as C}from"./create-component-b0512abd.js";import{k as O}from"./preact.module-fa42f7d1.js";import{n as v}from"./no-op-cb277961.js";import{I as p}from"./constants-4a59d305.js";import{o as n}from"./jsxRuntime.module-632ba37d.js";const q="_tabs_61qsz_1",S="_label_61qsz_9",F="_input_61qsz_17",k="_value_61qsz_23",x="_children_61qsz_28",c={tabs:q,label:S,input:F,value:k,children:x},z=y(function({onChange:l=v,onKeyDown:t=v,onValueChange:r=v,options:a,propagateEscapeKeyDown:o=!0,value:s,...w},B){const A=f(function(e){l(e);const i=e.currentTarget.getAttribute(p);if(i===null)throw new Error("`id` is `null`");const I=a[parseInt(i,10)].value;r(I)},[l,r,a]),E=f(function(e){t(e),e.key==="Escape"&&(o===!1&&e.stopPropagation(),e.currentTarget.blur())},[t,o]),h=a.find(function(e){return e.value===s});return n(O,{children:[n("div",{ref:B,class:c.tabs,children:a.map(function(e,i){return n("label",{class:c.label,children:[n("input",{...w,checked:s===e.value,class:c.input,onChange:A,onKeyDown:E,tabIndex:0,type:"radio",value:e.value,[p]:`${i}`}),n("div",{class:c.value,children:e.value})]},i)})}),typeof h>"u"?null:n("div",{class:c.children,children:h.children})]})}),L={parameters:{fixedWidth:!0},title:"Components/Tabs"},u=function(){const[l,t]=C("foo"),r=[{children:n("div",{children:"Foo"}),value:"foo"},{children:n("div",{children:"Bar"}),value:"bar"},{children:n("div",{children:"Baz"}),value:"baz"}];function a(o){const s=o.currentTarget.value;console.log(s),t(s)}return n(z,{onChange:a,options:r,value:l})},d=function(){const[l,t]=C("foo"),r=[{children:n("div",{children:"Foo"}),value:"foo"},{children:n("div",{children:"Bar"}),value:"bar"},{children:n("div",{children:"Baz"}),value:"baz"}];function a(o){console.log(o),t(o)}return n(z,{onValueChange:a,options:r,value:l})};var b,g,m;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
}`,...(m=(g=u.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var _,V,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
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
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const N=["Passive","OnValueChange"];export{d as OnValueChange,u as Passive,N as __namedExportsOrder,L as default};
//# sourceMappingURL=tabs.stories-5ea73981.js.map
