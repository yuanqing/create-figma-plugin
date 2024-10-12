import{_ as r}from"./preact.module-DSfP8QVG.js";import{c as ie,A as pe,q as i,h as l}from"./create-component-BQOTiC4n.js";import{u as te}from"./use-initial-focus-BIYZsJcx.js";import{I as de}from"./icon-cross-32-Dx8xq9TQ.js";import{I as me}from"./icon-search-32-B1ZMVpLc.js";import{c as he}from"./create-class-name-irFPZBOU.js";import{g as fe}from"./get-current-from-ref-J2nPd355.js";import{n as m}from"./no-op-DX6rZLP_.js";import"./create-icon-BACkom7L.js";const Ie="_searchTextbox_1ynmc_1",ve="_input_1ynmc_11",Te="_disabled_1ynmc_7",ge="_searchIcon_1ynmc_27",Ve="_clearButton_1ynmc_41",p={searchTextbox:Ie,input:ve,disabled:Te,searchIcon:ge,clearButton:Ve},E="",s=ie(function({clearOnEscapeKeyDown:e=!1,disabled:a=!1,onFocus:u=m,onInput:o=m,onKeyDown:n=m,onValueInput:_=m,placeholder:ae,propagateEscapeKeyDown:y=!0,spellCheck:oe=!1,value:d,...ue},c){const F=pe(null),w=i(function(){const t=fe(F);t.value=E;const S=new window.Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(S),t.focus()},[]),re=i(function(t){u(t),t.currentTarget.select()},[u]),se=i(function(t){o(t);const S=t.currentTarget.value;_(S)},[o,_]),le=i(function(t){if(n(t),t.key==="Escape"){if(e===!0&&d!==E){t.stopPropagation(),w();return}y===!1&&t.stopPropagation(),t.currentTarget.blur()}},[e,w,n,y,d]),ce=i(function(t){if(F.current=t,c!==null){if(typeof c=="function"){c(t);return}c.current=t}},[c]);return r("div",{class:he([p.searchTextbox,a===!0?p.disabled:null])},r("input",{...ue,ref:ce,class:p.input,disabled:a===!0,onFocus:re,onInput:se,onKeyDown:le,placeholder:ae,spellcheck:oe,tabIndex:0,type:"text",value:d}),r("div",{class:p.searchIcon},r(me,null)),d===E||a===!0?null:r("button",{class:p.clearButton,onClick:w,tabIndex:0},r(de,null)))}),De={parameters:{fixedWidth:!0},title:"Components/Search Textbox"},h=function(){const[e,a]=l("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{onInput:u,value:e})},f=function(){const[e,a]=l("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{...te(),onInput:u,value:e})},I=function(){function e(){throw new Error("This function should not be called")}return r(s,{disabled:!0,onInput:e,value:""})},v=function(){const[e,a]=l("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{onInput:u,value:e})},T=function(){const[e,a]=l("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{...te(),onInput:u,value:e})},g=function(){function e(){throw new Error("This function should not be called")}return r(s,{disabled:!0,onInput:e,value:"Text"})},V=function(){const[e,a]=l("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{onInput:u,placeholder:"Placeholder",value:e})},x=function(){const[e,a]=l("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(s,{clearOnEscapeKeyDown:!0,onInput:u,value:e})},b=function(){const[e,a]=l("Text");function u(o){console.log(o),a(o)}return r(s,{onValueInput:u,value:e})};var C,D,M;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,H,J;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,O,X;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="" />;
}`,...(X=(O=I.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var k,B,K;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(K=(B=v.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var R,N,q;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(q=(N=T.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var A,G,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
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
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Me=["Empty","EmptyFocused","EmptyDisabled","Filled","FilledFocused","FilledDisabled","Placeholder","ClearOnEscapeKeyDown","OnValueInput"];export{x as ClearOnEscapeKeyDown,h as Empty,I as EmptyDisabled,f as EmptyFocused,v as Filled,g as FilledDisabled,T as FilledFocused,b as OnValueInput,V as Placeholder,Me as __namedExportsOrder,De as default};
