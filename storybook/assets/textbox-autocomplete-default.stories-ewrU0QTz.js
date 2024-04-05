import{y as r}from"./preact.module-Cko36Lti.js";import{p as s}from"./create-component-B1Y1oDBF.js";import{u as ve}from"./use-initial-focus-DfmxErEH.js";import{I as ie}from"./icon-layer-frame-16-Bjyv49bR.js";import{T as l}from"./textbox-autocomplete-C08k6ezA.js";import"./create-icon-D5KCgWRi.js";import"./use-mouse-down-outside-_doBYBDK.js";import"./get-current-from-ref-J2nPd355.js";import"./icon-menu-checkmark-checked-16-CcodR_Ny.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./constants-sCBnAk_k.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./textbox.module-BcK5ReZh.js";const qe={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox Autocomplete/Default"},c=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n})},p=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{...ve(),onInput:u,options:a,value:n})},v=function(){const[n,t]=s(""),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,placeholder:"Placeholder",value:n})},i=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n})},d=function(){const n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function t(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:t,options:n,value:"foo"})},m=function(){const[n,t]=s("foo"),a=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,value:n})},f=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{icon:r(ie,null),onInput:u,options:a,value:n})},b=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{icon:"W",onInput:u,options:a,value:n})},V=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,revertOnEscapeKeyDown:!0,value:n})},x=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,strict:!0,value:n})},I=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{filter:!0,onInput:u,options:a,value:n})},g=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{filter:!0,onInput:u,options:a,strict:!0,value:n})},T=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){const e=o.currentTarget.value;console.log(e),t(e)}return r(l,{onInput:u,options:a,top:!0,value:n})},h=function(){const[n,t]=s("foo"),a=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(o){console.log(o),t(o)}return r(l,{onValueInput:u,options:a,value:n})};var w,A,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
}`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var H,E,q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var z,y,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
}`,...(O=(y=v.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var L,M,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
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
}`,...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var J,X,D;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} />;
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,R,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete icon={<IconLayerFrame16 />} onInput={handleInput} options={options} value={value} />;
}`,...(C=(R=f.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var j,k,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
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
}`,...(B=(k=b.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,N,Q;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
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
}`,...(Q=(N=V.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,Y,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} value={value} />;
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} strict value={value} />;
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
  return <TextboxAutocomplete onInput={handleInput} options={options} top value={value} />;
}`,...(le=(re=T.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,pe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
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
}`,...(pe=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const ze=["Empty","Focused","Placeholder","Filled","Disabled","DisabledOption","Icon","TextIcon","RevertOnEscapeKeyDown","Strict","Filter","StrictFilter","MenuTop","OnValueInput"];export{d as Disabled,m as DisabledOption,c as Empty,i as Filled,I as Filter,p as Focused,f as Icon,T as MenuTop,h as OnValueInput,v as Placeholder,V as RevertOnEscapeKeyDown,x as Strict,g as StrictFilter,b as TextIcon,ze as __namedExportsOrder,qe as default};
