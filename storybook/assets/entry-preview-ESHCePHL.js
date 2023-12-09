import{y as m,p as y,g as $,q as h}from"./preact.module-pS-_M4k6.js";function w(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var n=Array.from(typeof r=="string"?[r]:r);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var u=n.reduce(function(o,f){var s=f.match(/\n([\t ]+|(?!\s).)/g);return s?o.concat(s.map(function(p){var i,c;return(c=(i=p.match(/[\t ]/g))===null||i===void 0?void 0:i.length)!==null&&c!==void 0?c:0})):o},[]);if(u.length){var d=new RegExp(`
[	 ]{`+Math.min.apply(Math,u)+"}","g");n=n.map(function(o){return o.replace(d,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var a=n[0];return e.forEach(function(o,f){var s=a.match(/(?:^|\n)( *)$/),p=s?s[1]:"",i=o;typeof o=="string"&&o.includes(`
`)&&(i=String(o).split(`
`).map(function(c,v){return v===0?c:""+p+c}).join(`
`)),a+=i+n[f+1]}),a}var{h:x}=y,S=(r,e)=>{let{id:t,component:n}=e;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return x(n,{...r})},l;function g(r,e){$?h(r,e):l=h(r,e,l)}var C=({showError:r,name:e,title:t,storyFn:n,canvasElement:u})=>m(n,null)||(r({title:`Expecting a Preact element from the story: "${e}" of "${t}".`,description:w`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `}),null);function b({storyFn:r,title:e,name:t,showMain:n,showError:u,forceRemount:d},a){d&&g(null,a),n(),g(m(C,{name:t,title:e,showError:u,storyFn:r,canvasElement:a}),a)}var E={renderer:"preact"};export{E as parameters,S as render,b as renderToCanvas};
