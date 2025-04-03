import{_ as p}from"./preact.module-7_OotSvk.js";import{d as o}from"./create-component-CR2aSVXZ.js";import{u as z}from"./use-initial-focus-DTq0kKo3.js";import{T as s}from"./textbox-color-C1fOfh9C.js";import{M as h}from"./mixed-values-hkF2bnrF.js";import"./create-class-name-irFPZBOU.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./raw-textbox-numeric-P0blTARb.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";const ce={tags:["1"],title:"Components/Textbox Color"},x=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},C=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{...z(),hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},y=function(){const[t,r]=o(""),[a,c]=o("");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{hexColor:t,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a})},d=function(){const[t,r]=o("0D99FF"),[a,c]=o("100");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},I=function(){const[t,r]=o("0D99FF"),[a,c]=o("100");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{disabled:!0,hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},i=function(){const[t,r]=o("0D99FF"),[a,c]=o("100");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{fullWidth:!0,hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})};i.parameters={fixedWidth:!0};const g=function(){const[t,r]=o(h),[a,c]=o(h);function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},H=function(){const[t,r]=o("0D99FF"),[a,c]=o("100");function l(n){const e=n.currentTarget.value;console.log(e),r(e)}function u(n){const e=n.currentTarget.value;console.log(e),c(e)}return p(s,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0})},O=function(){const[t,r]=o("0D99FF"),[a,c]=o("100");function l(n){console.log(n)}function u(n){console.log(n)}return p(s,{hexColor:t,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a})};var v,m,T;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(T=(m=x.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var w,f,S;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(S=(f=C.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var E,F,b;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(b=(F=y.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var M,D,X;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100');
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(X=(D=d.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var J,L,V;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100');
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
  return <TextboxColor disabled hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(V=(L=I.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var R,N,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100');
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
  return <TextboxColor fullWidth hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,G,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,A,B;H.parameters={...H.parameters,docs:{...(P=H.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100');
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} revertOnEscapeKeyDown />;
}`,...(B=(A=H.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var j,k,q;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} />;
}`,...(q=(k=O.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const le=["Empty","Focused","Placeholder","Filled","Disabled","FullWidth","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{I as Disabled,x as Empty,d as Filled,C as Focused,i as FullWidth,g as Mixed,O as OnValueInput,y as Placeholder,H as RevertOnEscapeKeyDown,le as __namedExportsOrder,ce as default};
