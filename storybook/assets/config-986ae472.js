import{y as g,p as y,k as $,B as l}from"./preact.module-fa42f7d1.js";function w(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var n=Array.from(typeof r=="string"?[r]:r);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var c=n.reduce(function(o,d){var u=d.match(/\n([\t ]+|(?!\s).)/g);return u?o.concat(u.map(function(f){var i,s;return(s=(i=f.match(/[\t ]/g))===null||i===void 0?void 0:i.length)!==null&&s!==void 0?s:0})):o},[]);if(c.length){var p=new RegExp(`
[	 ]{`+Math.min.apply(Math,c)+"}","g");n=n.map(function(o){return o.replace(p,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var a=n[0];return e.forEach(function(o,d){var u=a.match(/(?:^|\n)( *)$/),f=u?u[1]:"",i=o;typeof o=="string"&&o.includes(`
`)&&(i=String(o).split(`
`).map(function(s,v){return v===0?s:""+f+s}).join(`
`)),a+=i+n[d+1]}),a}var{h:x}=y,b=(r,e)=>{let{id:t,component:n}=e;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return x(n,{...r})},h;function m(r,e){$?l(r,e):h=l(r,e,h)}var C=({showError:r,name:e,title:t,storyFn:n,canvasElement:c})=>g(n,null)||(r({title:`Expecting a Preact element from the story: "${e}" of "${t}".`,description:w`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `}),null);function E({storyFn:r,title:e,name:t,showMain:n,showError:c,forceRemount:p},a){p&&m(null,a),n(),m(g(C,{name:t,title:e,showError:c,storyFn:r,canvasElement:a}),a)}var M={docs:{story:{inline:!0}}},P={renderer:"preact",...M};export{P as parameters,b as render,E as renderToCanvas};
//# sourceMappingURL=config-986ae472.js.map
