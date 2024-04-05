import{y as s,g as V}from"./preact.module-Cko36Lti.js";import{x as u,_ as T,p as k}from"./create-component-B1Y1oDBF.js";import{B as E}from"./button-Nh83xXAg.js";import{T as I}from"./text-CSA6lMsS.js";import{T as B}from"./textbox-Cfruv8lg.js";import{V as p}from"./vertical-space-CCtwceSb.js";import{u as _}from"./use-focus-trap-BYjASNiX.js";import{u as U}from"./use-initial-focus-DfmxErEH.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./get-current-from-ref-J2nPd355.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";function S(a,n){const o=u(function(e){e.key===a&&n(e)},[a,n]);T(function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[o])}function W(a,n){const{close:o,submit:e,transform:i,validate:r}=n,[t,m]=k(a),x=u(function(v,d){if(typeof d>"u")throw new Error("`name` is `undefined`");m(function(y){const f={...y,[d]:v};return typeof i>"u"?f:i(f)})},[i]),c=u(function(){typeof r<"u"&&r(t)===!1||e(t)},[t,e,r]);S("Enter",c);const g=u(function(){o(t)},[o,t]);S("Escape",g),_();const C=typeof r<"u"?r(t)===!1:!1,h=U();return{disabled:C,formState:t,handleSubmit:c,initialFocus:h,setFormState:x}}const Y={title:"Hooks/Use Form"},l=function(){const{disabled:a,formState:n,handleSubmit:o,initialFocus:e,setFormState:i}=W({text:"",wordCount:0},{close:function(t){console.log("close",t)},submit:function(t){console.log("submit",t)},transform:function(t){console.log("transform",t);const m=t.text.trim();return{...t,wordCount:m===""?0:m.split(" ").length}},validate:function(t){return console.log("validate",t),t.wordCount>1}}),r=u(function(t){i(t,"text")},[i]);return s(V,null,s(B,{...e,onValueInput:r,value:n.text,variant:"border"}),s(p,{space:"small"}),s(I,{align:"center"},n.wordCount," word",n.wordCount===1?"":"s"),s(p,{space:"small"}),s(E,{disabled:a===!0,fullWidth:!0,onClick:o},"Submit"))};var F,w,b;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
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
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const Z=["UseForm"];export{l as UseForm,Z as __namedExportsOrder,Y as default};
