import{k as c}from"./preact.module-fa42f7d1.js";import{h as m}from"./create-component-b0512abd.js";import{B as p}from"./button-49678b56.js";import{T as d}from"./textbox-cbecdc05.js";import{V as f}from"./vertical-space-f6719a71.js";import{u as F}from"./use-initial-focus-57bdde46.js";import{o as t}from"./jsxRuntime.module-632ba37d.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./loading-indicator-a4a1d996.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-917ccc0f.js";const H={title:"Hooks/Use Initial Focus"},e=function(){const[n,a]=m("Text"),s=F();function l(u){console.log(u)}return t(c,{children:[t(d,{...s,name:"text",onValueInput:a,value:n,variant:"border"}),t(f,{space:"small"}),t(p,{fullWidth:!0,onClick:l,children:"Submit"})]})};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const M=["UseInitialFocus"];export{e as UseInitialFocus,M as __namedExportsOrder,H as default};
//# sourceMappingURL=use-initial-focus.stories-e2a5d5aa.js.map
