import{_ as u}from"./preact.module-DSfP8QVG.js";import{h as l,A as re}from"./create-component-BQOTiC4n.js";import{u as ae}from"./use-initial-focus-BIYZsJcx.js";import{T as o}from"./textbox-multiline-1EXJMIU7.js";import{M as ue}from"./mixed-values-hkF2bnrF.js";import"./create-class-name-irFPZBOU.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./is-keycode-character-generating-C88G8DHI.js";const Te={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Textbox Multiline/Border"},s=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},c=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{...ae(),onInput:a,value:n,variant:"border"})},i=function(){const[n,r]=l("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,placeholder:"Placeholder",value:n,variant:"border"})},d=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},p=function(){function n(){throw new Error("This function should not be called")}return u(o,{disabled:!0,onInput:n,value:"Text",variant:"border"})},v=function(){const[n,r]=l(ue);function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,value:n,variant:"border"})},V=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,revertOnEscapeKeyDown:!0,value:n,variant:"border"})},T=function(){const[n,r]=l("Text");function a(e){const w=e.currentTarget.value;console.log(w),r(w)}function t(e){return e!==""}return u(o,{onInput:a,validateOnBlur:t,value:n,variant:"border"})},g=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{onInput:a,rows:5,value:n,variant:"border"})},m=function(){const[n,r]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return u(o,{grow:!0,onInput:a,rows:1,value:n,variant:"border"})},f=function(){const n=re(null),[r,a]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return u(o,{ref:n,onInput:t,value:r,variant:"border"})},I=function(){const[n,r]=l("Text");function a(t){console.log(t),r(t)}return u(o,{onValueInput:a,value:n,variant:"border"})};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,E,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,A,X;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="Placeholder" value={value} variant="border" />;
}`,...(X=(A=i.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var H,L,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var J,B,D;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" variant="border" />;
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var y,F,_;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(_=(F=v.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var G,K,P;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} variant="border" />;
}`,...(P=(K=V.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var N,j,C;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  function validateOnBlur(value: string): string | boolean {
    return value !== '';
  }
  return <TextboxMultiline onInput={handleInput} validateOnBlur={validateOnBlur} value={value} variant="border" />;
}`,...(C=(j=T.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var W,k,q;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={5} value={value} variant="border" />;
}`,...(q=(k=g.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,Q,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} variant="border" />;
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
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
  return <TextboxMultiline ref={ref} onInput={handleInput} value={value} variant="border" />;
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} variant="border" />;
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ge=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","Ref","OnValueInput"];export{m as AutoGrow,p as Disabled,s as Empty,d as Filled,c as Focused,v as Mixed,I as OnValueInput,i as Placeholder,f as Ref,V as RevertOnEscapeKeyDown,g as Rows,T as ValidateOnBlur,ge as __namedExportsOrder,Te as default};
