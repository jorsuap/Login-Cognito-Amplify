(()=>{"use strict";var e,v={},m={};function r(e){var o=m[e];if(void 0!==o)return o.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(o,t,i,l)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,l]=e[n],c=!0,f=0;f<t.length;f++)(!1&l||a>=l)&&Object.keys(r.O).every(b=>r.O[b](t[f]))?t.splice(f--,1):(c=!1,l<a&&(a=l));if(c){e.splice(n--,1);var d=i();void 0!==d&&(o=d)}}return o}l=l||0;for(var n=e.length;n>0&&e[n-1][2]>l;n--)e[n]=e[n-1];e[n]=[t,i,l]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>e+".e6fd73dc9a9849b6.js",r.miniCssF=e=>{},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="login-cognito-amplify:";r.l=(t,i,l,n)=>{if(e[t])e[t].push(i);else{var a,c;if(void 0!==l)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var u=f[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==o+l){a=u;break}}a||(c=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+l),a.src=r.tu(t)),e[t]=[i];var s=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(b)),g)return g(b)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,l)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)l.push(n[2]);else if(666!=i){var a=new Promise((u,s)=>n=e[i]=[u,s]);l.push(n[2]=a);var c=r.p+r.u(i),f=new Error;r.l(c,u=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var s=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;f.message="Loading chunk "+i+" failed.\n("+s+": "+p+")",f.name="ChunkLoadError",f.type=s,f.request=p,n[1](f)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var o=(i,l)=>{var f,d,[n,a,c]=l,u=0;if(n.some(p=>0!==e[p])){for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(c)var s=c(r)}for(i&&i(l);u<n.length;u++)r.o(e,d=n[u])&&e[d]&&e[d][0](),e[d]=0;return r.O(s)},t=self.webpackChunklogin_cognito_amplify=self.webpackChunklogin_cognito_amplify||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();