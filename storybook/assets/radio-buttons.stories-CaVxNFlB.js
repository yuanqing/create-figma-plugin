import{_ as e}from"./preact.module-7_OotSvk.js";import{c as ae,q as _,d}from"./create-component-CR2aSVXZ.js";import{u as oe}from"./use-initial-focus-DTq0kKo3.js";import{T as n}from"./text-Dw40dpV8.js";import{I as te}from"./inline-BwfxBYUT.js";import{S as re}from"./stack-DvsA5INJ.js";import{c as le}from"./create-class-name-irFPZBOU.js";import{n as z}from"./no-op-DX6rZLP_.js";import{I as S}from"./constants-ByKZPpIE.js";const ue="_radioButtons_y69qy_1",se="_disabled_y69qy_6",ce="_radioButton_y69qy_1",ie="_input_y69qy_17",de="_box_y69qy_27",he="_children_y69qy_48",i={radioButtons:ue,disabled:se,radioButton:ce,input:ie,box:de,children:he},c=ae(function({disabled:o=!1,direction:t="vertical",onChange:l=z,onCommand:s,onKeyDown:r=z,onValueChange:a=z,options:V,propagateEscapeKeyDown:w=!0,space:v,value:Q,...W},Y){const Z=_(function(u){l(u);const h=u.currentTarget.getAttribute(S);if(h===null)throw new Error("`id` is `null`");const C=V[parseInt(h,10)].value;a(C)},[l,a,V]),ee=_(function(u){r(u),u.key==="Escape"&&(w===!1&&u.stopPropagation(),u.currentTarget.blur())},[r,w]),y=V.map(function(u,h){const C=typeof u.children>"u"?`${u.value}`:u.children,B=o===!0||u.disabled===!0,ne=Q===u.value;return e("label",{key:h,class:le([i.radioButton,B===!0?i.disabled:null])},e("input",{...W,checked:ne===!0,class:i.input,disabled:B===!0,onChange:Z,onKeyDown:ee,tabIndex:0,type:"radio",value:`${u.value}`,[S]:`${h}`}),e("div",{class:i.box}),e("div",{class:i.children},C))});return e("div",{ref:Y,class:i.radioButtons},t==="vertical"?e(re,{space:typeof v>"u"?"small":v},y):e(te,{space:typeof v>"u"?"medium":v},y))}),Ce={title:"Components/Radio Buttons"},b=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function s(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(c,{onChange:s,options:l,value:o})},p=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function s(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(c,{...oe(),onChange:s,options:l,value:o})},f=function(){const o=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function t(){throw new Error("This function should not be called")}return e(c,{disabled:!0,onChange:t,options:o,value:"bar"})},g=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),disabled:!0,value:"baz"}];function s(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(c,{onChange:s,options:l,value:o})},T=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function s(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(c,{onChange:s,options:l,space:"large",value:o})},m=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function s(r){const a=r.currentTarget.value;console.log(a),t(a)}return e(c,{direction:"horizontal",onChange:s,options:l,value:o})},x=function(){const[o,t]=d("bar"),l=[{children:e(n,null,"foo"),value:"foo"},{children:e(n,null,"bar"),value:"bar"},{children:e(n,null,"baz"),value:"baz"}];function s(r){console.log(r),t(r)}return e(c,{onValueChange:s,options:l,value:o})};var E,R,I;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
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
}`,...(I=(R=b.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var O,A,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
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
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var D,H,M;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
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
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var k,J,L;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
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
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var X,F,P;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
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
}`,...(P=(F=T.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var $,N,U;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
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
  return <RadioButtons direction="horizontal" onChange={handleChange} options={options} value={value} />;
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var j,G,K;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
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
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ze=["Passive","Focused","Disabled","DisabledOption","Space","Horizontal","OnValueChange"];export{f as Disabled,g as DisabledOption,p as Focused,m as Horizontal,x as OnValueChange,b as Passive,T as Space,ze as __namedExportsOrder,Ce as default};
