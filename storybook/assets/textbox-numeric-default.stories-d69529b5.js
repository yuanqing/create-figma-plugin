import{h as l}from"./hooks.module-7c0d6ca2.js";import{u as H}from"./use-initial-focus-e560a4b5.js";import{I as Ae}from"./icon-layer-frame-16-ee54d065.js";import{T as o}from"./textbox-numeric-e4a5f0cd.js";import{o as r}from"./jsxRuntime.module-3e32d480.js";import{M as Qe}from"./mixed-values-e51728b2.js";import"./preact.module-bf16abf2.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";import"./textbox.module-917ccc0f.js";import"./raw-textbox-numeric-17858d6f.js";import"./get-current-from-ref-47f174f6.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const pn={parameters:{fixedWidth:!0,order:1},title:"Components/Textbox Numeric/Default"},c=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},i=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...H(),onInput:u,value:n})},p=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,placeholder:"placeholder",value:n})},m=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...H(),onInput:u,placeholder:"placeholder",value:n})},d=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},v=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...H(),onInput:u,value:n})},I=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"42"})},V=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:r(Ae,{}),onInput:u,value:n})},g=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{disabled:!0,icon:r(Ae,{}),onInput:u,value:n})},f=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:"X",onInput:u,value:n})},T=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{disabled:!0,icon:"X",onInput:u,value:n})},w=function(){const[n,t]=l(Qe);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n})},h=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,revertOnEscapeKeyDown:!0,value:n})},x=function(){const[n,t]=l("42");function u(e){const s=e.currentTarget.value;console.log(s),t(s)}function a(e){return console.log(e),e!==null}return r(o,{onInput:u,validateOnBlur:a,value:n})},S=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{integer:!0,onInput:u,value:n})},E=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:8,incrementSmall:4,onInput:u,value:n})},b=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:.5,incrementSmall:.1,onInput:u,value:n})},N=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:10,minimum:0,onInput:u,value:n})},M=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,suffix:"%",value:n})},X=function(){const[n,t]=l(Qe);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,suffix:"%",value:n})},O=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,revertOnEscapeKeyDown:!0,suffix:"%",value:n})},L=function(){const[n,t]=l("100%");function u(e){const s=e.currentTarget.value;console.log(s),t(s)}function a(e){return e===null?100:!0}return r(o,{maximum:100,minimum:0,onInput:u,revertOnEscapeKeyDown:!0,suffix:"%",validateOnBlur:a,value:n})},D=function(){const[n,t]=l("42");function u(e){console.log(e),t(e)}function a(e){console.log(e)}return r(o,{onNumericValueInput:a,onValueInput:u,value:n})};var J,y,B;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var F,K,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(R=(K=i.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var _,C,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var G,W,j;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} />;
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var k,q,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,Q,U;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} />;
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" />;
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />;
}`,...(te=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ue,ae,re;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric disabled icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />;
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,se;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon="X" onInput={handleInput} value={value} />;
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ie,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric disabled icon="X" onInput={handleInput} value={value} />;
}`,...(pe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var me,de,ve;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} />;
}`,...(ve=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var Ie,Ve,ge;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} />;
}`,...(ge=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:ge.source}}};var fe,Te,we;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`function () {
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
}`,...(we=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var he,xe,Se;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} />;
}`,...(Se=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,be,Ne;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={8} incrementSmall={4} onInput={handleInput} value={value} />;
}`,...(Ne=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var Me,Xe,Oe;b.parameters={...b.parameters,docs:{...(Me=b.parameters)==null?void 0:Me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={0.5} incrementSmall={0.1} onInput={handleInput} value={value} />;
}`,...(Oe=(Xe=b.parameters)==null?void 0:Xe.docs)==null?void 0:Oe.source}}};var Le,De,He;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={10} minimum={0} onInput={handleInput} value={value} />;
}`,...(He=(De=N.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Je,ye,Be;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} suffix="%" value={value} />;
}`,...(Be=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var Fe,Ke,Re;X.parameters={...X.parameters,docs:{...(Fe=X.parameters)==null?void 0:Fe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} suffix="%" value={value} />;
}`,...(Re=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source}}};var _e,Ce,Pe;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} revertOnEscapeKeyDown suffix="%" value={value} />;
}`,...(Pe=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Ge,We,je;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  function validateOnBlur(value: null | number): number | boolean {
    if (value === null) {
      return 100;
    }
    return true;
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} revertOnEscapeKeyDown suffix="%" validateOnBlur={validateOnBlur} value={value} />;
}`,...(je=(We=L.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var ke,qe,ze;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue);
  }
  return <TextboxNumeric onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(ze=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};const mn=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Icon","IconDisabled","IconText","IconTextDisabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","IntegersOnly","CustomIncrements","CustomSmallIncrements","MinimumMaximum","Suffix","SuffixMixed","SuffixRevertOnEscapeKeyDown","SuffixValidateOnBlur","OnValueInput"];export{E as CustomIncrements,b as CustomSmallIncrements,I as Disabled,c as Empty,i as EmptyFocused,d as Filled,v as Focused,V as Icon,g as IconDisabled,f as IconText,T as IconTextDisabled,S as IntegersOnly,N as MinimumMaximum,w as Mixed,D as OnValueInput,p as Placeholder,m as PlaceholderFocused,h as RevertOnEscapeKeyDown,M as Suffix,X as SuffixMixed,O as SuffixRevertOnEscapeKeyDown,L as SuffixValidateOnBlur,x as ValidateOnBlur,mn as __namedExportsOrder,pn as default};
//# sourceMappingURL=textbox-numeric-default.stories-d69529b5.js.map
