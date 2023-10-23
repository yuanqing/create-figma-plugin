import{h as o}from"./create-component-b0512abd.js";import{u as B}from"./use-initial-focus-57bdde46.js";import{T as p}from"./textbox-color-e09f9d9a.js";import{o as s}from"./jsxRuntime.module-632ba37d.js";import{M as O}from"./mixed-values-e51728b2.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./no-op-cb277961.js";import"./raw-textbox-numeric-737ada3a.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const ne={tags:["3"],title:"Components/Textbox Color/Underline"},i=function(){const[n,r]=o(""),[a,c]=o("");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},x=function(){const[n,r]=o(""),[a,c]=o("");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{...B(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},C=function(){const[n,r]=o(""),[a,c]=o("");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"underline"})},y=function(){const[n,r]=o("0D99FF"),[a,c]=o("100%");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},d=function(){const[n,r]=o("0D99FF"),[a,c]=o("100%");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},I=function(){const[n,r]=o(O),[a,c]=o(O);function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},g=function(){const[n,r]=o("0D99FF"),[a,c]=o("100%");function l(t){const e=t.currentTarget.value;console.log(e),r(e)}function u(t){const e=t.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0,variant:"underline"})},H=function(){const[n,r]=o("0D99FF"),[a,c]=o("100%");function l(t){console.log(t)}function u(t){console.log(t)}return s(p,{hexColor:n,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a,variant:"underline"})};var v,h,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
}`,...(f=(w=x.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,E,b;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" variant="underline" />;
}`,...(b=(E=C.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var F,M,D;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
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
  return <TextboxColor disabled hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} revertOnEscapeKeyDown variant="underline" />;
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,U,A;H.parameters={...H.parameters,docs:{...(K=H.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} variant="underline" />;
}`,...(A=(U=H.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const re=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{d as Disabled,i as Empty,y as Filled,x as Focused,I as Mixed,H as OnValueInput,C as Placeholder,g as RevertOnEscapeKeyDown,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=textbox-color-underline.stories-2df4ce63.js.map
