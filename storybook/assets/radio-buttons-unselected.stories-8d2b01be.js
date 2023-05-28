import{h as c}from"./hooks.module-6e460002.js";import{u as P}from"./use-initial-focus-83cf3b2e.js";import{T as n}from"./text-3f7573c7.js";import{R as s}from"./radio-buttons-144906ad.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./stack-75d3944d.js";const Y={parameters:{order:1},title:"Components/Radio Buttons/Unselected"},i=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(l){const a=l.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:r,value:o})},d=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(l){const a=l.currentTarget.value;console.log(a),t(a)}return e(s,{...P(),onChange:u,options:r,value:o})},h=function(){const o=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function t(){throw new Error("This function should not be called")}return e(s,{disabled:!0,onChange:t,options:o,value:null})},v=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),disabled:!0,value:"baz"}];function u(l){const a=l.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:r,value:o})},p=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:!0},{children:e(n,{children:"bar"}),value:!1}];function u(l){const a=l.currentTarget.value;console.log(a),t(a==="true")}return e(s,{onChange:u,options:r,value:o})},g=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:1},{children:e(n,{children:"bar"}),value:2},{children:e(n,{children:"baz"}),value:3}];function u(l){const a=l.currentTarget.value;console.log(a),t(parseInt(a,10))}return e(s,{onChange:u,options:r,value:o})},T=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(l){const a=l.currentTarget.value;console.log(a),t(a)}return e(s,{onChange:u,options:r,space:"large",value:o})},f=function(){const[o,t]=c(null),r=[{children:e(n,{children:"foo"}),value:"foo"},{children:e(n,{children:"bar"}),value:"bar"},{children:e(n,{children:"baz"}),value:"baz"}];function u(l){console.log(l),t(l)}return e(s,{onValueChange:u,options:r,value:o})};var b,m,V;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
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
  const [value, setValue] = useState<null | string>(null);
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
  return <RadioButtons disabled onChange={handleChange} options={options} value={null} />;
}`,...(B=(S=h.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,E,O;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
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
  const [value, setValue] = useState<null | boolean>(null);
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
  const [value, setValue] = useState<null | number>(null);
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
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var M,X,D;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
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
}`,...(D=(X=T.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var F,_,N;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
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
  function handleChange(newValue: null | string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <RadioButtons onValueChange={handleChange} options={options} value={value} />;
}`,...(N=(_=f.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Z=["Passive","Focused","Disabled","DisabledOption","BooleanValue","NumberValue","Space","OnValueChange"];export{p as BooleanValue,h as Disabled,v as DisabledOption,d as Focused,g as NumberValue,f as OnValueChange,i as Passive,T as Space,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=radio-buttons-unselected.stories-8d2b01be.js.map
