import{_ as r,k as D}from"./preact.module-7_OotSvk.js";import{d as m}from"./create-component-CR2aSVXZ.js";import{u as P}from"./use-initial-focus-DTq0kKo3.js";import{V as k}from"./vertical-space-BEQFZ7ek.js";import{T as j}from"./textbox-numeric-BUk6kP9Y.js";import{R as o}from"./range-slider-CzuUbhUK.js";import"./create-class-name-irFPZBOU.js";import"./textbox.module-BTiVByXg.js";import"./raw-textbox-numeric-C4UJXsTF.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-CZ6RGhGs.js";const te={parameters:{fixedWidth:!0},title:"Components/Range Slider"},l=function(){const[n,a]=m("50");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{maximum:100,minimum:0,onInput:t,value:n})},s=function(){const[n,a]=m("50");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{...P(),maximum:100,minimum:0,onInput:t,value:n})},i=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,maximum:100,minimum:0,onInput:n,value:"50"})},c=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{increment:10,maximum:100,minimum:-100,onInput:t,value:n})},p=function(){const[n,a]=m("50");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{increment:10,maximum:100,minimum:0,onInput:t,value:n})},d=function(){const[n,a]=m("50");function t(e){console.log(e),a(e)}function u(e){console.log(e)}return r(o,{maximum:100,minimum:0,onNumericValueInput:u,onValueInput:t,value:n})},g=function(){const[n,a]=m("50");function t(W){const v=W.currentTarget.value;console.log(v),a(v)}const u=0,e=100;return r(D,null,r(o,{maximum:e,minimum:u,onInput:t,value:n}),r(k,{space:"small"}),r(j,{maximum:e,minimum:u,onInput:t,value:n}))};var V,I,f;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('50');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var h,S,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('50');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider {...useInitialFocus()} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,T,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <RangeSlider disabled maximum={100} minimum={0} onInput={handleInput} value="50" />;
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var N,b,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider increment={10} maximum={100} minimum={-100} onInput={handleInput} value={value} />;
}`,...(R=(b=c.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var M,F,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('50');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider increment={10} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,X;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('50');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: number) {
    console.log(newNumericValue);
  }
  return <RangeSlider maximum={100} minimum={0} onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(X=(L=d.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var _,C,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('50');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const minimum = 0;
  const maximum = 100;
  return <Fragment>
      <RangeSlider maximum={maximum} minimum={minimum} onInput={handleInput} value={value} />
      <VerticalSpace space="small" />
      <TextboxNumeric maximum={maximum} minimum={minimum} onInput={handleInput} value={value} />
    </Fragment>;
}`,...(O=(C=g.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const ue=["Passive","Focused","Disabled","NegativeMinimum","CustomIncrement","OnValueInput","WithTextboxNumeric"];export{p as CustomIncrement,i as Disabled,s as Focused,c as NegativeMinimum,d as OnValueInput,l as Passive,g as WithTextboxNumeric,ue as __namedExportsOrder,te as default};
