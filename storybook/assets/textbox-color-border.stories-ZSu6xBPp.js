import{h as o}from"./create-component-a83A1_Pu.js";import{u as j}from"./use-initial-focus-xmfxIugy.js";import{T as p}from"./textbox-color-XA5fhHru.js";import{u as s}from"./jsxRuntime.module-mP9ZGqev.js";import{M as O}from"./mixed-values-kiIAV0Ly.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./raw-textbox-numeric-P_SZCsOz.js";import"./compute-next-value-v04i_0LO.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";const te={tags:["2"],title:"Components/Textbox Color/Border"},i=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},x=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{...j(),hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},C=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"border"})},y=function(){const[t,r]=o("0D99FF"),[a,c]=o("100%");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},d=function(){const[t,r]=o("0D99FF"),[a,c]=o("100%");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},I=function(){const[t,r]=o(O),[a,c]=o(O);function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},g=function(){const[t,r]=o("0D99FF"),[a,c]=o("100%");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0,variant:"border"})},H=function(){const[t,r]=o("0D99FF"),[a,c]=o("100%");function l(n){console.log(n)}function u(n){console.log(n)}return s(p,{hexColor:t,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a,variant:"border"})};var v,h,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var T,w,f;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(f=(w=x.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,b,E;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" variant="border" />;
}`,...(E=(b=C.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var F,M,D;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(D=(M=y.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var X,V,J;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor disabled hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(J=(V=d.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var L,R,N;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>(MIXED_STRING);
  const [opacity, setOpacity] = useState<string>(MIXED_STRING);
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(N=(R=I.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var P,_,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} revertOnEscapeKeyDown variant="border" />;
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,B,A;H.parameters={...H.parameters,docs:{...(K=H.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} variant="border" />;
}`,...(A=(B=H.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const re=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{d as Disabled,i as Empty,y as Filled,x as Focused,I as Mixed,H as OnValueInput,C as Placeholder,g as RevertOnEscapeKeyDown,re as __namedExportsOrder,te as default};
