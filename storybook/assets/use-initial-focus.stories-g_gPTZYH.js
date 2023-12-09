import{g as c}from"./preact.module-pS-_M4k6.js";import{h as m}from"./create-component-a83A1_Pu.js";import{B as p}from"./button-7i81gHC9.js";import{T as d}from"./textbox-InH0rXhO.js";import{V as f}from"./vertical-space-UCQOgkM_.js";import{u as F}from"./use-initial-focus-xmfxIugy.js";import{u as t}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./get-current-from-ref-KzY6_NOj.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";import"./mixed-values-kiIAV0Ly.js";import"./textbox.module-SUUSsoq6.js";const H={title:"Hooks/Use Initial Focus"},e=function(){const[r,a]=m("Text"),s=F();function l(u){console.log(u)}return t(c,{children:[t(d,{...s,name:"text",onValueInput:a,value:r,variant:"border"}),t(f,{space:"small"}),t(p,{fullWidth:!0,onClick:l,children:"Submit"})]})};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const M=["UseInitialFocus"];export{e as UseInitialFocus,M as __namedExportsOrder,H as default};
