import{h as l}from"./hooks.module-7c0d6ca2.js";import{u as f}from"./use-initial-focus-e560a4b5.js";import{T as u}from"./textbox-multiline-3e6d7d74.js";import{o}from"./jsxRuntime.module-3e32d480.js";import{M as se}from"./mixed-values-e51728b2.js";import"./preact.module-bf16abf2.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";const Ie={parameters:{fixedWidth:!0,order:2},title:"Components/Textbox Multiline/Border"},s=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,value:n,variant:"border"})},c=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{...f(),onInput:r,value:n,variant:"border"})},i=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,placeholder:"placeholder",value:n,variant:"border"})},d=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{...f(),onInput:r,placeholder:"placeholder",value:n,variant:"border"})},p=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,value:n,variant:"border"})},v=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{...f(),onInput:r,value:n,variant:"border"})},T=function(){function n(){throw new Error("This function should not be called")}return o(u,{disabled:!0,onInput:n,value:"Text",variant:"border"})},V=function(){const[n,a]=l(se);function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,value:n,variant:"border"})},g=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,revertOnEscapeKeyDown:!0,value:n,variant:"border"})},m=function(){const[n,a]=l("Text");function r(e){const h=e.currentTarget.value;console.log(h),a(h)}function t(e){return e!==""}return o(u,{onInput:r,validateOnBlur:t,value:n,variant:"border"})},I=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{onInput:r,rows:1,value:n,variant:"border"})},w=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return o(u,{grow:!0,onInput:r,rows:1,value:n,variant:"border"})},x=function(){const[n,a]=l("Text");function r(t){console.log(t),a(t)}return o(u,{onValueInput:r,value:n,variant:"border"})};var b,S,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var M,A,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var X,F,H;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="placeholder" value={value} variant="border" />;
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,y;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} variant="border" />;
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,G,K;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,N,C;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" variant="border" />;
}`,...(C=(N=T.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var W,j,k;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} variant="border" />;
}`,...(k=(j=V.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} variant="border" />;
}`,...(Q=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,Y,Z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={1} value={value} variant="border" />;
}`,...(ne=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} variant="border" />;
}`,...(re=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ue,oe,le;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} variant="border" />;
}`,...(le=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const we=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","OnValueInput"];export{w as AutoGrow,T as Disabled,s as Empty,c as EmptyFocused,p as Filled,v as Focused,V as Mixed,x as OnValueInput,i as Placeholder,d as PlaceholderFocused,g as RevertOnEscapeKeyDown,I as Rows,m as ValidateOnBlur,we as __namedExportsOrder,Ie as default};
//# sourceMappingURL=textbox-multiline-border.stories-f20a9ff3.js.map
