import{_ as p}from"./preact.module-7_OotSvk.js";import{c as I,d as O,q as o}from"./create-component-CR2aSVXZ.js";import{c as T}from"./create-class-name-irFPZBOU.js";import{n as r}from"./no-op-DX6rZLP_.js";import{f as j}from"./file-comparator-BUjrH4N4.js";const q="_fileUploadDropzone_1ue5k_1",B="_isDropActive_1ue5k_8",N="_input_1ue5k_12",P="_box_1ue5k_13",G="_children_1ue5k_39",e={fileUploadDropzone:q,isDropActive:B,input:N,box:P,children:G},R=I(function({acceptedFileTypes:t=[],children:d,multiple:l=!1,onBlur:i=r,onChange:a=r,onDragEnd:D=r,onDragEnter:h=r,onDragOver:_=r,onDrop:m=r,onKeyDown:g=r,onSelectedFiles:f=r,propagateEscapeKeyDown:v=!0,...A},b){const[k,c]=O(!1),z=o(function(n){i(n),c(!1)},[i]),U=o(function(n){a(n);const u=n.currentTarget.files;if(u===null)throw new Error("`event.currentTarget.files` is `null`");const s=x({acceptedFileTypes:t,fileList:u});s.length>0&&f(s)},[t,a,f]),w=o(function(n){h(n),n.preventDefault()},[h]),C=o(function(n){_(n),n.preventDefault(),c(!0)},[_]),E=o(function(n){D(n),n.preventDefault(),c(!1)},[D]),L=o(function(n){if(m(n),n.dataTransfer===null)throw new Error("`event.dataTransfer` is `null`");n.preventDefault();const u=n.dataTransfer.files,s=x({acceptedFileTypes:t,fileList:u});s.length>0&&f(s),c(!1)},[t,m,f]),y=o(function(n){g(n),n.key==="Escape"&&(v===!1&&n.stopPropagation(),n.currentTarget.blur())},[g,v]);return p("div",{class:T([e.fileUploadDropzone,k===!0?e.isDropActive:null])},p("input",{...A,ref:b,accept:t.length===0?void 0:t.join(","),class:e.input,multiple:l,onBlur:z,onChange:U,onDragEnd:E,onDragEnter:w,onDragOver:C,onDrop:L,onKeyDown:y,tabIndex:0,title:"",type:"file"}),p("div",{class:e.box}),p("div",{class:e.children},d))});function x(t){const{fileList:d,acceptedFileTypes:l}=t,i=Array.prototype.slice.call(d).sort(j);return l.length===0?i:i.filter(function(a){return l.indexOf(a.type)!==-1})}export{R as F};
