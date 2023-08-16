import{h as o}from"./hooks.module-7c0d6ca2.js";import{u as f}from"./use-initial-focus-e560a4b5.js";import{T as r}from"./textbox-multiline-3e6d7d74.js";import{o as l}from"./jsxRuntime.module-3e32d480.js";import{M as se}from"./mixed-values-e51728b2.js";import"./preact.module-bf16abf2.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";const Ie={parameters:{fixedWidth:!0,order:3},title:"Components/Textbox Multiline/Underline"},s=function(){const[n,a]=o("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,value:n,variant:"underline"})},c=function(){const[n,a]=o("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{...f(),onInput:u,value:n,variant:"underline"})},i=function(){const[n,a]=o("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,placeholder:"placeholder",value:n,variant:"underline"})},d=function(){const[n,a]=o("");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{...f(),onInput:u,placeholder:"placeholder",value:n,variant:"underline"})},p=function(){const[n,a]=o("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,value:n,variant:"underline"})},v=function(){const[n,a]=o("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{...f(),onInput:u,value:n,variant:"underline"})},T=function(){function n(){throw new Error("This function should not be called")}return l(r,{disabled:!0,onInput:n,value:"Text",variant:"underline"})},V=function(){const[n,a]=o(se);function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,value:n,variant:"underline"})},g=function(){const[n,a]=o("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},m=function(){const[n,a]=o("Text");function u(e){const h=e.currentTarget.value;console.log(h),a(h)}function t(e){return e!==""}return l(r,{onInput:u,validateOnBlur:t,value:n,variant:"underline"})},I=function(){const[n,a]=o("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{onInput:u,rows:1,value:n,variant:"underline"})},w=function(){const[n,a]=o("Text");function u(t){const e=t.currentTarget.value;console.log(e),a(e)}return l(r,{grow:!0,onInput:u,rows:1,value:n,variant:"underline"})},x=function(){const[n,a]=o("Text");function u(t){console.log(t),a(t)}return l(r,{onValueInput:u,value:n,variant:"underline"})};var S,E,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var b,A,O;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var X,F,H;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="placeholder" value={value} variant="underline" />;
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,y;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} variant="underline" />;
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var D,B,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,G,K;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,N,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" variant="underline" />;
}`,...(U=(N=T.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var C,W,j;V.parameters={...V.parameters,docs:{...(C=V.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="underline" />;
}`,...(j=(W=V.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var k,q,z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} variant="underline" />;
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var Q,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={1} value={value} variant="underline" />;
}`,...(ne=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,ue;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} variant="underline" />;
}`,...(ue=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};var re,le,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} variant="underline" />;
}`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const we=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","OnValueInput"];export{w as AutoGrow,T as Disabled,s as Empty,c as EmptyFocused,p as Filled,v as Focused,V as Mixed,x as OnValueInput,i as Placeholder,d as PlaceholderFocused,g as RevertOnEscapeKeyDown,I as Rows,m as ValidateOnBlur,we as __namedExportsOrder,Ie as default};
//# sourceMappingURL=textbox-multiline-underline.stories-fee99a38.js.map
