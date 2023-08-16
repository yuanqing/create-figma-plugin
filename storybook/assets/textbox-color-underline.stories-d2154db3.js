import{h as t}from"./hooks.module-7c0d6ca2.js";import{u as v}from"./use-initial-focus-e560a4b5.js";import{T as p}from"./textbox-color-f0d62cb2.js";import{o as s}from"./jsxRuntime.module-3e32d480.js";import{M as T}from"./mixed-values-e51728b2.js";import"./preact.module-bf16abf2.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./raw-textbox-numeric-17858d6f.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const se={parameters:{order:3},title:"Components/Textbox Color/Underline"},i=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},x=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},C=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"underline"})},y=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"underline"})},d=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},I=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},g=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},H=function(){const[n,r]=t(T),[a,c]=t(T);function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"underline"})},O=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0,variant:"underline"})},h=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){console.log(o)}function u(o){console.log(o)}return s(p,{hexColor:n,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a,variant:"underline"})};var m,w,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var b,M,X;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
}`,...(X=(M=C.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var D,J,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" variant="underline" />;
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
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
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
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="underline" />;
}`,...(G=(_=I.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,U,A;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
}`,...(A=(U=g.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var B,j,k;H.parameters={...H.parameters,docs:{...(B=H.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
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
}`,...(k=(j=H.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,Q;O.parameters={...O.parameters,docs:{...(q=O.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
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
}`,...(Q=(z=O.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var W,Y,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} variant="underline" />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ie=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{g as Disabled,i as Empty,x as EmptyFocused,d as Filled,I as Focused,H as Mixed,h as OnValueInput,C as Placeholder,y as PlaceholderFocused,O as RevertOnEscapeKeyDown,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=textbox-color-underline.stories-d2154db3.js.map
