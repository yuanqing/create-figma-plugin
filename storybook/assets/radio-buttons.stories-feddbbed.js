import{c as G,T as C,h}from"./create-component-b0512abd.js";import{u as K}from"./use-initial-focus-57bdde46.js";import{T as n}from"./text-72c2365d.js";import{S as Q}from"./stack-a63253f7.js";import{c as W}from"./create-class-name-71c46838.js";import{n as x}from"./no-op-cb277961.js";import{I as z}from"./constants-4a59d305.js";import{o as e}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";const Y="_radioButtons_1s9z6_1",Z="_label_1s9z6_6",ee="_input_1s9z6_10",ne="_disabled_1s9z6_20",ae="_fill_1s9z6_24",oe="_border_1s9z6_39",te="_children_1s9z6_60",c={radioButtons:Y,label:Z,input:ee,disabled:ne,fill:ae,border:oe,children:te},i=G(function({disabled:l=!1,onChange:a=x,onKeyDown:s=x,onValueChange:u=x,options:o,propagateEscapeKeyDown:t=!0,space:P="small",value:$,...N},U){const j=C(function(r){a(r);const d=r.currentTarget.getAttribute(z);if(d===null)throw new Error("`id` is `null`");const m=o[parseInt(d,10)].value;u(m)},[a,u,o]),q=C(function(r){s(r),r.key==="Escape"&&(t===!1&&r.stopPropagation(),r.currentTarget.blur())},[s,t]);return e("div",{ref:U,class:c.radioButtons,children:e(Q,{space:P,children:o.map(function(r,d){const m=typeof r.children>"u"?`${r.value}`:r.children,V=l===!0||r.disabled===!0;return e("label",{class:W([c.label,V===!0?c.disabled:null]),children:[e("input",{...N,checked:$===r.value,class:c.input,disabled:V===!0,onChange:j,onKeyDown:q,tabIndex:0,type:"radio",value:`${r.value}`,[z]:`${d}`}),e("div",{class:c.fill}),e("div",{class:c.border}),e("div",{class:c.children,children:m})]},d)})})})}),ve={title:"Components/Radio Buttons"},b=function(){const[l,a]=h("bar"),s=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,value:l})},v=function(){const[l,a]=h("bar"),s=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{...K(),onChange:u,options:s,value:l})},p=function(){const l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function a(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:a,options:l,value:"bar"})},f=function(){const[l,a]=h("bar"),s=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),disabled:!0,value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,value:l})},g=function(){const[l,a]=h("bar"),s=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,space:"large",value:l})},T=function(){const[l,a]=h("bar"),s=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(o){console.log(o),a(o)}return e(i,{onValueChange:u,options:s,value:l})};var _,w,B;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons onChange={handleChange} options={options} value={value} />;
}`,...(B=(w=b.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,E,R;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons {...useInitialFocus()} onChange={handleChange} options={options} value={value} />;
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var I,O,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    value: 'baz'
  }];
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <RadioButtons disabled onChange={handleChange} options={options} value="bar" />;
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var y,D,M;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    disabled: true,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons onChange={handleChange} options={options} value={value} />;
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,H,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons onChange={handleChange} options={options} space="large" value={value} />;
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,X,k;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<RadioButtonsOption> = [{
    children: <Text>foo</Text>,
    value: 'foo'
  }, {
    children: <Text>bar</Text>,
    value: 'bar'
  }, {
    children: <Text>baz</Text>,
    value: 'baz'
  }];
  function handleChange(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons onValueChange={handleChange} options={options} value={value} />;
}`,...(k=(X=T.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};const pe=["Passive","Focused","Disabled","DisabledOption","Space","OnValueChange"];export{p as Disabled,f as DisabledOption,v as Focused,T as OnValueChange,b as Passive,g as Space,pe as __namedExportsOrder,ve as default};
//# sourceMappingURL=radio-buttons.stories-feddbbed.js.map
