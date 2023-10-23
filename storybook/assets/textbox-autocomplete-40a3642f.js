import{c as Te,_,h as k,T as s,p as Ie}from"./create-component-b0512abd.js";import{u as Ve,m as w}from"./use-mouse-down-outside-bb94ce97.js";import{I as De}from"./icon-menu-checkmark-checked-16-11f1d34a.js";import{c as K}from"./create-class-name-71c46838.js";import{g as T}from"./get-current-from-ref-47f174f6.js";import{n as I}from"./no-op-cb277961.js";import{a as g,I as R,V as X}from"./constants-4a59d305.js";import{c as Z}from"./compute-next-value-3d847061.js";import{i as Me}from"./is-keycode-character-generating-0746a523.js";import{t as b}from"./textbox.module-917ccc0f.js";import{o as a}from"./jsxRuntime.module-632ba37d.js";const Ce="_top_3lpap_1",Oe="_bottom_3lpap_5",ee={top:Ce,bottom:Oe},B="",Fe=Te(function({disabled:t=!1,filter:n=!1,icon:r,onChange:i=I,onInput:u=I,onKeyDown:F=I,onMouseDown:q=I,onPaste:Y=I,onValueInput:j=I,placeholder:ce,propagateEscapeKeyDown:z=!0,revertOnEscapeKeyDown:J=!1,spellCheck:ae=!1,strict:O=!1,top:H=!1,value:m,variant:N,...L},V){if(typeof r=="string"&&r.length!==1)throw new Error(`String \`icon\` must be a single character: ${r}`);const $=_(null),A=_(null),P=_(null),U=_(!1),[W,de]=k(m),[G,pe]=k(B),[f,Q]=k(!1),[y,D]=k(g),c=n===!0?Ae(te(L.options),m,G):te(L.options),p=s(function(){T(A).select()},[]),S=s(function(){T(A).blur()},[]),M=s(function(e){const o=T(P);if(e===g){o.scrollTop=0;return}const l=o.querySelector(`[${R}='${e}']`);if(l===null)throw new Error("`selectedElement` is `null`");const h=l.getBoundingClientRect().y-o.getBoundingClientRect().y;if(h<o.scrollTop){o.scrollTop=h;return}const C=h+l.offsetHeight;C>o.scrollTop+o.offsetHeight&&(o.scrollTop=C-o.offsetHeight)},[]),v=s(function(e){const o=le(c,e);o===g&&pe(e),D(o),M(o)},[c,M]),E=s(function(e){const o=T(A);o.value=e;const l=new window.Event("input",{bubbles:!0,cancelable:!0});o.dispatchEvent(l)},[]),d=s(function(){Q(!1)},[]),x=s(function(){ke(T($),T(P),H),de(m),v(m),Q(!0)},[H,v,m]),he=s(function(e){u(e);const o=e.currentTarget.value;if(v(o),j(o),f!==!0){if(U.current===!0){U.current=!1;return}x()}},[f,u,j,x,v]),ge=s(function(e){F(e);const o=e.currentTarget,l=e.key;if(l==="ArrowUp"||l==="ArrowDown"){if(e.preventDefault(),f===!1){x();return}if(c.length===0)return;const h=l==="ArrowUp"?Se(c,y):ve(c,y);if(h===g){D(g),E(G),p(),M(g);return}D(h);const C=oe(c,h);if(C===null)throw new Error("`optionValue` is `null`");E(C.value),p(),M(h);return}if(l==="Escape"){if(e.preventDefault(),z===!1&&e.stopPropagation(),J===!0&&(U.current=!0,E(W)),f===!0){d();return}S();return}if(l==="Enter"){if(e.preventDefault(),p(),f===!0){d();return}x();return}if(l==="Tab"){d();return}if(O!==!1&&!(e.ctrlKey===!0||e.metaKey===!0)&&Me(e.keyCode)===!0){const h=Z(o,e.key);if(re(c,h)===!0)return;e.preventDefault()}},[G,f,F,c,W,z,J,y,O,d,x,M,S,p,E]),me=s(function(e){q(e),f!==!0&&(e.preventDefault(),p(),x())},[f,q,p,x]),we=s(function(e){if(Y(e),O===!1)return;if(e.clipboardData===null)throw new Error("`event.clipboardData` is `null`");const o=Z(e.currentTarget,e.clipboardData.getData("Text"));re(c,o)!==!0&&e.preventDefault()},[Y,c,O]),be=s(function(e){i(e);const o=e.currentTarget.getAttribute(R);if(o===null)throw new Error("`id` is `null`");D(o);const l=oe(c,o);if(l===null)throw new Error("`optionValue` is `null`");E(l.value),p(),d()},[i,c,d,p,E]),xe=s(function(e){const o=e.currentTarget.getAttribute(R);if(o===null)throw new Error("`id` is `null`");o!==y&&D(o)},[y]),ye=s(function(){f!==!1&&(d(),S())},[f,S,d]);Ve({onMouseDownOutside:ye,ref:$}),Ie(function(){function e(){f!==!1&&(d(),p())}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[f,d,p]);const Ee=s(function(e){if(A.current=e,V!==null){if(typeof V=="function"){V(e);return}V.current=e}},[V]);return a("div",{ref:$,class:K([b.textbox,typeof N>"u"?null:N==="border"?b.hasBorder:null,typeof r>"u"?null:b.hasIcon,t===!0?b.disabled:null]),children:a("div",{class:b.inner,children:[a("input",{...L,ref:Ee,class:b.input,disabled:t===!0,onInput:he,onKeyDown:ge,onMouseDown:me,onPaste:we,placeholder:ce,spellcheck:ae,tabIndex:0,type:"text",value:m}),typeof r>"u"?null:a("div",{class:b.icon,children:r}),a("div",{class:b.border}),N==="underline"?a("div",{class:b.underline}):null,a("div",{ref:P,class:K([w.menu,t===!0||f===!1?w.hidden:null,H===!0?ee.top:ee.bottom]),children:c.map(function(e,o){return typeof e=="string"?a("hr",{class:w.optionSeparator},o):"header"in e?a("h1",{class:w.optionHeader,children:e.header},o):a("label",{class:K([w.optionValue,e.disabled===!0?w.optionValueDisabled:null,e.disabled!==!0&&e.id===y?w.optionValueSelected:null]),children:[a("input",{checked:m===e.value,class:w.input,disabled:e.disabled===!0,onChange:m===e.value?void 0:be,onClick:m===e.value?d:void 0,onMouseMove:xe,tabIndex:-1,type:"radio",value:`${e.value}`,[R]:e.id}),e.value===W?a("div",{class:w.checkIcon,children:a(De,{})}):null,e.value]},o)})})]})})});function te(t){return t.map(function(n,r){return typeof n!="string"&&"value"in n?{...n,id:`${r}`}:n})}function Ae(t,n,r){return n===B?t:le(t,n)===g?t.filter(function(u){return typeof u!="string"&&"value"in u?ne(u.value,n)===!0:!1}):r===B?t:t.filter(function(u){return typeof u!="string"&&"value"in u?ne(u.value,r)===!0:!1})}function ne(t,n){return t.toLowerCase().indexOf(n.toLowerCase())!==-1}function le(t,n){for(const r of t)if(typeof r!="string"&&"value"in r&&r.value===n)return r.id;return g}function re(t,n){if(n===B)return!0;for(const r of t)if(typeof r!="string"&&"value"in r&&r.value.toLowerCase().indexOf(n.toLowerCase())===0)return!0;return!1}function oe(t,n){for(const r of t)if(typeof r!="string"&&"id"in r&&r.id===n)return r;return null}function se(t,n){let r=0;for(const i of t){if(typeof i!="string"&&"id"in i&&i.id===n)return r;r+=1}return-1}function Se(t,n){if(n===g){const u=ue(t,t.length-1);return u===null?null:u.id}const r=se(t,n);if(r===-1)throw new Error(`No option with \`id\` ${n}`);if(r===0)return null;const i=ue(t,r-1);return i===null?null:i.id}function ve(t,n){if(n===g){const u=ie(t,0);return u===null?null:u.id}const r=se(t,n);if(r===-1)throw new Error(`No option with \`id\` ${n}`);if(r===t.length-1)return null;const i=ie(t,r+1);return i===null?null:i.id}function ue(t,n){if(n<0)throw new Error("`index` < 0");if(n>t.length-1)throw new Error("`index` > `options.length` - 1");return _e(t.slice(0,n+1))}function ie(t,n){if(n<0)throw new Error("`index` < 0");if(n>t.length-1)throw new Error("`index` > `options.length` - 1");return fe(t.slice(n))}function fe(t){for(const n of t)if(typeof n!="string"&&"id"in n&&n.disabled!==!0)return n;return null}function _e(t){return fe(t.slice().reverse())}function ke(t,n,r){const i=t.getBoundingClientRect().top,u=r===!0?i-X:window.innerHeight-i-t.offsetHeight-X;n.style.maxHeight=`${u}px`}export{Fe as T};
//# sourceMappingURL=textbox-autocomplete-40a3642f.js.map