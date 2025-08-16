import{_ as o}from"./preact.module-7_OotSvk.js";import{d as l,A as de}from"./create-component-CR2aSVXZ.js";import{u as ve}from"./use-initial-focus-DTq0kKo3.js";import{I as ie}from"./icon-frame-16-DHk6dLwb.js";import{T as r}from"./textbox-uoSG9xUR.js";import{a as Ie}from"./mixed-values-CZ6RGhGs.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./textbox.module-BTiVByXg.js";const Oe={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox"},s=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},c=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{...ve(),onInput:a,value:n})},p=function(){const[n,u]=l("");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,placeholder:"Placeholder",value:n})},i=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},d=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:o(ie,null),onInput:a,value:n})},v=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{icon:"W",onInput:a,value:n})},I=function(){function n(){throw new Error("This function should not be called")}return o(r,{disabled:!0,onInput:n,value:"Text"})},m=function(){function n(){throw new Error("This function should not be called")}return o(r,{disabled:!0,icon:o(ie,null),onInput:n,value:"Text"})},V=function(){const[n,u]=l(Ie);function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,value:n})},g=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},T=function(){const[n,u]=l("Text");function a(e){const x=e.currentTarget.value;console.log(x),u(x)}function t(e){return e!==""}return o(r,{onInput:a,validateOnBlur:t,value:n})},f=function(){const[n,u]=l("Text");function a(t){const e=t.currentTarget.value;console.log(e),u(e)}return o(r,{onInput:a,password:!0,value:n})},w=function(){const n=de(null),[u,a]=l("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return o(r,{ref:n,onInput:t,value:u})},h=function(){const[n,u]=l("Text");function a(t){console.log(t),u(t)}return o(r,{onValueInput:a,value:n})};var S,E,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var M,O,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(X=(O=c.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var H,L,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var J,F,R;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var y,B,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon={<IconFrame16 />} onInput={handleInput} value={value} />;
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var _,K,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox icon="W" onInput={handleInput} value={value} />;
}`,...(W=(K=v.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,N,j;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled onInput={handleInput} value="Text" />;
}`,...(j=(N=I.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var A,C,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <Textbox disabled icon={<IconFrame16 />} onInput={handleInput} value="Text" />;
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,z,Q;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} value={value} />;
}`,...(Q=(z=V.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} />;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ue,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onInput={handleInput} password value={value} />;
}`,...(ae=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};var oe,re,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
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
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,pe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Textbox onValueInput={handleValueInput} value={value} />;
}`,...(pe=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Xe=["Empty","Focused","Placeholder","Filled","Icon","TextIcon","Disabled","DisabledIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Password","Ref","OnValueInput"];export{I as Disabled,m as DisabledIcon,s as Empty,i as Filled,c as Focused,d as Icon,V as Mixed,h as OnValueInput,f as Password,p as Placeholder,w as Ref,g as RevertOnEscapeKeyDown,v as TextIcon,T as ValidateOnBlur,Xe as __namedExportsOrder,Oe as default};
