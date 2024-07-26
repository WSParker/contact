(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function B(){}function ye(e){return e()}function pe(){return Object.create(null)}function K(e){e.forEach(ye)}function we(e){return typeof e=="function"}function be(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let X;function We(e,t){return X||(X=document.createElement("a")),X.href=t,e===X.href}function Ce(e){return Object.keys(e).length===0}const Se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function d(e,t){e.appendChild(t)}function ie(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function ke(e){return document.createTextNode(e)}function k(){return ke(" ")}function D(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function Re(e,t){t=""+t,e.data!==t&&(e.data=t)}function y(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let Z;function Ae(){if(Z===void 0){Z=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Z=!0}}return Z}function Oe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=p("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const o=Ae();let i;return o?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=D(window,"message",c=>{c.source===r.contentWindow&&t()})):(r.src="about:blank",r.onload=()=>{i=D(r.contentWindow,"resize",t),t()}),d(e,r),()=>{(o||i&&r.contentWindow)&&i(),V(r)}}let le;function G(e){le=e}const q=[],oe=[];let H=[];const _e=[],ze=Promise.resolve();let se=!1;function Ne(){se||(se=!0,ze.then($e))}function te(e){H.push(e)}const re=new Set;let x=0;function $e(){if(x!==0)return;const e=le;do{try{for(;x<q.length;){const t=q[x];x++,G(t),xe(t.$$)}}catch(t){throw q.length=0,x=0,t}for(G(null),q.length=0,x=0;oe.length;)oe.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];re.has(n)||(re.add(n),n())}H.length=0}while(q.length);for(;_e.length;)_e.pop()();se=!1,re.clear(),G(e)}function xe(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ie(e){const t=[],n=[];H.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),H=t}const ee=new Set;let Me;function E(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function I(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),Me.c.push(()=>{ee.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function M(e){e&&e.c()}function W(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||te(()=>{const c=e.$$.on_mount.map(ye).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...c):K(c),e.$$.on_mount=[]}),i.forEach(te)}function C(e,t){const n=e.$$;n.fragment!==null&&(Ie(n.after_update),K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(q.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,n,r,o,i,c,f=[-1]){const a=le;G(e);const s=e.$$={fragment:null,ctx:[],props:i,update:B,not_equal:o,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:pe(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};c&&c(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(g,u,...w)=>{const b=w.length?w[0]:u;return s.ctx&&o(s.ctx[g],s.ctx[g]=b)&&(!s.skip_bound&&s.bound[g]&&s.bound[g](b),h&&Ue(e,g)),u}):[],s.update(),h=!0,K(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const g=Te(t.target);s.fragment&&s.fragment.l(g),g.forEach(V)}else s.fragment&&s.fragment.c();t.intro&&E(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),$e()}G(a)}class Pe{$destroy(){C(this,1),this.$destroy=B}$on(t,n){if(!we(n))return B;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function qe(e){let t,n,r,o,i,c,f;return{c(){t=p("div"),n=p("p"),r=ke(e[0]),o=k(),i=p("p"),l(n,"id","contentTitle"),l(n,"class","svelte-qwdz76"),l(i,"id","content"),l(i,"class","svelte-qwdz76"),l(t,"role","link"),l(t,"tabindex","0"),l(t,"id","container"),y(t,"width",e[4]+"%"),y(t,"--numPerLine",e[2]),y(t,"--base-color",e[1]),l(t,"class","svelte-qwdz76")},m(a,s){ie(a,t,s),d(t,n),d(n,r),d(t,o),d(t,i),e[8](t),c||(f=[D(t,"click",e[5]),D(t,"keyup",e[6])],c=!0)},p(a,[s]){s&1&&Re(r,a[0]),s&16&&y(t,"width",a[4]+"%"),s&4&&y(t,"--numPerLine",a[2]),s&2&&y(t,"--base-color",a[1])},i:B,o:B,d(a){a&&V(t),e[8](null),c=!1,K(f)}}}function He(e,t,n){let r,{contentTitle:o}=t,{href:i}=t,{color:c}=t,{numPerLine:f=1}=t,a;function s(u){let w=document.createElement("a");w.href=i,w.click()}function h(u){u.key=="Enter"&&s()}function g(u){oe[u?"unshift":"push"](()=>{a=u,n(3,a)})}return e.$$set=u=>{"contentTitle"in u&&n(0,o=u.contentTitle),"href"in u&&n(7,i=u.href),"color"in u&&n(1,c=u.color),"numPerLine"in u&&n(2,f=u.numPerLine)},e.$$.update=()=>{e.$$.dirty&4&&n(4,r=(100-3*(f+1))/f)},[o,c,f,a,r,s,h,i,g]}class U extends Pe{constructor(t){super(),Le(this,t,He,qe,be,{contentTitle:0,href:7,color:1,numPerLine:2})}}const{document:je}=Se;function Ge(e){let t,n,r,o,i,c,f,a,s,h,g,u,w,b,_,j,ce,v,S,T,ae,R,de,F,A,fe,J,O,ue,Y,z,me,Q,N,he,$,ne,ge;return T=new U({props:{contentTitle:"Curriculum Vitae",href:e[4],color:P,numPerLine:2}}),R=new U({props:{contentTitle:"Resume",href:e[5],color:P,numPerLine:2}}),A=new U({props:{contentTitle:"GitHub",href:"https://www.github.com/WSParker",color:P,numPerLine:1}}),O=new U({props:{contentTitle:"LinkedIn",href:"https://www.linkedin.com/in/will-s-parker",color:P,numPerLine:1}}),z=new U({props:{contentTitle:"Google Scholar",href:"https://scholar.google.com/citations?user=MfSiuHYAAAAJ&hl=en",color:P,numPerLine:1}}),N=new U({props:{contentTitle:"ORCiD",href:"https://orcid.org/0009-0008-8883-7724",color:P,numPerLine:1}}),{c(){t=k(),n=p("div"),r=p("div"),o=p("div"),i=p("img"),s=k(),h=p("p"),h.textContent="William Parker",g=k(),u=p("p"),u.textContent="Physics PhD Candidate",w=k(),b=p("p"),b.textContent="University of Oregon",_=k(),j=p("p"),j.innerHTML='<a href="mailto:wparker@uoregon.edu">wparker4@uoregon.edu</a>',ce=k(),v=p("div"),S=p("div"),M(T.$$.fragment),ae=k(),M(R.$$.fragment),de=k(),F=p("div"),M(A.$$.fragment),fe=k(),J=p("div"),M(O.$$.fragment),ue=k(),Y=p("div"),M(z.$$.fragment),me=k(),Q=p("div"),M(N.$$.fragment),l(i,"id","headshot"),l(i,"width",c=.5*e[1]),l(i,"height",f=.5*e[1]),We(i.src,a=e[6])||l(i,"src",a),l(i,"alt","WSParker headshot"),l(i,"class","svelte-d13mrd"),l(h,"id","myName"),l(h,"class","svelte-d13mrd"),l(u,"id","myTitle"),l(u,"class","svelte-d13mrd"),l(b,"id","myOrganization"),l(b,"class","svelte-d13mrd"),l(j,"id","myEmail"),l(j,"class","svelte-d13mrd"),l(o,"id","header"),l(o,"class","svelte-d13mrd"),l(S,"class","element svelte-d13mrd"),l(F,"class","element svelte-d13mrd"),l(J,"class","element svelte-d13mrd"),l(Y,"class","element svelte-d13mrd"),l(Q,"class","element svelte-d13mrd"),l(v,"id","elements"),l(v,"class","svelte-d13mrd"),l(r,"id","content"),l(r,"class","svelte-d13mrd"),l(n,"id","container"),y(n,"--fontsize",e[3]+"px"),y(n,"--lowerColor",P),y(n,"--contentWidth",e[1]+"px"),y(n,"--headerColor",Be),y(n,"--backgroundColor",Ee),l(n,"class","svelte-d13mrd"),te(()=>e[8].call(n))},m(m,L){ie(m,t,L),ie(m,n,L),d(n,r),d(r,o),d(o,i),d(o,s),d(o,h),d(o,g),d(o,u),d(o,w),d(o,b),d(o,_),d(o,j),d(r,ce),d(r,v),d(v,S),W(T,S,null),d(S,ae),W(R,S,null),d(v,de),d(v,F),W(A,F,null),d(v,fe),d(v,J),W(O,J,null),d(v,ue),d(v,Y),W(z,Y,null),d(v,me),d(v,Q),W(N,Q,null),he=Oe(n,e[8].bind(n)),$=!0,ne||(ge=D(je.body,"click",e[7]),ne=!0)},p(m,[L]){(!$||L&2&&c!==(c=.5*m[1]))&&l(i,"width",c),(!$||L&2&&f!==(f=.5*m[1]))&&l(i,"height",f),(!$||L&8)&&y(n,"--fontsize",m[3]+"px"),(!$||L&2)&&y(n,"--contentWidth",m[1]+"px")},i(m){$||(E(T.$$.fragment,m),E(R.$$.fragment,m),E(A.$$.fragment,m),E(O.$$.fragment,m),E(z.$$.fragment,m),E(N.$$.fragment,m),$=!0)},o(m){I(T.$$.fragment,m),I(R.$$.fragment,m),I(A.$$.fragment,m),I(O.$$.fragment,m),I(z.$$.fragment,m),I(N.$$.fragment,m),$=!1},d(m){m&&V(t),m&&V(n),C(T),C(R),C(A),C(O),C(z),C(N),he(),ne=!1,ge()}}}const P="#ebf5ee",Be="#283044",Ee="#78a1bb";function Ve(e,t,n){let r,o;const i=new URL("/contact/assets/WParker_CV.dce70304.pdf",self.location),c=new URL("/contact/assets/WParker_Resume.0fac994d.pdf",self.location),f=new URL("/contact/assets/IMG_0280.058b5d29.png",self.location).href;let a,s;document.body.style.backgroundColor=Ee;const h=()=>{console.log(a,s)};function g(){a=this.clientHeight,s=this.clientWidth,n(2,a),n(0,s)}return e.$$.update=()=>{e.$$.dirty&1&&n(1,r=Math.min(600,s)),e.$$.dirty&2&&n(3,o=.08*r)},[s,r,a,o,i,c,f,h,g]}class De extends Pe{constructor(t){super(),Le(this,t,Ve,Ge,be,{})}}const Ke="modulepreload",Fe=function(e){return"/contact/"+e},ve={},Je=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Fe(i),i in ve)return;ve[i]=!0;const c=i.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!r)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===i&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":Ke,c||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),c)return new Promise((h,g)=>{s.addEventListener("load",h),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Ye(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:c}=e;let f,a,s,h;const g=async(w=!0)=>{await s,w&&(f==null||f.addEventListener("controlling",b=>{b.isUpdate&&window.location.reload()})),await(h==null?void 0:h())};async function u(){if("serviceWorker"in navigator){const{Workbox:w,messageSW:b}=await Je(()=>import("./workbox-window.prod.es5.fb541039.js"),[]);h=async()=>{a&&a.waiting&&await b(a.waiting,{type:"SKIP_WAITING"})},f=new w("/contact/sw.js",{scope:"/contact/",type:"classic"}),f.addEventListener("activated",_=>{_.isUpdate||r==null||r()});{const _=()=>{n==null||n()};f.addEventListener("waiting",_),f.addEventListener("externalwaiting",_)}f.register({immediate:t}).then(_=>{a=_,i?i("/contact/sw.js",_):o==null||o(_)}).catch(_=>{c==null||c(_)})}}return s=u(),g}"serviceWorker"in navigator&&Ye();new De({target:document.body});
