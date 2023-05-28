import{h as l}from"./hooks.module-6e460002.js";import{u as E}from"./use-initial-focus-83cf3b2e.js";import{I as we}from"./icon-layer-frame-16-6719cb4a.js";import{T as r}from"./textbox-63b038aa.js";import{o}from"./jsxRuntime.module-893eb125.js";import{M as xe}from"./mixed-values-e51728b2.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./textbox.module-9ea46353.js";const ye={parameters:{fixedWidth:!0,order:1},title:"Components/Textbox/Default"},s=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},c=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...E(),onInput:a,value:n})},p=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,placeholder:"placeholder",value:n})},i=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...E(),onInput:a,placeholder:"placeholder",value:n})},d=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},v=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...E(),onInput:a,value:n})},I=function(){function n(){throw new Error("This function should not be called")}return o(r,{disabled:!0,onInput:n,value:"Text"})},V=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:o(we,{}),onInput:a,value:n})},g=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{disabled:!0,icon:o(we,{}),onInput:a,value:n})},m=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:"X",onInput:a,value:n})},T=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{disabled:!0,icon:"X",onInput:a,value:n})},f=function(){const[n,u]=l(xe);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},w=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},x=function(){const[n,u]=l("Text");function a(e){const b=e.currentTarget.value;console.log(b),u(b)}function t(e){return e!==""}return o(r,{onInput:a,validateOnBlur:t,value:n})},h=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,password:!0,value:n})},S=function(){const[n,u]=l("Text");function a(t){console.log(t),u(t)}return o(r,{onValueInput:a,value:n})};var X,M,L;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var F,D,H;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,O,y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(y=(O=p.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var B,P,_;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var K,R,G;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(G=(R=d.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var N,C,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(W=(C=v.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var j,k,q;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" />;
}`,...(q=(k=I.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,Q;V.parameters={...V.parameters,docs:{...(z=V.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />;
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
  return <Textbox icon="X" onInput={handleInput} value={value} />;
}`,...(ne=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ue,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox disabled icon="X" onInput={handleInput} value={value} />;
}`,...(ae=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};var oe,re,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,pe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} />;
}`,...(pe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ie,de,ve;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`function () {
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
}`,...(ve=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var Ie,Ve,ge;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} />;
}`,...(ge=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:ge.source}}};var me,Te,fe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} />;
}`,...(fe=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};const Be=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Icon","IconDisabled","IconText","IconTextDisabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","OnValueInput"];export{I as Disabled,s as Empty,c as EmptyFocused,d as Filled,v as Focused,V as Icon,g as IconDisabled,m as IconText,T as IconTextDisabled,f as Mixed,S as OnValueInput,h as Password,p as Placeholder,i as PlaceholderFocused,w as RevertOnEscapeKeyDown,x as ValidateOnBlur,Be as __namedExportsOrder,ye as default};
//# sourceMappingURL=textbox-default.stories-20710180.js.map
