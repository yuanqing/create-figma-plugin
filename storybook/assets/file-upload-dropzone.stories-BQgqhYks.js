import{_ as e}from"./preact.module-7_OotSvk.js";import{u as D}from"./use-initial-focus-DTq0kKo3.js";import{M as s}from"./muted-DBkhrh9Q.js";import{T as c}from"./text-Dw40dpV8.js";import{F as a}from"./file-upload-dropzone-C2-AUMac.js";import"./create-component-CR2aSVXZ.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./file-comparator-BUjrH4N4.js";const E={parameters:{fixedWidth:!0},title:"Components/File Upload Dropzone"},o=function(){function n(l){console.log(l)}return e(a,{onSelectedFiles:n},e(c,{align:"center"},e(s,null,"Text")))},t=function(){function n(l){console.log(l)}return e(a,{...D(),onSelectedFiles:n},e(c,{align:"center"},e(s,null,"Text")))},i=function(){const n=["image/x-png","image/gif","image/jpeg"];function l(z){console.log(z)}return e(a,{acceptedFileTypes:n,onSelectedFiles:l},e(c,{align:"center"},e(s,null,"Text")))},r=function(){function n(l){console.log(l)}return e(a,{multiple:!0,onSelectedFiles:n},e(c,{align:"center"},e(s,null,"Text")))};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var F,m,f;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone {...useInitialFocus()} onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,S,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg'];
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,h,M;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(M=(h=r.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const O=["Passive","Focused","AcceptedFileTypes","MultipleFiles"];export{i as AcceptedFileTypes,t as Focused,r as MultipleFiles,o as Passive,O as __namedExportsOrder,E as default};
