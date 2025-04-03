import{_ as r}from"./preact.module-7_OotSvk.js";import{c as ie,A as pe,q as p,d as s}from"./create-component-CR2aSVXZ.js";import{u as te}from"./use-initial-focus-DTq0kKo3.js";import{I as de}from"./icon-close-24-D4m0QCAG.js";import{I as he}from"./icon-search-24-BRLpCSXW.js";import{c as me}from"./create-class-name-irFPZBOU.js";import{g as fe}from"./get-current-from-ref-J2nPd355.js";import{n as h}from"./no-op-DX6rZLP_.js";import"./create-icon-DvrWd2n3.js";const Ie="_searchTextbox_q5lbn_1",ve="_input_q5lbn_6",Te="_disabled_q5lbn_16",ge="_searchIcon_q5lbn_24",Ve="_clearButton_q5lbn_38",xe="_clearButtonBox_q5lbn_55",c={searchTextbox:Ie,input:ve,disabled:Te,searchIcon:ge,clearButton:Ve,clearButtonBox:xe},E="",l=ie(function({clearOnEscapeKeyDown:e=!1,disabled:a=!1,onFocus:u=h,onInput:o=h,onKeyDown:n=h,onValueInput:_=h,placeholder:ae,propagateEscapeKeyDown:F=!0,spellCheck:oe=!1,value:d,...ue},i){const y=pe(null),w=p(function(){const t=fe(y);t.value=E;const S=new window.Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(S),t.focus()},[]),re=p(function(t){u(t),t.currentTarget.select()},[u]),le=p(function(t){o(t);const S=t.currentTarget.value;_(S)},[o,_]),se=p(function(t){if(n(t),t.key==="Escape"){if(e===!0&&d!==E){t.stopPropagation(),w();return}F===!1&&t.stopPropagation(),t.currentTarget.blur()}},[e,w,n,F,d]),ce=p(function(t){if(y.current=t,i!==null){if(typeof i=="function"){i(t);return}i.current=t}},[i]);return r("div",{class:me([c.searchTextbox,a===!0?c.disabled:null])},r("input",{...ue,ref:ce,class:c.input,disabled:a===!0,onFocus:re,onInput:le,onKeyDown:se,placeholder:ae,spellcheck:oe,tabIndex:0,type:"text",value:d}),r("div",{class:c.searchIcon},r(he,null)),d===E||a===!0?null:r("button",{class:c.clearButton,onClick:w,tabIndex:0},r("div",{class:c.clearButtonBox},r(de,null))))}),qe={parameters:{fixedWidth:!0},title:"Components/Search Textbox"},m=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{onInput:u,value:e})},f=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{...te(),onInput:u,value:e})},I=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:e,value:""})},v=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{onInput:u,value:e})},T=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{...te(),onInput:u,value:e})},g=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:e,value:"Text"})},V=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{onInput:u,placeholder:"Placeholder",value:e})},x=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(l,{clearOnEscapeKeyDown:!0,onInput:u,value:e})},b=function(){const[e,a]=s("Text");function u(o){console.log(o),a(o)}return r(l,{onValueInput:u,value:e})};var B,C,q;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(q=(C=m.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var D,M,P;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var H,J,L;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="" />;
}`,...(L=(J=I.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var O,X,k;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(k=(X=v.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};var K,R,N;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(N=(R=T.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var A,G,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />;
}`,...(W=(G=g.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Y,j,z;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(z=(j=V.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var Q,U,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox clearOnEscapeKeyDown onInput={handleInput} value={value} />;
}`,...(Z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var $,ee,ne;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onValueInput={handleValueInput} value={value} />;
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const De=["Empty","EmptyFocused","EmptyDisabled","Filled","FilledFocused","FilledDisabled","Placeholder","ClearOnEscapeKeyDown","OnValueInput"];export{x as ClearOnEscapeKeyDown,m as Empty,I as EmptyDisabled,f as EmptyFocused,v as Filled,g as FilledDisabled,T as FilledFocused,b as OnValueInput,V as Placeholder,De as __namedExportsOrder,qe as default};
