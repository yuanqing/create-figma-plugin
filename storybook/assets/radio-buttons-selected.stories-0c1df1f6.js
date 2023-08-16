import{h as c}from"./hooks.module-7c0d6ca2.js";import{u as P}from"./use-initial-focus-e560a4b5.js";import{T as n}from"./text-a9643cae.js";import{R as s}from"./radio-buttons-b11ff2d1.js";import{o as e}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./create-class-name-71c46838.js";import"./stack-fc4a8f8f.js";const Y={parameters:{order:2},title:"Components/Radio Buttons/Selected"},i=function(){const[o,t]=c("bar"),l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:l,value:o})},d=function(){const[o,t]=c("bar"),l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(s,{...P(),onChange:u,options:l,value:o})},h=function(){const o=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function t(){throw new Error("This function should not be called")}return e(s,{disabled:!0,onChange:t,options:o,value:"bar"})},v=function(){const[o,t]=c("bar"),l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),disabled:!0,value:"baz"}];function u(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:l,value:o})},p=function(){const[o,t]=c(!1),l=[{children:e(n,{children:"foo"}),value:!0},{children:e(n,{children:"bar"}),value:!1}];function u(r){const a=r.currentTarget.value;console.log(a),t(a==="true")}return e(s,{onChange:u,options:l,value:o})},g=function(){const[o,t]=c(2),l=[{children:e(n,{children:"foo"}),value:1},{children:e(n,{children:"bar"}),value:2},{children:e(n,{children:"baz"}),value:3}];function u(r){const a=r.currentTarget.value;console.log(a),t(parseInt(a,10))}return e(s,{onChange:u,options:l,value:o})},b=function(){const[o,t]=c("bar"),l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:l,space:"large",value:o})},f=function(){const[o,t]=c("bar"),l=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(r){console.log(r),t(r)}return e(s,{onValueChange:u,options:l,value:o})};var T,m,V;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
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
}`,...(V=(m=i.parameters)==null?void 0:m.docs)==null?void 0:V.source}}};var x,C,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
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
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var z,S,B;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
}`,...(B=(S=h.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,E,O;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
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
}`,...(O=(E=v.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var I,y,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  const options: Array<RadioButtonsOption<boolean>> = [{
    children: <Text>foo</Text>,
    value: true
  }, {
    children: <Text>bar</Text>,
    value: false
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue === 'true' ? true : false);
  }
  return <RadioButtons onChange={handleChange} options={options} value={value} />;
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var H,J,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<number>(2);
  const options: Array<RadioButtonsOption<number>> = [{
    children: <Text>foo</Text>,
    value: 1
  }, {
    children: <Text>bar</Text>,
    value: 2
  }, {
    children: <Text>baz</Text>,
    value: 3
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(parseInt(newValue, 10));
  }
  return <RadioButtons onChange={handleChange} options={options} value={value} />;
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var M,X,D;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
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
}`,...(D=(X=b.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var F,_,N;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
}`,...(N=(_=f.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Z=["Passive","Focused","Disabled","DisabledOption","BooleanValue","NumberValue","Space","OnValueChange"];export{p as BooleanValue,h as Disabled,v as DisabledOption,d as Focused,g as NumberValue,f as OnValueChange,i as Passive,b as Space,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=radio-buttons-selected.stories-0c1df1f6.js.map
