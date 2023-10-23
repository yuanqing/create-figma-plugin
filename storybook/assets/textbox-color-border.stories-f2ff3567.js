import{h as t}from"./create-component-b0512abd.js";import{u as j}from"./use-initial-focus-57bdde46.js";import{T as p}from"./textbox-color-e09f9d9a.js";import{o as s}from"./jsxRuntime.module-632ba37d.js";import{M as O}from"./mixed-values-e51728b2.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./no-op-cb277961.js";import"./raw-textbox-numeric-737ada3a.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const ne={tags:["2"],title:"Components/Textbox Color/Border"},i=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},x=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...j(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},C=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"border"})},y=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},d=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},I=function(){const[n,r]=t(O),[a,c]=t(O);function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},g=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0,variant:"border"})},H=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){console.log(o)}function u(o){console.log(o)}return s(p,{hexColor:n,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a,variant:"border"})};var v,h,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
}`,...(A=(B=H.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const re=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{d as Disabled,i as Empty,y as Filled,x as Focused,I as Mixed,H as OnValueInput,C as Placeholder,g as RevertOnEscapeKeyDown,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=textbox-color-border.stories-f2ff3567.js.map
