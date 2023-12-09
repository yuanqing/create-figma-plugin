import{g as V}from"./preact.module-pS-_M4k6.js";import{T as u,p as y,h as k}from"./create-component-a83A1_Pu.js";import{B as E}from"./button-7i81gHC9.js";import{T as I}from"./text-SssoFudj.js";import{T as B}from"./textbox-InH0rXhO.js";import{V as p}from"./vertical-space-UCQOgkM_.js";import{u as U}from"./use-focus-trap-B-9_MXKH.js";import{u as W}from"./use-initial-focus-xmfxIugy.js";import{u as s}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./get-current-from-ref-KzY6_NOj.js";import"./is-keycode-character-generating-0Qf6Kf4s.js";import"./mixed-values-kiIAV0Ly.js";import"./textbox.module-SUUSsoq6.js";import"./create-focus-trap-key-down-handler-_kplv3kG.js";function S(a,n){const o=u(function(e){e.key===a&&n(e)},[a,n]);y(function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[o])}function _(a,n){const{close:o,submit:e,transform:i,validate:r}=n,[t,m]=k(a),x=u(function(v,d){if(typeof d>"u")throw new Error("`name` is `undefined`");m(function(T){const f={...T,[d]:v};return typeof i>"u"?f:i(f)})},[i]),c=u(function(){typeof r<"u"&&r(t)===!1||e(t)},[t,e,r]);S("Enter",c);const g=u(function(){o(t)},[o,t]);S("Escape",g),U();const h=typeof r<"u"?r(t)===!1:!1,C=W();return{disabled:h,formState:t,handleSubmit:c,initialFocus:C,setFormState:x}}const Z={title:"Hooks/Use Form"},l=function(){const{disabled:a,formState:n,handleSubmit:o,initialFocus:e,setFormState:i}=_({text:"",wordCount:0},{close:function(t){console.log("close",t)},submit:function(t){console.log("submit",t)},transform:function(t){console.log("transform",t);const m=t.text.trim();return{...t,wordCount:m===""?0:m.split(" ").length}},validate:function(t){return console.log("validate",t),t.wordCount>1}}),r=u(function(t){i(t,"text")},[i]);return s(V,{children:[s(B,{...e,onValueInput:r,value:n.text,variant:"border"}),s(p,{space:"small"}),s(I,{align:"center",children:[n.wordCount," word",n.wordCount===1?"":"s"]}),s(p,{space:"small"}),s(E,{disabled:a===!0,fullWidth:!0,onClick:o,children:"Submit"})]})};var F,w,b;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
