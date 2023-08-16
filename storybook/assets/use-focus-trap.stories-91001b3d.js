import{k as l}from"./preact.module-bf16abf2.js";import{h as c}from"./hooks.module-7c0d6ca2.js";import{B as m}from"./button-7f8c5ba7.js";import{T as p}from"./textbox-d5d5650c.js";import{V as d}from"./vertical-space-4313d2d4.js";import{u as f}from"./use-focus-trap-17a0ca4f.js";import{o as t}from"./jsxRuntime.module-3e32d480.js";import"./create-class-name-71c46838.js";import"./loading-indicator-7c44ce2c.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-917ccc0f.js";import"./create-focus-trap-key-down-handler-e65db33a.js";const H={title:"Hooks/Use Focus Trap"},e=function(){const[s,n]=c("Text");f();function u(i){console.log(i)}return t(l,{children:[t(p,{name:"text",onValueInput:n,value:s,variant:"border"}),t(d,{space:"small"}),t(m,{fullWidth:!0,onClick:u,children:"Submit"})]})};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=use-focus-trap.stories-91001b3d.js.map
