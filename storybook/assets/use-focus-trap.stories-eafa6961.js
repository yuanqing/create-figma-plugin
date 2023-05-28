import{k as l}from"./preact.module-6cc36cb9.js";import{h as c}from"./hooks.module-6e460002.js";import{B as m}from"./button-b81342dc.js";import{T as p}from"./textbox-63b038aa.js";import{V as d}from"./vertical-space-1279b60e.js";import{u as f}from"./use-focus-trap-9af06fd1.js";import{o as t}from"./jsxRuntime.module-893eb125.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-9ea46353.js";import"./create-focus-trap-key-down-handler-e65db33a.js";const H={title:"Hooks/Use Focus Trap"},e=function(){const[s,n]=c("Text");f();function u(i){console.log(i)}return t(l,{children:[t(p,{name:"text",onValueInput:n,value:s,variant:"border"}),t(d,{space:"small"}),t(m,{fullWidth:!0,onClick:u,children:"Submit"})]})};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
//# sourceMappingURL=use-focus-trap.stories-eafa6961.js.map
