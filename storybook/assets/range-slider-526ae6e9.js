import{c as h,T as f}from"./create-component-b0512abd.js";import{c as S}from"./create-class-name-71c46838.js";import{n as e}from"./no-op-cb277961.js";import{o as n}from"./jsxRuntime.module-632ba37d.js";const T="_rangeSlider_1dywl_1",x="_border_1dywl_7",C="_disabled_1dywl_15",R="_input_1dywl_19",t={rangeSlider:T,border:x,disabled:C,input:R},j=h(function({disabled:s=!1,increment:m=1,maximum:o,minimum:a,onInput:l=e,onKeyDown:i=e,onNumericValueInput:d=e,onValueInput:c=e,propagateEscapeKeyDown:p=!0,value:_,...b},g){if(a>=o)throw new Error("`minimum` must be less than `maximum`");const y=f(function(r){l(r);const u=r.currentTarget.value;c(u),d(parseFloat(u))},[l,d,c]),w=f(function(r){i(r),r.key==="Escape"&&(p===!1&&r.stopPropagation(),r.currentTarget.blur())},[i,p]);return n("label",{class:S([t.rangeSlider,s===!0?t.disabled:null]),children:[n("input",{...b,ref:g,class:t.input,disabled:s,max:o,min:a,onInput:y,onKeyDown:w,step:m,type:"range",value:_}),n("div",{class:t.border})]})});export{j as R};
//# sourceMappingURL=range-slider-526ae6e9.js.map