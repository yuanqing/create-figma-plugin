import{k as l}from"./preact.module-fa42f7d1.js";import{h as m}from"./create-component-b0512abd.js";import{B as c}from"./button-49678b56.js";import{T as p}from"./textbox-cbecdc05.js";import{V as d}from"./vertical-space-f6719a71.js";import{u as f}from"./use-focus-trap-22e1816a.js";import{o as t}from"./jsxRuntime.module-632ba37d.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./loading-indicator-a4a1d996.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-917ccc0f.js";import"./create-focus-trap-key-down-handler-e65db33a.js";const I={title:"Hooks/Use Focus Trap"},e=function(){const[s,n]=m("Text");f();function u(i){console.log(i)}return t(l,{children:[t(p,{name:"text",onValueInput:n,value:s,variant:"border"}),t(d,{space:"small"}),t(c,{fullWidth:!0,onClick:u,children:"Submit"})]})};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const M=["UseFocusTrap"];export{e as UseFocusTrap,M as __namedExportsOrder,I as default};
//# sourceMappingURL=use-focus-trap.stories-093f69e2.js.map
