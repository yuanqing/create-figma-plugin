import{u as D}from"./use-initial-focus-83cf3b2e.js";import{M as c}from"./muted-d6ed6890.js";import{T as s}from"./text-3f7573c7.js";import{F as a}from"./file-upload-dropzone-67434a60.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./file-comparator-3bc6e99f.js";const E={parameters:{fixedWidth:!0},title:"Components/File Upload Dropzone"},o=function(){function n(l){console.log(l)}return e(a,{onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},t=function(){function n(l){console.log(l)}return e(a,{...D(),onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},i=function(){const n=["image/x-png","image/gif","image/jpeg"];function l(z){console.log(z)}return e(a,{acceptedFileTypes:n,onSelectedFiles:l,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},r=function(){function n(l){console.log(l)}return e(a,{multiple:!0,onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
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
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg'];
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var T,x,M;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>;
}`,...(M=(x=r.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const O=["Passive","Focused","AcceptedFileTypes","MultipleFiles"];export{i as AcceptedFileTypes,t as Focused,r as MultipleFiles,o as Passive,O as __namedExportsOrder,E as default};
//# sourceMappingURL=file-upload-dropzone.stories-55a6c5c0.js.map
