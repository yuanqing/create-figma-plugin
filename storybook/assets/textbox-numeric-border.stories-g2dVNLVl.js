import{h as l,_ as xe}from"./create-component-a83A1_Pu.js";import{u as Se}from"./use-initial-focus-xmfxIugy.js";import{I as Ee}from"./icon-layer-frame-16-sVAwYanE.js";import{T as o}from"./textbox-numeric-PxkjMYjC.js";import{u as a}from"./jsxRuntime.module-mP9ZGqev.js";import{M as Ne}from"./mixed-values-kiIAV0Ly.js";import"./preact.module-pS-_M4k6.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./textbox.module-SUUSsoq6.js";import"./raw-textbox-numeric-P_SZCsOz.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./compute-next-value-v04i_0LO.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";const We={parameters:{fixedWidth:!0},tags:["2"],title:"Components/Textbox Numeric/Border"},c=function(){const[n,t]=l("");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{onInput:r,value:n,variant:"border"})},s=function(){const[n,t]=l("");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{...Se(),onInput:r,value:n,variant:"border"})},i=function(){const[n,t]=l("");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{onInput:r,placeholder:"Placeholder",value:n,variant:"border"})},p=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{onInput:r,value:n,variant:"border"})},m=function(){function n(){throw new Error("This function should not be called")}return a(o,{disabled:!0,onInput:n,value:"42",variant:"border"})},d=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{icon:a(Ee,{}),onInput:r,value:n,variant:"border"})},v=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{icon:"W",onInput:r,value:n,variant:"border"})},I=function(){const[n,t]=l(Ne);function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{onInput:r,value:n,variant:"border"})},V=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{onInput:r,revertOnEscapeKeyDown:!0,value:n,variant:"border"})},g=function(){const[n,t]=l("42");function r(e){const E=e.currentTarget.value;console.log(E),t(E)}function u(e){return console.log(e),e!==null}return a(o,{onInput:r,validateOnBlur:u,value:n,variant:"border"})},f=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{integer:!0,onInput:r,value:n,variant:"border"})},T=function(){const[n,t]=l("42");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{incrementBig:100,incrementSmall:10,onInput:r,value:n,variant:"border"})},w=function(){const[n,t]=l("0");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{incrementBig:.5,incrementSmall:.1,onInput:r,value:n,variant:"border"})},h=function(){const[n,t]=l("0");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{maximum:10,minimum:0,onInput:r,value:n,variant:"border"})},b=function(){const[n,t]=l("100%");function r(u){const e=u.currentTarget.value;console.log(e),t(e)}return a(o,{maximum:100,minimum:0,onInput:r,suffix:"%",value:n,variant:"border"})},x=function(){const n=xe(null),[t,r]=l("42");function u(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),r(e)}return a(o,{ref:n,onInput:u,value:t,variant:"border"})},S=function(){const[n,t]=l("42");function r(e){console.log(e),t(e)}function u(e){console.log(e)}return a(o,{onNumericValueInput:u,onValueInput:r,value:n,variant:"border"})};var N,M,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />;
}`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,X,H;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} variant="border" />;
}`,...(H=(X=s.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var J,B,y;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} placeholder="Placeholder" value={value} variant="border" />;
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var D,F,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />;
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,C,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" variant="border" />;
}`,...(K=(C=m.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var P,W,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="border" />;
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var j,k,q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon="W" onInput={handleInput} value={value} variant="border" />;
}`,...(q=(k=v.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,Q;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />;
}`,...(Q=(A=I.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var U,Y,Z;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} variant="border" />;
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`function () {
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
  return <TextboxNumeric onInput={handleInput} validateOnBlur={validateOnBlur} value={value} variant="border" />;
}`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ue;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} variant="border" />;
}`,...(ue=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var ae,oe,le;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={100} incrementSmall={10} onInput={handleInput} value={value} variant="border" />;
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,se,ie;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={0.5} incrementSmall={0.1} onInput={handleInput} value={value} variant="border" />;
}`,...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,me,de;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={10} minimum={0} onInput={handleInput} value={value} variant="border" />;
}`,...(de=(me=h.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ve,Ie,Ve;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} suffix="%" value={value} variant="border" />;
}`,...(Ve=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var ge,fe,Te;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`function () {
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
  return <TextboxNumeric ref={ref} onInput={handleInput} value={value} variant="border" />;
}`,...(Te=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var we,he,be;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue);
  }
  return <TextboxNumeric onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} variant="border" />;
}`,...(be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const Ge=["Empty","Focused","Placeholder","Filled","Disabled","Icon","TextIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","IntegerOnly","CustomIncrements","CustomSmallIncrements","MinimumMaximum","Suffix","Ref","OnValueInput"];export{T as CustomIncrements,w as CustomSmallIncrements,m as Disabled,c as Empty,p as Filled,s as Focused,d as Icon,f as IntegerOnly,h as MinimumMaximum,I as Mixed,S as OnValueInput,i as Placeholder,x as Ref,V as RevertOnEscapeKeyDown,b as Suffix,v as TextIcon,g as ValidateOnBlur,Ge as __namedExportsOrder,We as default};
