import{h as l}from"./hooks.module-6e460002.js";import{u as S}from"./use-initial-focus-83cf3b2e.js";import{I as we}from"./icon-layer-frame-16-6719cb4a.js";import{T as o}from"./textbox-63b038aa.js";import{o as u}from"./jsxRuntime.module-893eb125.js";import{M as xe}from"./mixed-values-e51728b2.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./textbox.module-9ea46353.js";const ye={parameters:{fixedWidth:!0,order:2},title:"Components/Textbox/Border"},s=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,value:n,variant:"border"})},c=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{...S(),onInput:r,value:n,variant:"border"})},i=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,placeholder:"placeholder",value:n,variant:"border"})},d=function(){const[n,a]=l("");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{...S(),onInput:r,placeholder:"placeholder",value:n,variant:"border"})},p=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,value:n,variant:"border"})},v=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{...S(),onInput:r,value:n,variant:"border"})},I=function(){function n(){throw new Error("This function should not be called")}return u(o,{disabled:!0,onInput:n,value:"Text",variant:"border"})},V=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{icon:u(we,{}),onInput:r,value:n,variant:"border"})},g=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{disabled:!0,icon:u(we,{}),onInput:r,value:n})},m=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{icon:"X",onInput:r,value:n,variant:"border"})},T=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{disabled:!0,icon:"X",onInput:r,value:n,variant:"border"})},f=function(){const[n,a]=l(xe);function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,value:n,variant:"border"})},w=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,revertOnEscapeKeyDown:!0,value:n,variant:"border"})},x=function(){const[n,a]=l("Text");function r(e){const E=e.currentTarget.value;console.log(E),a(E)}function t(e){return e!==""}return u(o,{onInput:r,validateOnBlur:t,value:n})},h=function(){const[n,a]=l("Text");function r(t){const e=t.currentTarget.value;console.log(e),a(e)}return u(o,{onInput:r,password:!0,value:n,variant:"border"})},b=function(){const[n,a]=l("Text");function r(t){console.log(t),a(t)}return u(o,{onValueInput:r,value:n,variant:"border"})};var X,M,L;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var F,H,J;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var O,D,y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="placeholder" value={value} variant="border" />;
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,P,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} variant="border" />;
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var K,R,G;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var N,C,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(W=(C=v.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var j,k,q;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" variant="border" />;
}`,...(q=(k=I.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,Q;V.parameters={...V.parameters,docs:{...(z=V.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="border" />;
}`,...(Q=(A=V.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox disabled icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon="X" onInput={handleInput} value={value} variant="border" />;
}`,...(ne=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox disabled icon="X" onInput={handleInput} value={value} variant="border" />;
}`,...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ue,oe,le;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />;
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ce,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} variant="border" />;
}`,...(ie=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,ve;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`function () {
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
}`,...(ve=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var Ie,Ve,ge;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} variant="border" />;
}`,...(ge=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:ge.source}}};var me,Te,fe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} variant="border" />;
}`,...(fe=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};const Be=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Icon","IconDisabled","IconText","IconTextDisabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","OnValueInput"];export{I as Disabled,s as Empty,c as EmptyFocused,p as Filled,v as Focused,V as Icon,g as IconDisabled,m as IconText,T as IconTextDisabled,f as Mixed,b as OnValueInput,h as Password,i as Placeholder,d as PlaceholderFocused,w as RevertOnEscapeKeyDown,x as ValidateOnBlur,Be as __namedExportsOrder,ye as default};
//# sourceMappingURL=textbox-border.stories-72457376.js.map
