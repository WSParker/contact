(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function v(){}function We(t,e){for(const n in e)t[n]=e[n];return t}function we(t){return t()}function pe(){return Object.create(null)}function X(t){t.forEach(we)}function ye(t){return typeof t=="function"}function be(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function xe(t,e){return F||(F=document.createElement("a")),F.href=e,t===F.href}function Ae(t){return Object.keys(t).length===0}function Ee(t,e,n,r){if(t){const s=ke(t,e,n,r);return t[0](s)}}function ke(t,e,n,r){return t[1]&&r?We(n.ctx.slice(),t[1](r(e))):n.ctx}function Re(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],l=Math.max(e.dirty.length,s.length);for(let u=0;u<l;u+=1)i[u]=e.dirty[u]|s[u];return i}return e.dirty|s}return e.dirty}function Oe(t,e,n,r,s,i){if(s){const l=ke(e,n,r,i);t.p(l,s)}}function Se(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function a(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function Me(t){return document.createTextNode(t)}function $(){return Me(" ")}function _e(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ne(t){return Array.from(t.childNodes)}function m(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let J;function je(){if(J===void 0){J=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{J=!0}}return J}function ze(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=d("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const s=je();let i;return s?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=_e(window,"message",l=>{l.source===r.contentWindow&&e()})):(r.src="about:blank",r.onload=()=>{i=_e(r.contentWindow,"resize",e),e()}),a(t,r),()=>{(s||i&&r.contentWindow)&&i(),g(r)}}let te;function T(t){te=t}const j=[],me=[];let z=[];const ge=[],He=Promise.resolve();let ee=!1;function De(){ee||(ee=!0,He.then(Ce))}function Q(t){z.push(t)}const Z=new Set;let S=0;function Ce(){if(S!==0)return;const t=te;do{try{for(;S<j.length;){const e=j[S];S++,T(e),Ie(e.$$)}}catch(e){throw j.length=0,S=0,e}for(T(null),j.length=0,S=0;me.length;)me.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];Z.has(n)||(Z.add(n),n())}z.length=0}while(j.length);for(;ge.length;)ge.pop()();ee=!1,Z.clear(),T(t)}function Ie(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Te(t){const e=[],n=[];z.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),z=e}const Y=new Set;let Ue;function y(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function E(t,e,n,r){if(t&&t.o){if(Y.has(t))return;Y.add(t),Ue.c.push(()=>{Y.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function M(t){t&&t.c()}function R(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||Q(()=>{const l=t.$$.on_mount.map(we).filter(ye);t.$$.on_destroy?t.$$.on_destroy.push(...l):X(l),t.$$.on_mount=[]}),i.forEach(Q)}function O(t,e){const n=t.$$;n.fragment!==null&&(Te(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(j.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,r,s,i,l,u=[-1]){const _=te;T(t);const c=t.$$={fragment:null,ctx:[],props:i,update:v,not_equal:s,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:pe(),dirty:u,skip_bound:!1,root:e.target||_.$$.root};l&&l(c.root);let H=!1;if(c.ctx=n?n(t,e.props||{},(p,D,...w)=>{const I=w.length?w[0]:D;return c.ctx&&s(c.ctx[p],c.ctx[p]=I)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](I),H&&Ge(t,p)),D}):[],c.update(),H=!0,X(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const p=Ne(e.target);c.fragment&&c.fragment.l(p),p.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&y(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),Ce()}T(_)}class Le{$destroy(){O(this,1),this.$destroy=v}$on(e,n){if(!ye(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ve(t){let e,n;const r=t[3].default,s=Ee(r,t,t[2],null);return{c(){e=d("a"),s&&s.c(),o(e,"id","container"),o(e,"class","link svelte-1h80dlx"),o(e,"href",t[0]),m(e,"width",t[1])},m(i,l){b(i,e,l),s&&s.m(e,null),n=!0},p(i,[l]){s&&s.p&&(!n||l&4)&&Oe(s,r,i,i[2],n?Re(r,i[2],l,null):Se(i[2]),null),(!n||l&1)&&o(e,"href",i[0]),l&2&&m(e,"width",i[1])},i(i){n||(y(s,i),n=!0)},o(i){E(s,i),n=!1},d(i){i&&g(e),s&&s.d(i)}}}function Be(t,e,n){let{$$slots:r={},$$scope:s}=e,{href:i}=e,{width:l}=e;return t.$$set=u=>{"href"in u&&n(0,i=u.href),"width"in u&&n(1,l=u.width),"$$scope"in u&&n(2,s=u.$$scope)},[i,l,s,r]}class N extends Le{constructor(e){super(),qe(this,e,Be,Ve,be,{href:0,width:1})}}function Fe(t){let e;return{c(){e=d("p"),e.textContent="Curriculum Vitae",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Je(t){let e;return{c(){e=d("p"),e.textContent="Resume",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Ke(t){let e;return{c(){e=d("p"),e.textContent="GitHub",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Ye(t){let e;return{c(){e=d("p"),e.textContent="LinkedIn",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Qe(t){let e;return{c(){e=d("p"),e.textContent="Google Scholar",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Xe(t){let e;return{c(){e=d("p"),e.textContent="ORCiD",o(e,"class","hrefContent svelte-1qrv0rp")},m(n,r){b(n,e,r)},p:v,d(n){n&&g(e)}}}function Ze(t){let e,n,r,s,i,l,u,_,c,H,p,D,w,I,k,C,ne,q,re,U,L,se,G,P,ie,V,W,oe,B,x,le,A;return C=new N({props:{href:t[3],width:$e+"%",$$slots:{default:[Fe]},$$scope:{ctx:t}}}),q=new N({props:{href:t[4],width:$e+"%",$$slots:{default:[Je]},$$scope:{ctx:t}}}),L=new N({props:{href:"https://www.github.com/WSParker",width:K+"%",$$slots:{default:[Ke]},$$scope:{ctx:t}}}),P=new N({props:{href:"https://www.linkedin.com/in/will-s-parker",width:K+"%",$$slots:{default:[Ye]},$$scope:{ctx:t}}}),W=new N({props:{href:"https://scholar.google.com/citations?user=MfSiuHYAAAAJ&hl=en",width:K+"%",$$slots:{default:[Qe]},$$scope:{ctx:t}}}),x=new N({props:{href:"https://orcid.org/0009-0008-8883-7724",width:K+"%",$$slots:{default:[Xe]},$$scope:{ctx:t}}}),{c(){e=d("div"),n=d("div"),r=d("div"),s=d("img"),_=$(),c=d("p"),c.textContent="William Parker, PhD",H=$(),p=d("p"),p.innerHTML="Recent Physics PhD graduate of <br/> University of Oregon.",D=$(),w=d("p"),w.innerHTML='<a href="mailto:will.parker0@gmail.com">will.parker0@gmail.com</a>',I=$(),k=d("div"),M(C.$$.fragment),ne=$(),M(q.$$.fragment),re=$(),U=d("div"),M(L.$$.fragment),se=$(),G=d("div"),M(P.$$.fragment),ie=$(),V=d("div"),M(W.$$.fragment),oe=$(),B=d("div"),M(x.$$.fragment),o(s,"id","headshot"),o(s,"width",i=.5*t[2]),o(s,"height",l=.5*t[2]),xe(s.src,u=t[5])||o(s,"src",u),o(s,"alt","WSParker headshot"),o(s,"class","svelte-1qrv0rp"),o(c,"id","myName"),o(c,"class","svelte-1qrv0rp"),o(p,"id","myTitle"),o(p,"class","svelte-1qrv0rp"),o(w,"id","myEmail"),o(w,"class","svelte-1qrv0rp"),o(k,"class","elementRow svelte-1qrv0rp"),m(k,"--numPerLine","2"),o(U,"class","elementRow svelte-1qrv0rp"),o(G,"class","elementRow svelte-1qrv0rp"),o(V,"class","elementRow svelte-1qrv0rp"),o(B,"class","elementRow svelte-1qrv0rp"),o(r,"id","header"),o(r,"class","svelte-1qrv0rp"),o(n,"id","content"),m(n,"--base-color",ve),o(n,"class","svelte-1qrv0rp"),o(e,"id","container"),m(e,"--lowerColor",ve),m(e,"--contentWidth",t[2]+"px"),m(e,"--headerColor",et),m(e,"--backgroundColor",Pe),m(e,"--numPerLine","1"),o(e,"class","svelte-1qrv0rp"),Q(()=>t[6].call(e))},m(f,h){b(f,e,h),a(e,n),a(n,r),a(r,s),a(r,_),a(r,c),a(r,H),a(r,p),a(r,D),a(r,w),a(r,I),a(r,k),R(C,k,null),a(k,ne),R(q,k,null),a(r,re),a(r,U),R(L,U,null),a(r,se),a(r,G),R(P,G,null),a(r,ie),a(r,V),R(W,V,null),a(r,oe),a(r,B),R(x,B,null),le=ze(e,t[6].bind(e)),A=!0},p(f,[h]){(!A||h&4&&i!==(i=.5*f[2]))&&o(s,"width",i),(!A||h&4&&l!==(l=.5*f[2]))&&o(s,"height",l);const fe={};h&128&&(fe.$$scope={dirty:h,ctx:f}),C.$set(fe);const ce={};h&128&&(ce.$$scope={dirty:h,ctx:f}),q.$set(ce);const ue={};h&128&&(ue.$$scope={dirty:h,ctx:f}),L.$set(ue);const ae={};h&128&&(ae.$$scope={dirty:h,ctx:f}),P.$set(ae);const de={};h&128&&(de.$$scope={dirty:h,ctx:f}),W.$set(de);const he={};h&128&&(he.$$scope={dirty:h,ctx:f}),x.$set(he),(!A||h&4)&&m(e,"--contentWidth",f[2]+"px")},i(f){A||(y(C.$$.fragment,f),y(q.$$.fragment,f),y(L.$$.fragment,f),y(P.$$.fragment,f),y(W.$$.fragment,f),y(x.$$.fragment,f),A=!0)},o(f){E(C.$$.fragment,f),E(q.$$.fragment,f),E(L.$$.fragment,f),E(P.$$.fragment,f),E(W.$$.fragment,f),E(x.$$.fragment,f),A=!1},d(f){f&&g(e),O(C),O(q),O(L),O(P),O(W),O(x),le()}}}let K=92,$e=44;const Pe="hsl(223, 18%, 92%)",ve="hsl(223, 18%, 92%)",et="hsl(223, 18%, 92%)";function tt(t,e,n){let r;const s=new URL("/WParker_CV.pdf",self.location),i=new URL("/WParker_Resume.pdf",self.location),l=new URL("/DSC_4721_bust.jpeg",self.location).href;let u,_;document.body.style.backgroundColor=Pe;function c(){u=this.clientHeight,_=this.clientWidth,n(1,u),n(0,_)}return t.$$.update=()=>{t.$$.dirty&1&&n(2,r=Math.min(500,_))},[_,u,r,s,i,l,c]}class nt extends Le{constructor(e){super(),qe(this,e,tt,Ze,be,{})}}new nt({target:document.body});
