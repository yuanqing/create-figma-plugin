import{y as e,g as w}from"./preact.module-Cko36Lti.js";import{p as t}from"./create-component-B1Y1oDBF.js";import{B as u}from"./banner-B724wez4.js";import{B as a}from"./button-Nh83xXAg.js";import{D}from"./dropdown-ChjE8DCZ.js";import{F as R}from"./file-upload-button-BF_AkmbO.js";import{F as W}from"./file-upload-dropzone-BEyBBJNw.js";import{L as s}from"./layer-CO3p0MQy.js";import{M as J}from"./modal-CG3-ixsN.js";import{R as X}from"./range-slider-DZTJq2C4.js";import{S as N}from"./segmented-control-BCTeNbxv.js";import{T as c}from"./text-CSA6lMsS.js";import{T as U}from"./textbox-color-BlJN2yT-.js";import{T as j}from"./textbox-numeric-BBSxTm74.js";import{T as z}from"./toggle-CQSWp7tN.js";import{I as _}from"./icon-layer-component-16-Ba-YK5uH.js";import{I as A}from"./icon-layer-frame-16-Bjyv49bR.js";import{I as P}from"./icon-space-horizontal-16-BM3El5xq.js";import{I as q,a as G,b as K}from"./icon-warning-32-bQjYT1TD.js";import{B as Q}from"./bold-BILeCw76.js";import{M as Y}from"./muted-CWF3qbUC.js";import{C as Z}from"./columns-CP52fWit.js";import{S as r}from"./stack-C3JVIeO_.js";import{V as p}from"./vertical-space-CCtwceSb.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./use-mouse-down-outside-_doBYBDK.js";import"./get-current-from-ref-J2nPd355.js";import"./icon-control-chevron-down-8-Dt_uljnP.js";import"./create-icon-D5KCgWRi.js";import"./icon-menu-checkmark-checked-16-CcodR_Ny.js";import"./constants-sCBnAk_k.js";import"./file-comparator-BUjrH4N4.js";import"./icon-cross-32--dTnmUPt.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-Bn4YtboF.js";import"./raw-textbox-numeric-CcC1lQEj.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";const je={title:"Index"},o={alignItems:"center",backgroundColor:"var(--figma-color-bg-secondary)",display:"flex",height:"92px",justifyContent:"center",padding:"24px 40px"},i=function(){const[v,x]=t(!0),[f,y]=t("Regular"),[C,S]=t(!0),[T,b]=t("42"),[h,V]=t("1st"),[I,L]=t("0D99FF"),[k,B]=t("50%"),[M,F]=t("42"),[O,E]=t(!0),[H,l]=t(!1);return e(w,null,e(Z,{space:"extraLarge"},e("div",{style:{width:"240px"}},e(r,{space:"large"},e("div",{style:o},e(z,{onChange:function(n){E(n.currentTarget.checked)},value:O},e(c,null,"Auto-update"))),e(r,{space:"extraSmall"},e(a,{fullWidth:!0},"Make Something Wonderful"),e(a,{danger:!0,fullWidth:!0},"Discard Changes"),e(a,{disabled:!0,fullWidth:!0,loading:!0},"Loading")),e("div",{style:o},e(j,{icon:e(P,null),onInput:function(n){F(n.currentTarget.value)},value:M,variant:"border"})),e(r,{space:"extraSmall"},e(s,{icon:e(A,null),onChange:function(n){S(n.currentTarget.checked)},value:C},"Frame"),e(s,{bold:!0,component:!0,icon:e(_,null),onChange:function(n){x(n.currentTarget.checked)},value:v},"Component")),e("div",{style:o},e(X,{maximum:100,minimum:0,onInput:function(n){b(n.currentTarget.value)},value:T})),e("div",{style:o},e(a,{onClick:function(){l(!0)},secondary:!0},"Open Modal"),e(J,{onCloseButtonClick:function(){l(!1)},onOverlayClick:function(){l(!1)},open:H,title:"Modal"},e("div",{style:{height:"120px",padding:"16px",width:"240px"}},e(a,{onClick:function(){l(!1)},secondary:!0},"Close Modal")))))),e("div",{style:{width:"240px"}},e(r,{space:"large"},e("div",{style:o},e(N,{onChange:function(n){V(n.currentTarget.value)},options:[{value:"1st"},{value:"2nd"},{value:"3rd"}],value:h})),e(W,{acceptedFileTypes:["image/jpeg","image/png"],multiple:!0},e(c,{align:"center"},e(Q,null,"Drop images here")),e(p,{space:"small"}),e(c,{align:"center"},e(Y,null,"or")),e(p,{space:"small"}),e(R,{acceptedFileTypes:["image/jpeg","image/png"]},"Choose Image Files")),e("div",{style:o},e(D,{onChange:function(n){y(n.currentTarget.value)},options:[{value:"Light"},{value:"Regular"},{value:"Semibold"},{value:"Bold"}],value:f,variant:"border"})),e(r,{space:"extraSmall"},e(u,{icon:e(q,null)},"Select a layer to get started"),e(u,{icon:e(G,null),variant:"success"},"Plugin unlocked"),e(u,{icon:e(K,null),variant:"warning"},"Invalid license key")),e("div",{style:o},e(U,{hexColor:I,onHexColorInput:function(n){L(n.currentTarget.value)},onOpacityInput:function(n){B(n.currentTarget.value)},opacity:k,variant:"border"}))))))};var d,m,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
  const [componentLayerValue, setComponentLayerValue] = useState<boolean>(true);
  const [dropdownValue, setDropdownValue] = useState<string>('Regular');
  const [frameLayerValue, setFrameLayerValue] = useState<boolean>(true);
  const [rangeSliderValue, setRangeSliderValue] = useState<string>('42');
  const [segmentedControlValue, setSegmentedControlValue] = useState<string>('1st');
  const [textboxColorHexColor, setTextboxColorHexColor] = useState<string>('0D99FF');
  const [textboxColorOpacity, setTextboxColorOpacity] = useState<string>('50%');
  const [textboxNumericValue, setTextboxNumericValue] = useState<string>('42');
  const [toggleValue, setToggleValue] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return <Fragment>
      <Columns space="extraLarge">
        <div style={{
        width: '240px'
      }}>
          <Stack space="large">
            <div style={boxStyle}>
              <Toggle onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setToggleValue(event.currentTarget.checked);
            }} value={toggleValue}>
                <Text>Auto-update</Text>
              </Toggle>
            </div>
            <Stack space="extraSmall">
              <Button fullWidth>Make Something Wonderful</Button>
              <Button danger fullWidth>
                Discard Changes
              </Button>
              <Button disabled fullWidth loading>
                Loading
              </Button>
            </Stack>
            <div style={boxStyle}>
              <TextboxNumeric icon={<IconSpaceHorizontal16 />} onInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxNumericValue(event.currentTarget.value);
            }} value={textboxNumericValue} variant="border" />
            </div>
            <Stack space="extraSmall">
              <Layer icon={<IconLayerFrame16 />} onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setFrameLayerValue(event.currentTarget.checked);
            }} value={frameLayerValue}>
                Frame
              </Layer>
              <Layer bold component icon={<IconLayerComponent16 />} onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setComponentLayerValue(event.currentTarget.checked);
            }} value={componentLayerValue}>
                Component
              </Layer>
            </Stack>
            <div style={boxStyle}>
              <RangeSlider maximum={100} minimum={0} onInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setRangeSliderValue(event.currentTarget.value);
            }} value={rangeSliderValue} />
            </div>
            <div style={boxStyle}>
              <Button onClick={function () {
              setModalOpen(true);
            }} secondary>
                Open Modal
              </Button>
              <Modal onCloseButtonClick={function () {
              setModalOpen(false);
            }} onOverlayClick={function () {
              setModalOpen(false);
            }} open={modalOpen} title="Modal">
                <div style={{
                height: '120px',
                padding: '16px',
                width: '240px'
              }}>
                  <Button onClick={function () {
                  setModalOpen(false);
                }} secondary>
                    Close Modal
                  </Button>
                </div>
              </Modal>
            </div>
          </Stack>
        </div>
        <div style={{
        width: '240px'
      }}>
          <Stack space="large">
            <div style={boxStyle}>
              <SegmentedControl onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setSegmentedControlValue(event.currentTarget.value);
            }} options={[{
              value: '1st'
            }, {
              value: '2nd'
            }, {
              value: '3rd'
            }]} value={segmentedControlValue} />
            </div>
            <FileUploadDropzone acceptedFileTypes={['image/jpeg', 'image/png']} multiple>
              <Text align="center">
                <Bold>Drop images here</Bold>
              </Text>
              <VerticalSpace space="small" />
              <Text align="center">
                <Muted>or</Muted>
              </Text>
              <VerticalSpace space="small" />
              <FileUploadButton acceptedFileTypes={['image/jpeg', 'image/png']}>
                Choose Image Files
              </FileUploadButton>
            </FileUploadDropzone>
            <div style={boxStyle}>
              <Dropdown onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setDropdownValue(event.currentTarget.value);
            }} options={[{
              value: 'Light'
            }, {
              value: 'Regular'
            }, {
              value: 'Semibold'
            }, {
              value: 'Bold'
            }]} value={dropdownValue} variant="border" />
            </div>
            <Stack space="extraSmall">
              <Banner icon={<IconInfo32 />}>
                Select a layer to get started
              </Banner>
              <Banner icon={<IconCheckCircle32 />} variant="success">
                Plugin unlocked
              </Banner>
              <Banner icon={<IconWarning32 />} variant="warning">
                Invalid license key
              </Banner>
            </Stack>
            <div style={boxStyle}>
              <TextboxColor hexColor={textboxColorHexColor} onHexColorInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxColorHexColor(event.currentTarget.value);
            }} onOpacityInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxColorOpacity(event.currentTarget.value);
            }} opacity={textboxColorOpacity} variant="border" />
            </div>
          </Stack>
        </div>
      </Columns>
    </Fragment>;
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const ze=["Index"];export{i as Index,ze as __namedExportsOrder,je as default};
