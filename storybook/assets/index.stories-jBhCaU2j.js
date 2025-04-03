import{_ as e,k as w}from"./preact.module-7_OotSvk.js";import{y as D,d as o}from"./create-component-CR2aSVXZ.js";import{B as u}from"./banner-C-ZMZPbp.js";import{B as a}from"./button-BmHCZnq2.js";import{D as R}from"./dropdown-BBD2ivy8.js";import{F as W}from"./file-upload-button-C8Q7DkQO.js";import{F as J}from"./file-upload-dropzone-C2-AUMac.js";import{L as s}from"./layer-CXVfP_WR.js";import{M as X}from"./modal-CwOMuz2H.js";import{R as N}from"./range-slider-RR4Cd3SF.js";import{S as A}from"./segmented-control-QPfwxmKj.js";import{T as c}from"./text-Dw40dpV8.js";import{T as U}from"./textbox-color-C1fOfh9C.js";import{T as j}from"./textbox-numeric-D6q3HXb7.js";import{T as z}from"./toggle-7vgmKQjH.js";import{I as P}from"./icon-component-16-sq7-newj.js";import{I as _}from"./icon-frame-16-DHk6dLwb.js";import{I as q,a as G,b as K}from"./icon-warning-small-24-BPasW1pO.js";import{I as Q}from"./icon-auto-layout-padding-horizontal-24-BRJgnCkF.js";import{B as Y}from"./bold-DbN0f5oE.js";import{M as Z}from"./muted-DBkhrh9Q.js";import{C as $}from"./columns-CwOtgwPW.js";import{S as l}from"./stack-DvsA5INJ.js";import{V as d}from"./vertical-space-BEQFZ7ek.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BaDWtmsV.js";import"./button.module-CaU2unFW.js";import"./use-mouse-down-outside-C9Ms6DBz.js";import"./get-current-from-ref-J2nPd355.js";import"./icon-check-16-D7BaBx8-.js";import"./create-icon-DvrWd2n3.js";import"./icon-chevron-down-16-BVHs5txu.js";import"./constants-ByKZPpIE.js";import"./file-comparator-BUjrH4N4.js";import"./icon-close-24-D4m0QCAG.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-Btpi0KRV.js";import"./raw-textbox-numeric-P0blTARb.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";import"./textbox.module-BTiVByXg.js";const je={title:"Index"},n={alignItems:"center",backgroundColor:"var(--figma-color-bg)",display:"flex",height:"92px",justifyContent:"center",padding:"24px 40px"},i=function(){D(function(){document.body.style.backgroundColor="var(--figma-color-bg-secondary)"},[]);const[v,x]=o(!0),[f,y]=o("Regular"),[C,S]=o(!0),[T,b]=o("42"),[h,V]=o("1st"),[I,k]=o("0D99FF"),[L,B]=o("50"),[M,F]=o("42"),[O,E]=o(!0),[H,r]=o(!1);return e(w,null,e($,{space:"extraLarge"},e("div",{style:{width:"240px"}},e(l,{space:"large"},e("div",{style:n},e(z,{onChange:function(t){E(t.currentTarget.checked)},value:O},e(c,null,"Auto-update"))),e(l,{space:"extraSmall"},e(a,{fullWidth:!0},"Make Something Wonderful"),e(a,{danger:!0,fullWidth:!0},"Discard Changes"),e(a,{disabled:!0,fullWidth:!0,loading:!0},"Loading")),e("div",{style:n},e(j,{icon:e(Q,null),onInput:function(t){F(t.currentTarget.value)},value:M})),e(l,{space:"extraSmall"},e(s,{icon:e(_,null),onChange:function(t){S(t.currentTarget.checked)},value:C},"Frame"),e(s,{bold:!0,component:!0,icon:e(P,null),onChange:function(t){x(t.currentTarget.checked)},value:v},"Component")),e("div",{style:n},e(N,{maximum:100,minimum:0,onInput:function(t){b(t.currentTarget.value)},value:T})),e("div",{style:n},e(a,{onClick:function(){r(!0)},secondary:!0},"Open Modal"),e(X,{onCloseButtonClick:function(){r(!1)},onOverlayClick:function(){r(!1)},open:H,title:"Modal"},e("div",{style:{height:"120px",padding:"16px",width:"240px"}},e(a,{onClick:function(){r(!1)},secondary:!0},"Close Modal")))))),e("div",{style:{width:"240px"}},e(l,{space:"large"},e("div",{style:n},e(A,{onChange:function(t){V(t.currentTarget.value)},options:[{value:"1st"},{value:"2nd"},{value:"3rd"}],value:h})),e("div",{style:{backgroundColor:"var(--figma-color-bg)",padding:"var(--space-12)"}},e(J,{acceptedFileTypes:["image/jpeg","image/png"],multiple:!0},e(c,{align:"center"},e(Y,null,"Drop images here")),e(d,{space:"small"}),e(c,{align:"center"},e(Z,null,"or")),e(d,{space:"small"}),e(W,{acceptedFileTypes:["image/jpeg","image/png"]},"Choose Image Files"))),e("div",{style:n},e(R,{onChange:function(t){y(t.currentTarget.value)},options:[{value:"Light"},{value:"Regular"},{value:"Semibold"},{value:"Bold"}],value:f})),e(l,{space:"extraSmall"},e(u,{icon:e(q,null)},"Select a layer to get started"),e(u,{icon:e(G,null),variant:"success"},"Plugin unlocked"),e(u,{icon:e(K,null),variant:"warning"},"Invalid license key")),e("div",{style:n},e(U,{hexColor:I,onHexColorInput:function(t){k(t.currentTarget.value)},onOpacityInput:function(t){B(t.currentTarget.value)},opacity:L}))))))};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
  useEffect(function () {
    document.body.style.backgroundColor = 'var(--figma-color-bg-secondary)';
  }, []);
  const [componentLayerValue, setComponentLayerValue] = useState<boolean>(true);
  const [dropdownValue, setDropdownValue] = useState<string>('Regular');
  const [frameLayerValue, setFrameLayerValue] = useState<boolean>(true);
  const [rangeSliderValue, setRangeSliderValue] = useState<string>('42');
  const [segmentedControlValue, setSegmentedControlValue] = useState<string>('1st');
  const [textboxColorHexColor, setTextboxColorHexColor] = useState<string>('0D99FF');
  const [textboxColorOpacity, setTextboxColorOpacity] = useState<string>('50');
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
              <TextboxNumeric icon={<IconAutoLayoutPaddingHorizontal24 />} onInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxNumericValue(event.currentTarget.value);
            }} value={textboxNumericValue} />
            </div>
            <Stack space="extraSmall">
              <Layer icon={<IconFrame16 />} onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setFrameLayerValue(event.currentTarget.checked);
            }} value={frameLayerValue}>
                Frame
              </Layer>
              <Layer bold component icon={<IconComponent16 />} onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
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
            <div style={{
            backgroundColor: 'var(--figma-color-bg)',
            padding: 'var(--space-12)'
          }}>
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
            </div>
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
            }]} value={dropdownValue} />
            </div>
            <Stack space="extraSmall">
              <Banner icon={<IconInfoSmall24 />}>
                Select a layer to get started
              </Banner>
              <Banner icon={<IconApprovedCheckmark24 />} variant="success">
                Plugin unlocked
              </Banner>
              <Banner icon={<IconWarningSmall24 />} variant="warning">
                Invalid license key
              </Banner>
            </Stack>
            <div style={boxStyle}>
              <TextboxColor hexColor={textboxColorHexColor} onHexColorInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxColorHexColor(event.currentTarget.value);
            }} onOpacityInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
              setTextboxColorOpacity(event.currentTarget.value);
            }} opacity={textboxColorOpacity} />
            </div>
          </Stack>
        </div>
      </Columns>
    </Fragment>;
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const ze=["Index"];export{i as Index,ze as __namedExportsOrder,je as default};
