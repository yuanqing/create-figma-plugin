import{k as y}from"./preact.module-bf16abf2.js";import{B as k}from"./button-7f8c5ba7.js";import{T as E}from"./text-a9643cae.js";import{T as V}from"./textbox-d5d5650c.js";import{V as f}from"./vertical-space-4313d2d4.js";import{T as u,p as B,h as I}from"./hooks.module-7c0d6ca2.js";import{u as U}from"./use-focus-trap-17a0ca4f.js";import{u as W}from"./use-initial-focus-e560a4b5.js";import{o as a}from"./jsxRuntime.module-3e32d480.js";import"./create-class-name-71c46838.js";import"./loading-indicator-7c44ce2c.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-917ccc0f.js";import"./create-focus-trap-key-down-handler-e65db33a.js";function p(i,e){const r=u(function(n){n.key===i&&e(n)},[i,e]);B(function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}},[r])}function _(i,e){const{close:r,submit:n,transform:s,validate:t}=e,[o,b]=I(i),x=u(function(v,c){if(typeof c>"u")throw new Error("`name` is `undefined`");b(function(T){const d={...T,[c]:v};return typeof s>"u"?d:s(d)})},[s]),l=u(function(){typeof t<"u"&&t(o)===!1||n(o)},[o,n,t]);p("Enter",l);const g=u(function(){r(o)},[r,o]);p("Escape",g),U();const h=typeof t<"u"?t(o)===!1:!1,C=W();return{disabled:h,formState:o,handleSubmit:l,initialFocus:C,setFormState:x}}const Y={title:"Hooks/Use Form"},m=function(){const{disabled:i,formState:e,handleSubmit:r,initialFocus:n,setFormState:s}=_({text:"",wordCount:0},{close:function(t){console.log("close",t)},submit:function(t){console.log("submit",t)},transform:function(t){console.log("transform",t);const o=t.text.trim();return{...t,wordCount:o===""?0:o.split(" ").length}},validate:function(t){return console.log("validate",t),t.wordCount>1}});return a(y,{children:[a(V,{...n,name:"text",onValueInput:s,value:e.text,variant:"border"}),a(f,{space:"small"}),a(E,{align:"center",children:[e.wordCount," word",e.wordCount===1?"":"s"]}),a(f,{space:"small"}),a(k,{disabled:i===!0,fullWidth:!0,onClick:r,children:"Submit"})]})};var S,w,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  type FormState = {
    text: string;
    wordCount: number;
  };
  const {
    disabled,
    formState,
    handleSubmit,
    initialFocus,
    setFormState
  } = useForm<FormState>({
    text: '',
    wordCount: 0
  }, {
    close: function (formState: FormState) {
      console.log('close', formState);
    },
    submit: function (formState: FormState) {
      console.log('submit', formState);
    },
    transform: function (formState: FormState) {
      console.log('transform', formState);
      const trimmed = formState.text.trim();
      return {
        ...formState,
        wordCount: trimmed === '' ? 0 : trimmed.split(' ').length
      };
    },
    validate: function (formState: FormState) {
      console.log('validate', formState);
      return formState.wordCount > 1;
    }
  });
  return <Fragment>
      <Textbox {...initialFocus} name="text" onValueInput={setFormState} value={formState.text} variant="border" />
      <VerticalSpace space="small" />
      <Text align="center">
        {formState.wordCount} word{formState.wordCount === 1 ? '' : 's'}
      </Text>
      <VerticalSpace space="small" />
      <Button disabled={disabled === true} fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Fragment>;
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const Z=["UseForm"];export{m as UseForm,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=use-form.stories-d57f3910.js.map
