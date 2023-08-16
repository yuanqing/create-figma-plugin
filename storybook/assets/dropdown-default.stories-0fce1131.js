import{k as bn}from"./preact.module-bf16abf2.js";import{h as s}from"./hooks.module-7c0d6ca2.js";import{u as Tn}from"./use-initial-focus-e560a4b5.js";import{I as xn}from"./icon-layer-frame-16-ee54d065.js";import{V as Sn}from"./vertical-space-4313d2d4.js";import{B as Dn}from"./button-7f8c5ba7.js";import{D as c}from"./dropdown-b227bbc2.js";import{o as l}from"./jsxRuntime.module-3e32d480.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";import"./loading-indicator-7c44ce2c.js";import"./button.module-2bfe3ef2.js";import"./use-mouse-down-outside-41ae9301.js";import"./get-current-from-ref-47f174f6.js";import"./icon-control-chevron-down-8-d1142213.js";import"./icon-menu-checkmark-checked-16-a0c745c5.js";const Yn={parameters:{fixedWidth:!0,order:1},title:"Components/Dropdown/Default"},d=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},v=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(r){return{value:`${r+1}`}});function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},g=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,placeholder:"placeholder",value:n})},h=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},f=function(){const[n,a]=s("42"),o=[...Array(100).keys()].map(function(r){return{value:`${r+1}`}});function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},m=function(){const[n,a]=s(Array(20).fill("foo").join(" ")),o=[{value:Array(20).fill("foo").join(" ")},{value:Array(20).fill("bar").join(" ")},{value:Array(20).fill("baz").join(" ")},{separator:!0},{header:"Header"},{value:Array(4).fill("qux").join(" ")}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},V=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{...Tn(),onChange:t,options:o,value:n})},w=function(){const n=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function a(){throw new Error("This function should not be called")}return l(c,{disabled:!0,onChange:a,options:n,value:"foo"})},y=function(){const[n,a]=s("foo"),o=[{value:"foo"},{disabled:!0,value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},C=function(){const[n,a]=s("a"),o=[{text:"foo",value:"a"},{text:"bar",value:"b"},{text:"baz",value:"c"},{separator:!0},{header:"Header"},{text:"qux",value:"d"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{onChange:t,options:o,value:n})},x=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{icon:l(xn,{}),onChange:t,options:o,value:n})},b=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{disabled:!0,icon:l(xn,{}),onChange:t,options:o,value:n})},T=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{icon:"X",onChange:t,options:o,value:n})},S=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(c,{disabled:!0,icon:"X",onChange:t,options:o,value:n})},D=function(){const[n,a]=s(null),[o,t]=s([{value:"foo"}]);function r(){t([{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}])}function e(u){const p=u.currentTarget.value;console.log(p),a(p)}return l(bn,{children:[l(Dn,{onClick:r,children:"Set"}),l(Sn,{space:"small"}),l(c,{onChange:e,options:o,placeholder:"placeholder",value:n})]})},A=function(){const[n,a]=s(Array(20).fill("foo").join(" ")),o=[{value:Array(20).fill("foo").join(" ")},{value:"bar"}];function t($){const i=$.currentTarget.value;console.log(i),a(i)}const[r,e]=s("qux"),u=[{value:Array(20).fill("baz").join(" ")},{value:"qux"}];function p($){const i=$.currentTarget.value;console.log(i),e(i)}return l("div",{style:{display:"flex"},children:[l(c,{onChange:t,options:o,value:n}),")",l(c,{onChange:p,options:u,value:r}),")"]})},H=function(){const[n,a]=s("foo"),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(r){console.log(r),a(r)}return l(c,{onValueChange:t,options:o,value:n})},E=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"-12px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},O=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"-12px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},M=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"-12px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},L=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"-12px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},q=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},z=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{left:"-24px",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},I=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},X=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{position:"absolute",right:"-24px",top:"50%",transform:"translateY(-50%)",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},J=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",left:"-24px",position:"absolute",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},B=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",left:"-24px",position:"absolute",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},k=function(){const[n,a]=s(null),o=[{value:"foo"},{value:"bar"},{value:"baz"},{separator:!0},{header:"Header"},{value:"qux"}];function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",position:"absolute",right:"-24px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})},j=function(){const[n,a]=s(null),o=[...Array(100).keys()].map(function(e){return{value:`${e+1}`}});function t(e){const u=e.currentTarget.value;console.log(u),a(u)}return l("div",{style:{bottom:"-12px",position:"absolute",right:"-24px",width:"240px"},children:l(c,{onChange:t,options:o,value:n})})};var F,R,Y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
}`,...(Y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var P,_,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
}`,...(W=(_=v.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var G,K,N;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} placeholder="placeholder" value={value} />;
}`,...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
}`,...(Z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,te,re;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
}`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ue,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`function () {
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
  return <Dropdown {...useInitialFocus()} onChange={handleChange} options={options} value={value} />;
}`,...(se=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};var ce,ie,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
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
  return <Dropdown disabled onChange={handleChange} options={options} value="foo" />;
}`,...(pe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,ve,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`function () {
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
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
  return <Dropdown onChange={handleChange} options={options} value={value} />;
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
  return <Dropdown icon={<IconLayerFrame16 />} onChange={handleChange} options={options} value={value} />;
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
  return <Dropdown disabled icon={<IconLayerFrame16 />} onChange={handleChange} options={options} value={value} />;
}`,...(be=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Te,Se,De;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`function () {
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
  return <Dropdown icon="X" onChange={handleChange} options={options} value={value} />;
}`,...(De=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Ae,He,Ee;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`function () {
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
  return <Dropdown disabled icon="X" onChange={handleChange} options={options} value={value} />;
}`,...(Ee=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Oe,Me,Le;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} placeholder="placeholder" value={value} />
    </Fragment>;
}`,...(Le=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var qe,ze,Ie;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChangeA} options={optionsA} value={valueA} />
      )
      <Dropdown onChange={handleChangeB} options={optionsB} value={valueB} />)
    </div>;
}`,...(Ie=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Xe,Je,Be;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`function () {
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
  return <Dropdown onValueChange={handleValueChange} options={options} value={value} />;
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
      <Dropdown onChange={handleChange} options={options} value={value} />
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(Ye=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Ye.source}}};var Pe,_e,We;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(We=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Ge,Ke,Ne;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(Ne=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var Qe,Ue,Ze;q.parameters={...q.parameters,docs:{...(Qe=q.parameters)==null?void 0:Qe.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(Ze=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var en,nn,an;z.parameters={...z.parameters,docs:{...(en=z.parameters)==null?void 0:en.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(an=(nn=z.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,tn,rn;I.parameters={...I.parameters,docs:{...(on=I.parameters)==null?void 0:on.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(rn=(tn=I.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var ln,un,sn;X.parameters={...X.parameters,docs:{...(ln=X.parameters)==null?void 0:ln.docs,source:{originalSource:`function () {
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
      <Dropdown onChange={handleChange} options={options} value={value} />
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
      <Dropdown onChange={handleChange} options={options} value={value} />
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
      <Dropdown onChange={handleChange} options={options} value={value} />
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
      <Dropdown onChange={handleChange} options={options} value={value} />
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
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>;
}`,...(Cn=(yn=j.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};const Pn=["Empty","EmptyManyOptions","Placeholder","Filled","FilledManyOptions","LongText","Focused","Disabled","OptionDisabled","OptionText","Icon","IconDisabled","IconText","IconTextDisabled","DynamicallySetOptions","FlexParent","OnValueChange","TopLeft","TopLeftManyOptions","TopRight","TopRightManyOptions","MiddleLeft","MiddleLeftManyOptions","MiddleRight","MiddleRightManyOptions","BottomLeft","BottomLeftManyOptions","BottomRight","BottomRightManyOptions"];export{J as BottomLeft,B as BottomLeftManyOptions,k as BottomRight,j as BottomRightManyOptions,w as Disabled,D as DynamicallySetOptions,d as Empty,v as EmptyManyOptions,h as Filled,f as FilledManyOptions,A as FlexParent,V as Focused,x as Icon,b as IconDisabled,T as IconText,S as IconTextDisabled,m as LongText,q as MiddleLeft,z as MiddleLeftManyOptions,I as MiddleRight,X as MiddleRightManyOptions,H as OnValueChange,y as OptionDisabled,C as OptionText,g as Placeholder,E as TopLeft,O as TopLeftManyOptions,M as TopRight,L as TopRightManyOptions,Pn as __namedExportsOrder,Yn as default};
//# sourceMappingURL=dropdown-default.stories-0fce1131.js.map
