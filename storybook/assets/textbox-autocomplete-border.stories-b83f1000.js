import{h as s}from"./create-component-b0512abd.js";import{u as ve}from"./use-initial-focus-57bdde46.js";import{I as ie}from"./icon-layer-frame-16-89e1c06f.js";import{T as l}from"./textbox-autocomplete-40a3642f.js";import{o as r}from"./jsxRuntime.module-632ba37d.js";import"./preact.module-fa42f7d1.js";import"./create-icon-59b2c318.js";import"./use-mouse-down-outside-bb94ce97.js";import"./get-current-from-ref-47f174f6.js";import"./icon-menu-checkmark-checked-16-11f1d34a.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./constants-4a59d305.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";import"./textbox.module-917ccc0f.js";const ze={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Textbox Autocomplete/Border"},c=function(){const[t,o]=s(""),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,value:t,variant:"border"})},p=function(){const[t,o]=s(""),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{...ve(),onInput:u,options:n,value:t,variant:"border"})},v=function(){const[t,o]=s(""),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,placeholder:"Placeholder",value:t,variant:"border"})},i=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,value:t,variant:"border"})},d=function(){const t=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function o(){throw new Error("This function should not be called")}return r(l,{disabled:!0,onInput:o,options:t,value:"foo",variant:"border"})},m=function(){const[t,o]=s("foo"),n=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,value:t,variant:"border"})},b=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{icon:r(ie,{}),onInput:u,options:n,value:t,variant:"border"})},f=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{icon:"W",onInput:u,options:n,value:t,variant:"border"})},V=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,revertOnEscapeKeyDown:!0,value:t,variant:"border"})},x=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,strict:!0,value:t,variant:"border"})},I=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{filter:!0,onInput:u,options:n,value:t,variant:"border"})},g=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{filter:!0,onInput:u,options:n,strict:!0,value:t,variant:"border"})},T=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){const e=a.currentTarget.value;console.log(e),o(e)}return r(l,{onInput:u,options:n,top:!0,value:t,variant:"border"})},h=function(){const[t,o]=s("foo"),n=[{value:"foo"},{value:"bar"},{value:"baz"},"-",{header:"Header"},{value:"qux"}];function u(a){console.log(a),o(a)}return r(l,{onValueInput:u,options:n,value:t,variant:"border"})};var w,A,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="border" />;
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
  return <TextboxAutocomplete {...useInitialFocus()} onInput={handleInput} options={options} value={value} variant="border" />;
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var z,O,y;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} placeholder="Placeholder" value={value} variant="border" />;
}`,...(y=(O=v.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var L,M,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="border" />;
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
  return <TextboxAutocomplete disabled onInput={handleInput} options={options} value="foo" variant="border" />;
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
  return <TextboxAutocomplete onInput={handleInput} options={options} value={value} variant="border" />;
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,B,R;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete icon={<IconLayerFrame16 />} onInput={handleInput} options={options} value={value} variant="border" />;
}`,...(R=(B=b.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var C,j,k;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete icon="W" onInput={handleInput} options={options} value={value} variant="border" />;
}`,...(k=(j=f.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var G,N,Q;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} revertOnEscapeKeyDown value={value} variant="border" />;
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
  return <TextboxAutocomplete onInput={handleInput} options={options} strict value={value} variant="border" />;
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} value={value} variant="border" />;
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,ne;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete filter onInput={handleInput} options={options} strict value={value} variant="border" />;
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ue,re,le;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
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
  return <TextboxAutocomplete onInput={handleInput} options={options} top value={value} variant="border" />;
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
  return <TextboxAutocomplete onValueInput={handleValueInput} options={options} value={value} variant="border" />;
}`,...(pe=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Oe=["Empty","Focused","Placeholder","Filled","Disabled","DisabledOption","Icon","TextIcon","RevertOnEscapeKeyDown","Strict","Filter","StrictFilter","MenuTop","OnValueInput"];export{d as Disabled,m as DisabledOption,c as Empty,i as Filled,I as Filter,p as Focused,b as Icon,T as MenuTop,h as OnValueInput,v as Placeholder,V as RevertOnEscapeKeyDown,x as Strict,g as StrictFilter,f as TextIcon,Oe as __namedExportsOrder,ze as default};
//# sourceMappingURL=textbox-autocomplete-border.stories-b83f1000.js.map
