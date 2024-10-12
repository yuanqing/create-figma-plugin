import{_ as t,k as c}from"./preact.module-DSfP8QVG.js";import{h as m}from"./create-component-BQOTiC4n.js";import{B as p}from"./button-BwoPhB3Q.js";import{T as d}from"./textbox-kuEvMzvs.js";import{V as f}from"./vertical-space-Cd8FpnC4.js";import{u as F}from"./use-initial-focus-BIYZsJcx.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";const U={title:"Hooks/Use Initial Focus"},e=function(){const[n,r]=m("Text"),s=F();function l(u){console.log(u)}return t(c,null,t(d,{...s,name:"text",onValueInput:r,value:n,variant:"border"}),t(f,{space:"small"}),t(p,{fullWidth:!0,onClick:l},"Submit"))};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  const initialFocus = useInitialFocus();
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Fragment>
      <Textbox {...initialFocus} name="text" onValueInput={setValue} value={value} variant="border" />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const H=["UseInitialFocus"];export{e as UseInitialFocus,H as __namedExportsOrder,U as default};
