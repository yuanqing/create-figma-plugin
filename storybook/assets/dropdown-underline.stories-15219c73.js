import{k as bn}from"./preact.module-6cc36cb9.js";import{h as s}from"./hooks.module-6e460002.js";import{u as Tn}from"./use-initial-focus-83cf3b2e.js";import{I as xn}from"./icon-layer-frame-16-6719cb4a.js";import{V as Sn}from"./vertical-space-1279b60e.js";import{B as An}from"./button-b81342dc.js";import{D as i}from"./dropdown-ee0cffb5.js";import{o as l}from"./jsxRuntime.module-893eb125.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";import"./use-mouse-down-outside-a27f62ba.js";import"./get-current-from-ref-47f174f6.js";import"./icon-control-chevron-down-8-44d6ef4a.js";import"./icon-menu-checkmark-checked-16-63abc2a0.js";const Yn={parameters:{fixedWidth:!0,order:3},title:"Components/Dropdown/Underline"},d=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},v=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(r){return{value:`${r+1}`}});function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},g=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,placeholder:"placeholder",value:n,variant:"underline"})},h=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},f=function(){const[n,a]=s("42"),t=[...Array(100).keys()].map(function(r){return{value:`${r+1}`}});function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},m=function(){const[n,a]=s(Array(20).fill("foo").join(" ")),t=[{value:Array(20).fill("foo").join(" ")},{value:Array(20).fill("bar").join(" ")},{value:Array(20).fill("baz").join(" ")},{separator:!0},{header:"Header"},{value:Array(4).fill("qux").join(" ")}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},V=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{...Tn(),onChange:o,options:t,value:n,variant:"underline"})},w=function(){const n=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function a(){throw new Error("This function should not be called")}return l(i,{disabled:!0,onChange:a,options:n,value:"foo",variant:"underline"})},y=function(){const[n,a]=s("foo"),t=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},C=function(){const[n,a]=s("a"),t=[{text:"foo",value:"a"},{text:"bar",value:"b"},{text:"baz",value:"c"},{separator:!0},{header:"Header"},{text:"qux",value:"d"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{onChange:o,options:t,value:n,variant:"underline"})},x=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{icon:l(xn,{}),onChange:o,options:t,value:n,variant:"underline"})},b=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{disabled:!0,icon:l(xn,{}),onChange:o,options:t,value:n,variant:"underline"})},T=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{icon:"X",onChange:o,options:t,value:n,variant:"underline"})},S=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(i,{disabled:!0,icon:"X",onChange:o,options:t,value:n,variant:"underline"})},A=function(){const[n,a]=s(null),[t,o]=s([{value:"foo"}]);function r(){o([{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}])}function e(u){const p=u.currentTarget.value;console.log(p),a(p)}return l(bn,{children:[l(An,{onClick:r,children:"Set"}),l(Sn,{space:"small"}),l(i,{onChange:e,options:t,placeholder:"placeholder",value:n,variant:"underline"})]})},D=function(){const[n,a]=s(Array(20).fill("foo").join(" ")),t=[{value:Array(20).fill("foo").join(" ")},{value:"bar"}];function o($){const c=$.currentTarget.value;console.log(c),a(c)}const[r,e]=s("qux"),u=[{value:Array(20).fill("baz").join(" ")},{value:"qux"}];function p($){const c=$.currentTarget.value;console.log(c),e(c)}return l("div",{style:{display:"flex"},children:[l(i,{onChange:o,options:t,value:n,variant:"underline"}),")",l(i,{onChange:p,options:u,value:r,variant:"underline"}),")"]})},H=function(){const[n,a]=s("foo"),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(r){console.log(r),a(r)}return l(i,{onValueChange:o,options:t,value:n,variant:"underline"})},E=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"-12px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},O=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"-12px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},M=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"-12px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},L=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"-12px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},q=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},z=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},I=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},X=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},J=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",left:"-24px",position:"absolute",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},B=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",left:"-24px",position:"absolute",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},k=function(){const[n,a]=s(null),t=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",position:"absolute",right:"-24px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})},j=function(){const[n,a]=s(null),t=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function o(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",position:"absolute",right:"-24px",width:"240px"},children:l(i,{onChange:o,options:t,value:n,variant:"underline"})})};var F,R,Y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(Y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var P,_,U;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(U=(_=v.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var W,G,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} placeholder="placeholder" value={value} variant="underline" />;
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var N,Q,Z;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(Array(20).fill('foo').join(' '));
  const options: Array<DropdownOption> = [{
    value: Array(20).fill('foo').join(' ')
  }, {
    value: Array(20).fill('bar').join(' ')
  }, {
    value: Array(20).fill('baz').join(' ')
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: Array(4).fill('qux').join(' ')
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(re=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ue,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown {...useInitialFocus()} onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(se=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};var ie,ce,pe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`function () {
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Dropdown disabled onChange={handleChange} options={options} value="foo" variant="underline" />;
}`,...(pe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ve,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    disabled: true,
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(ge=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,fe,me;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('a');
  const options: Array<DropdownOption> = [{
    text: 'foo',
    value: 'a'
  }, {
    text: 'bar',
    value: 'b'
  }, {
    text: 'baz',
    value: 'c'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    text: 'qux',
    value: 'd'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(me=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var Ve,we,ye;x.parameters={...x.parameters,docs:{...(Ve=x.parameters)==null?void 0:Ve.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown icon={<IconLayerFrame16 />} onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(ye=(we=x.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ce,xe,be;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown disabled icon={<IconLayerFrame16 />} onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(be=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Te,Se,Ae;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown icon="X" onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(Ae=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var De,He,Ee;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown disabled icon="X" onChange={handleChange} options={options} value={value} variant="underline" />;
}`,...(Ee=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Oe,Me,Le;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const [options, setOptions] = useState<Array<DropdownOption>>([{
    value: 'foo'
  }]);
  function handleClick() {
    setOptions([{
      value: 'foo'
    }, {
      value: 'bar'
    }, {
      value: 'baz'
    }, {
      separator: true
    }, {
      header: 'Header'
    }, {
      value: 'qux'
    }]);
  }
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <Fragment>
      <Button onClick={handleClick}>Set</Button>
      <VerticalSpace space="small" />
      <Dropdown onChange={handleChange} options={options} placeholder="placeholder" value={value} variant="underline" />
    </Fragment>;
}`,...(Le=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var qe,ze,Ie;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`function () {
  const [valueA, setValueA] = useState<string>(Array(20).fill('foo').join(' '));
  const optionsA: Array<DropdownOption> = [{
    value: Array(20).fill('foo').join(' ')
  }, {
    value: 'bar'
  }];
  function handleChangeA(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValueA(newValue);
  }
  const [valueB, setValueB] = useState<string>('qux');
  const optionsB: Array<DropdownOption> = [{
    value: Array(20).fill('baz').join(' ')
  }, {
    value: 'qux'
  }];
  function handleChangeB(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValueB(newValue);
  }
  const style = {
    display: 'flex'
  };
  return <div style={style}>
      <Dropdown onChange={handleChangeA} options={optionsA} value={valueA} variant="underline" />
      )
      <Dropdown onChange={handleChangeB} options={optionsB} value={valueB} variant="underline" />
      )
    </div>;
}`,...(Ie=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Xe,Je,Be;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('foo');
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleValueChange(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Dropdown onValueChange={handleValueChange} options={options} value={value} variant="underline" />;
}`,...(Be=(Je=H.parameters)==null?void 0:Je.docs)==null?void 0:Be.source}}};var ke,je,$e;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '-12px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...($e=(je=E.parameters)==null?void 0:je.docs)==null?void 0:$e.source}}};var Fe,Re,Ye;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '-12px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Ye=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Ye.source}}};var Pe,_e,Ue;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '-12px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Ue=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var We,Ge,Ke;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '-12px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Ke=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var Ne,Qe,Ze;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Ze=(Qe=q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var en,nn,an;z.parameters={...z.parameters,docs:{...(en=z.parameters)==null?void 0:en.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(an=(nn=z.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var tn,on,rn;I.parameters={...I.parameters,docs:{...(tn=I.parameters)==null?void 0:tn.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(rn=(on=I.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var ln,un,sn;X.parameters={...X.parameters,docs:{...(ln=X.parameters)==null?void 0:ln.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(sn=(un=X.parameters)==null?void 0:un.docs)==null?void 0:sn.source}}};var cn,pn,dn;J.parameters={...J.parameters,docs:{...(cn=J.parameters)==null?void 0:cn.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    bottom: '-12px',
    left: '-24px',
    position: 'absolute',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(dn=(pn=J.parameters)==null?void 0:pn.docs)==null?void 0:dn.source}}};var vn,gn,hn;B.parameters={...B.parameters,docs:{...(vn=B.parameters)==null?void 0:vn.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    bottom: '-12px',
    left: '-24px',
    position: 'absolute',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(hn=(gn=B.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var fn,mn,Vn;k.parameters={...k.parameters,docs:{...(fn=k.parameters)==null?void 0:fn.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }, {
    separator: true
  }, {
    header: 'Header'
  }, {
    value: 'qux'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    bottom: '-12px',
    position: 'absolute',
    right: '-24px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Vn=(mn=k.parameters)==null?void 0:mn.docs)==null?void 0:Vn.source}}};var wn,yn,Cn;j.parameters={...j.parameters,docs:{...(wn=j.parameters)==null?void 0:wn.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (index) {
    return {
      value: \`\${index + 1}\`
    };
  });
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const style = {
    bottom: '-12px',
    position: 'absolute',
    right: '-24px',
    width: '240px'
  };
  return <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} variant="underline" />
    </div>;
}`,...(Cn=(yn=j.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};const Pn=["Empty","EmptyManyOptions","Placeholder","Filled","FilledManyOptions","LongText","Focused","Disabled","OptionDisabled","OptionText","Icon","IconDisabled","IconText","IconTextDisabled","DynamicallySetOptions","FlexParent","OnValueChange","TopLeft","TopLeftManyOptions","TopRight","TopRightManyOptions","MiddleLeft","MiddleLeftManyOptions","MiddleRight","MiddleRightManyOptions","BottomLeft","BottomLeftManyOptions","BottomRight","BottomRightManyOptions"];export{J as BottomLeft,B as BottomLeftManyOptions,k as BottomRight,j as BottomRightManyOptions,w as Disabled,A as DynamicallySetOptions,d as Empty,v as EmptyManyOptions,h as Filled,f as FilledManyOptions,D as FlexParent,V as Focused,x as Icon,b as IconDisabled,T as IconText,S as IconTextDisabled,m as LongText,q as MiddleLeft,z as MiddleLeftManyOptions,I as MiddleRight,X as MiddleRightManyOptions,H as OnValueChange,y as OptionDisabled,C as OptionText,g as Placeholder,E as TopLeft,O as TopLeftManyOptions,M as TopRight,L as TopRightManyOptions,Pn as __namedExportsOrder,Yn as default};
//# sourceMappingURL=dropdown-underline.stories-15219c73.js.map
