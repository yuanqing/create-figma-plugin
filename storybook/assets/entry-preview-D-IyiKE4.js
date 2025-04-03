import{p as y,_ as m,k as x,E as h}from"./preact.module-7_OotSvk.js";var _=Object.defineProperty,w=(e,n)=>{for(var t in n)_(e,t,{get:n[t],enumerable:!0})};function C(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=Array.from(typeof e=="string"?[e]:e);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var c=r.reduce(function(o,s){var u=s.match(/\n([\t ]+|(?!\s).)/g);return u?o.concat(u.map(function(f){var i,p;return(p=(i=f.match(/[\t ]/g))===null||i===void 0?void 0:i.length)!==null&&p!==void 0?p:0})):o},[]);if(c.length){var d=new RegExp(`
[	 ]{`+Math.min.apply(Math,c)+"}","g");r=r.map(function(o){return o.replace(d,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var a=r[0];return n.forEach(function(o,s){var u=a.match(/(?:^|\n)( *)$/),f=u?u[1]:"",i=o;typeof o=="string"&&o.includes(`
`)&&(i=String(o).split(`
`).map(function(p,v){return v===0?p:""+f+p}).join(`
`)),a+=i+r[s+1]}),a}var $={};w($,{parameters:()=>S,render:()=>M,renderToCanvas:()=>E});var{h:b}=y,M=(e,n)=>{let{id:t,component:r}=n;if(!r)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return b(r,{...e})},g;function l(e,n){x?h(e,n):g=h(e,n,g)}var P=({showError:e,name:n,title:t,storyFn:r,canvasElement:c})=>m(r,null)||(e({title:`Expecting a Preact element from the story: "${n}" of "${t}".`,description:C`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `}),null);function E({storyFn:e,title:n,name:t,showMain:r,showError:c,forceRemount:d},a){d&&l(null,a),r(),l(m(P,{name:t,title:n,showError:c,storyFn:e,canvasElement:a}),a)}var S={renderer:"preact"};export{S as parameters,M as render,E as renderToCanvas};
