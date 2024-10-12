import{_ as t,k as l}from"./preact.module-DSfP8QVG.js";import{h as m}from"./create-component-BQOTiC4n.js";import{B as c}from"./button-BwoPhB3Q.js";import{T as p}from"./textbox-kuEvMzvs.js";import{V as d}from"./vertical-space-Cd8FpnC4.js";import{u as f}from"./use-focus-trap-BRLo60Sq.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";const H={title:"Hooks/Use Focus Trap"},e=function(){const[s,n]=m("Text");f();function u(i){console.log(i)}return t(l,null,t(p,{name:"text",onValueInput:n,value:s,variant:"border"}),t(d,{space:"small"}),t(c,{fullWidth:!0,onClick:u},"Submit"))};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  useFocusTrap();
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Fragment>
      <Textbox name="text" onValueInput={setValue} value={value} variant="border" />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const I=["UseFocusTrap"];export{e as UseFocusTrap,I as __namedExportsOrder,H as default};
