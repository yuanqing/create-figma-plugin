import{_ as t,k as c}from"./preact.module-7_OotSvk.js";import{d as m}from"./create-component-CR2aSVXZ.js";import{B as p}from"./button-BmHCZnq2.js";import{T as d}from"./textbox-BKgRUwxd.js";import{V as f}from"./vertical-space-BEQFZ7ek.js";import{u as F}from"./use-initial-focus-DTq0kKo3.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BaDWtmsV.js";import"./button.module-CaU2unFW.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BTiVByXg.js";const U={title:"Hooks/Use Initial Focus"},o=function(){const[n,a]=m("Text"),r=F();function l(u){console.log(u)}return t(c,null,t(d,{...r,onValueInput:a,value:n}),t(f,{space:"small"}),t(p,{fullWidth:!0,onClick:l},"Submit"))};var e,i,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  const initialFocus = useInitialFocus();
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Fragment>
      <Textbox {...initialFocus} onValueInput={setValue} value={value} />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const H=["UseInitialFocus"];export{o as UseInitialFocus,H as __namedExportsOrder,U as default};
