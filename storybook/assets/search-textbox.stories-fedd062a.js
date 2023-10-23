import{c as ie,_ as pe,T as i,h as s}from"./create-component-b0512abd.js";import{u as te}from"./use-initial-focus-57bdde46.js";import{I as de}from"./icon-cross-32-9903a829.js";import{I as he}from"./icon-search-32-6f1a60ac.js";import{c as me}from"./create-class-name-71c46838.js";import{g as fe}from"./get-current-from-ref-47f174f6.js";import{n as h}from"./no-op-cb277961.js";import{o as r}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";const Ie="_searchTextbox_1ynmc_1",ve="_input_1ynmc_11",Te="_disabled_1ynmc_7",ge="_searchIcon_1ynmc_27",Ve="_clearButton_1ynmc_41",p={searchTextbox:Ie,input:ve,disabled:Te,searchIcon:ge,clearButton:Ve},E="",c=ie(function({clearOnEscapeKeyDown:e=!1,disabled:a=!1,onFocus:u=h,onInput:o=h,onKeyDown:n=h,onValueInput:_=h,placeholder:ae,propagateEscapeKeyDown:y=!0,spellCheck:oe=!1,value:d,...ue},l){const F=pe(null),w=i(function(){const t=fe(F);t.value=E;const S=new window.Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(S),t.focus()},[]),re=i(function(t){u(t),t.currentTarget.select()},[u]),ce=i(function(t){o(t);const S=t.currentTarget.value;_(S)},[o,_]),se=i(function(t){if(n(t),t.key==="Escape"){if(e===!0&&d!==E){t.stopPropagation(),w();return}y===!1&&t.stopPropagation(),t.currentTarget.blur()}},[e,w,n,y,d]),le=i(function(t){if(F.current=t,l!==null){if(typeof l=="function"){l(t);return}l.current=t}},[l]);return r("div",{class:me([p.searchTextbox,a===!0?p.disabled:null]),children:[r("input",{...ue,ref:le,class:p.input,disabled:a===!0,onFocus:re,onInput:ce,onKeyDown:se,placeholder:ae,spellcheck:oe,tabIndex:0,type:"text",value:d}),r("div",{class:p.searchIcon,children:r(he,{})}),d===E||a===!0?null:r("button",{class:p.clearButton,onClick:w,tabIndex:0,children:r(de,{})})]})}),Me={parameters:{fixedWidth:!0},title:"Components/Search Textbox"},m=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{onInput:u,value:e})},f=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{...te(),onInput:u,value:e})},I=function(){function e(){throw new Error("This function should not be called")}return r(c,{disabled:!0,onInput:e,value:""})},v=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{onInput:u,value:e})},T=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{...te(),onInput:u,value:e})},g=function(){function e(){throw new Error("This function should not be called")}return r(c,{disabled:!0,onInput:e,value:"Text"})},V=function(){const[e,a]=s("");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{onInput:u,placeholder:"Placeholder",value:e})},x=function(){const[e,a]=s("Text");function u(o){const n=o.currentTarget.value;console.log(n),a(n)}return r(c,{clearOnEscapeKeyDown:!0,onInput:u,value:e})},b=function(){const[e,a]=s("Text");function u(o){console.log(o),a(o)}return r(c,{onValueInput:u,value:e})};var C,D,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,H,J;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
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
}`,...(K=(B=v.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var R,N,G;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(G=(N=T.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var W,Y,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />;
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,z,A;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(A=(z=V.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var Q,U,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Pe=["Empty","EmptyFocused","EmptyDisabled","Filled","FilledFocused","FilledDisabled","Placeholder","ClearOnEscapeKeyDown","OnValueInput"];export{x as ClearOnEscapeKeyDown,m as Empty,I as EmptyDisabled,f as EmptyFocused,v as Filled,g as FilledDisabled,T as FilledFocused,b as OnValueInput,V as Placeholder,Pe as __namedExportsOrder,Me as default};
//# sourceMappingURL=search-textbox.stories-fedd062a.js.map
