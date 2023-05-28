import{h as l}from"./hooks.module-6e460002.js";import{u as x}from"./use-initial-focus-83cf3b2e.js";import{T as o}from"./textbox-multiline-5bdf0cd7.js";import{o as r}from"./jsxRuntime.module-893eb125.js";import{M as se}from"./mixed-values-e51728b2.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";const Ie={parameters:{fixedWidth:!0,order:1},title:"Components/Textbox Multiline/Default"},s=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,value:n})},c=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{...x(),onInput:a,value:n})},i=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,placeholder:"placeholder",value:n})},p=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{...x(),onInput:a,placeholder:"placeholder",value:n})},d=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,value:n})},v=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{...x(),onInput:a,value:n})},T=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"Text"})},V=function(){const[n,u]=l(se);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,value:n})},g=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},m=function(){const[n,u]=l("Text");function a(e){const h=e.currentTarget.value;console.log(h),u(h)}function t(e){return e!==""}return r(o,{onInput:a,validateOnBlur:t,value:n})},I=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{onInput:a,rows:1,value:n})},f=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return r(o,{grow:!0,onInput:a,rows:1,value:n})},w=function(){const[n,u]=l("Text");function a(t){console.log(t),u(t)}return r(o,{onValueInput:a,value:n})};var S,E,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var b,A,O;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var X,F,H;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,D;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var y,B,R;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,G,K;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,N,C;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" />;
}`,...(C=(N=T.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var W,j,k;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(k=(j=V.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} />;
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
  return <TextboxMultiline onInput={handleInput} validateOnBlur={validateOnBlur} value={value} />;
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={1} value={value} />;
}`,...(ne=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ue,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} />;
}`,...(ae=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};var oe,re,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} />;
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const fe=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","OnValueInput"];export{f as AutoGrow,T as Disabled,s as Empty,c as EmptyFocused,d as Filled,v as Focused,V as Mixed,w as OnValueInput,i as Placeholder,p as PlaceholderFocused,g as RevertOnEscapeKeyDown,I as Rows,m as ValidateOnBlur,fe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=textbox-multiline-default.stories-a7ae2167.js.map
