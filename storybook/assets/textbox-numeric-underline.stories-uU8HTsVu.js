import{h as l,_ as Se}from"./create-component-a83A1_Pu.js";import{u as Ee}from"./use-initial-focus-xmfxIugy.js";import{I as be}from"./icon-layer-frame-16-sVAwYanE.js";import{T as o}from"./textbox-numeric-PxkjMYjC.js";import{u as r}from"./jsxRuntime.module-mP9ZGqev.js";import{M as Ne}from"./mixed-values-kiIAV0Ly.js";import"./preact.module-pS-_M4k6.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./textbox.module-SUUSsoq6.js";import"./raw-textbox-numeric-P_SZCsOz.js";import"./get-current-from-ref-KzY6_NOj.js";import"./no-op-Uu3q6ZSj.js";import"./compute-next-value-v04i_0LO.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";const We={parameters:{fixedWidth:!0},tags:["3"],title:"Components/Textbox Numeric/Underline"},c=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},s=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...Ee(),onInput:u,value:n,variant:"underline"})},i=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,placeholder:"Placeholder",value:n,variant:"underline"})},p=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},m=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"42",variant:"underline"})},d=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:r(be,{}),onInput:u,value:n,variant:"underline"})},v=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:"W",onInput:u,value:n,variant:"underline"})},I=function(){const[n,t]=l(Ne);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},V=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},g=function(){const[n,t]=l("42");function u(e){const b=e.currentTarget.value;console.log(b),t(b)}function a(e){return console.log(e),e!==null}return r(o,{onInput:u,validateOnBlur:a,value:n,variant:"underline"})},f=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{integer:!0,onInput:u,value:n,variant:"underline"})},T=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:100,incrementSmall:10,onInput:u,value:n,variant:"underline"})},w=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:.5,incrementSmall:.1,onInput:u,value:n,variant:"underline"})},h=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:10,minimum:0,onInput:u,value:n,variant:"underline"})},x=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,suffix:"%",value:n,variant:"underline"})},S=function(){const n=Se(null),[t,u]=l("42");function a(){if(n.current===null)throw new Error("`ref.current` is `null`");console.log(n.current);const e=n.current.value;console.log(e),u(e)}return r(o,{ref:n,onInput:a,value:t,variant:"underline"})},E=function(){const[n,t]=l("42");function u(e){console.log(e),t(e)}function a(e){console.log(e)}return r(o,{onNumericValueInput:a,onValueInput:u,value:n,variant:"underline"})};var N,M,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,X,H;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(H=(X=s.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var J,y,B;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} placeholder="Placeholder" value={value} variant="underline" />;
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var D,F,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,C,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" variant="underline" />;
}`,...(K=(C=m.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var P,W,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="underline" />;
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var U,j,k;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon="W" onInput={handleInput} value={value} variant="underline" />;
}`,...(k=(j=v.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,A;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(A=(z=I.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var Q,Y,Z;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} variant="underline" />;
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
  return <TextboxNumeric onInput={handleInput} validateOnBlur={validateOnBlur} value={value} variant="underline" />;
}`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ue,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} variant="underline" />;
}`,...(ae=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};var re,oe,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={100} incrementSmall={10} onInput={handleInput} value={value} variant="underline" />;
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,se,ie;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={0.5} incrementSmall={0.1} onInput={handleInput} value={value} variant="underline" />;
}`,...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,me,de;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={10} minimum={0} onInput={handleInput} value={value} variant="underline" />;
}`,...(de=(me=h.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ve,Ie,Ve;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} suffix="%" value={value} variant="underline" />;
}`,...(Ve=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var ge,fe,Te;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`function () {
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
  return <TextboxNumeric ref={ref} onInput={handleInput} value={value} variant="underline" />;
}`,...(Te=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var we,he,xe;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue);
  }
  return <TextboxNumeric onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} variant="underline" />;
}`,...(xe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};const Ge=["Empty","Focused","Placeholder","Filled","Disabled","Icon","TextIcon","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","IntegerOnly","CustomIncrements","CustomSmallIncrements","MinimumMaximum","Suffix","Ref","OnValueInput"];export{T as CustomIncrements,w as CustomSmallIncrements,m as Disabled,c as Empty,p as Filled,s as Focused,d as Icon,f as IntegerOnly,h as MinimumMaximum,I as Mixed,E as OnValueInput,i as Placeholder,S as Ref,V as RevertOnEscapeKeyDown,x as Suffix,v as TextIcon,g as ValidateOnBlur,Ge as __namedExportsOrder,We as default};
