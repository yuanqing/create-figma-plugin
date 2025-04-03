import{_ as s}from"./preact.module-7_OotSvk.js";import{c as An,A as C,d as c,q as p,y as Sn}from"./create-component-CR2aSVXZ.js";import{u as yn}from"./use-initial-focus-DTq0kKo3.js";import{I as Hn}from"./icon-frame-16-DHk6dLwb.js";import{u as On,m as V}from"./use-mouse-down-outside-C9Ms6DBz.js";import{I as Mn}from"./icon-check-16-D7BaBx8-.js";import{c as re}from"./create-class-name-irFPZBOU.js";import{g as E}from"./get-current-from-ref-J2nPd355.js";import{n as A}from"./no-op-DX6rZLP_.js";import{a as b,I as _,V as fe}from"./constants-ByKZPpIE.js";import{c as de}from"./compute-next-value-cPEw4eRZ.js";import{i as qn}from"./is-keycode-character-generating-C88G8DHI.js";import{s as S}from"./textbox.module-BTiVByXg.js";import"./create-icon-DvrWd2n3.js";const zn="_top_3lpap_1",Dn="_bottom_3lpap_5",ve={top:zn,bottom:Dn},j="",f=An(function({disabled:e=!1,filter:n=!1,icon:t,onChange:r=A,onInput:u=A,onKeyDown:a=A,onMouseDown:ae=A,onPaste:le=A,onValueInput:se=A,placeholder:dn,propagateEscapeKeyDown:ce=!0,revertOnEscapeKeyDown:ie=!1,spellCheck:vn=!1,strict:q=!1,top:Q=!1,value:x,...Z},y){if(typeof t=="string"&&t.length!==1)throw new Error(`String \`icon\` must be a single character: ${t}`);const ee=C(null),z=C(null),ne=C(null),te=C(!1),[oe,mn]=c(x),[ue,gn]=c(j),[d,pe]=c(!1),[T,H]=c(b),v=n===!0?Ln(me(Z.options),x,ue):me(Z.options),g=p(function(){E(z).select()},[]),D=p(function(){E(z).blur()},[]),O=p(function(o){const l=E(ne);if(o===b){l.scrollTop=0;return}const i=l.querySelector(`[${_}='${o}']`);if(i===null)throw new Error("`selectedElement` is `null`");const h=i.getBoundingClientRect().y-l.getBoundingClientRect().y;if(h<l.scrollTop){l.scrollTop=h;return}const M=h+i.offsetHeight;M>l.scrollTop+l.offsetHeight&&(l.scrollTop=M-l.offsetHeight)},[]),L=p(function(o){const l=cn(v,o);l===b&&gn(o),H(l),O(l)},[v,O]),w=p(function(o){const l=E(z);l.value=o;const i=new window.Event("input",{bubbles:!0,cancelable:!0});l.dispatchEvent(i)},[]),m=p(function(){pe(!1)},[]),I=p(function(){Rn(E(ee),E(ne),Q),mn(x),L(x),pe(!0)},[Q,L,x]),hn=p(function(o){u(o);const l=o.currentTarget.value;if(L(l),se(l),d!==!0){if(te.current===!0){te.current=!1;return}I()}},[d,u,se,I,L]),bn=p(function(o){a(o);const l=o.currentTarget,i=o.key;if(i==="ArrowUp"||i==="ArrowDown"){if(o.preventDefault(),d===!1){I();return}if(v.length===0)return;const h=i==="ArrowUp"?Cn(v,T):_n(v,T);if(h===b){H(b),w(ue),g(),O(b);return}H(h);const M=be(v,h);if(M===null)throw new Error("`optionValue` is `null`");w(M.value),g(),O(h);return}if(i==="Escape"){if(o.preventDefault(),ce===!1&&o.stopPropagation(),ie===!0&&(te.current=!0,w(oe)),d===!0){m();return}D();return}if(i==="Enter"){if(o.preventDefault(),g(),d===!0){m();return}I();return}if(i==="Tab"){m();return}if(q!==!1&&!(o.ctrlKey===!0||o.metaKey===!0)&&qn(o.keyCode)===!0){const h=de(l,o.key);if(he(v,h)===!0)return;o.preventDefault()}},[ue,d,a,v,oe,ce,ie,T,q,m,I,O,D,g,w]),xn=p(function(o){ae(o),d!==!0&&(o.preventDefault(),g(),I())},[d,ae,g,I]),Vn=p(function(o){if(le(o),q===!1)return;if(o.clipboardData===null)throw new Error("`event.clipboardData` is `null`");const l=de(o.currentTarget,o.clipboardData.getData("Text"));he(v,l)!==!0&&o.preventDefault()},[le,v,q]),In=p(function(o){r(o);const l=o.currentTarget.getAttribute(_);if(l===null)throw new Error("`id` is `null`");H(l);const i=be(v,l);if(i===null)throw new Error("`optionValue` is `null`");w(i.value),g(),m()},[r,v,m,g,w]),Tn=p(function(o){const l=o.currentTarget.getAttribute(_);if(l===null)throw new Error("`id` is `null`");l!==T&&H(l)},[T]),wn=p(function(){d!==!1&&(m(),D())},[d,D,m]);On({onMouseDownOutside:wn,ref:ee}),Sn(function(){function o(){d!==!1&&(m(),g())}return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}},[d,m,g]);const En=p(function(o){if(z.current=o,y!==null){if(typeof y=="function"){y(o);return}y.current=o}},[y]);return s("div",{ref:ee,class:re([S.textbox,typeof t>"u"?null:S.hasIcon,e===!0?S.disabled:null])},s("div",{class:S.inner},s("input",{...Z,ref:En,class:S.input,disabled:e===!0,onInput:hn,onKeyDown:bn,onMouseDown:xn,onPaste:Vn,placeholder:dn,spellcheck:vn,tabIndex:0,type:"text",value:x}),typeof t>"u"?null:s("div",{class:S.icon},t),s("div",{ref:ne,class:re([V.menu,e===!0||d===!1?V.hidden:null,Q===!0?ve.top:ve.bottom])},v.map(function(o,l){return typeof o=="string"?s("hr",{key:l,class:V.optionSeparator}):"header"in o?s("h1",{key:l,class:V.optionHeader},o.header):s("label",{key:l,class:re([V.optionValue,o.disabled===!0?V.optionValueDisabled:null,o.disabled!==!0&&o.id===T?V.optionValueSelected:null])},s("input",{checked:x===o.value,class:V.input,disabled:o.disabled===!0,onChange:x===o.value?void 0:In,onClick:x===o.value?m:void 0,onMouseMove:Tn,tabIndex:-1,type:"radio",value:`${o.value}`,[_]:o.id}),o.value===oe?s("div",{class:V.checkIcon},s(Mn,null)):null,o.value)}))))});function me(e){return e.map(function(n,t){return typeof n!="string"&&"value"in n?{...n,id:`${t}`}:n})}function Ln(e,n,t){return n===j?e:cn(e,n)===b?e.filter(function(u){return typeof u!="string"&&"value"in u?ge(u.value,n)===!0:!1}):t===j?e:e.filter(function(u){return typeof u!="string"&&"value"in u?ge(u.value,t)===!0:!1})}function ge(e,n){return e.toLowerCase().indexOf(n.toLowerCase())!==-1}function cn(e,n){for(const t of e)if(typeof t!="string"&&"value"in t&&t.value===n)return t.id;return b}function he(e,n){if(n===j)return!0;for(const t of e)if(typeof t!="string"&&"value"in t&&t.value.toLowerCase().indexOf(n.toLowerCase())===0)return!0;return!1}function be(e,n){for(const t of e)if(typeof t!="string"&&"id"in t&&t.id===n)return t;return null}function pn(e,n){let t=0;for(const r of e){if(typeof r!="string"&&"id"in r&&r.id===n)return t;t+=1}return-1}function Cn(e,n){if(n===b){const u=xe(e,e.length-1);return u===null?null:u.id}const t=pn(e,n);if(t===-1)throw new Error(`No option with \`id\` ${n}`);if(t===0)return null;const r=xe(e,t-1);return r===null?null:r.id}function _n(e,n){if(n===b){const u=Ve(e,0);return u===null?null:u.id}const t=pn(e,n);if(t===-1)throw new Error(`No option with \`id\` ${n}`);if(t===e.length-1)return null;const r=Ve(e,t+1);return r===null?null:r.id}function xe(e,n){if(n<0)throw new Error("`index` < 0");if(n>e.length-1)throw new Error("`index` > `options.length` - 1");return Fn(e.slice(0,n+1))}function Ve(e,n){if(n<0)throw new Error("`index` < 0");if(n>e.length-1)throw new Error("`index` > `options.length` - 1");return fn(e.slice(n))}function fn(e){for(const n of e)if(typeof n!="string"&&"id"in n&&n.disabled!==!0)return n;return null}function Fn(e){return fn(e.slice().reverse())}function Rn(e,n,t){const r=e.getBoundingClientRect().top,u=t===!0?r-fe:window.innerHeight-r-e.offsetHeight-fe;n.style.maxHeight=`${u}px`}const Zn={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox Autocomplete"},F=function(){const[e,n]=c(""),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,value:e})},R=function(){const[e,n]=c(""),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{...yn(),onInput:r,options:t,value:e})},k=function(){const[e,n]=c(""),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,placeholder:"Placeholder",value:e})},J=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,value:e})},X=function(){const e=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function n(){throw new Error("This function should not be called")}return s(f,{disabled:!0,onInput:n,options:e,value:"foo"})},B=function(){const[e,n]=c("foo"),t=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,value:e})},P=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{icon:s(Hn,null),onInput:r,options:t,value:e})},N=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{icon:"W",onInput:r,options:t,value:e})},$=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,revertOnEscapeKeyDown:!0,value:e})},K=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,strict:!0,value:e})},W=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{filter:!0,onInput:r,options:t,value:e})},U=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{filter:!0,onInput:r,options:t,strict:!0,value:e})},G=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){const a=u.currentTarget.value;console.log(a),n(a)}return s(f,{onInput:r,options:t,top:!0,value:e})},Y=function(){const[e,n]=c("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function r(u){console.log(u),n(u)}return s(f,{onValueInput:r,options:t,value:e})};var Ie,Te,we;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} />;
}`,...(we=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ee,Ae,Se;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete {...useInitialFocus()} onInput={handleInput} options={options} value={value} />;
}`,...(Se=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ye,He,Oe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} placeholder="Placeholder" value={value} />;
}`,...(Oe=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Me,qe,ze;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} />;
}`,...(ze=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var De,Le,Ce;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:`function () {
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxAutocomplete disabled onInput={handleInput} options={options} value="foo" />;
}`,...(Ce=(Le=X.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};var _e,Fe,Re;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    disabled: true,
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} />;
}`,...(Re=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Je,Xe;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete icon={<IconFrame16 />} onInput={handleInput} options={options} value={value} />;
}`,...(Xe=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Be,Pe,Ne;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete icon="W" onInput={handleInput} options={options} value={value} />;
}`,...(Ne=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var $e,Ke,We;$.parameters={...$.parameters,docs:{...($e=$.parameters)==null?void 0:$e.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} revertOnEscapeKeyDown value={value} />;
}`,...(We=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Ue,Ge,Ye;K.parameters={...K.parameters,docs:{...(Ue=K.parameters)==null?void 0:Ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} strict value={value} />;
}`,...(Ye=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var je,Qe,Ze;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete filter onInput={handleInput} options={options} value={value} />;
}`,...(Ze=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var en,nn,tn;U.parameters={...U.parameters,docs:{...(en=U.parameters)==null?void 0:en.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete filter onInput={handleInput} options={options} strict value={value} />;
}`,...(tn=(nn=U.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var on,un,rn;G.parameters={...G.parameters,docs:{...(on=G.parameters)==null?void 0:on.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onInput={handleInput} options={options} top value={value} />;
}`,...(rn=(un=G.parameters)==null?void 0:un.docs)==null?void 0:rn.source}}};var an,ln,sn;Y.parameters={...Y.parameters,docs:{...(an=Y.parameters)==null?void 0:an.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<TextboxAutocompleteOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, '-', {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxAutocomplete onValueInput={handleValueInput} options={options} value={value} />;
}`,...(sn=(ln=Y.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};const et=["Empty","Focused","Placeholder","Filled","Disabled","DisabledOption","Icon","TextIcon","RevertOnEscapeKeyDown","Strict","Filter","StrictFilter","MenuTop","OnValueInput"];export{X as Disabled,B as DisabledOption,F as Empty,J as Filled,W as Filter,R as Focused,P as Icon,G as MenuTop,Y as OnValueInput,k as Placeholder,$ as RevertOnEscapeKeyDown,K as Strict,U as StrictFilter,N as TextIcon,et as __namedExportsOrder,Zn as default};
