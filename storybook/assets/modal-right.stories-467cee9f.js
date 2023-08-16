import{k as p}from"./preact.module-bf16abf2.js";import{h as a}from"./hooks.module-7c0d6ca2.js";import{I as oe}from"./icon-chevron-down-32-0fbe7a0d.js";import{B as c}from"./button-7f8c5ba7.js";import{M as r}from"./modal-8aff24fa.js";import{o as e}from"./jsxRuntime.module-3e32d480.js";import"./create-icon-cfa00594.js";import"./create-class-name-71c46838.js";import"./loading-indicator-7c44ce2c.js";import"./button.module-2bfe3ef2.js";import"./icon-cross-32-dd47d561.js";import"./create-focus-trap-key-down-handler-e65db33a.js";import"./icon-button-7144d6db.js";import"./text-a9643cae.js";const Oe={parameters:{order:4},title:"Components/Modal/Right"},C=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{open:o,position:"right",children:e("div",{style:s,children:e(c,{onClick:i,secondary:!0,children:"Close"})})})]})},g=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{noTransition:!0,open:o,position:"right",children:e("div",{style:s,children:e(c,{onClick:i,secondary:!0,children:"Close"})})})]})},B=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{onOverlayClick:i,open:o,position:"right",children:e("div",{style:s,children:"foo"})})]})},f=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{onEscapeKeyDown:i,open:o,position:"right",children:e("div",{style:s,children:"foo"})})]})},O=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{open:o,position:"right",title:"foo",children:e("div",{style:s,children:e(c,{onClick:i,secondary:!0,children:"Close"})})})]})},v=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{onCloseButtonClick:i,open:o,position:"right",title:"foo",children:e("div",{style:s,children:"bar"})})]})},k=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{closeButtonIcon:e(oe,{}),onCloseButtonClick:i,open:o,position:"right",title:"foo",children:e("div",{style:s,children:"bar"})})]})},m=function(){const[o,t]=a(!1);function l(n){console.log(n),t(!0)}function i(n){console.log(n),t(!1)}const s={padding:"12px",width:"240px"};return e(p,{children:[e(c,{onClick:l,children:"Open"}),e(r,{closeButtonPosition:"left",onCloseButtonClick:i,open:o,position:"right",title:"foo",children:e("div",{style:s,children:"bar"})})]})},y=function(){const[o,t]=a(!1);function l(d){console.log(d),t(!0)}function i(d){console.log(d),t(!1)}const s={height:"160px",padding:"12px"},[n,h]=a(!1);function x(d){console.log(d),h(!0)}function T(d){console.log(d),h(!1)}const S={height:"120px",padding:"12px"};return e(p,{children:[e(c,{onClick:l,children:"Open parent modal"}),e(r,{onCloseButtonClick:i,open:o,position:"right",title:"Parent",children:e("div",{style:s,children:[e(c,{onClick:x,children:"Open child modal"}),e(r,{onCloseButtonClick:T,open:n,position:"right",title:"Child",children:e("div",{style:S})})]})})]})},M=function(){const[o,t]=a(!1);function l(u){console.log(u),t(!0)}function i(u){console.log(u),t(!1)}const s={height:"160px",padding:"12px"},[n,h]=a(!1);function x(u){console.log(u),h(!0)}function T(u){console.log(u),h(!1)}const S={height:"120px",padding:"12px"},d=Array(96).fill("Text").join(" ");return e(p,{children:[e("div",{style:"width: 320px",children:d}),e(c,{onClick:l,children:"Open parent modal"}),e("div",{style:"width: 320px",children:d}),e(r,{onCloseButtonClick:i,open:o,position:"right",title:"Parent",children:e("div",{style:s,children:[e(c,{onClick:x,children:"Open child modal"}),e(r,{onCloseButtonClick:T,open:n,position:"right",title:"Child",children:e("div",{style:S})})]})})]})};var E,w,P;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`function () {
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
}`,...(P=(w=C.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var L,H,J;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`function () {
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
      <Modal noTransition open={open} position="right">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>;
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,F,b;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`function () {
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
}`,...(b=(F=B.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var D,K,I;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
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
}`,...(I=(K=f.parameters)==null?void 0:K.docs)==null?void 0:I.source}}};var N,_,j;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
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
}`,...(j=(_=O.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var A,R,q;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`function () {
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
}`,...(q=(R=v.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,G,Q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
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
}`,...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,V,W;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`function () {
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
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`function () {
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
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} position="right" title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} position="right" title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`function () {
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
  const longText = Array(96).fill('Text').join(' ');
  return <Fragment>
      <div style="width: 320px">{longText}</div>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <div style="width: 320px">{longText}</div>
      <Modal onCloseButtonClick={handleParentCloseButtonClick} open={parentOpen} position="right" title="Parent">
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal onCloseButtonClick={handleChildCloseButtonClick} open={childOpen} position="right" title="Child">
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>;
}`,...(te=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ve=["Default","NoTransition","CloseOnOverlayClick","CloseOnEscapeKeyDown","Title","CloseButton","CloseButtonIcon","CloseButtonPositionLeft","Nested","BodyOverflow"];export{M as BodyOverflow,v as CloseButton,k as CloseButtonIcon,m as CloseButtonPositionLeft,f as CloseOnEscapeKeyDown,B as CloseOnOverlayClick,C as Default,y as Nested,g as NoTransition,O as Title,ve as __namedExportsOrder,Oe as default};
//# sourceMappingURL=modal-right.stories-467cee9f.js.map
