if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-248615e0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.967780e4.js",revision:null},{url:"assets/index.c711880f.css",revision:null},{url:"assets/workbox-window.prod.es5.fb541039.js",revision:null},{url:"assets/WParker_CV.a74669c0.pdf",revision:null},{url:"assets/WParker_Resume.251cf261.pdf",revision:null},{url:"index.html",revision:"567414780448c9da611f0361ae132dff"},{url:"manifest.webmanifest",revision:"456ee6489345a3ea8495dc797ab2be87"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
