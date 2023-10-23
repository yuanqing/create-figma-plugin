import{k as V}from"./preact.module-fa42f7d1.js";import{T as u,p as y,h as k}from"./create-component-b0512abd.js";import{B as E}from"./button-49678b56.js";import{T as I}from"./text-72c2365d.js";import{T as B}from"./textbox-cbecdc05.js";import{V as p}from"./vertical-space-f6719a71.js";import{u as U}from"./use-focus-trap-22e1816a.js";import{u as W}from"./use-initial-focus-57bdde46.js";import{o as s}from"./jsxRuntime.module-632ba37d.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./loading-indicator-a4a1d996.js";import"./button.module-2bfe3ef2.js";import"./get-current-from-ref-47f174f6.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-917ccc0f.js";import"./create-focus-trap-key-down-handler-e65db33a.js";function S(a,o){const e=u(function(n){n.key===a&&o(n)},[a,o]);y(function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[e])}function _(a,o){const{close:e,submit:n,transform:i,validate:r}=o,[t,m]=k(a),x=u(function(v,d){if(typeof d>"u")throw new Error("`name` is `undefined`");m(function(T){const f={...T,[d]:v};return typeof i>"u"?f:i(f)})},[i]),c=u(function(){typeof r<"u"&&r(t)===!1||n(t)},[t,n,r]);S("Enter",c);const h=u(function(){e(t)},[e,t]);S("Escape",h),U();const g=typeof r<"u"?r(t)===!1:!1,C=W();return{disabled:g,formState:t,handleSubmit:c,initialFocus:C,setFormState:x}}const Z={title:"Hooks/Use Form"},l=function(){const{disabled:a,formState:o,handleSubmit:e,initialFocus:n,setFormState:i}=_({text:"",wordCount:0},{close:function(t){console.log("close",t)},submit:function(t){console.log("submit",t)},transform:function(t){console.log("transform",t);const m=t.text.trim();return{...t,wordCount:m===""?0:m.split(" ").length}},validate:function(t){return console.log("validate",t),t.wordCount>1}}),r=u(function(t){i(t,"text")},[i]);return s(V,{children:[s(B,{...n,onValueInput:r,value:o.text,variant:"border"}),s(p,{space:"small"}),s(I,{align:"center",children:[o.wordCount," word",o.wordCount===1?"":"s"]}),s(p,{space:"small"}),s(E,{disabled:a===!0,fullWidth:!0,onClick:e,children:"Submit"})]})};var F,w,b;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
  const handleValueInput = useCallback(function (text: string) {
    setFormState(text, 'text');
  }, [setFormState]);
  return <Fragment>
      <Textbox {...initialFocus} onValueInput={handleValueInput} value={formState.text} variant="border" />
      <VerticalSpace space="small" />
      <Text align="center">
        {formState.wordCount} word{formState.wordCount === 1 ? '' : 's'}
      </Text>
      <VerticalSpace space="small" />
      <Button disabled={disabled === true} fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Fragment>;
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const $=["UseForm"];export{l as UseForm,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=use-form.stories-2103883c.js.map
