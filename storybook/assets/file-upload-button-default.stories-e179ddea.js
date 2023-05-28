import{u as K}from"./use-initial-focus-83cf3b2e.js";import{F as l}from"./file-upload-button-8a68fcbc.js";import{o}from"./jsxRuntime.module-893eb125.js";import"./hooks.module-6e460002.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./button.module-2bfe3ef2.js";import"./loading-indicator-5157fb6e.js";import"./file-comparator-3bc6e99f.js";const ne={parameters:{order:1},title:"Components/File Upload Button/Default"},r=function(){function e(n){console.log(n)}return o(l,{onSelectedFiles:e,children:"Text"})},s=function(){function e(n){console.log(n)}return o(l,{...K(),onSelectedFiles:e,children:"Text"})},c=function(){function e(){throw new Error("This function should not be called")}return o(l,{disabled:!0,onSelectedFiles:e,children:"Text"})},a=function(){function e(){throw new Error("This function should not be called")}return o(l,{loading:!0,onSelectedFiles:e,children:"Text"})},d=function(){function e(n){console.log(n)}return o(l,{...K(),loading:!0,onSelectedFiles:e,children:"Text"})},u=function(){function e(){throw new Error("This function should not be called")}return o(l,{disabled:!0,loading:!0,onSelectedFiles:e,children:"Text"})},t=function(){function e(n){console.log(n)}return o(l,{fullWidth:!0,onSelectedFiles:e,children:"Text"})};t.parameters={fixedWidth:!0};const i=function(){const e=Array(100).fill("Text").join(" ");function n(f){console.log(f)}return o(l,{fullWidth:!0,onSelectedFiles:n,children:e})};i.parameters={fixedWidth:!0};const F=function(){const e=["image/x-png","image/gif","image/jpeg"];function n(f){console.log(f)}return o(l,{acceptedFileTypes:e,onSelectedFiles:n,children:"Text"})},p=function(){function e(n){console.log(n)}return o(l,{multiple:!0,onSelectedFiles:e,children:"Text"})};var h,m,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var g,T,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton {...useInitialFocus()} onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var B,U,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(y=(U=c.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};var b,w,A;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var W,L,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton {...useInitialFocus()} loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var D,j,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called');
  }
  return <FileUploadButton disabled loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var _,v,M;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(M=(v=t.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var P,C,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
  const longText = Array(100).fill('Text').join(' ');
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles}>
      {longText}
    </FileUploadButton>;
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var k,q,z;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg'];
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(z=(q=F.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files);
  }
  return <FileUploadButton multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>;
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const le=["Passive","Focused","Disabled","Loading","LoadingFocused","LoadingDisabled","FullWidth","FullWidthLongText","AcceptedFileTypes","MultipleFiles"];export{F as AcceptedFileTypes,c as Disabled,s as Focused,t as FullWidth,i as FullWidthLongText,a as Loading,u as LoadingDisabled,d as LoadingFocused,p as MultipleFiles,r as Passive,le as __namedExportsOrder,ne as default};
//# sourceMappingURL=file-upload-button-default.stories-e179ddea.js.map
