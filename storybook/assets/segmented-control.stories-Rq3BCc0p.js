import{h as s}from"./create-component-a83A1_Pu.js";import{u as F}from"./use-initial-focus-xmfxIugy.js";import{I as H,a as J,b as M}from"./icon-text-align-right-16-J_jF2sTt.js";import{S as u}from"./segmented-control-9Om1GZT4.js";import{u as l}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./constants-TQdAxsXB.js";const N={title:"Components/Segmented Control"},c=function(){const[e,n]=s("bar"),t=[{value:"foo"},{value:"bar"},{value:"baz"}];function r(o){const a=o.currentTarget.value;console.log(a),n(a)}return l(u,{onChange:r,options:t,value:e})},i=function(){const[e,n]=s("bar"),t=[{value:"foo"},{value:"bar"},{value:"baz"}];function r(o){const a=o.currentTarget.value;console.log(a),n(a)}return l(u,{...F(),onChange:r,options:t,value:e})},g=function(){const e=[{value:"foo"},{value:"bar"},{value:"baz"}];function n(){throw new Error("This function should not be called")}return l(u,{disabled:!0,onChange:n,options:e,value:"bar"})},d=function(){const[e,n]=s("bar"),t=[{value:"foo"},{value:"bar"},{disabled:!0,value:"baz"}];function r(o){const a=o.currentTarget.value;console.log(a),n(a)}return l(u,{onChange:r,options:t,value:e})},v=function(){const[e,n]=s("align-left"),t=[{children:l(H,{}),value:"align-left"},{children:l(J,{}),value:"align-center"},{children:l(M,{}),value:"align-right"}];function r(o){const a=o.currentTarget.value;console.log(a),n(a)}return l(u,{onChange:r,options:t,value:e})},p=function(){const[e,n]=s("bar"),t=[{value:"foo"},{value:"bar"},{value:"baz"}];function r(o){console.log(o),n(o)}return l(u,{onValueChange:r,options:t,value:e})};var h,m,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<SegmentedControlOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl onChange={handleChange} options={options} value={value} />;
}`,...(C=(m=c.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var f,b,V;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<SegmentedControlOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl {...useInitialFocus()} onChange={handleChange} options={options} value={value} />;
}`,...(V=(b=i.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var S,T,w;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const options: Array<SegmentedControlOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }];
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <SegmentedControl disabled onChange={handleChange} options={options} value="bar" />;
}`,...(w=(T=g.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,A,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<SegmentedControlOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    disabled: true,
    value: 'baz'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl onChange={handleChange} options={options} value={value} />;
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,z,x;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('align-left');
  const options: Array<SegmentedControlOption> = [{
    children: <IconTextAlignLeft16 />,
    value: 'align-left'
  }, {
    children: <IconTextAlignCenter16 />,
    value: 'align-center'
  }, {
    children: <IconTextAlignRight16 />,
    value: 'align-right'
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl onChange={handleChange} options={options} value={value} />;
}`,...(x=(z=v.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var y,L,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  const options: Array<SegmentedControlOption> = [{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }];
  function handleValueChange(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl onValueChange={handleValueChange} options={options} value={value} />;
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Q=["Passive","Focused","Disabled","DisabledOption","IconChildren","OnValueChange"];export{g as Disabled,d as DisabledOption,i as Focused,v as IconChildren,p as OnValueChange,c as Passive,Q as __namedExportsOrder,N as default};
