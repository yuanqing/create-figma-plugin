import{_ as p}from"./preact.module-7_OotSvk.js";import{c as ne,A as x,d as oe,q as F}from"./create-component-CR2aSVXZ.js";import{c as v}from"./create-class-name-irFPZBOU.js";import{g as le}from"./get-current-from-ref-J2nPd355.js";import{n as C}from"./no-op-DX6rZLP_.js";import{R as ue}from"./raw-textbox-numeric-P0blTARb.js";import{M as g,a as ae}from"./mixed-values-hkF2bnrF.js";const B="a-f\\d",ie=`#?[${B}]{3}[${B}]?`,se=`#?[${B}]{6}([${B}]{2})?`,ce=new RegExp(`[^#${B}]`,"gi"),Fe=new RegExp(`^${ie}$|^${se}$`,"i");function de(e,t={}){if(typeof e!="string"||ce.test(e)||!Fe.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let r=1;e.length===8&&(r=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const o=Number.parseInt(e,16),s=o>>16,a=o>>8&255,c=o&255,i=typeof t.alpha=="number"?t.alpha:r;if(t.format==="array")return[s,a,c,i];if(t.format==="css"){const b=i===1?"":` / ${Number((i*100).toFixed(2))}%`;return`rgb(${s} ${a} ${c}${b})`}return{red:s,green:a,blue:c,alpha:i}}function M(e){if(e.length!==3&&e.length!==6)return null;try{const{red:t,green:r,blue:o}=de(e);return{b:o/255,g:r/255,r:t/255}}catch{return null}}const fe={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkgrey:"A9A9A9",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",grey:"808080",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370DB",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"DB7093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",rebeccapurple:"663399",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"};function pe(e){const t=fe[e.toLowerCase()];return typeof t>"u"?null:t}const me=(e,t,r,o)=>(r|t<<8|e<<16|1<<24).toString(16).slice(1)+o;function ge(e,t,r,o){let s=(e+(o||"")).toString().includes("%");if(typeof e=="string"&&!t){const a=be(e);if(!a)throw new TypeError("Invalid or unsupported color format.");s=!1,[e,t,r,o]=a}else o!==void 0&&(o=Number.parseFloat(o));if(typeof e!="number"||typeof t!="number"||typeof r!="number"||e>255||t>255||r>255)throw new TypeError("Expected three numbers below 256");if(typeof o=="number"){if(!s&&o>=0&&o<=1)o=Math.round(255*o);else if(s&&o>=0&&o<=100)o=Math.round(255*o/100);else throw new TypeError(`Expected alpha value (${o}) as a fraction or percentage`);o=(o|256).toString(16).slice(1)}else o="";return me(e,t,r,o)}const be=e=>{const t=e.replace(/rgba?\(([^)]+)\)/,"$1").split(/[,\s/]+/).filter(Boolean);if(t.length<3)return;const r=(i,b)=>(i=i.trim(),i.endsWith("%")?Math.min(Number.parseFloat(i)*b/100,b):Math.min(Number.parseFloat(i),b)),o=r(t[0],255),s=r(t[1],255),a=r(t[2],255);let c;return t.length===4&&(c=r(t[3],1)),[o,s,a,c]};function ye(e){const{r:t,g:r,b:o}=e;if(t<0||t>1||r<0||r>1||o<0||o>1)return null;try{return ge(Math.round(t*255),Math.round(r*255),Math.round(o*255)).toUpperCase()}catch{return null}}function Ce(e){return M(e)!==null}function U(e,t){if(e===""||e===g||t===""||t===g)return null;const r=M(e);return r===null?null:{...r,a:parseInt(t,10)/100}}function $(e){const t=pe(e);if(t!==null)return t;const r=Ee(e).toUpperCase();return Ce(r)===!1?null:r}function Ee(e){switch(e.length){case 0:return"";case 1:return Array(6).fill(e).join("");case 2:return Array(3).fill(e).join("");case 3:case 4:case 5:return`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`;case 6:return e;default:return e.slice(0,6)}}function De(e,t){const r=M(e);if(r===null)throw new Error("Invalid `hexColor`");const{r:o,g:s,b:a}=r,c=ye({b:T(a,t),g:T(s,t),r:T(o,t)});if(c===null)throw new Error("Invalid `rgbColor`");return c}function T(e,t){const r=e*255+t;return Math.min(Math.max(r,0),255)/255}const Ae="_textboxColor_1yyub_1",he="_disabled_1yyub_16",we="_fullWidth_1yyub_21",Be="_chit_1yyub_25",_e="_color_1yyub_38",ke="_hexColorSelector_1yyub_43",He="_input_1yyub_53",Ie="_hexColorInput_1yyub_70",xe="_opacityInputWrapper_1yyub_76",ve="_opacityInput_1yyub_76",$e="_percentage_1yyub_84",Te="_border_1yyub_97",u={textboxColor:Ae,disabled:he,fullWidth:we,chit:Be,color:_e,hexColorSelector:ke,input:He,hexColorInput:Ie,opacityInputWrapper:xe,opacityInput:ve,percentage:$e,border:Te},d="",Pe=ne(function({disabled:e=!1,fullWidth:t=!1,hexColor:r,hexColorPlaceholder:o,onCommand:s,onHexColorInput:a=C,onHexColorKeyDown:c=C,onHexColorValueInput:i=C,onOpacityInput:b=C,onOpacityKeyDown:W=C,onOpacityNumericValueInput:N=C,onOpacityValueInput:z=C,onRgbaColorValueInput:E=C,opacity:A,propagateEscapeKeyDown:h=!0,revertOnEscapeKeyDown:w=!1,...O},P){const S=x(null),j=x(null),_=x(!1),[m,D]=oe(d),f=F(function(n){const l=le(S);l.value=n;const y=new window.Event("input",{bubbles:!0,cancelable:!0});l.dispatchEvent(y)},[]),G=F(function(n){const l=n.currentTarget.value.slice(1).toUpperCase();D(l)},[]),L=F(function(n){const l=n.currentTarget.value.slice(1).toUpperCase();f(l)},[f]),V=F(function(n){n.key==="Escape"&&(w===!0&&(_.current=!0,f(m),D(d)),h===!1&&n.stopPropagation(),n.currentTarget.blur())},[m,h,w,f]),X=F(function(){if(_.current===!0){_.current=!1;return}if(r===d){m!==d&&f(m),D(d);return}if(r!==g){const n=$(r),l=n===null?m:n;l!==r&&f(l)}D(d)},[r,m,f]),Y=F(function(n){D(r),n.currentTarget.select()},[r]),J=F(function(n){a(n);const l=n.currentTarget.value;if(i(l),l===d){E(null);return}const y=$(l);if(y===null){E(null);return}const k=U(y,A);E(k)},[a,i,E,A]),K=F(function(n){c(n);const l=n.key;if(l==="Escape"){w===!0&&(_.current=!0,f(m),D(d)),h===!1&&n.stopPropagation(),n.currentTarget.blur();return}const y=n.currentTarget;if(l==="ArrowDown"||l==="ArrowUp"){n.preventDefault();const k=n.shiftKey===!0?10:1,te=De(r===d||r===g?l==="ArrowDown"?"FFFFFF":"000000":r,l==="ArrowDown"?-1*k:k);f(te),y.select();return}n.ctrlKey===!0||n.metaKey},[r,c,m,h,w,f]),Q=F(function(n){r===g&&n.preventDefault()},[r]),Z=F(function(n){b(n);const l=n.currentTarget.value,y=U(r,l);E(y)},[r,b,E]),ee=F(function(n){N(n===null||n===ae?n:n/100)},[N]),re=F(function(n){return n!==null},[]),R=Me(A),H=r!==d&&r!==g,q=H===!0?$(r):"FFFFFF",I=q===null?m:q;return p("div",{ref:P,class:v([u.textboxColor,e===!0?u.disabled:null,t===!0?u.fullWidth:null])},p("div",{class:u.chit},p("div",{class:u.color,style:H===!0?{backgroundColor:`#${I}`}:{}}),R===1?null:p("div",{class:u.color,style:H===!0?{backgroundColor:`#${I}`,opacity:R}:{}})),p("input",{class:u.hexColorSelector,disabled:e===!0,onFocus:G,onInput:L,onKeyDown:V,tabIndex:-1,type:"color",value:`#${I}`}),p("input",{...O,ref:S,class:v([u.input,u.hexColorInput]),disabled:e===!0,onBlur:X,onFocus:Y,onInput:J,onKeyDown:K,onMouseUp:Q,placeholder:o,spellcheck:!1,tabIndex:0,type:"text",value:r===g?"Mixed":r}),p("div",{class:u.opacityInputWrapper},p(ue,{ref:j,class:v([u.input,u.opacityInput]),disabled:e===!0,maximum:100,minimum:0,onInput:Z,onKeyDown:W,onNumericValueInput:ee,onValueInput:z,propagateEscapeKeyDown:h,revertOnEscapeKeyDown:w,validateOnBlur:re,value:A}),A===g?null:p("div",{class:u.percentage},"%")),p("div",{class:u.border}))});function Me(e){return e===g||e===d?1:parseInt(e,10)/100}export{Pe as T};
