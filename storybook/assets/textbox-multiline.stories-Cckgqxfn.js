import{_ as o}from"./preact.module-7_OotSvk.js";import{c as De,A as Ie,d as s,q as p}from"./create-component-CR2aSVXZ.js";import{u as He}from"./use-initial-focus-DTq0kKo3.js";import{c as Le}from"./create-class-name-irFPZBOU.js";import{g as ke}from"./get-current-from-ref-J2nPd355.js";import{n as d}from"./no-op-DX6rZLP_.js";import{i as Je}from"./is-keycode-character-generating-C88G8DHI.js";import{a as w}from"./mixed-values-CZ6RGhGs.js";const Ce="_textboxMultiline_1etpk_1",Fe="_disabled_1etpk_6",Ge="_grow_1etpk_11",Pe="_ghost_1etpk_15",Be="_textarea_1etpk_16",m={textboxMultiline:Ce,disabled:Fe,grow:Ge,ghost:Pe,textarea:Be},x="",c=De(function({grow:n=!1,disabled:r=!1,onBlur:a=d,onFocus:t=d,onInput:e=d,onKeyDown:f=d,onValueInput:H=d,onMouseDown:L=d,placeholder:he,propagateEscapeKeyDown:k=!0,revertOnEscapeKeyDown:J=!1,rows:be=3,spellCheck:Me=!1,validateOnBlur:D,value:l,...Ee},g){const C=Ie(null),[T,v]=s(x),V=p(function(u){const i=ke(C);i.value=u;const Xe=new window.Event("input",{bubbles:!0,cancelable:!0});i.dispatchEvent(Xe)},[]),Se=p(function(u){if(a(u),typeof D<"u"){const i=D(l);if(typeof i=="string"){V(i),v(x);return}if(i===!1){l!==T&&V(T),v(x);return}}v(x)},[a,T,V,D,l]),_e=p(function(u){t(u),v(l),u.currentTarget.select()},[t,l]),Ae=p(function(u){e(u);const i=u.currentTarget.value;H(i)},[e,H]),Re=p(function(u){if(f(u),u.key==="Escape"){J===!0&&(V(T),v(x)),k===!1&&u.stopPropagation(),u.currentTarget.blur();return}l===w&&Je(u.keyCode)===!1&&(u.preventDefault(),u.currentTarget.select())},[f,T,k,J,V,l]),ye=p(function(u){L(u),l===w&&(u.preventDefault(),u.currentTarget.select())},[L,l]),Oe=p(function(u){if(C.current=u,g!==null){if(typeof g=="function"){g(u);return}g.current=u}},[g]);return o("div",{class:Le([m.textboxMultiline,n===!0?m.grow:null,r===!0?m.disabled:null])},n===!0?o("div",{class:m.ghost},l===w?"Mixed":`${l} `):null,o("textarea",{...Ee,ref:Oe,class:m.textarea,disabled:r===!0,onBlur:Se,onFocus:_e,onInput:Ae,onKeyDown:Re,onMouseDown:ye,placeholder:he,rows:be,spellcheck:Me,tabIndex:0,value:l===w?"Mixed":l}))}),Qe={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox Multiline"},I=function(){const[n,r]=s("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,value:n})},h=function(){const[n,r]=s("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{...He(),onInput:a,value:n})},b=function(){const[n,r]=s("");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,placeholder:"Placeholder",value:n})},M=function(){const[n,r]=s("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,value:n})},E=function(){function n(){throw new Error("This function should not be called")}return o(c,{disabled:!0,onInput:n,value:"Text"})},S=function(){const[n,r]=s(w);function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,value:n})},_=function(){const[n,r]=s("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,revertOnEscapeKeyDown:!0,value:n})},A=function(){const[n,r]=s("Text");function a(e){const f=e.currentTarget.value;console.log(f),r(f)}function t(e){return e!==""}return o(c,{onInput:a,validateOnBlur:t,value:n})},R=function(){const[n,r]=s("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{onInput:a,rows:5,value:n})},y=function(){const[n,r]=s("Text");function a(t){const e=t.currentTarget.value;console.log(e),r(e)}return o(c,{grow:!0,onInput:a,rows:1,value:n})},O=function(){const n=Ie(null),[r,a]=s("Text");function t(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),a(e)}return o(c,{ref:n,onInput:t,value:r})},X=function(){const[n,r]=s("Text");function a(t){console.log(t),r(t)}return o(c,{onValueInput:a,value:n})};var F,G,P;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(P=(G=I.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var B,K,N;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var j,q,W;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(W=(q=b.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var Y,$,z;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(z=($=M.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var Q,U,Z;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" />;
}`,...(Z=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} value={value} />;
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ue,re,ae;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} revertOnEscapeKeyDown value={value} />;
}`,...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,le,se;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
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
}`,...(se=(le=A.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ie,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onInput={handleInput} rows={5} value={value} />;
}`,...(pe=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,fe,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline grow onInput={handleInput} rows={1} value={value} />;
}`,...(ge=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Te,ve,Ve;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`function () {
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
}`,...(Ve=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var me,xe,we;X.parameters={...X.parameters,docs:{...(me=X.parameters)==null?void 0:me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxMultiline onValueInput={handleValueInput} value={value} />;
}`,...(we=(xe=X.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};const Ue=["Empty","Focused","Placeholder","Filled","Disabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","Rows","AutoGrow","Ref","OnValueInput"];export{y as AutoGrow,E as Disabled,I as Empty,M as Filled,h as Focused,S as Mixed,X as OnValueInput,b as Placeholder,O as Ref,_ as RevertOnEscapeKeyDown,R as Rows,A as ValidateOnBlur,Ue as __namedExportsOrder,Qe as default};
