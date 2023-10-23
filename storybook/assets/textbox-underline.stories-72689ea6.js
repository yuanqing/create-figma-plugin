import{h as l,_ as le}from"./create-component-b0512abd.js";import{u as se}from"./use-initial-focus-57bdde46.js";import{I as ce}from"./icon-layer-frame-16-89e1c06f.js";import{T as o}from"./textbox-cbecdc05.js";import{o as r}from"./jsxRuntime.module-632ba37d.js";import{M as ie}from"./mixed-values-e51728b2.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./no-op-cb277961.js";import"./is-keycode-character-generating-0746a523.js";import"./textbox.module-917ccc0f.js";const Ee={parameters:{fixedWidth:!0},tags:["3"],title:"Components/Textbox/Underline"},s=function(){const[n,a]=l("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,value:n,variant:"underline"})},c=function(){const[n,a]=l("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{...se(),onInput:u,value:n,variant:"underline"})},i=function(){const[n,a]=l("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,placeholder:"Placeholder",value:n,variant:"underline"})},p=function(){const[n,a]=l("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,value:n,variant:"underline"})},d=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"Text",variant:"underline"})},v=function(){const[n,a]=l("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{icon:r(ce,{}),onInput:u,value:n,variant:"underline"})},I=function(){const[n,a]=l("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{icon:"W",onInput:u,value:n,variant:"underline"})},V=function(){const[n,a]=l(ie);function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,value:n,variant:"underline"})},m=function(){const[n,a]=l("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},g=function(){const[n,a]=l("Text");function u(e){const x=e.currentTarget.value;console.log(x),a(x)}function t(e){return e!==""}return r(o,{onInput:u,validateOnBlur:t,value:n})},T=function(){const[n,a]=l("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return r(o,{onInput:u,password:!0,value:n,variant:"underline"})},f=function(){const n=le(null),[a,u]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),u(e)}return r(o,{ref:n,onInput:t,value:a,variant:"underline"})},w=function(){const[n,a]=l("Text");function u(t){console.log(t),a(t)}return r(o,{onValueInput:u,value:n,variant:"underline"})};var h,S,E;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="underline" />;
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var b,M,O;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,X,H;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="Placeholder" value={value} variant="underline" />;
}`,...(H=(X=i.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var J,y,D;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="underline" />;
}`,...(D=(y=p.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var F,R,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" variant="underline" />;
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,_,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="underline" />;
}`,...(K=(_=v.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var W,G,N;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon="W" onInput={handleInput} value={value} variant="underline" />;
}`,...(N=(G=I.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var U,j,C;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="underline" />;
}`,...(C=(j=V.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,q,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} variant="underline" />;
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,Q,Y;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  function validateOnBlur(value: string): string | boolean {
    return value !== '';
  }
  return <Textbox onInput={handleInput} validateOnBlur={validateOnBlur} value={value} />;
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} variant="underline" />;
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,ae;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`function () {
  const ref: RefObject<HTMLInputElement> = useRef(null);
  const [value, setValue] = useState<string>('Text');
  function handleInput() {
    if (ref.current === null) {
      throw new Error('\`ref.current\` is \`null\`');
    }
    console.log(ref.current);
    const newValue = ref.current.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox ref={ref} onInput={handleInput} value={value} variant="underline" />;
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ue,re,oe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} variant="underline" />;
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const be=["Empty","Focused","Placeholder","Filled","Disabled","Icon","TextIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","Ref","OnValueInput"];export{d as Disabled,s as Empty,p as Filled,c as Focused,v as Icon,V as Mixed,w as OnValueInput,T as Password,i as Placeholder,f as Ref,m as RevertOnEscapeKeyDown,I as TextIcon,g as ValidateOnBlur,be as __namedExportsOrder,Ee as default};
//# sourceMappingURL=textbox-underline.stories-72689ea6.js.map
