import{h as l}from"./hooks.module-6e460002.js";import{u as J}from"./use-initial-focus-83cf3b2e.js";import{I as ze}from"./icon-layer-frame-16-6719cb4a.js";import{T as o}from"./textbox-numeric-457ae4a0.js";import{o as r}from"./jsxRuntime.module-893eb125.js";import{M as Ae}from"./mixed-values-e51728b2.js";import"./preact.module-6cc36cb9.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";import"./textbox.module-9ea46353.js";import"./raw-textbox-numeric-ad94f241.js";import"./get-current-from-ref-47f174f6.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const pn={parameters:{fixedWidth:!0,order:3},title:"Components/Textbox Numeric/Underline"},c=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},i=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...J(),onInput:u,value:n,variant:"underline"})},p=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,placeholder:"placeholder",value:n,variant:"underline"})},d=function(){const[n,t]=l("");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...J(),onInput:u,placeholder:"placeholder",value:n,variant:"underline"})},v=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},m=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{...J(),onInput:u,value:n,variant:"underline"})},I=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,onInput:n,value:"42",variant:"underline"})},V=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:r(ze,{}),onInput:u,value:n,variant:"underline"})},g=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{disabled:!0,icon:r(ze,{}),onInput:u,value:n,variant:"underline"})},f=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{icon:"X",onInput:u,value:n,variant:"underline"})},T=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{disabled:!0,icon:"X",onInput:u,value:n,variant:"underline"})},w=function(){const[n,t]=l(Ae);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,value:n,variant:"underline"})},h=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,revertOnEscapeKeyDown:!0,value:n,variant:"underline"})},x=function(){const[n,t]=l("42");function u(e){const s=e.currentTarget.value;console.log(s),t(s)}function a(e){return console.log(e),e!==null}return r(o,{onInput:u,validateOnBlur:a,value:n,variant:"underline"})},S=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{integer:!0,onInput:u,value:n,variant:"underline"})},E=function(){const[n,t]=l("42");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:8,incrementSmall:4,onInput:u,value:n,variant:"underline"})},b=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{incrementBig:.5,incrementSmall:.1,onInput:u,value:n,variant:"underline"})},N=function(){const[n,t]=l("0");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:10,minimum:0,onInput:u,value:n,variant:"underline"})},M=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,suffix:"%",value:n,variant:"underline"})},X=function(){const[n,t]=l(Ae);function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{onInput:u,suffix:"%",value:n,variant:"underline"})},O=function(){const[n,t]=l("100%");function u(a){const e=a.currentTarget.value;console.log(e),t(e)}return r(o,{maximum:100,minimum:0,onInput:u,revertOnEscapeKeyDown:!0,suffix:"%",value:n,variant:"underline"})},L=function(){const[n,t]=l("100%");function u(e){const s=e.currentTarget.value;console.log(s),t(s)}function a(e){return e===null?100:!0}return r(o,{maximum:100,minimum:0,onInput:u,revertOnEscapeKeyDown:!0,suffix:"%",validateOnBlur:a,value:n,variant:"underline"})},H=function(){const[n,t]=l("42");function u(e){console.log(e),t(e)}function a(e){console.log(e)}return r(o,{onNumericValueInput:a,onValueInput:u,value:n,variant:"underline"})};var y,D,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var F,K,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(R=(K=i.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var _,C,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} placeholder="placeholder" value={value} variant="underline" />;
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var G,U,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} placeholder="placeholder" value={value} variant="underline" />;
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,k,q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(q=(k=v.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,Q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric {...useInitialFocus()} onInput={handleInput} value={value} variant="underline" />;
}`,...(Q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var Y,Z,$;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" variant="underline" />;
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="underline" />;
}`,...(te=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ue,ae,re;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric disabled icon={<IconLayerFrame16 />} onInput={handleInput} value={value} variant="underline" />;
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,se;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric icon="X" onInput={handleInput} value={value} variant="underline" />;
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ie,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric disabled icon="X" onInput={handleInput} value={value} variant="underline" />;
}`,...(pe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,ve,me;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="underline" />;
}`,...(me=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var Ie,Ve,ge;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} variant="underline" />;
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
  return <TextboxNumeric onInput={handleInput} validateOnBlur={validateOnBlur} value={value} variant="underline" />;
}`,...(we=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var he,xe,Se;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} variant="underline" />;
}`,...(Se=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,be,Ne;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={8} incrementSmall={4} onInput={handleInput} value={value} variant="underline" />;
}`,...(Ne=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var Me,Xe,Oe;b.parameters={...b.parameters,docs:{...(Me=b.parameters)==null?void 0:Me.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric incrementBig={0.5} incrementSmall={0.1} onInput={handleInput} value={value} variant="underline" />;
}`,...(Oe=(Xe=b.parameters)==null?void 0:Xe.docs)==null?void 0:Oe.source}}};var Le,He,Je;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={10} minimum={0} onInput={handleInput} value={value} variant="underline" />;
}`,...(Je=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var ye,De,Be;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} suffix="%" value={value} variant="underline" />;
}`,...(Be=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Fe,Ke,Re;X.parameters={...X.parameters,docs:{...(Fe=X.parameters)==null?void 0:Fe.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>(MIXED_STRING);
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric onInput={handleInput} suffix="%" value={value} variant="underline" />;
}`,...(Re=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source}}};var _e,Ce,Pe;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('100%');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} revertOnEscapeKeyDown suffix="%" value={value} variant="underline" />;
}`,...(Pe=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Ge,Ue,We;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`function () {
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
  return <TextboxNumeric maximum={100} minimum={0} onInput={handleInput} revertOnEscapeKeyDown suffix="%" validateOnBlur={validateOnBlur} value={value} variant="underline" />;
}`,...(We=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var je,ke,qe;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('42');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue);
  }
  return <TextboxNumeric onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} variant="underline" />;
}`,...(qe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};const dn=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Icon","IconDisabled","IconText","IconTextDisabled","Mixed","RevertOnEscapeKeyDown","ValidateOnBlur","IntegersOnly","CustomIncrements","CustomSmallIncrements","MinimumMaximum","Suffix","SuffixMixed","SuffixRevertOnEscapeKeyDown","SuffixValidateOnBlur","OnValueInput"];export{E as CustomIncrements,b as CustomSmallIncrements,I as Disabled,c as Empty,i as EmptyFocused,v as Filled,m as Focused,V as Icon,g as IconDisabled,f as IconText,T as IconTextDisabled,S as IntegersOnly,N as MinimumMaximum,w as Mixed,H as OnValueInput,p as Placeholder,d as PlaceholderFocused,h as RevertOnEscapeKeyDown,M as Suffix,X as SuffixMixed,O as SuffixRevertOnEscapeKeyDown,L as SuffixValidateOnBlur,x as ValidateOnBlur,dn as __namedExportsOrder,pn as default};
//# sourceMappingURL=textbox-numeric-underline.stories-3b9f8c37.js.map
