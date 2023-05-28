import{k as w}from"./preact.module-6cc36cb9.js";import{h as o}from"./hooks.module-6e460002.js";import{B as c}from"./banner-a1124020.js";import{B as a}from"./button-b81342dc.js";import{D}from"./dropdown-ee0cffb5.js";import{F as R}from"./file-upload-button-8a68fcbc.js";import{F as W}from"./file-upload-dropzone-67434a60.js";import{L as d}from"./layer-4542d067.js";import{M as J}from"./modal-b03bb9df.js";import{R as X}from"./range-slider-dcea2754.js";import{S as N}from"./segmented-control-b024ac2c.js";import{T as u}from"./text-3f7573c7.js";import{T as U}from"./textbox-color-18deed78.js";import{T as j}from"./textbox-numeric-457ae4a0.js";import{T as z}from"./toggle-199fb635.js";import{I as _}from"./icon-layer-component-16-214c62a0.js";import{I as A}from"./icon-layer-frame-16-6719cb4a.js";import{I as P}from"./icon-space-horizontal-16-83b994ab.js";import{I as q}from"./icon-check-circle-32-eaf89b4b.js";import{I as G}from"./icon-info-32-b22fdf0e.js";import{I as K}from"./icon-warning-32-c0a318c0.js";import{B as Q}from"./bold-6e7a3edf.js";import{M as Y}from"./muted-d6ed6890.js";import{C as Z}from"./columns-07919ee4.js";import{S as r}from"./stack-75d3944d.js";import{V as s}from"./vertical-space-1279b60e.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";import"./use-mouse-down-outside-a27f62ba.js";import"./get-current-from-ref-47f174f6.js";import"./icon-control-chevron-down-8-44d6ef4a.js";import"./create-icon-b935921b.js";import"./icon-menu-checkmark-checked-16-63abc2a0.js";import"./file-comparator-3bc6e99f.js";import"./icon-cross-32-fec1c7a2.js";import"./create-focus-trap-key-down-handler-e65db33a.js";import"./icon-button-8696ab26.js";import"./raw-textbox-numeric-ad94f241.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";import"./mixed-values-e51728b2.js";import"./textbox.module-9ea46353.js";const ze={title:"Index"},n={alignItems:"center",backgroundColor:"var(--figma-color-bg-secondary)",display:"flex",height:"92px",justifyContent:"center",padding:"24px 40px"},i=function(){const[v,x]=o(!0),[h,f]=o("Regular"),[y,C]=o(!0),[S,T]=o("42"),[b,V]=o("1st"),[I,L]=o("0D99FF"),[k,B]=o("50%"),[M,F]=o("42"),[O,E]=o(!0),[H,l]=o(!1);return e(w,{children:e(Z,{space:"extraLarge",children:[e("div",{style:{width:"240px"},children:e(r,{space:"large",children:[e("div",{style:n,children:e(z,{onChange:function(t){E(t.currentTarget.checked)},value:O,children:e(u,{children:"Auto-update"})})}),e(r,{space:"extraSmall",children:[e(a,{fullWidth:!0,children:"Make Something Wonderful"}),e(a,{danger:!0,fullWidth:!0,children:"Discard Changes"}),e(a,{disabled:!0,fullWidth:!0,loading:!0,children:"Loading"})]}),e("div",{style:n,children:e(j,{icon:e(P,{}),onInput:function(t){F(t.currentTarget.value)},value:M,variant:"border"})}),e(r,{space:"extraSmall",children:[e(d,{icon:e(A,{}),onChange:function(t){C(t.currentTarget.checked)},value:y,children:"Frame"}),e(d,{bold:!0,component:!0,icon:e(_,{}),onChange:function(t){x(t.currentTarget.checked)},value:v,children:"Component"})]}),e("div",{style:n,children:e(X,{maximum:100,minimum:0,onInput:function(t){T(t.currentTarget.value)},value:S})}),e("div",{style:n,children:[e(a,{onClick:function(){l(!0)},secondary:!0,children:"Open Modal"}),e(J,{onCloseButtonClick:function(){l(!1)},onOverlayClick:function(){l(!1)},open:H,title:"Modal",children:e("div",{style:{height:"120px",padding:"16px",width:"240px"},children:e(a,{onClick:function(){l(!1)},secondary:!0,children:"Close Modal"})})})]})]})}),e("div",{style:{width:"240px"},children:e(r,{space:"large",children:[e("div",{style:n,children:e(N,{onChange:function(t){V(t.currentTarget.value)},options:[{value:"1st"},{value:"2nd"},{value:"3rd"}],value:b})}),e(W,{acceptedFileTypes:["image/jpeg","image/png"],multiple:!0,children:[e(u,{align:"center",children:e(Q,{children:"Drop images here"})}),e(s,{space:"small"}),e(u,{align:"center",children:e(Y,{children:"or"})}),e(s,{space:"small"}),e(R,{acceptedFileTypes:["image/jpeg","image/png"],children:"Choose Image Files"})]}),e("div",{style:n,children:e(D,{onChange:function(t){f(t.currentTarget.value)},options:[{value:"Light"},{value:"Regular"},{value:"Semibold"},{value:"Bold"}],value:h,variant:"border"})}),e(r,{space:"extraSmall",children:[e(c,{icon:e(G,{}),children:"Select a layer to get started"}),e(c,{icon:e(q,{}),variant:"success",children:"Plugin unlocked"}),e(c,{icon:e(K,{}),variant:"warning",children:"Invalid license key"})]}),e("div",{style:n,children:e(U,{hexColor:I,onHexColorInput:function(t){L(t.currentTarget.value)},onOpacityInput:function(t){B(t.currentTarget.value)},opacity:k,variant:"border"})})]})})]})})};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`function () {
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
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const _e=["Index"];export{i as Index,_e as __namedExportsOrder,ze as default};
//# sourceMappingURL=index.stories-f2aa245c.js.map