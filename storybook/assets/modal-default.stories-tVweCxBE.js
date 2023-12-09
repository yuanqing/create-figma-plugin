import{g as d}from"./preact.module-pS-_M4k6.js";import{h as a}from"./create-component-a83A1_Pu.js";import{I as Z}from"./icon-chevron-down-32-UVJdQFN7.js";import{B as i}from"./button-7i81gHC9.js";import{M as r}from"./modal-AU58KIp5.js";import{u as n}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./icon-cross-32-kKgUD1DN.js";import"./get-current-from-ref-KzY6_NOj.js";import"./create-focus-trap-key-down-handler-_kplv3kG.js";import"./icon-button-UahFBS6G.js";import"./text-SssoFudj.js";const fn={tags:["1"],title:"Components/Modal/Default"},u=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{open:o,children:n("div",{style:c,children:n(i,{onClick:s,secondary:!0,children:"Close"})})})]})},h=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{open:o,transition:!1,children:n("div",{style:c,children:n(i,{onClick:s,secondary:!0,children:"Close"})})})]})},C=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{onOverlayClick:s,open:o,children:n("div",{style:c,children:"foo"})})]})},g=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{onEscapeKeyDown:s,open:o,children:n("div",{style:c,children:"foo"})})]})},f=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{open:o,title:"foo",children:n("div",{style:c,children:n(i,{onClick:s,secondary:!0,children:"Close"})})})]})},B=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{onCloseButtonClick:s,open:o,title:"foo",children:n("div",{style:c,children:"bar"})})]})},O=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{closeButtonIcon:n(Z,{}),onCloseButtonClick:s,open:o,title:"foo",children:n("div",{style:c,children:"bar"})})]})},m=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const c={height:"160px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open"}),n(r,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,title:"foo",children:n("div",{style:c,children:"bar"})})]})},v=function(){const[o,t]=a(!1);function l(p){console.log(p),t(!0)}function s(p){console.log(p),t(!1)}const c={height:"160px",padding:"12px",width:"240px"},[e,k]=a(!1);function V(p){console.log(p),k(!0)}function W(p){console.log(p),k(!1)}const Y={height:"120px",padding:"12px",width:"240px"};return n(d,{children:[n(i,{onClick:l,children:"Open parent modal"}),n(r,{onCloseButtonClick:s,open:o,title:"Parent",children:n("div",{style:c,children:[n(i,{onClick:V,children:"Open child modal"}),n(r,{onCloseButtonClick:W,open:e,title:"Child",children:n("div",{style:Y})})]})})]})};var y,x,M;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
      <Modal open={open} transition={false}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,L,F;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
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
}`,...(F=(L=C.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const Bn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{B as CloseButton,O as CloseButtonIcon,m as CloseButtonPositionLeft,g as CloseOnEscapeKeyDown,C as CloseOnOverlayClick,u as Default,v as Nested,f as Title,h as TransitionFalse,Bn as __namedExportsOrder,fn as default};
