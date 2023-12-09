import{g as d}from"./preact.module-pS-_M4k6.js";import{h as a}from"./create-component-a83A1_Pu.js";import{I as Z}from"./icon-chevron-down-32-UVJdQFN7.js";import{B as c}from"./button-7i81gHC9.js";import{M as r}from"./modal-AU58KIp5.js";import{u as n}from"./jsxRuntime.module-mP9ZGqev.js";import"./create-icon-prVyFgUx.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";import"./loading-indicator-NeprGR7l.js";import"./button.module-7LHM3uxw.js";import"./icon-cross-32-kKgUD1DN.js";import"./get-current-from-ref-KzY6_NOj.js";import"./create-focus-trap-key-down-handler-_kplv3kG.js";import"./icon-button-UahFBS6G.js";import"./text-SssoFudj.js";const Bn={tags:["3"],title:"Components/Modal/Left"},u=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"left",children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},C=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"left",transition:!1,children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},f=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onOverlayClick:s,open:o,position:"left",children:n("div",{style:i,children:"foo"})})]})},h=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onEscapeKeyDown:s,open:o,position:"left",children:n("div",{style:i,children:"foo"})})]})},B=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{open:o,position:"left",title:"foo",children:n("div",{style:i,children:n(c,{onClick:s,secondary:!0,children:"Close"})})})]})},g=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{onCloseButtonClick:s,open:o,position:"left",title:"foo",children:n("div",{style:i,children:"bar"})})]})},O=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{closeButtonIcon:n(Z,{}),onCloseButtonClick:s,open:o,position:"left",title:"foo",children:n("div",{style:i,children:"bar"})})]})},m=function(){const[o,t]=a(!1);function l(e){console.log(e),t(!0)}function s(e){console.log(e),t(!1)}const i={padding:"12px",width:"240px"};return n(d,{children:[n(c,{onClick:l,children:"Open"}),n(r,{closeButtonPosition:"left",onCloseButtonClick:s,open:o,position:"left",title:"foo",children:n("div",{style:i,children:"bar"})})]})},v=function(){const[o,t]=a(!1);function l(p){console.log(p),t(!0)}function s(p){console.log(p),t(!1)}const i={padding:"12px",width:"240px"},[e,k]=a(!1);function V(p){console.log(p),k(!0)}function W(p){console.log(p),k(!1)}const Y={padding:"12px",width:"160px"};return n(d,{children:[n(c,{onClick:l,children:"Open parent modal"}),n(r,{onCloseButtonClick:s,open:o,position:"left",title:"Parent",children:n("div",{style:i,children:[n(c,{onClick:V,children:"Open child modal"}),n(r,{onCloseButtonClick:W,open:e,position:"left",title:"Child",children:n("div",{style:Y})})]})})]})};var y,M,E;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`function () {
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
}`,...(E=(M=u.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var S,x,T;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
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
}`,...(F=(L=f.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,J,X;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`function () {
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
}`,...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var b,P,D;B.parameters={...B.parameters,docs:{...(b=B.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
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
}`,...(D=(P=B.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var K,I,_;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
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
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,j,q;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const gn=["Default","TransitionFalse","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested"];export{g as CloseButton,O as CloseButtonIcon,m as CloseButtonPositionLeft,h as CloseOnEscapeKeyDown,f as CloseOnOverlayClick,u as Default,v as Nested,B as Title,C as TransitionFalse,gn as __namedExportsOrder,Bn as default};
