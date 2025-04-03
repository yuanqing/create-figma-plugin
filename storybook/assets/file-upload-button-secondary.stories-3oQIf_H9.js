import{_ as o}from"./preact.module-7_OotSvk.js";import{u as q}from"./use-initial-focus-DTq0kKo3.js";import{F as t}from"./file-upload-button-C8Q7DkQO.js";import"./create-component-CR2aSVXZ.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./button.module-CaU2unFW.js";import"./loading-indicator-BaDWtmsV.js";import"./file-comparator-BUjrH4N4.js";const Y={tags:["2"],title:"Components/File Upload Button/Secondary"},r=function(){function e(n){console.log(n)}return o(t,{onSelectedFiles:e,secondary:!0},"Text")},s=function(){function e(n){console.log(n)}return o(t,{...q(),onSelectedFiles:e,secondary:!0},"Text")},i=function(){function e(){throw new Error("This function should not be called")}return o(t,{disabled:!0,onSelectedFiles:e,secondary:!0},"Text")},c=function(){function e(){throw new Error("This function should not be called")}return o(t,{loading:!0,onSelectedFiles:e,secondary:!0},"Text")},a=function(){function e(){throw new Error("This function should not be called")}return o(t,{...q(),loading:!0,onSelectedFiles:e,secondary:!0},"Text")},d=function(){function e(){throw new Error("This function should not be called")}return o(t,{disabled:!0,loading:!0,onSelectedFiles:e,secondary:!0},"Text")},l=function(){function e(n){console.log(n)}return o(t,{fullWidth:!0,onSelectedFiles:e,secondary:!0},"Text")};l.parameters={fixedWidth:!0};const u=function(){const e=["image/x-png","image/gif","image/jpeg"];function n(z){console.log(z)}return o(t,{acceptedFileTypes:e,onSelectedFiles:n,secondary:!0},"Text")},p=function(){function e(n){console.log(n)}return o(t,{multiple:!0,onSelectedFiles:e,secondary:!0},"Text")};var F,f,m;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var h,S,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
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
}`,...(b=(U=c.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};var w,E,A;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton {...useInitialFocus()} loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,W,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var _,I,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>;
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var v,M,P;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
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
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Z=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","AcceptedFileTypes","MultipleFiles"];export{u as AcceptedFileTypes,i as Disabled,s as Focused,l as FullWidth,c as Loading,d as LoadingDisabled,a as LoadingFocused,p as MultipleFiles,r as Passive,Z as __namedExportsOrder,Y as default};
