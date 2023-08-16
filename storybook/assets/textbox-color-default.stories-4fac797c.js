import{h as n}from"./hooks.module-7c0d6ca2.js";import{u as v}from"./use-initial-focus-e560a4b5.js";import{T as p}from"./textbox-color-f0d62cb2.js";import{o as s}from"./jsxRuntime.module-3e32d480.js";import{M as T}from"./mixed-values-e51728b2.js";import"./preact.module-bf16abf2.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./raw-textbox-numeric-17858d6f.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const se={parameters:{order:1},title:"Components/Textbox Color/Default"},i=function(){const[t,r]=n(""),[a,c]=n("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},x=function(){const[t,r]=n(""),[a,c]=n("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},C=function(){const[t,r]=n(""),[a,c]=n("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%"})},y=function(){const[t,r]=n(""),[a,c]=n("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:t,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%"})},d=function(){const[t,r]=n("0D99FF"),[a,c]=n("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},I=function(){const[t,r]=n("0D99FF"),[a,c]=n("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},g=function(){const[t,r]=n("0D99FF"),[a,c]=n("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},H=function(){const[t,r]=n(T),[a,c]=n(T);function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a})},O=function(){const[t,r]=n("0D99FF"),[a,c]=n("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:t,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0})},h=function(){const[t,r]=n("0D99FF"),[a,c]=n("100%");function l(o){console.log(o)}function u(o){console.log(o)}return s(p,{hexColor:t,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a})};var m,w,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
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
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,E,F;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var b,M,D;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" />;
}`,...(D=(M=C.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var X,J,L;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" />;
}`,...(L=(J=y.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var V,R,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var N,_,G;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(G=(_=I.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,A,B;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
  return <TextboxColor disabled hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} />;
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var j,k,q;H.parameters={...H.parameters,docs:{...(j=H.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
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
}`,...(q=(k=H.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,Q,U;O.parameters={...O.parameters,docs:{...(z=O.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} revertOnEscapeKeyDown />;
}`,...(U=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Y,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ie=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{g as Disabled,i as Empty,x as EmptyFocused,d as Filled,I as Focused,H as Mixed,h as OnValueInput,C as Placeholder,y as PlaceholderFocused,O as RevertOnEscapeKeyDown,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=textbox-color-default.stories-4fac797c.js.map
