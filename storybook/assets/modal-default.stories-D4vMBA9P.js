import{y as n,g as p}from"./preact.module-Cko36Lti.js";import{p as c}from"./create-component-B1Y1oDBF.js";import{I as Y}from"./icon-chevron-down-32-B2ht33fq.js";import{B as a}from"./button-Nh83xXAg.js";import{M as i}from"./modal-CG3-ixsN.js";import"./create-icon-D5KCgWRi.js";import"./create-class-name-irFPZBOU.js";import"./no-op-DX6rZLP_.js";import"./loading-indicator-BElM4Qpr.js";import"./button.module-Ba0fKGRu.js";import"./icon-cross-32--dTnmUPt.js";import"./get-current-from-ref-J2nPd355.js";import"./create-focus-trap-key-down-handler-DxXih0p5.js";import"./icon-button-Bn4YtboF.js";import"./text-CSA6lMsS.js";const gn={tags:["1"],title:"Components/Modal/Default"},d=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{open:o},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},n(a,{onClick:s,secondary:!0},"Close"))))},C=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{open:o,transition:!1},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},n(a,{onClick:s,secondary:!0},"Close"))))},h=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{onOverlayClick:s,open:o},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},"foo")))},g=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{onEscapeKeyDown:s,open:o},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},"foo")))},f=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{open:o,title:"foo"},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},n(a,{onClick:s,secondary:!0},"Close"))))},B=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{onCloseButtonClick:s,open:o,title:"foo"},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},"bar")))},O=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{closeButtonIcon:n(Y,null),onCloseButtonClick:s,open:o,title:"foo"},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},"bar")))},m=function(){const[o,t]=c(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}return n(p,null,n(a,{onClick:l},"Open"),n(i,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,title:"foo"},n("div",{style:{height:"160px",padding:"12px",width:"240px"}},"bar")))},v=function(){const[o,t]=c(!1);function l(r){console.log(r),t(!0)}function s(r){console.log(r),t(!1)}const u={height:"160px",padding:"12px",width:"240px"},[e,k]=c(!1);function V(r){console.log(r),k(!0)}function W(r){console.log(r),k(!1)}return n(p,null,n(a,{onClick:l},"Open parent modal"),n(i,{onCloseButtonClick:s,open:o,title:"Parent"},n("div",{style:u},n(a,{onClick:V},"Open child modal"),n(i,{onCloseButtonClick:W,open:e,title:"Child"},n("div",{style:{height:"120px",padding:"12px",width:"240px"}})))))};var y,x,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
}`,...(M=(x=d.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,S,T;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
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
      <Modal open={open} transition={false}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(S=C.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,L,F;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
}`,...(X=(J=g.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var b,P,D;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
}`,...(_=(I=B.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,j,q;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const fn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{B as CloseButton,O as CloseButtonIcon,m as CloseButtonPositionLeft,g as CloseOnEscapeKeyDown,h as CloseOnOverlayClick,d as Default,v as Nested,f as Title,C as TransitionFalse,fn as __namedExportsOrder,gn as default};
