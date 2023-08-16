import{h as s}from"./hooks.module-7c0d6ca2.js";import{u as R}from"./use-initial-focus-e560a4b5.js";import{a as j,I as k,b as q}from"./icon-text-align-right-16-9c6ab2cf.js";import{S as u}from"./segmented-control-b140c695.js";import{o as l}from"./jsxRuntime.module-3e32d480.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";const $={title:"Components/Segmented Control"},c=function(){const[n,a]=s("bar"),t=[{value:"foo"},{value:"bar"},{value:"baz"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(u,{onChange:o,options:t,value:n})},i=function(){const[n,a]=s("bar"),t=[{value:"foo"},{value:"bar"},{value:"baz"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(u,{...R(),onChange:o,options:t,value:n})},g=function(){const n=[{value:"foo"},{value:"bar"},{value:"baz"}];function a(){throw new Error("This function should not be called")}return l(u,{disabled:!0,onChange:a,options:n,value:"bar"})},d=function(){const[n,a]=s("bar"),t=[{value:"foo"},{value:"bar"},{disabled:!0,value:"baz"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(u,{onChange:o,options:t,value:n})},v=function(){const[n,a]=s(!1),t=[{children:"foo",value:!0},{children:"bar",value:!1}];function o(r){const e=r.currentTarget.value;console.log(e),a(e==="true")}return l(u,{onChange:o,options:t,value:n})},h=function(){const[n,a]=s(2),t=[{children:"foo",value:1},{children:"bar",value:2},{children:"baz",value:3}];function o(r){const e=r.currentTarget.value;console.log(e),a(parseInt(e,10))}return l(u,{onChange:o,options:t,value:n})},p=function(){const[n,a]=s("align-left"),t=[{children:l(j,{}),value:"align-left"},{children:l(k,{}),value:"align-center"},{children:l(q,{}),value:"align-right"}];function o(r){const e=r.currentTarget.value;console.log(e),a(e)}return l(u,{onChange:o,options:t,value:n})},m=function(){const[n,a]=s("bar");function t(o){console.log(o),a(o)}return l(u,{onValueChange:t,options:[{value:"foo"},{value:"bar"},{value:"baz"}],value:n})};var f,C,V;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
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
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var b,S,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,I,E;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
}`,...(E=(I=g.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var A,z,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
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
}`,...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var x,L,y;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  const options: Array<SegmentedControlOption<boolean>> = [{
    children: 'foo',
    value: true
  }, {
    children: 'bar',
    value: false
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue === 'true' ? true : false);
  }
  return <SegmentedControl onChange={handleChange} options={options} value={value} />;
}`,...(y=(L=v.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var H,J,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<number>(2);
  const options: Array<SegmentedControlOption<number>> = [{
    children: 'foo',
    value: 1
  }, {
    children: 'bar',
    value: 2
  }, {
    children: 'baz',
    value: 3
  }];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(parseInt(newValue, 10));
  }
  return <SegmentedControl onChange={handleChange} options={options} value={value} />;
}`,...(M=(J=h.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var X,D,F;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
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
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var _,B,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('bar');
  function handleValueChange(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  return <SegmentedControl onValueChange={handleValueChange} options={[{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }]} value={value} />;
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const ee=["Selected","Focused","Disabled","DisabledOption","BooleanValue","NumberValue","IconChildren","OnValueChange"];export{v as BooleanValue,g as Disabled,d as DisabledOption,i as Focused,p as IconChildren,h as NumberValue,m as OnValueChange,c as Selected,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=segmented-control.stories-c2d466b5.js.map
