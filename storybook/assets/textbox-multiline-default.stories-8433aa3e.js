import{h as l,_ as ue}from"./create-component-b0512abd.js";import{u as ae}from"./use-initial-focus-57bdde46.js";import{T as r}from"./textbox-multiline-5ebc1828.js";import{o}from"./jsxRuntime.module-632ba37d.js";import{M as re}from"./mixed-values-e51728b2.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./no-op-cb277961.js";import"./is-keycode-character-generating-0746a523.js";const ge={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox Multiline/Default"},s=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},c=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...ae(),onInput:a,value:n})},i=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,placeholder:"Placeholder",value:n})},p=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},d=function(){function n(){throw new Error("This function should not be called")}return o(r,{disabled:!0,onInput:n,value:"Text"})},v=function(){const[n,u]=l(re);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},V=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},T=function(){const[n,u]=l("Text");function a(e){const w=e.currentTarget.value;console.log(w),u(w)}function t(e){return e!==""}return o(r,{onInput:a,validateOnBlur:t,value:n})},g=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,rows:5,value:n})},m=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{grow:!0,onInput:a,rows:1,value:n})},f=function(){const n=ue(null),[u,a]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return o(r,{ref:n,onInput:t,value:u})},I=function(){const[n,u]=l("Text");function a(t){console.log(t),u(t)}return o(r,{onValueInput:a,value:n})};var x,h,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var E,M,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(b=(M=c.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var O,A,X;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(X=(A=i.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var D,H,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,J,y;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" />;
}`,...(y=(J=d.parameters)==null?void 0:J.docs)==null?void 0:y.source}}};var B,F,_;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(_=(F=v.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var G,K,P;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} />;
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
  return <TextboxMultiline onInput={handleInput} validateOnBlur={validateOnBlur} value={value} />;
}`,...(C=(j=T.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var W,k,q;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={5} value={value} />;
}`,...(q=(k=g.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,Q,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} />;
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
  return <TextboxMultiline ref={ref} onInput={handleInput} value={value} />;
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} />;
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const me=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","Ref","OnValueInput"];export{m as AutoGrow,d as Disabled,s as Empty,p as Filled,c as Focused,v as Mixed,I as OnValueInput,i as Placeholder,f as Ref,V as RevertOnEscapeKeyDown,g as Rows,T as ValidateOnBlur,me as __namedExportsOrder,ge as default};
//# sourceMappingURL=textbox-multiline-default.stories-8433aa3e.js.map
