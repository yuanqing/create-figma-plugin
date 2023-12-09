import{g as l}from"./preact.module-pS-_M4k6.js";import{h as m}from"./create-component-a83A1_Pu.js";import{B as c}from"./button-7i81gHC9.js";import{T as p}from"./textbox-InH0rXhO.js";import{V as d}from"./vertical-space-UCQOgkM_.js";import{u as f}from"./use-focus-trap-B-9_MXKH.js";import{u as t}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./get-current-from-ref-KzY6_NOj.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";import"./mixed-values-kiIAV0Ly.js";import"./textbox.module-SUUSsoq6.js";import"./create-focus-trap-key-down-handler-_kplv3kG.js";const I={title:"Hooks/Use Focus Trap"},e=function(){const[a,s]=m("Text");f();function u(i){console.log(i)}return t(l,{children:[t(p,{name:"text",onValueInput:s,value:a,variant:"border"}),t(d,{space:"small"}),t(c,{fullWidth:!0,onClick:u,children:"Submit"})]})};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const M=["UseFocusTrap"];export{e as UseFocusTrap,M as __namedExportsOrder,I as default};
