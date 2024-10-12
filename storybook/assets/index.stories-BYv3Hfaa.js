import{_ as e,k as w}from"./preact.module-DSfP8QVG.js";import{h as o}from"./create-component-BQOTiC4n.js";import{B as u}from"./banner-D_Pq3INI.js";import{B as a}from"./button-BwoPhB3Q.js";import{D}from"./dropdown-jPn633qY.js";import{F as R}from"./file-upload-button-CybTYWSM.js";import{F as W}from"./file-upload-dropzone-BL1_tDx8.js";import{L as s}from"./layer-4NBLeU5R.js";import{M as J}from"./modal-B_at4Ag_.js";import{R as X}from"./range-slider-B9k9rwb6.js";import{S as N}from"./segmented-control-VwIXTsk_.js";import{T as c}from"./text-akKGtnT_.js";import{T as U}from"./textbox-color-BcitD2rb.js";import{T as j}from"./textbox-numeric-DRs6PNyg.js";import{T as z}from"./toggle-BZuwmOH9.js";import{I as _}from"./icon-layer-component-16-O022xB2h.js";import{I as A}from"./icon-layer-frame-16-CZRkkCfJ.js";import{I as P}from"./icon-space-horizontal-16-qMGkg7Ck.js";import{I as q,a as G,b as K}from"./icon-warning-32-DYKEKquQ.js";import{B as Q}from"./bold-DXIwsQP5.js";import{M as Y}from"./muted-C9lrYW8b.js";import{C as Z}from"./columns-CEt7mtlJ.js";import{S as r}from"./stack-RvZwxhAG.js";import{V as p}from"./vertical-space-Cd8FpnC4.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";import"./use-mouse-down-outside-BUdT4G63.js";import"./get-current-from-ref-J2nPd355.js";import"./icon-control-chevron-down-8-Cg7ugtUI.js";import"./create-icon-BACkom7L.js";import"./icon-menu-checkmark-checked-16-P6IVZz8A.js";import"./constants-sCBnAk_k.js";import"./file-comparator-BUjrH4N4.js";import"./icon-cross-32-Dx8xq9TQ.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-jh4RbMrc.js";import"./raw-textbox-numeric-BsK585AJ.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BcK5ReZh.js";const je={title:"Index"},n={alignItems:"center",backgroundColor:"var(--figma-color-bg-secondary)",display:"flex",height:"92px",justifyContent:"center",padding:"24px 40px"},i=function(){const[v,x]=o(!0),[f,y]=o("Regular"),[C,S]=o(!0),[T,b]=o("42"),[h,V]=o("1st"),[I,L]=o("0D99FF"),[k,B]=o("50%"),[M,F]=o("42"),[O,E]=o(!0),[H,l]=o(!1);return e(w,null,e(Z,{space:"extraLarge"},e("div",{style:{width:"240px"}},e(r,{space:"large"},e("div",{style:n},e(z,{onChange:function(t){E(t.currentTarget.checked)},value:O},e(c,null,"Auto-update"))),e(r,{space:"extraSmall"},e(a,{fullWidth:!0},"Make Something Wonderful"),e(a,{danger:!0,fullWidth:!0},"Discard Changes"),e(a,{disabled:!0,fullWidth:!0,loading:!0},"Loading")),e("div",{style:n},e(j,{icon:e(P,null),onInput:function(t){F(t.currentTarget.value)},value:M,variant:"border"})),e(r,{space:"extraSmall"},e(s,{icon:e(A,null),onChange:function(t){S(t.currentTarget.checked)},value:C},"Frame"),e(s,{bold:!0,component:!0,icon:e(_,null),onChange:function(t){x(t.currentTarget.checked)},value:v},"Component")),e("div",{style:n},e(X,{maximum:100,minimum:0,onInput:function(t){b(t.currentTarget.value)},value:T})),e("div",{style:n},e(a,{onClick:function(){l(!0)},secondary:!0},"Open Modal"),e(J,{onCloseButtonClick:function(){l(!1)},onOverlayClick:function(){l(!1)},open:H,title:"Modal"},e("div",{style:{height:"120px",padding:"16px",width:"240px"}},e(a,{onClick:function(){l(!1)},secondary:!0},"Close Modal")))))),e("div",{style:{width:"240px"}},e(r,{space:"large"},e("div",{style:n},e(N,{onChange:function(t){V(t.currentTarget.value)},options:[{value:"1st"},{value:"2nd"},{value:"3rd"}],value:h})),e(W,{acceptedFileTypes:["image/jpeg","image/png"],multiple:!0},e(c,{align:"center"},e(Q,null,"Drop images here")),e(p,{space:"small"}),e(c,{align:"center"},e(Y,null,"or")),e(p,{space:"small"}),e(R,{acceptedFileTypes:["image/jpeg","image/png"]},"Choose Image Files")),e("div",{style:n},e(D,{onChange:function(t){y(t.currentTarget.value)},options:[{value:"Light"},{value:"Regular"},{value:"Semibold"},{value:"Bold"}],value:f,variant:"border"})),e(r,{space:"extraSmall"},e(u,{icon:e(q,null)},"Select a layer to get started"),e(u,{icon:e(G,null),variant:"success"},"Plugin unlocked"),e(u,{icon:e(K,null),variant:"warning"},"Invalid license key")),e("div",{style:n},e(U,{hexColor:I,onHexColorInput:function(t){L(t.currentTarget.value)},onOpacityInput:function(t){B(t.currentTarget.value)},opacity:k,variant:"border"}))))))};var d,m,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`function () {
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
