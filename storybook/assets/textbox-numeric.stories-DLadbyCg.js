import{_ as r}from"./preact.module-7_OotSvk.js";import{d as l,A as He}from"./create-component-CR2aSVXZ.js";import{u as Le}from"./use-initial-focus-DTq0kKo3.js";import{I as Me}from"./icon-auto-layout-padding-horizontal-24-BRJgnCkF.js";import{T as o}from"./textbox-numeric-D6q3HXb7.js";import{M as Oe}from"./mixed-values-hkF2bnrF.js";import"./create-icon-DvrWd2n3.js";import"./create-class-name-irFPZBOU.js";import"./textbox.module-BTiVByXg.js";import"./raw-textbox-numeric-P0blTARb.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";const Ge={parameters:{fixedWidth:!0},tags:["1"],title:"Components/Textbox Numeric"},c=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},s=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...Le(),onInput:u,value:n})},i=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,placeholder:"Placeholder",value:n})},p=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},m=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:r(Me,null),onInput:u,value:n})},d=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:"W",onInput:u,value:n})},v=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"42"})},I=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,icon:r(Me,null),onInput:n,value:"42"})},g=function(){const[n,t]=l(Oe);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},V=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,revertOnEscapeKeyDown:!0,value:n})},f=function(){const[n,t]=l("42");function u(e){const N=e.currentTarget.value;console.log(N),t(N)}function a(e){return console.log(e),e!==null}return r(o,{onInput:u,validateOnBlur:a,value:n})},T=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{integer:!0,onInput:u,value:n})},w=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:100,incrementSmall:10,onInput:u,value:n})},h=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:.5,incrementSmall:.1,onInput:u,value:n})},x=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:10,minimum:0,onInput:u,value:n})},S=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,suffix:"%",value:n})},E=function(){const n=He(null),[t,u]=l("42");function a(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),u(e)}return r(o,{ref:n,onInput:a,value:t})},b=function(){const[n,t]=l("42");function u(e){console.log(e),t(e)}function a(e){console.log(e)}return r(o,{onNumericValueInput:a,onValueInput:u,value:n})};var M,H,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,X,J;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(J=(X=s.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var y,B,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} placeholder="Placeholder" value={value} />;
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,P,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var _,C,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon={<IconAutoLayoutPaddingHorizontal24 />} onInput={handleInput} value={value} />;
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var K,z,W;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon="W" onInput={handleInput} value={value} />;
}`,...(W=(z=d.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var G,j,k;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" />;
}`,...(k=(j=v.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,Q,U;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled icon={<IconAutoLayoutPaddingHorizontal24 />} onInput={handleInput} value="42" />;
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} />;
}`,...(te=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ue,ae,re;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  function validateOnBlur(value: null | number): null | number | boolean {
    console.log(value);
    return value !== null;
  }
  return <TextboxNumeric onInput={handleInput} validateOnBlur={validateOnBlur} value={value} />;
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,ce;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} />;
}`,...(ce=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var se,ie,pe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={100} incrementSmall={10} onInput={handleInput} value={value} />;
}`,...(pe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var me,de,ve;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={0.5} incrementSmall={0.1} onInput={handleInput} value={value} />;
}`,...(ve=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var Ie,ge,Ve;x.parameters={...x.parameters,docs:{...(Ie=x.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={10} minimum={0} onInput={handleInput} value={value} />;
}`,...(Ve=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:Ve.source}}};var fe,Te,we;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} suffix="%" value={value} />;
}`,...(we=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var he,xe,Se;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`function () {
  const ref: RefObject<HTMLInputElement> = useRef(null);
  const [value, setValue] = useState<string>('42');
  function handleInput() {
    if (ref.current === null) {
      throw new Error('\`ref.current\` is \`null\`');
    }
    console.log(ref.current);
    const newValue = ref.current.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric ref={ref} onInput={handleInput} value={value} />;
}`,...(Se=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,be,Ne;b.parameters={...b.parameters,docs:{...(Ee=b.parameters)==null?void 0:Ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue);
  }
  return <TextboxNumeric onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(Ne=(be=b.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};const je=["Empty","Focused","Placeholder","Filled","Icon","TextIcon","Disabled","DisabledIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","IntegerOnly","CustomIncrements","CustomSmallIncrements","MinimumMaximum","Suffix","Ref","OnValueInput"];export{w as CustomIncrements,h as CustomSmallIncrements,v as Disabled,I as DisabledIcon,c as Empty,p as Filled,s as Focused,m as Icon,T as IntegerOnly,x as MinimumMaximum,g as Mixed,b as OnValueInput,i as Placeholder,E as Ref,V as RevertOnEscapeKeyDown,S as Suffix,d as TextIcon,f as ValidateOnBlur,je as __namedExportsOrder,Ge as default};
