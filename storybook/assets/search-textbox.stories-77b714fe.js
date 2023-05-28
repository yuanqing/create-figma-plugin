import{_ as re,T as p,h as c}from"./hooks.module-6e460002.js";import{u as $}from"./use-initial-focus-83cf3b2e.js";import{I as le}from"./icon-cross-32-fec1c7a2.js";import{I as se}from"./icon-search-32-3ba25bdc.js";import{c as ce}from"./create-class-name-71c46838.js";import{g as ie}from"./get-current-from-ref-47f174f6.js";import{o as a}from"./jsxRuntime.module-893eb125.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";const pe="_searchTextbox_1ynmc_1",de="_input_1ynmc_11",he="_disabled_1ynmc_7",me="_searchIcon_1ynmc_27",fe="_clearButton_1ynmc_41",i={searchTextbox:pe,input:de,disabled:he,searchIcon:me,clearButton:fe},d="";function l({clearOnEscapeKeyDown:e=!1,disabled:t=!1,name:u,onInput:o=function(){},onValueInput:n=function(){},placeholder:ee,propagateEscapeKeyDown:b=!0,spellCheck:ne=!1,value:s,...te}){const S=re(null),w=p(function(){const r=ie(S);r.value=d;const E=document.createEvent("Event");E.initEvent("input",!0,!0),r.dispatchEvent(E),r.focus()},[]),ue=p(function(r){r.currentTarget.select()},[]),oe=p(function(r){n(r.currentTarget.value,u),o(r)},[u,o,n]),ae=p(function(r){if(r.key==="Escape"){if(e===!0&&s!==d&&s!==null){r.stopPropagation(),w();return}b===!1&&r.stopPropagation(),r.currentTarget.blur()}},[e,w,b,s]);return a("div",{class:ce([i.searchTextbox,t===!0?i.disabled:null]),children:[a("input",{...te,ref:S,class:i.input,disabled:t===!0,name:u,onFocus:ue,onInput:oe,onKeyDown:ae,placeholder:ee,spellcheck:ne,tabIndex:0,type:"text",value:s===null?d:s}),a("div",{class:i.searchIcon,children:a(se,{})}),s===null||s===d||t===!0?null:a("button",{class:i.clearButton,onClick:w,tabIndex:0,children:a(le,{})})]})}const Ee={parameters:{fixedWidth:!0},title:"Components/Search Textbox"},h=function(){const[e,t]=c("");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{onInput:u,value:e})},m=function(){const[e,t]=c("");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{...$(),onInput:u,value:e})},f=function(){function e(){throw new Error("This function should not be called")}return a(l,{disabled:!0,onInput:e,value:""})},I=function(){const[e,t]=c("Text");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{onInput:u,value:e})},v=function(){const[e,t]=c("Text");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{...$(),onInput:u,value:e})},T=function(){function e(){throw new Error("This function should not be called")}return a(l,{disabled:!0,onInput:e,value:"Text"})},g=function(){const[e,t]=c("");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{onInput:u,placeholder:"placeholder",value:e})},V=function(){const[e,t]=c("Text");function u(o){const n=o.currentTarget.value;console.log(n),t(n)}return a(l,{clearOnEscapeKeyDown:!0,onInput:u,value:e})},x=function(){const[e,t]=c("Text");function u(o){console.log(o),t(o)}return a(l,{onValueInput:u,value:e})};var _,y,F;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(F=(y=h.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var C,D,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var H,J,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="" />;
}`,...(L=(J=f.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var O,X,B;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} value={value} />;
}`,...(B=(X=I.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var P,k,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(K=(k=v.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var R,N,G;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />;
}`,...(G=(N=T.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var W,Y,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,z,A;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox clearOnEscapeKeyDown onInput={handleInput} value={value} />;
}`,...(A=(z=V.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var Q,U,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SearchTextbox onValueInput={handleValueInput} value={value} />;
}`,...(Z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const _e=["Empty","EmptyFocused","EmptyDisabled","Filled","FilledFocused","FilledDisabled","Placeholder","ClearOnEscapeKeyDown","OnValueInput"];export{V as ClearOnEscapeKeyDown,h as Empty,f as EmptyDisabled,m as EmptyFocused,I as Filled,T as FilledDisabled,v as FilledFocused,x as OnValueInput,g as Placeholder,_e as __namedExportsOrder,Ee as default};
//# sourceMappingURL=search-textbox.stories-77b714fe.js.map
