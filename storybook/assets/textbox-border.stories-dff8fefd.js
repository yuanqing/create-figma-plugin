import{h as l,_ as le}from"./create-component-b0512abd.js";import{u as se}from"./use-initial-focus-57bdde46.js";import{I as ce}from"./icon-layer-frame-16-89e1c06f.js";import{T as o}from"./textbox-cbecdc05.js";import{o as u}from"./jsxRuntime.module-632ba37d.js";import{M as ie}from"./mixed-values-e51728b2.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./no-op-cb277961.js";import"./is-keycode-character-generating-0746a523.js";import"./textbox.module-917ccc0f.js";const Se={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Textbox/Border"},s=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},c=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{...se(),onInput:a,value:n,variant:"border"})},i=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,placeholder:"Placeholder",value:n,variant:"border"})},p=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},d=function(){function n(){throw new Error("This function should not be called")}return u(o,{disabled:!0,onInput:n,value:"Text",variant:"border"})},v=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{icon:u(ce,{}),onInput:a,value:n,variant:"border"})},I=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{icon:"W",onInput:a,value:n,variant:"border"})},V=function(){const[n,r]=l(ie);function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},m=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,revertOnEscapeKeyDown:!0,value:n,variant:"border"})},g=function(){const[n,r]=l("Text");function a(e){const x=e.currentTarget.value;console.log(x),r(x)}function t(e){return e!==""}return u(o,{onInput:a,validateOnBlur:t,value:n})},T=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,password:!0,value:n,variant:"border"})},f=function(){const n=le(null),[r,a]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return u(o,{ref:n,onInput:t,value:r,variant:"border"})},w=function(){const[n,r]=l("Text");function a(t){console.log(t),r(t)}return u(o,{onValueInput:a,value:n,variant:"border"})};var h,b,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,M,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,X,H;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="Placeholder" value={value} variant="border" />;
}`,...(H=(X=i.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var J,y,B;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(B=(y=p.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var D,F,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" variant="border" />;
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var P,_,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="border" />;
}`,...(K=(_=v.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var W,G,N;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon="W" onInput={handleInput} value={value} variant="border" />;
}`,...(N=(G=I.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var j,C,k;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(k=(C=V.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} variant="border" />;
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var Q,U,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} variant="border" />;
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`function () {
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
  return <Textbox ref={ref} onInput={handleInput} value={value} variant="border" />;
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ue,oe;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} variant="border" />;
}`,...(oe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};const Ee=["Empty","Focused","Placeholder","Filled","Disabled","Icon","TextIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","Ref","OnValueInput"];export{d as Disabled,s as Empty,p as Filled,c as Focused,v as Icon,V as Mixed,w as OnValueInput,T as Password,i as Placeholder,f as Ref,m as RevertOnEscapeKeyDown,I as TextIcon,g as ValidateOnBlur,Ee as __namedExportsOrder,Se as default};
//# sourceMappingURL=textbox-border.stories-dff8fefd.js.map
