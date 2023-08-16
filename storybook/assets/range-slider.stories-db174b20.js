import{k as M}from"./preact.module-bf16abf2.js";import{h as l}from"./hooks.module-7c0d6ca2.js";import{u as X}from"./use-initial-focus-e560a4b5.js";import{V as C}from"./vertical-space-4313d2d4.js";import{T as O}from"./textbox-numeric-e4a5f0cd.js";import{R as o}from"./range-slider-744cd06f.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import"./create-class-name-71c46838.js";import"./textbox.module-917ccc0f.js";import"./raw-textbox-numeric-17858d6f.js";import"./get-current-from-ref-47f174f6.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";const U={parameters:{fixedWidth:!0},title:"Components/Range Slider"},m=function(){const[n,u]=l("0");function t(a){const e=a.currentTarget.value;console.log(e),u(e)}return r(o,{maximum:100,minimum:0,onInput:t,value:n})},s=function(){const[n,u]=l("0");function t(a){const e=a.currentTarget.value;console.log(e),u(e)}return r(o,{...X(),maximum:100,minimum:0,onInput:t,value:n})},i=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,maximum:100,minimum:0,onInput:n,value:"0"})},c=function(){const[n,u]=l("0");function t(a){const e=a.currentTarget.value;console.log(e),u(e)}return r(o,{increment:10,maximum:100,minimum:0,onInput:t,value:n})},p=function(){const[n,u]=l("0");function t(e){console.log(e),u(e)}function a(e){console.log(e)}return r(o,{maximum:100,minimum:0,onNumericValueInput:a,onValueInput:t,value:n})},d=function(){const[n,u]=l("0");function t(a){const e=a.currentTarget.value;console.log(e),u(e)}return r(M,{children:[r(o,{maximum:100,minimum:0,onInput:t,value:n}),r(C,{space:"small"}),r(O,{maximum:100,minimum:0,onInput:t,value:n,variant:"border"})]})};var V,v,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(I=(v=m.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider {...useInitialFocus()} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,x,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <RangeSlider disabled maximum={100} minimum={0} onInput={handleInput} value="0" />;
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,b,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider increment={10} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var N,R,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: number) {
    console.log(newNumericValue);
  }
  return <RangeSlider maximum={100} minimum={0} onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,J,L;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Fragment>
      <RangeSlider maximum={100} minimum={0} onInput={handleInput} value={value} />
      <VerticalSpace space="small" />
      <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} value={value} variant="border" />
    </Fragment>;
}`,...(L=(J=d.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const Y=["Passive","Focused","Disabled","CustomIncrement","OnValueInput","WithTextboxNumeric"];export{c as CustomIncrement,i as Disabled,s as Focused,p as OnValueInput,m as Passive,d as WithTextboxNumeric,Y as __namedExportsOrder,U as default};
//# sourceMappingURL=range-slider.stories-db174b20.js.map
