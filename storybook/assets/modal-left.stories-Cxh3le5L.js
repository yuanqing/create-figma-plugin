import{y as n,g as p}from"./preact.module-Cko36Lti.js";import{p as a}from"./create-component-B1Y1oDBF.js";import{I as Y}from"./icon-chevron-down-32-B2ht33fq.js";import{B as i}from"./button-Nh83xXAg.js";import{M as c}from"./modal-CG3-ixsN.js";import"./create-icon-D5KCgWRi.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./icon-cross-32--dTnmUPt.js";import"./get-current-from-ref-J2nPd355.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-Bn4YtboF.js";import"./text-CSA6lMsS.js";const Bn={tags:["3"],title:"Components/Modal/Left"},d=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"left"},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},C=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"left",transition:!1},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},f=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{onOverlayClick:s,open:o,position:"left"},n("div",{style:{padding:"12px",width:"240px"}},"foo")))},B=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{onEscapeKeyDown:s,open:o,position:"left"},n("div",{style:{padding:"12px",width:"240px"}},"foo")))},g=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{open:o,position:"left",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},n(i,{onClick:s,secondary:!0},"Close"))))},O=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{onCloseButtonClick:s,open:o,position:"left",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},h=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{closeButtonIcon:n(Y,null),onCloseButtonClick:s,open:o,position:"left",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},m=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(i,{onClick:l},"Open"),n(c,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,position:"left",title:"foo"},n("div",{style:{padding:"12px",width:"240px"}},"bar")))},v=function(){const[o,t]=a(!1);function l(r){console.log(r),t(!0)}function s(r){console.log(r),t(!1)}const u={padding:"12px",width:"240px"},[e,k]=a(!1);function V(r){console.log(r),k(!0)}function W(r){console.log(r),k(!1)}return n(p,null,n(i,{onClick:l},"Open parent modal"),n(c,{onCloseButtonClick:s,open:o,position:"left",title:"Parent"},n("div",{style:u},n(i,{onClick:V},"Open child modal"),n(c,{onCloseButtonClick:W,open:e,position:"left",title:"Child"},n("div",{style:{padding:"12px",width:"160px"}})))))};var y,M,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
      <Modal open={open} position="left">
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
      <Modal open={open} position="left" transition={false}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(x=C.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var w,L,F;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
      <Modal onOverlayClick={handleOverlayClick} open={open} position="left">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(F=(L=f.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open} position="left">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(X=(J=B.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var b,P,D;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
      <Modal open={open} position="left" title="foo">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var K,I,_;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
      <Modal onCloseButtonClick={handleCloseButtonClick} open={open} position="left" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(_=(I=O.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,j,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
      <Modal closeButtonIcon={<IconChevronDown32 />} onCloseButtonClick={handleCloseButtonClick} open={open} position="left" title="foo">
        <div style={style}>bar</div>
      </Modal>
    </Fragment>;
}`,...(q=(j=h.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,A,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
      <Modal closeButtonPosition="left" onCloseButtonClick={handleCloseButtonClick} open={open} position="left" title="foo">
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
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} position="left" title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} position="left" title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const gn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{O as CloseButton,h as CloseButtonIcon,m as CloseButtonPositionLeft,B as CloseOnEscapeKeyDown,f as CloseOnOverlayClick,d as Default,v as Nested,g as Title,C as TransitionFalse,gn as __namedExportsOrder,Bn as default};
