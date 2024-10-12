import{_ as e,k as p}from"./preact.module-DSfP8QVG.js";import{h as a}from"./create-component-BQOTiC4n.js";import{I as Y}from"./icon-chevron-down-32-BTr0qZ2U.js";import{B as i}from"./button-BwoPhB3Q.js";import{M as c}from"./modal-B_at4Ag_.js";import"./create-icon-BACkom7L.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-Bc4ynZTd.js";import"./button.module-BCbZvLPP.js";import"./icon-cross-32-Dx8xq9TQ.js";import"./get-current-from-ref-J2nPd355.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-jh4RbMrc.js";import"./text-akKGtnT_.js";const ge={tags:["2"],title:"Components/Modal/Bottom"},d=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{open:o,position:"bottom"},e("div",{style:{height:"160px",padding:"12px"}},e(i,{onClick:s,secondary:!0},"Close"))))},C=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{open:o,position:"bottom",transition:!1},e("div",{style:{height:"160px",padding:"12px"}},e(i,{onClick:s,secondary:!0},"Close"))))},g=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{onOverlayClick:s,open:o,position:"bottom"},e("div",{style:{height:"160px",padding:"12px"}},"foo")))},f=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{onEscapeKeyDown:s,open:o,position:"bottom"},e("div",{style:{height:"160px",padding:"12px"}},"foo")))},h=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{open:o,position:"bottom",title:"foo"},e("div",{style:{height:"160px",padding:"12px"}},e(i,{onClick:s,secondary:!0},"Close"))))},m=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{onCloseButtonClick:s,open:o,position:"bottom",title:"foo"},e("div",{style:{height:"160px",padding:"12px"}},"bar")))},B=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{closeButtonIcon:e(Y,null),onCloseButtonClick:s,open:o,position:"bottom",title:"foo"},e("div",{style:{height:"160px",padding:"12px"}},"bar")))},O=function(){const[o,n]=a(!1);function l(t){console.log(t),n(!0)}function s(t){console.log(t),n(!1)}return e(p,null,e(i,{onClick:l},"Open"),e(c,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,position:"bottom",title:"foo"},e("div",{style:{height:"160px",padding:"12px"}},"bar")))},v=function(){const[o,n]=a(!1);function l(r){console.log(r),n(!0)}function s(r){console.log(r),n(!1)}const u={height:"160px",padding:"12px"},[t,k]=a(!1);function V(r){console.log(r),k(!0)}function W(r){console.log(r),k(!1)}return e(p,null,e(i,{onClick:l},"Open parent modal"),e(c,{onCloseButtonClick:s,open:o,position:"bottom",title:"Parent"},e("div",{style:u},e(i,{onClick:V},"Open child modal"),e(c,{onCloseButtonClick:W,open:t,position:"bottom",title:"Child"},e("div",{style:{height:"120px",padding:"12px"}})))))};var y,M,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="bottom">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var S,x,T;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="bottom" transition={false}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(x=C.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var b,L,F;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open} position="bottom">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open} position="bottom">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var P,D,w;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="bottom" title="foo">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(w=(D=h.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var K,I,_;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onCloseButtonClick={handleCloseButtonClick} open={open} position="bottom" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,j,q;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonIcon={<IconChevronDown32 />} onCloseButtonClick={handleCloseButtonClick} open={open} position="bottom" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(q=(j=B.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,A,G;O.parameters={...O.parameters,docs:{...(z=O.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonPosition="left" onCloseButtonClick={handleCloseButtonClick} open={open} position="bottom" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(G=(A=O.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var Q,R,U;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`function () {
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
    padding: '12px'
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} position="bottom" title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} position="bottom" title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const fe=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{m as CloseButton,B as CloseButtonIcon,O as CloseButtonPositionLeft,f as CloseOnEscapeKeyDown,g as CloseOnOverlayClick,d as Default,v as Nested,h as Title,C as TransitionFalse,fe as __namedExportsOrder,ge as default};
