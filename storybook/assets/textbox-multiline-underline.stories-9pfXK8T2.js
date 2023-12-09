import{h as o,_ as ue}from"./create-component-a83A1_Pu.js";import{u as ae}from"./use-initial-focus-xmfxIugy.js";import{T as r}from"./textbox-multiline-99OCCbva.js";import{u as l}from"./jsxRuntime.module-mP9ZGqev.js";import{M as re}from"./mixed-values-kiIAV0Ly.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";const ge={parameters:{fixedWidth:!0},tags:["3"],title:"Components/Textbox Multiline/Underline"},s=function(){const[n,u]=o("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,value:n,variant:"underline"})},c=function(){const[n,u]=o("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{...ae(),onInput:a,value:n,variant:"underline"})},i=function(){const[n,u]=o("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,placeholder:"Placeholder",value:n,variant:"underline"})},d=function(){const[n,u]=o("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,value:n,variant:"underline"})},p=function(){function n(){throw new Error("This function should not be called")}return l(r,{disabled:!0,onInput:n,value:"Text",variant:"underline"})},v=function(){const[n,u]=o(re);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,value:n,variant:"underline"})},V=function(){const[n,u]=o("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},T=function(){const[n,u]=o("Text");function a(e){const w=e.currentTarget.value;console.log(w),u(w)}function t(e){return e!==""}return l(r,{onInput:a,validateOnBlur:t,value:n,variant:"underline"})},g=function(){const[n,u]=o("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{onInput:a,rows:5,value:n,variant:"underline"})},m=function(){const[n,u]=o("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return l(r,{grow:!0,onInput:a,rows:1,value:n,variant:"underline"})},f=function(){const n=ue(null),[u,a]=o("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return l(r,{ref:n,onInput:t,value:u,variant:"underline"})},I=function(){const[n,u]=o("Text");function a(t){console.log(t),u(t)}return l(r,{onValueInput:a,value:n,variant:"underline"})};var x,h,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var E,M,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(b=(M=c.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var O,A,X;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="Placeholder" value={value} variant="underline" />;
}`,...(X=(A=i.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var H,L,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var J,D,y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" variant="underline" />;
}`,...(y=(D=p.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,F,_;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(_=(F=v.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var G,K,P;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} variant="underline" />;
}`,...(P=(K=V.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var N,U,j;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  function validateOnBlur(value: string): string | boolean {
    return value !== '';
  }
  return <TextboxMultiline onInput={handleInput} validateOnBlur={validateOnBlur} value={value} variant="underline" />;
}`,...(j=(U=T.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var C,W,k;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={5} value={value} variant="underline" />;
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,z,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} variant="underline" />;
}`,...(Q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  const ref: RefObject<HTMLTextAreaElement> = useRef(null);
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
  return <TextboxMultiline ref={ref} onInput={handleInput} value={value} variant="underline" />;
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} variant="underline" />;
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const me=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","Ref","OnValueInput"];export{m as AutoGrow,p as Disabled,s as Empty,d as Filled,c as Focused,v as Mixed,I as OnValueInput,i as Placeholder,f as Ref,V as RevertOnEscapeKeyDown,g as Rows,T as ValidateOnBlur,me as __namedExportsOrder,ge as default};
