import{y as t,g as c}from"./preact.module-Cko36Lti.js";import{p as m}from"./create-component-B1Y1oDBF.js";import{B as p}from"./button-Nh83xXAg.js";import{T as d}from"./textbox-Cfruv8lg.js";import{V as f}from"./vertical-space-CCtwceSb.js";import{u as F}from"./use-initial-focus-DfmxErEH.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";const _={title:"Hooks/Use Initial Focus"},e=function(){const[a,r]=m("Text"),s=F();function l(u){console.log(u)}return t(c,null,t(d,{...s,name:"text",onValueInput:r,value:a,variant:"border"}),t(f,{space:"small"}),t(p,{fullWidth:!0,onClick:l},"Submit"))};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const H=["UseInitialFocus"];export{e as UseInitialFocus,H as __namedExportsOrder,_ as default};
