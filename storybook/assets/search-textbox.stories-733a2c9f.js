import{_ as ce,T as p,h as s}from"./hooks.module-7c0d6ca2.js";import{u as ne}from"./use-initial-focus-e560a4b5.js";import{I as se}from"./icon-cross-32-dd47d561.js";import{I as ie}from"./icon-search-32-634e9659.js";import{c as pe}from"./create-class-name-71c46838.js";import{g as de}from"./get-current-from-ref-47f174f6.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";const he="_searchTextbox_1ynmc_1",me="_input_1ynmc_11",fe="_disabled_1ynmc_7",Ie="_searchIcon_1ynmc_27",ve="_clearButton_1ynmc_41",i={searchTextbox:he,input:me,disabled:fe,searchIcon:Ie,clearButton:ve},d="";function l({clearOnEscapeKeyDown:e=!1,disabled:t=!1,name:u,onFocus:a=function(){},onInput:n=function(){},onKeyDown:b=function(){},onValueInput:S=function(){},placeholder:te,propagateEscapeKeyDown:E=!0,spellCheck:ue=!1,value:c,...ae}){const _=ce(null),w=p(function(){const o=de(_);o.value=d;const y=document.createEvent("Event");y.initEvent("input",!0,!0),o.dispatchEvent(y),o.focus()},[]),oe=p(function(o){a(o),o.currentTarget.select()},[a]),re=p(function(o){S(o.currentTarget.value,u),n(o)},[u,n,S]),le=p(function(o){if(b(o),o.key==="Escape"){if(e===!0&&c!==d&&c!==null){o.stopPropagation(),w();return}E===!1&&o.stopPropagation(),o.currentTarget.blur()}},[e,w,b,E,c]);return r("div",{class:pe([i.searchTextbox,t===!0?i.disabled:null]),children:[r("input",{...ae,ref:_,class:i.input,disabled:t===!0,name:u,onFocus:oe,onInput:re,onKeyDown:le,placeholder:te,spellcheck:ue,tabIndex:0,type:"text",value:c===null?d:c}),r("div",{class:i.searchIcon,children:r(ie,{})}),c===null||c===d||t===!0?null:r("button",{class:i.clearButton,onClick:w,tabIndex:0,children:r(se,{})})]})}const ye={parameters:{fixedWidth:!0},title:"Components/Search Textbox"},h=function(){const[e,t]=s("");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{onInput:u,value:e})},m=function(){const[e,t]=s("");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{...ne(),onInput:u,value:e})},f=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:e,value:""})},I=function(){const[e,t]=s("Text");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{onInput:u,value:e})},v=function(){const[e,t]=s("Text");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{...ne(),onInput:u,value:e})},T=function(){function e(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:e,value:"Text"})},g=function(){const[e,t]=s("");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{onInput:u,placeholder:"placeholder",value:e})},V=function(){const[e,t]=s("Text");function u(a){const n=a.currentTarget.value;console.log(n),t(n)}return r(l,{clearOnEscapeKeyDown:!0,onInput:u,value:e})},x=function(){const[e,t]=s("Text");function u(a){console.log(a),t(a)}return r(l,{onValueInput:u,value:e})};var F,C,D;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var M,H,J;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,O,X;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="" />;
}`,...(X=(O=f.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var B,P,k;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(k=(P=I.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var K,R,N;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(N=(R=v.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var G,W,Y;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />;
}`,...(Y=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var j,q,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,Q,U;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox clearOnEscapeKeyDown onInput={handleInput} value={value} />;
}`,...(U=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onValueInput={handleValueInput} value={value} />;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Fe=["Empty","EmptyFocused","EmptyDisabled","Filled","FilledFocused","FilledDisabled","Placeholder","ClearOnEscapeKeyDown","OnValueInput"];export{V as ClearOnEscapeKeyDown,h as Empty,f as EmptyDisabled,m as EmptyFocused,I as Filled,T as FilledDisabled,v as FilledFocused,x as OnValueInput,g as Placeholder,Fe as __namedExportsOrder,ye as default};
//# sourceMappingURL=search-textbox.stories-733a2c9f.js.map
