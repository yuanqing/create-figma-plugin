import{_ as e,E as L}from"./preact.module-7_OotSvk.js";import{c as F,A as _,y as u}from"./create-component-CR2aSVXZ.js";import{I}from"./icon-close-24-D4m0QCAG.js";import{c as x}from"./create-class-name-irFPZBOU.js";import{g as c}from"./get-current-from-ref-J2nPd355.js";import{c as R,g as P}from"./create-focus-trap-key-down-handler-DxXih0p5.js";import{I as k}from"./icon-button-Btpi0KRV.js";import{T as D}from"./text-Dw40dpV8.js";const H="_modal_6vogs_1",K="_noTransition_6vogs_10",M="_center_6vogs_14",Y="_open_6vogs_24",z="_bottom_6vogs_29",A="_left_6vogs_39",N="_right_6vogs_49",$="_topBar_6vogs_59",j="_closeButton_6vogs_69",q="_closeButtonLeft_6vogs_72",C="_title_6vogs_76",G="_overlay_6vogs_81",s={modal:H,noTransition:K,center:M,open:Y,bottom:z,left:A,right:N,topBar:$,closeButton:j,closeButtonLeft:q,title:C,overlay:G},O=F(function({children:v,closeButtonIcon:y=e(I,null),closeButtonPosition:g="right",open:l,transition:w=!0,onCloseButtonClick:d,onEscapeKeyDown:m,onOverlayClick:p,position:E="center",title:a,...h},b){const i=_(null),T=_([]),f=_(null);return u(function(){const t=document.createElement("div");return document.body.appendChild(t),i.current=t,function(){document.body.removeChild(t)}},[]),u(function(){const t=c(i),n=R(t);function o(r){l===!0&&n(r)}return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[l]),u(function(){function t(n){const o=c(T),r=c(i);l===!1||n.key!=="Escape"||typeof m>"u"||o[o.length-1]!==r||m(n)}return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[l,m]),u(function(){const t=c(T),n=c(i),o=document.body;if(l===!0){if(t.length===0){const B=window.scrollY;o.style.cssText+=`position:fixed;top:-${B}px;width:100%;overflow-y:hidden;`}t.push(n),n.style.cssText="position:absolute;top:0;right:0;bottom:0;left:0;z-index:1",f.current=document.activeElement;const r=P(n);r.length>0?r[0].focus():f.current.blur()}else{if(t.length===1){const r=parseInt(document.body.style.top);o.style.removeProperty("position"),o.style.removeProperty("top"),o.style.removeProperty("overflow-y"),o.style.removeProperty("width"),window.scrollTo({top:r*-1})}t.pop(),n.style.cssText="position:static"}return function(){f.current!==null&&f.current.focus()}},[l]),u(function(){const t=c(i);L(e("div",{ref:b},e("div",{...h,class:x([s.modal,l===!0?s.open:null,w===!1?s.noTransition:null,s[E]])},v,typeof d>"u"&&typeof a>"u"?null:e("div",{class:s.topBar},e("div",{class:s.title},typeof a>"u"?null:e(D,null,e("strong",null,a))),typeof d>"u"?null:e("div",{class:x([s.closeButton,g==="left"?s.closeButtonLeft:null])},e(k,{onClick:d},y)))),e("div",{class:s.overlay,onClick:typeof p>"u"?void 0:p})),t)},[v,y,g,d,p,l,E,b,h,a,w]),null});export{O as M};
