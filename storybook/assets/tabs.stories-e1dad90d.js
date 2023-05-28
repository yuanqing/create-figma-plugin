import{T as b,h}from"./hooks.module-6e460002.js";import{k as O}from"./preact.module-6cc36cb9.js";import{o as e}from"./jsxRuntime.module-893eb125.js";const F="_tabs_61qsz_1",q="_label_61qsz_9",M="_input_61qsz_17",k="_value_61qsz_23",x="_children_61qsz_28",u={tabs:F,label:q,input:M,value:k,children:x},f="data-tabs-item-id";function p({name:t,onChange:r=function(){},onValueChange:o=function(){},options:a,propagateEscapeKeyDown:l=!0,value:s,...y}){const A=b(function(n){const c=n.currentTarget.getAttribute(f),I=a[parseInt(c,10)].value;o(I,t),r(n)},[t,r,o,a]),E=b(function(n){n.key==="Escape"&&(l===!1&&n.stopPropagation(),n.currentTarget.blur())},[l]),g=a.find(function(n){return n.value===s});return e(O,{children:[e("div",{class:u.tabs,children:a.map(function(n,c){return e("label",{class:u.label,children:[e("input",{...y,checked:s===n.value,class:u.input,name:t,onChange:A,onKeyDown:E,tabIndex:0,type:"radio",value:n.value,[f]:`${c}`}),e("div",{class:u.value,children:n.value})]},c)})}),typeof g>"u"?null:e("div",{class:u.children,children:g.children})]})}const J={parameters:{fixedWidth:!0},title:"Components/Tabs"},i=function(){const[t,r]=h(null),o=[{children:e("div",{children:"Foo"}),value:"foo"},{children:e("div",{children:"Bar"}),value:"bar"},{children:e("div",{children:"Baz"}),value:"baz"}];function a(l){const s=l.currentTarget.value;console.log(s),r(s)}return e(p,{onChange:a,options:o,value:t})},d=function(){const[t,r]=h("bar"),o=[{children:e("div",{children:"Foo"}),value:"foo"},{children:e("div",{children:"Bar"}),value:"bar"},{children:e("div",{children:"Baz"}),value:"baz"}];function a(l){const s=l.currentTarget.value;console.log(s),r(s)}return e(p,{onChange:a,options:o,value:t})},v=function(){const[t,r]=h("bar"),o=[{children:e("div",{children:"Foo"}),value:"foo"},{children:e("div",{children:"Bar"}),value:"bar"},{children:e("div",{children:"Baz"}),value:"baz"}];function a(l){console.log(l),r(l)}return e(p,{onValueChange:a,options:o,value:t})};var V,T,m;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
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
}`,...(m=(T=i.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var _,C,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
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
}`,...(z=(C=d.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var B,w,S;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
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
}`,...(S=(w=v.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const L=["Unselected","Selected","OnValueChange"];export{v as OnValueChange,d as Selected,i as Unselected,L as __namedExportsOrder,J as default};
//# sourceMappingURL=tabs.stories-e1dad90d.js.map
