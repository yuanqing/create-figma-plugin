import{h as l,_ as le}from"./create-component-a83A1_Pu.js";import{u as se}from"./use-initial-focus-xmfxIugy.js";import{I as ce}from"./icon-layer-frame-16-sVAwYanE.js";import{T as r}from"./textbox-InH0rXhO.js";import{u as o}from"./jsxRuntime.module-mP9ZGqev.js";import{M as pe}from"./mixed-values-kiIAV0Ly.js";import"./preact.module-pS-_M4k6.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";import"./textbox.module-SUUSsoq6.js";const Ee={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox/Default"},s=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},c=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...se(),onInput:a,value:n})},p=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,placeholder:"Placeholder",value:n})},i=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},d=function(){function n(){throw new Error("This function should not be called")}return o(r,{disabled:!0,onInput:n,value:"Text"})},v=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:o(ce,{}),onInput:a,value:n})},I=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:"W",onInput:a,value:n})},V=function(){const[n,u]=l(pe);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},m=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},g=function(){const[n,u]=l("Text");function a(e){const x=e.currentTarget.value;console.log(x),u(x)}function t(e){return e!==""}return o(r,{onInput:a,validateOnBlur:t,value:n})},f=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,password:!0,value:n})},T=function(){const n=le(null),[u,a]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return o(r,{ref:n,onInput:t,value:u})},w=function(){const[n,u]=l("Text");function a(t){console.log(t),u(t)}return o(r,{onValueInput:a,value:n})};var h,S,E;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var b,M,O;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,X,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(H=(X=p.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var D,J,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(y=(J=i.parameters)==null?void 0:J.docs)==null?void 0:y.source}}};var F,R,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" />;
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,_,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />;
}`,...(K=(_=v.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var W,G,N;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon="W" onInput={handleInput} value={value} />;
}`,...(N=(G=I.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var j,C,k;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(k=(C=V.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} />;
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
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} />;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,ue;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`function () {
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
  return <Textbox ref={ref} onInput={handleInput} value={value} />;
}`,...(ue=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var ae,oe,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} />;
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const be=["Empty","Focused","Placeholder","Filled","Disabled","Icon","TextIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","Ref","OnValueInput"];export{d as Disabled,s as Empty,i as Filled,c as Focused,v as Icon,V as Mixed,w as OnValueInput,f as Password,p as Placeholder,T as Ref,m as RevertOnEscapeKeyDown,I as TextIcon,g as ValidateOnBlur,be as __namedExportsOrder,Ee as default};
