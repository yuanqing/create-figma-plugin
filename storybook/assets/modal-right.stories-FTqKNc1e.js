import{y as n,g as u}from"./preact.module-Cko36Lti.js";import{p as a}from"./create-component-B1Y1oDBF.js";import{I as Y}from"./icon-chevron-down-32-B2ht33fq.js";import{B as i}from"./button-Nh83xXAg.js";import{M as c}from"./modal-CG3-ixsN.js";import"./create-icon-D5KCgWRi.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./icon-cross-32--dTnmUPt.js";import"./get-current-from-ref-J2nPd355.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-Bn4YtboF.js";import"./text-CSA6lMsS.js";const hn={tags:["4"],title:"Components/Modal/Right"},d=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"right"},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},C=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"right",transition:!1},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},g=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{onOverlayClick:s,open:o,position:"right"},n("div",{style:{padding:"12px",width:"240px"}},"foo")))},h=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{onEscapeKeyDown:s,open:o,position:"right"},n("div",{style:{padding:"12px",width:"240px"}},"foo")))},f=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"right",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},B=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{onCloseButtonClick:s,open:o,position:"right",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},O=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{closeButtonIcon:n(Y,null),onCloseButtonClick:s,open:o,position:"right",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},m=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(u,null,n(i,{onClick:l},"Open"),n(c,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,position:"right",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},v=function(){const[o,t]=a(!1);function l(p){console.log(p),t(!0)}function s(p){console.log(p),t(!1)}const r={padding:"12px",width:"240px"},[e,k]=a(!1);function V(p){console.log(p),k(!0)}function W(p){console.log(p),k(!1)}return n(u,null,n(i,{onClick:l},"Open parent modal"),n(c,{onCloseButtonClick:s,open:o,position:"right",title:"Parent"},n("div",{style:r},n(i,{onClick:V},"Open child modal"),n(c,{onCloseButtonClick:W,open:e,position:"right",title:"Child"},n("div",{style:{padding:"12px",width:"160px"}})))))};var y,M,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="right">
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="right" transition={false}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(x=C.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var w,L,F;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open} position="right">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open} position="right">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var b,P,D;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="right" title="foo">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var K,I,_;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onCloseButtonClick={handleCloseButtonClick} open={open} position="right" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(_=(I=B.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,R,j;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonIcon={<IconChevronDown32 />} onCloseButtonClick={handleCloseButtonClick} open={open} position="right" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(j=(R=O.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '240px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal closeButtonPosition="left" onCloseButtonClick={handleCloseButtonClick} open={open} position="right" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,Q,U;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`function () {
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
    padding: '12px',
    width: '160px'
  };
  return <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} position="right" title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} position="right" title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const fn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{B as CloseButton,O as CloseButtonIcon,m as CloseButtonPositionLeft,h as CloseOnEscapeKeyDown,g as CloseOnOverlayClick,d as Default,v as Nested,f as Title,C as TransitionFalse,fn as __namedExportsOrder,hn as default};
