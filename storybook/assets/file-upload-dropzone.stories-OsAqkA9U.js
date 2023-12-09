import{u as D}from"./use-initial-focus-xmfxIugy.js";import{M as c}from"./muted-FAkxyWMe.js";import{T as s}from"./text-SssoFudj.js";import{F as a}from"./file-upload-dropzone-URJ26_Ps.js";import{u as e}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-component-a83A1_Pu.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./file-comparator-J4lx6xNz.js";const O={parameters:{fixedWidth:!0},title:"Components/File Upload Dropzone"},o=function(){function n(l){console.log(l)}return e(a,{onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},t=function(){function n(l){console.log(l)}return e(a,{...D(),onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},i=function(){const n=["image/x-png","image/gif","image/jpeg"];function l(z){console.log(z)}return e(a,{acceptedFileTypes:n,onSelectedFiles:l,children:e(s,{align:"center",children:e(c,{children:"Text"})})})},r=function(){function n(l){console.log(l)}return e(a,{multiple:!0,onSelectedFiles:n,children:e(s,{align:"center",children:e(c,{children:"Text"})})})};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
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
}`,...(M=(x=r.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const W=["Passive","Focused","AcceptedFileTypes","MultipleFiles"];export{i as AcceptedFileTypes,t as Focused,r as MultipleFiles,o as Passive,W as __namedExportsOrder,O as default};
