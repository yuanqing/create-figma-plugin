import{g as C}from"./preact.module-pS-_M4k6.js";import{h as m}from"./create-component-a83A1_Pu.js";import{u as O}from"./use-initial-focus-xmfxIugy.js";import{V as W}from"./vertical-space-UCQOgkM_.js";import{T as _}from"./textbox-numeric-PxkjMYjC.js";import{R as o}from"./range-slider-njcGadeh.js";import{u as r}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-class-name-gq91Tlk7.js";import"./textbox.module-SUUSsoq6.js";import"./raw-textbox-numeric-P_SZCsOz.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./compute-next-value-v04i_0LO.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";import"./mixed-values-kiIAV0Ly.js";const $={parameters:{fixedWidth:!0},title:"Components/Range Slider"},l=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{maximum:100,minimum:0,onInput:t,value:n})},s=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{...O(),maximum:100,minimum:0,onInput:t,value:n})},i=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,maximum:100,minimum:0,onInput:n,value:"0"})},c=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{increment:10,maximum:100,minimum:0,onInput:t,value:n})},p=function(){const[n,a]=m("0");function t(e){console.log(e),a(e)}function u(e){console.log(e)}return r(o,{maximum:100,minimum:0,onNumericValueInput:u,onValueInput:t,value:n})},d=function(){const[n,a]=m("0");function t(X){const V=X.currentTarget.value;console.log(V),a(V)}const u=0,e=100;return r(C,{children:[r(o,{maximum:e,minimum:u,onInput:t,value:n}),r(W,{space:"small"}),r(_,{maximum:e,minimum:u,onInput:t,value:n,variant:"border"})]})};var g,v,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider {...useInitialFocus()} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,w,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <RangeSlider disabled maximum={100} minimum={0} onInput={handleInput} value="0" />;
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,E,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider increment={10} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,F,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: number) {
    console.log(newNumericValue);
  }
  return <RangeSlider maximum={100} minimum={0} onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
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
      <TextboxNumeric maximum={maximum} minimum={minimum} onInput={handleInput} value={value} variant="border" />
    </Fragment>;
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ee=["Passive","Focused","Disabled","CustomIncrement","OnValueInput","WithTextboxNumeric"];export{c as CustomIncrement,i as Disabled,s as Focused,p as OnValueInput,l as Passive,d as WithTextboxNumeric,ee as __namedExportsOrder,$ as default};
