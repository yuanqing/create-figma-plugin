import{g as p}from"./preact.module-pS-_M4k6.js";import{h as a}from"./create-component-a83A1_Pu.js";import{I as Z}from"./icon-chevron-down-32-UVJdQFN7.js";import{B as c}from"./button-7i81gHC9.js";import{M as r}from"./modal-AU58KIp5.js";import{u as n}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./icon-cross-32-kKgUD1DN.js";import"./get-current-from-ref-KzY6_NOj.js";import"./create-focus-trap-key-down-handler-_kplv3kG.js";import"./icon-button-UahFBS6G.js";import"./text-SssoFudj.js";const fn={tags:["2"],title:"Components/Modal/Bottom"},d=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"bottom",children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},h=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"bottom",transition:!1,children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},C=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onOverlayClick:s,open:o,position:"bottom",children:n("div",{style:i,children:"foo"})})]})},g=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onEscapeKeyDown:s,open:o,position:"bottom",children:n("div",{style:i,children:"foo"})})]})},f=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"bottom",title:"foo",children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},m=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onCloseButtonClick:s,open:o,position:"bottom",title:"foo",children:n("div",{style:i,children:"bar"})})]})},B=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{closeButtonIcon:n(Z,{}),onCloseButtonClick:s,open:o,position:"bottom",title:"foo",children:n("div",{style:i,children:"bar"})})]})},O=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={height:"160px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open"}),n(r,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,position:"bottom",title:"foo",children:n("div",{style:i,children:"bar"})})]})},v=function(){const[o,t]=a(!1);function l(u){console.log(u),t(!0)}function s(u){console.log(u),t(!1)}const i={height:"160px",padding:"12px"},[e,k]=a(!1);function V(u){console.log(u),k(!0)}function W(u){console.log(u),k(!1)}const Y={height:"120px",padding:"12px"};return n(p,{children:[n(c,{onClick:l,children:"Open parent modal"}),n(r,{onCloseButtonClick:s,open:o,position:"bottom",title:"Parent",children:n("div",{style:i,children:[n(c,{onClick:V,children:"Open child modal"}),n(r,{onCloseButtonClick:W,open:e,position:"bottom",title:"Child",children:n("div",{style:Y})})]})})]})};var y,M,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var S,x,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(T=(x=h.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var b,L,F;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
    padding: '12px'
  };
  return <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open} position="bottom">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>;
}`,...(X=(J=g.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var P,D,w;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`function () {
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
}`,...(w=(D=f.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var K,I,_;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const mn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{m as CloseButton,B as CloseButtonIcon,O as CloseButtonPositionLeft,g as CloseOnEscapeKeyDown,C as CloseOnOverlayClick,d as Default,v as Nested,f as Title,h as TransitionFalse,mn as __namedExportsOrder,fn as default};
