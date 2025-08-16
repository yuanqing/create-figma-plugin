import{_ as t,k as i}from"./preact.module-7_OotSvk.js";import{d as c}from"./create-component-CR2aSVXZ.js";import{B as m}from"./button-BmHCZnq2.js";import{T as p}from"./textbox-uoSG9xUR.js";import{V as d}from"./vertical-space-BEQFZ7ek.js";import{u as f}from"./use-focus-trap-6ZWjfLD-.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BaDWtmsV.js";import"./button.module-CaU2unFW.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-CZ6RGhGs.js";import"./textbox.module-BTiVByXg.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";const H={title:"Hooks/Use Focus Trap"},e=function(){const[a,u]=c("Text");f();function n(l){console.log(l)}return t(i,null,t(p,{onValueInput:u,value:a}),t(d,{space:"small"}),t(m,{fullWidth:!0,onClick:n},"Submit"))};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('Text');
  useFocusTrap();
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <Fragment>
      <Textbox onValueInput={setValue} value={value} />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const I=["UseFocusTrap"];export{e as UseFocusTrap,I as __namedExportsOrder,H as default};
