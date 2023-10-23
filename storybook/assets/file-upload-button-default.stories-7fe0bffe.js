import{u as q}from"./use-initial-focus-57bdde46.js";import{F as l}from"./file-upload-button-ff119540.js";import{o}from"./jsxRuntime.module-632ba37d.js";import"./create-component-b0512abd.js";import"./preact.module-fa42f7d1.js";import"./create-class-name-71c46838.js";import"./no-op-cb277961.js";import"./button.module-2bfe3ef2.js";import"./loading-indicator-a4a1d996.js";import"./file-comparator-3bc6e99f.js";const Z={tags:["1"],title:"Components/File Upload Button/Default"},i=function(){function e(n){console.log(n)}return o(l,{onSelectedFiles:e,children:"Text"})},r=function(){function e(n){console.log(n)}return o(l,{...q(),onSelectedFiles:e,children:"Text"})},s=function(){function e(){throw new Error("This function should not be called")}return o(l,{disabled:!0,onSelectedFiles:e,children:"Text"})},c=function(){function e(){throw new Error("This function should not be called")}return o(l,{loading:!0,onSelectedFiles:e,children:"Text"})},d=function(){function e(){throw new Error("This function should not be called")}return o(l,{...q(),loading:!0,onSelectedFiles:e,children:"Text"})},a=function(){function e(){throw new Error("This function should not be called")}return o(l,{disabled:!0,loading:!0,onSelectedFiles:e,children:"Text"})},t=function(){function e(n){console.log(n)}return o(l,{fullWidth:!0,onSelectedFiles:e,children:"Text"})};t.parameters={fixedWidth:!0};const u=function(){const e=["image/x-png","image/gif","image/jpeg"];function n(z){console.log(z)}return o(l,{acceptedFileTypes:e,onSelectedFiles:n,children:"Text"})},p=function(){function e(n){console.log(n)}return o(l,{multiple:!0,onSelectedFiles:e,children:"Text"})};var F,f,h;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var m,S,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton {...useInitialFocus()} onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var T,x,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var U,b,w;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,E,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton {...useInitialFocus()} loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var D,L,W;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(W=(L=a.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var I,_,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var v,M,P;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg'];
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var C,O,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const $=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","AcceptedFileTypes","MultipleFiles"];export{u as AcceptedFileTypes,s as Disabled,r as Focused,t as FullWidth,c as Loading,a as LoadingDisabled,d as LoadingFocused,p as MultipleFiles,i as Passive,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=file-upload-button-default.stories-7fe0bffe.js.map
