import{u as q}from"./use-initial-focus-57bdde46.js";import{F as o}from"./file-upload-button-ff119540.js";import{o as t}from"./jsxRuntime.module-632ba37d.js";import"./create-component-b0512abd.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./button.module-2bfe3ef2.js";import"./loading-indicator-a4a1d996.js";import"./file-comparator-3bc6e99f.js";const Z={tags:["2"],title:"Components/File Upload Button/Secondary"},r=function(){function e(n){console.log(n)}return t(o,{onSelectedFiles:e,secondary:!0,children:"Text"})},s=function(){function e(n){console.log(n)}return t(o,{...q(),onSelectedFiles:e,secondary:!0,children:"Text"})},i=function(){function e(){throw new Error("This function should not be called")}return t(o,{disabled:!0,onSelectedFiles:e,secondary:!0,children:"Text"})},c=function(){function e(){throw new Error("This function should not be called")}return t(o,{loading:!0,onSelectedFiles:e,secondary:!0,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return t(o,{...q(),loading:!0,onSelectedFiles:e,secondary:!0,children:"Text"})},a=function(){function e(){throw new Error("This function should not be called")}return t(o,{disabled:!0,loading:!0,onSelectedFiles:e,secondary:!0,children:"Text"})},l=function(){function e(n){console.log(n)}return t(o,{fullWidth:!0,onSelectedFiles:e,secondary:!0,children:"Text"})};l.parameters={fixedWidth:!0};const u=function(){const e=["image/x-png","image/gif","image/jpeg"];function n(z){console.log(z)}return t(o,{acceptedFileTypes:e,onSelectedFiles:n,secondary:!0,children:"Text"})},p=function(){function e(n){console.log(n)}return t(o,{multiple:!0,onSelectedFiles:e,secondary:!0,children:"Text"})};var F,h,f;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var m,S,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton {...useInitialFocus()} onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var T,y,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,U,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(b=(U=c.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};var w,E,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton {...useInitialFocus()} loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,W,D;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(D=(W=a.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,_,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var v,M,P;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg'];
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var C,O,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton multiple onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const $=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","AcceptedFileTypes","MultipleFiles"];export{u as AcceptedFileTypes,i as Disabled,s as Focused,l as FullWidth,c as Loading,a as LoadingDisabled,d as LoadingFocused,p as MultipleFiles,r as Passive,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=file-upload-button-secondary.stories-2b0091be.js.map
