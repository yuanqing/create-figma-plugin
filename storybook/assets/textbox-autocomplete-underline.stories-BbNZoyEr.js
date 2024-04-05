import{y as r}from"./preact.module-Cko36Lti.js";import{p as s}from"./create-component-B1Y1oDBF.js";import{u as pe}from"./use-initial-focus-DfmxErEH.js";import{I as ve}from"./icon-layer-frame-16-Bjyv49bR.js";import{T as l}from"./textbox-autocomplete-C08k6ezA.js";import"./create-icon-D5KCgWRi.js";import"./use-mouse-down-outside-_doBYBDK.js";import"./get-current-from-ref-J2nPd355.js";import"./icon-menu-checkmark-checked-16-CcodR_Ny.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./constants-sCBnAk_k.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./textbox.module-BcK5ReZh.js";const qe={parameters:{fixedWidth:!0},tags:["3"],title:"Components/Textbox Autocomplete/Underline"},c=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n,variant:"underline"})},i=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{...pe(),onInput:u,options:a,value:n,variant:"underline"})},p=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,placeholder:"Placeholder",value:n,variant:"underline"})},v=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n,variant:"underline"})},d=function(){const n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function t(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:t,options:n,value:"foo",variant:"underline"})},m=function(){const[n,t]=s("foo"),a=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n,variant:"underline"})},f=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{icon:r(ve,null),onInput:u,options:a,value:n,variant:"underline"})},b=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{icon:"W",onInput:u,options:a,value:n,variant:"underline"})},V=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},x=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,strict:!0,value:n,variant:"underline"})},I=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{filter:!0,onInput:u,options:a,value:n,variant:"underline"})},g=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{filter:!0,onInput:u,options:a,strict:!0,value:n,variant:"underline"})},T=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,top:!0,value:n,variant:"underline"})},h=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){console.log(o),t(o)}return r(l,{onValueInput:u,options:a,value:n,variant:"underline"})};var w,A,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var H,E,q;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete {...useInitialFocus()} onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(q=(E=i.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var z,y,O;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} placeholder="Placeholder" value={value} variant="underline" />;
}`,...(O=(y=p.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var L,M,F;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(F=(M=v.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var J,X,D;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete disabled onInput={handleInput} options={options} value="foo" variant="underline" />;
}`,...(D=(X=d.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var K,P,W;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,R,U;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete icon={<IconLayerFrame16 />} onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var C,j,k;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete icon="W" onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,G,N;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} revertOnEscapeKeyDown value={value} variant="underline" />;
}`,...(N=(G=V.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} strict value={value} variant="underline" />;
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} value={value} variant="underline" />;
}`,...(ne=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} strict value={value} variant="underline" />;
}`,...(ae=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ue,re,le;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} top value={value} variant="underline" />;
}`,...(le=(re=T.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onValueInput={handleValueInput} options={options} value={value} variant="underline" />;
}`,...(ie=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};const ze=["Empty","Focused","Placeholder","Filled","Disabled","DisabledOption","Icon","TextIcon","RevertOnEscapeKeyDown","Strict","Filter","StrictFilter","MenuTop","OnValueInput"];export{d as Disabled,m as DisabledOption,c as Empty,v as Filled,I as Filter,i as Focused,f as Icon,T as MenuTop,h as OnValueInput,p as Placeholder,V as RevertOnEscapeKeyDown,x as Strict,g as StrictFilter,b as TextIcon,ze as __namedExportsOrder,qe as default};
