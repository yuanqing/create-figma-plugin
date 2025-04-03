import{l as s,x as h,_ as H,k as $,H as g,E as x}from"./preact.module-7_OotSvk.js";var v,i,N,U,d=0,Z=[],c=s,A=c.__b,O=c.__r,S=c.diffed,w=c.__c,R=c.unmount,W=c.__;function E(_,e){c.__h&&c.__h(i,_,d||e),d=0;var t=i.__H||(i.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function H_(_){return d=1,e_(J,_)}function e_(_,e,t){var r=E(v++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):J(void 0,e),function(a){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,a);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=i,!i.__f)){var o=function(a,u,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(p){return!!p.__c});if(m.every(function(p){return!p.__N}))return!l||l.call(this,a,u,f);var P=r.__c.props!==a;return m.forEach(function(p){if(p.__N){var __=p.__[0];p.__=p.__N,p.__N=void 0,__!==p.__[0]&&(P=!0)}}),l&&l.call(this,a,u,f)||P};i.__f=!0;var l=i.shouldComponentUpdate,n=i.componentWillUpdate;i.componentWillUpdate=function(a,u,f){if(this.__e){var m=l;l=void 0,o(a,u,f),l=m}n&&n.call(this,a,u,f)},i.shouldComponentUpdate=o}return r.__N||r.__}function N_(_,e){var t=E(v++,3);!c.__s&&G(t.__H,e)&&(t.__=_,t.u=e,i.__H.__h.push(t))}function k_(_){return d=5,I(function(){return{current:_}},[])}function I(_,e){var t=E(v++,7);return G(t.__H,e)&&(t.__=_(),t.__H=e,t.__h=_),t.__}function g_(_,e){return d=8,I(function(){return _},e)}function t_(){for(var _;_=Z.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(b),_.__H.__h.forEach(C),_.__H.__h=[]}catch(e){_.__H.__h=[],c.__e(e,_.__v)}}c.__b=function(_){i=null,A&&A(_)},c.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),W&&W(_,e)},c.__r=function(_){O&&O(_),v=0;var e=(i=_.__c).__H;e&&(N===i?(e.__h=[],i.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(b),e.__h.forEach(C),e.__h=[],v=0)),N=i},c.diffed=function(_){S&&S(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(Z.push(e)!==1&&U===c.requestAnimationFrame||((U=c.requestAnimationFrame)||r_)(t_)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),N=i=null},c.__c=function(_,e){e.some(function(t){try{t.__h.forEach(b),t.__h=t.__h.filter(function(r){return!r.__||C(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],c.__e(r,t.__v)}}),w&&w(_,e)},c.unmount=function(_){R&&R(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{b(r)}catch(o){e=o}}),t.__H=void 0,e&&c.__e(e,t.__v))};var F=typeof requestAnimationFrame=="function";function r_(_){var e,t=function(){clearTimeout(r),F&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);F&&(e=requestAnimationFrame(t))}function b(_){var e=i,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),i=e}function C(_){var e=i;_.__c=_.__(),i=e}function G(_,e){return!_||_.length!==e.length||e.some(function(t,r){return t!==_[r]})}function J(_,e){return typeof e=="function"?e(_):e}function K(_,e){for(var t in e)_[t]=e[t];return _}function T(_,e){for(var t in _)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&_[r]!==e[r])return!0;return!1}function q(_,e){this.props=_,this.context=e}(q.prototype=new h).isPureReactComponent=!0,q.prototype.shouldComponentUpdate=function(_,e){return T(this.props,_)||T(this.state,e)};var B=s.__b;s.__b=function(_){_.type&&_.type.__f&&_.ref&&(_.props.ref=_.ref,_.ref=null),B&&B(_)};var o_=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function n_(_){function e(t){var r=K({},t);return delete r.ref,_(r,t.ref||null)}return e.$$typeof=o_,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(_.displayName||_.name)+")",e}var u_=s.__e;s.__e=function(_,e,t,r){if(_.then){for(var o,l=e;l=l.__;)if((o=l.__c)&&o.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),o.__c(_,e)}u_(_,e,t,r)};var V=s.unmount;function Q(_,e,t){return _&&(_.__c&&_.__c.__H&&(_.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),_.__c.__H=null),(_=K({},_)).__c!=null&&(_.__c.__P===t&&(_.__c.__P=e),_.__c=null),_.__k=_.__k&&_.__k.map(function(r){return Q(r,e,t)})),_}function X(_,e,t){return _&&t&&(_.__v=null,_.__k=_.__k&&_.__k.map(function(r){return X(r,e,t)}),_.__c&&_.__c.__P===e&&(_.__e&&t.appendChild(_.__e),_.__c.__e=!0,_.__c.__P=t)),_}function k(){this.__u=0,this.o=null,this.__b=null}function Y(_){var e=_.__.__c;return e&&e.__a&&e.__a(_)}function y(){this.i=null,this.l=null}s.unmount=function(_){var e=_.__c;e&&e.__R&&e.__R(),e&&32&_.__u&&(_.type=null),V&&V(_)},(k.prototype=new h).__c=function(_,e){var t=e.__c,r=this;r.o==null&&(r.o=[]),r.o.push(t);var o=Y(r.__v),l=!1,n=function(){l||(l=!0,t.__R=null,o?o(a):a())};t.__R=n;var a=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=X(u,u.__c.__P,u.__c.__O)}var f;for(r.setState({__a:r.__b=null});f=r.o.pop();)f.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),_.then(n,n)},k.prototype.componentWillUnmount=function(){this.o=[]},k.prototype.render=function(_,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Q(this.__b,t,r.__O=r.__P)}this.__b=null}var o=e.__a&&H($,null,_.fallback);return o&&(o.__u&=-33),[H($,null,e.__a?null:_.children),o]};var j=function(_,e,t){if(++t[1]===t[0]&&_.l.delete(e),_.props.revealOrder&&(_.props.revealOrder[0]!=="t"||!_.l.size))for(t=_.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;_.i=t=t[2]}};function i_(_){return this.getChildContext=function(){return _.context},_.children}function a_(_){var e=this,t=_.h;e.componentWillUnmount=function(){x(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),e.v||(e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),e.h.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.h.insertBefore(r,o)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}),x(H(i_,{context:e.context},_.__v),e.v)}function C_(_,e){var t=H(a_,{__v:_,h:e});return t.containerInfo=e,t}(y.prototype=new h).__a=function(_){var e=this,t=Y(e.__v),r=e.l.get(_);return r[0]++,function(o){var l=function(){e.props.revealOrder?(r.push(o),j(e,_,r)):o()};t?t(l):l()}},y.prototype.render=function(_){this.i=null,this.l=new Map;var e=g(_.children);_.revealOrder&&_.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return _.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var _=this;this.l.forEach(function(e,t){j(_,t,e)})};var c_=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,l_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,f_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,s_=/[A-Z0-9]/g,p_=typeof document<"u",h_=function(_){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(_)};h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(_){Object.defineProperty(h.prototype,_,{configurable:!0,get:function(){return this["UNSAFE_"+_]},set:function(e){Object.defineProperty(this,_,{configurable:!0,writable:!0,value:e})}})});var D=s.event;function v_(){}function d_(){return this.cancelBubble}function m_(){return this.defaultPrevented}s.event=function(_){return D&&(_=D(_)),_.persist=v_,_.isPropagationStopped=d_,_.isDefaultPrevented=m_,_.nativeEvent=_};var y_={enumerable:!1,configurable:!0,get:function(){return this.class}},z=s.vnode;s.vnode=function(_){typeof _.type=="string"&&function(e){var t=e.props,r=e.type,o={},l=r.indexOf("-")===-1;for(var n in t){var a=t[n];if(!(n==="value"&&"defaultValue"in t&&a==null||p_&&n==="children"&&r==="noscript"||n==="class"||n==="className")){var u=n.toLowerCase();n==="defaultValue"&&"value"in t&&t.value==null?n="value":n==="download"&&a===!0?a="":u==="translate"&&a==="no"?a=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?n="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||h_(t.type)?u==="onfocus"?n="onfocusin":u==="onblur"?n="onfocusout":f_.test(n)&&(n=u):u=n="oninput":l&&l_.test(n)?n=n.replace(s_,"-$&").toLowerCase():a===null&&(a=void 0),u==="oninput"&&o[n=u]&&(n="oninputCapture"),o[n]=a}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=g(t.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=g(t.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),t.class&&!t.className?(o.class=t.class,Object.defineProperty(o,"className",y_)):(t.className&&!t.class||t.class&&t.className)&&(o.class=o.className=t.className),e.props=o}(_),_.$$typeof=c_,z&&z(_)};var L=s.__r;s.__r=function(_){L&&L(_),_.__c};var M=s.diffed;s.diffed=function(_){M&&M(_);var e=_.props,t=_.__e;t!=null&&_.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value)};function E_(_){return n_(_)}export{C_ as $,k_ as A,E_ as c,H_ as d,g_ as q,N_ as y};
