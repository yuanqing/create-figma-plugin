import{y as e}from"./preact.module-Cko36Lti.js";import{c as G,x as C,p as h}from"./create-component-B1Y1oDBF.js";import{u as K}from"./use-initial-focus-DfmxErEH.js";import{T as n}from"./text-CSA6lMsS.js";import{S as Q}from"./stack-C3JVIeO_.js";import{c as W}from"./create-class-name-irFPZBOU.js";import{n as x}from"./no-op-DX6rZLP_.js";import{a as z}from"./constants-sCBnAk_k.js";const Y="_radioButtons_1s9z6_1",Z="_label_1s9z6_6",ee="_input_1s9z6_10",ne="_disabled_1s9z6_20",ae="_fill_1s9z6_24",oe="_border_1s9z6_39",te="_children_1s9z6_60",c={radioButtons:Y,label:Z,input:ee,disabled:ne,fill:ae,border:oe,children:te},i=G(function({disabled:r=!1,onChange:a=x,onKeyDown:s=x,onValueChange:u=x,options:o,propagateEscapeKeyDown:t=!0,space:P="small",value:$,...N},U){const j=C(function(l){a(l);const d=l.currentTarget.getAttribute(z);if(d===null)throw new Error("`id` is `null`");const m=o[parseInt(d,10)].value;u(m)},[a,u,o]),q=C(function(l){s(l),l.key==="Escape"&&(t===!1&&l.stopPropagation(),l.currentTarget.blur())},[s,t]);return e("div",{ref:U,class:c.radioButtons},e(Q,{space:P},o.map(function(l,d){const m=typeof l.children>"u"?`${l.value}`:l.children,V=r===!0||l.disabled===!0;return e("label",{key:d,class:W([c.label,V===!0?c.disabled:null])},e("input",{...N,checked:$===l.value,class:c.input,disabled:V===!0,onChange:j,onKeyDown:q,tabIndex:0,type:"radio",value:`${l.value}`,[z]:`${d}`}),e("div",{class:c.fill}),e("div",{class:c.border}),e("div",{class:c.children},m))})))}),be={title:"Components/Radio Buttons"},b=function(){const[r,a]=h("bar"),s=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,value:r})},v=function(){const[r,a]=h("bar"),s=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{...K(),onChange:u,options:s,value:r})},p=function(){const r=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function a(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:a,options:r,value:"bar"})},f=function(){const[r,a]=h("bar"),s=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),disabled:!0,value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,value:r})},g=function(){const[r,a]=h("bar"),s=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function u(o){const t=o.currentTarget.value;console.log(t),a(t)}return e(i,{onChange:u,options:s,space:"large",value:r})},T=function(){const[r,a]=h("bar"),s=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function u(o){console.log(o),a(o)}return e(i,{onValueChange:u,options:s,value:r})};var _,w,B;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
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
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var y,O,A;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var I,D,M;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
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
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,F,H;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
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
}`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,X;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
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
}`,...(X=(L=T.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};const ve=["Passive","Focused","Disabled","DisabledOption","Space","OnValueChange"];export{p as Disabled,f as DisabledOption,v as Focused,T as OnValueChange,b as Passive,g as Space,ve as __namedExportsOrder,be as default};
