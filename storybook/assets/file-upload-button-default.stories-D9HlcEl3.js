import{y as o}from"./preact.module-Cko36Lti.js";import{u as q}from"./use-initial-focus-DfmxErEH.js";import{F as t}from"./file-upload-button-BF_AkmbO.js";import"./create-component-B1Y1oDBF.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./button.module-Ba0fKGRu.js";import"./loading-indicator-BElM4Qpr.js";import"./file-comparator-BUjrH4N4.js";const Y={tags:["1"],title:"Components/File Upload Button/Default"},i=function(){function e(n){console.log(n)}return o(t,{onSelectedFiles:e},"Text")},s=function(){function e(n){console.log(n)}return o(t,{...q(),onSelectedFiles:e},"Text")},r=function(){function e(){throw new Error("This function should not be called")}return o(t,{disabled:!0,onSelectedFiles:e},"Text")},c=function(){function e(){throw new Error("This function should not be called")}return o(t,{loading:!0,onSelectedFiles:e},"Text")},a=function(){function e(){throw new Error("This function should not be called")}return o(t,{...q(),loading:!0,onSelectedFiles:e},"Text")},d=function(){function e(){throw new Error("This function should not be called")}return o(t,{disabled:!0,loading:!0,onSelectedFiles:e},"Text")},l=function(){function e(n){console.log(n)}return o(t,{fullWidth:!0,onSelectedFiles:e},"Text")};l.parameters={fixedWidth:!0};const u=function(){const e=["image/x-png","image/gif","image/jpeg"];function n(z){console.log(z)}return o(t,{acceptedFileTypes:e,onSelectedFiles:n},"Text")},p=function(){function e(n){console.log(n)}return o(t,{multiple:!0,onSelectedFiles:e},"Text")};var F,f,m;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var h,S,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton {...useInitialFocus()} onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var T,x,B;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var U,b,w;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,E,A;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton {...useInitialFocus()} loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var D,L,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var I,_,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var v,M,P;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","AcceptedFileTypes","MultipleFiles"];export{u as AcceptedFileTypes,r as Disabled,s as Focused,l as FullWidth,c as Loading,d as LoadingDisabled,a as LoadingFocused,p as MultipleFiles,i as Passive,Z as __namedExportsOrder,Y as default};
