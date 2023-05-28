import{k as d}from"./preact.module-6cc36cb9.js";import{h as a}from"./hooks.module-6e460002.js";import{I as Z}from"./icon-chevron-down-32-28bcf335.js";import{B as i}from"./button-b81342dc.js";import{M as r}from"./modal-b03bb9df.js";import{o as e}from"./jsxRuntime.module-893eb125.js";import"./create-icon-b935921b.js";import"./create-class-name-71c46838.js";import"./loading-indicator-5157fb6e.js";import"./button.module-2bfe3ef2.js";import"./icon-cross-32-fec1c7a2.js";import"./create-focus-trap-key-down-handler-e65db33a.js";import"./icon-button-8696ab26.js";import"./text-3f7573c7.js";const he={parameters:{order:1},title:"Components/Modal/Default"},u=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{open:o,children:e("div",{style:c,children:e(i,{onClick:s,secondary:!0,children:"Close"})})})]})},h=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{noTransition:!0,open:o,children:e("div",{style:c,children:e(i,{onClick:s,secondary:!0,children:"Close"})})})]})},C=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{onOverlayClick:s,open:o,children:e("div",{style:c,children:"foo"})})]})},g=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{onEscapeKeyDown:s,open:o,children:e("div",{style:c,children:"foo"})})]})},f=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{open:o,title:"foo",children:e("div",{style:c,children:e(i,{onClick:s,secondary:!0,children:"Close"})})})]})},B=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{onCloseButtonClick:s,open:o,title:"foo",children:e("div",{style:c,children:"bar"})})]})},O=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{closeButtonIcon:e(Z,{}),onCloseButtonClick:s,open:o,title:"foo",children:e("div",{style:c,children:"bar"})})]})},m=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function s(n){console.log(n),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open"}),e(r,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,title:"foo",children:e("div",{style:c,children:"bar"})})]})},v=function(){const[o,t]=a(!1);function l(p){console.log(p),t(!0)}function s(p){console.log(p),t(!1)}const c={height:"160px",padding:"12px",width:"240px"},[n,k]=a(!1);function V(p){console.log(p),k(!0)}function W(p){console.log(p),k(!1)}const Y={height:"120px",padding:"12px",width:"240px"};return e(d,{children:[e(i,{onClick:l,children:"Open parent modal"}),e(r,{onCloseButtonClick:s,open:o,title:"Parent",children:e("div",{style:c,children:[e(i,{onClick:V,children:"Open child modal"}),e(r,{onCloseButtonClick:W,open:n,title:"Child",children:e("div",{style:Y})})]})})]})};var y,x,M;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(M=(x=u.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,S,T;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal noTransition open={open}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,L,H;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleOverlayClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(H=(L=C.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var J,X,F;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleEscapeKeyDown(event: KeyboardEvent) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(F=(X=g.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var b,P,D;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} title="foo">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var K,I,N;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onCloseButtonClick={handleCloseButtonClick} open={open} title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(N=(I=B.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var _,j,q;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonIcon={<IconChevronDown32 />} onCloseButtonClick={handleCloseButtonClick} open={open} title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(q=(j=O.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,A,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonPosition="left" onCloseButtonClick={handleCloseButtonClick} open={open} title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var Q,R,U;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
  const [parentOpen, setParentOpen] = useState<boolean>(false);
  function handleParentOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setParentOpen(true);
  }
  function handleParentCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setParentOpen(false);
  }
  const parentStyle = {
    height: '160px',
    padding: '12px',
    width: '240px'
  };
  const [childOpen, setChildOpen] = useState<boolean>(false);
  function handleChildOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setChildOpen(true);
  }
  function handleChildCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setChildOpen(false);
  }
  const childStyle = {
    height: '120px',
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const Ce=["Default","NoTransition","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{B as CloseButton,O as CloseButtonIcon,m as CloseButtonPositionLeft,g as CloseOnEscapeKeyDown,C as CloseOnOverlayClick,u as Default,v as Nested,h as NoTransition,f as Title,Ce as __namedExportsOrder,he as default};
//# sourceMappingURL=modal-default.stories-60d01429.js.map
