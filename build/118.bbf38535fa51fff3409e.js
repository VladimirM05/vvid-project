/*! For license information please see 118.bbf38535fa51fff3409e.js.LICENSE.txt */
"use strict";(self.webpackChunkvvid_project=self.webpackChunkvvid_project||[]).push([[118],{118:(e,s,a)=>{a.r(s),a.d(s,{BalanceContext:()=>M,default:()=>U});var c=a(848),t=a(540);function n(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)e[c]=a[c]}return e}var r=function e(s,a){function c(e,c,t){if("undefined"!=typeof document){"number"==typeof(t=n({},a,t)).expires&&(t.expires=new Date(Date.now()+864e5*t.expires)),t.expires&&(t.expires=t.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var i in t)t[i]&&(r+="; "+i,!0!==t[i]&&(r+="="+t[i].split(";")[0]));return document.cookie=e+"="+s.write(c,e)+r}}return Object.create({set:c,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],c={},t=0;t<a.length;t++){var n=a[t].split("="),r=n.slice(1).join("=");try{var i=decodeURIComponent(n[0]);if(c[i]=s.read(r,i),e===i)break}catch(e){}}return e?c[e]:c}},remove:function(e,s){c(e,"",n({},s,{expires:-1}))},withAttributes:function(s){return e(this.converter,n({},this.attributes,s))},withConverter:function(s){return e(n({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(s)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),i=a(976);const l=[[{src:a.p+"src/assets/images/dirt-1.d3f545ec69ee977ed43e6035dce9dd9f.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/dirt-2.7fbde20c364368f68f56110c24ed64ce.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/dirt-3.289f0b58e5964eca1021cfd7dc6224a1.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/dirt-4.e9f6c419869f872943bb7a1f93a79c1a.jpg",endurance:1,cost:2}],[{src:a.p+"src/assets/images/grass-1.e019515cdaf72094684acd118d717ef6.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/grass-2.13ccf2efe341401830c5c95927ece32f.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/grass-3.db49e6eaae54191f57cbe203c0d5af7b.jpg",endurance:1,cost:1},{src:a.p+"src/assets/images/grass-4.a3c5414dd5b0b762ae5f360353e697c4.jpg",endurance:1,cost:2}],[{src:a.p+"src/assets/images/wood-1.e5f1561df47ad77261ca009e6f94fbfa.jpg",endurance:2,cost:1},{src:a.p+"src/assets/images/wood-2.48a4f652c8b9dd103295bc8e1b7b4893.jpg",endurance:2,cost:1},{src:a.p+"src/assets/images/wood-3.4757ca6a28970e3d82b53f31ddf0bd85.jpg",endurance:2,cost:1},{src:a.p+"src/assets/images/wood-4.b52cddddd619c3f34843a5adf1f39c2c.jpg",endurance:2,cost:5}],[{src:a.p+"src/assets/images/cobblestone-1.3278e8efeac8a863004214c9f5c1026b.jpg",endurance:3,cost:1},{src:a.p+"src/assets/images/cobblestone-2.f82ddafcd77c1b710fee572b6e7264ef.jpg",endurance:3,cost:1},{src:a.p+"src/assets/images/cobblestone-3.2c3042bf4755ac6d435f3821a2fbc3fe.jpg",endurance:3,cost:1},{src:a.p+"src/assets/images/cobblestone-4.50b0d4791a6d168314c51951bee83820.jpg",endurance:3,cost:10}],[{src:a.p+"src/assets/images/diamond-1.594c51b0d6645f8b1853e566a36b5704.jpg",endurance:5,cost:1},{src:a.p+"src/assets/images/diamond-2.0bad567e16d293fee8117fc6b9786adf.jpg",endurance:5,cost:1},{src:a.p+"src/assets/images/diamond-3.a37b6940f0670a987e7b2316969e93d1.jpg",endurance:5,cost:1},{src:a.p+"src/assets/images/diamond-4.6f528ad04ccd8b046f0ed9e7af41f79a.jpg",endurance:5,cost:25}],[{src:a.p+"src/assets/images/tnt.36994c703546d076f90bf7a275248abd.jpg",endurance:1,cost:-5}]],o=(e,s)=>(e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1)+e));let d=Object.assign({},l[o(0,l.length-1)]),u=0,m=Object.assign({},d[u]),g=0,p=0;const f=()=>{const[e,s]=(0,t.useState)(!1),a=(0,t.useContext)(M);if(!a)throw new Error("Header must be used within a BalanceProvider");const{balance:n,setBalance:r,userSignIn:f}=a;return(0,c.jsx)("section",{className:"section-1",children:e?(0,c.jsx)(i.k2,{className:"sign-in-link",to:"/Registration",children:(0,c.jsx)("span",{className:"sign-in-text",children:"Sign in for play"})}):(0,c.jsxs)("div",{className:"click-btn",onMouseEnter:()=>{const e=document.querySelector(".click-btn-img"),s=document.querySelector(".click-btn-text");e.style.height="208px",e.style.width="208px",e.style.boxShadow="3px 2px 4px #000000",s.style.fontSize="50px"},onMouseLeave:()=>{const e=document.querySelector(".click-btn-img"),s=document.querySelector(".click-btn-text");e.style.height="258px",e.style.width="258px",e.style.boxShadow="5px 4px 4px #000000",s.style.fontSize="70px"},children:[(0,c.jsx)("div",{className:"click-btn-area",onClick:f?()=>{m.endurance--;const e=document.querySelector(".click-btn");e?.insertAdjacentHTML("beforeend",`<span class="balance-add" style="top:${p}px; left:${g}px">${0===m.endurance&&u===Object.keys(d).length-1?d[u].cost>=0?"+"+d[u].cost:d[u].cost:"+1"}\n\t\t</span>`);const s=e?.lastChild,a=p;let c=0;const t=Date.now(),i=setInterval((()=>{const e=Date.now()-t;c+=3,s.style.top=a-c+"px",e>=300&&(s.style.opacity="0"),e>=1e3&&clearInterval(i)}),15);r((e=>e+1)),0===m.endurance&&u!==Object.keys(d).length-1&&(u++,m=Object.assign({},d[u])),0===m.endurance&&u===Object.keys(d).length-1&&(n<10&&m.cost<0?r(0):r(n+m.cost+1),d=Object.assign({},l[o(0,l.length-1)]),u=0,m=Object.assign({},d[u]))}:()=>s(!e),onMouseMove:e=>{g=e.nativeEvent.offsetX,p=e.nativeEvent.offsetY}}),(0,c.jsx)("img",{className:"click-btn-img",src:d[u].src,alt:"Click Button Background"}),f?(0,c.jsx)("span",{className:"click-btn-text",children:"Claim"}):(0,c.jsx)("span",{className:"click-btn-text",children:"Play"})]})})};var b=a(961);const x=({text:e,value:s})=>(0,c.jsxs)("div",{className:"user-data",children:[(0,c.jsx)("span",{className:"user-data-text",children:e}),(0,c.jsx)("div",{className:"user-data-container",children:(0,c.jsx)("span",{className:"user-data-value",children:s})})]}),j=({text:e,value:s})=>(0,c.jsxs)("div",{className:"user-data2",children:[(0,c.jsx)("span",{className:"user-data2-text",children:e}),(0,c.jsx)("div",{className:"user-data2-container",children:(0,c.jsx)("span",{className:"user-data2-value",children:s})})]}),h=a.p+"src/assets/images/coutCash.17ff0ff28121145dc6f3725616bd3bbd.svg",v=()=>(0,c.jsx)("div",{className:"cout-cash",children:(0,c.jsxs)("button",{className:"cout-cash-btn",children:[(0,c.jsx)("span",{className:"cout-cash-text",children:"Вывод средств"}),(0,c.jsx)("img",{className:"cout-cash-img",src:h,alt:"Cout Cash"})]})}),N=a.p+"src/assets/images/gandonioCat.f12d81407b3e642bb42b23afb445ff78.png",k=({isVisible:e,toggleVisibility:s,isAnimating:a})=>{const n=(0,t.useContext)(M);if(!n)throw new Error("Header must be used within a BalanceProvider");const{balance:r}=n;return(0,b.createPortal)((0,c.jsxs)("div",{className:a?"user-aside-container user-aside-container-hide":"user-aside-container",children:[(0,c.jsx)("div",{className:"screen-filter",onClick:()=>s("")}),(0,c.jsx)("aside",{className:a?"user-aside user-aside-hide":"user-aside",children:(0,c.jsxs)("div",{className:"user-aside-inner",children:["players"===e&&(0,c.jsx)("h4",{className:"user-aside-title",children:"Топ Игроки"}),"missions"===e&&(0,c.jsx)("h4",{className:"user-aside-title",children:"Миссии"}),"profile"===e&&(0,c.jsxs)("div",{className:"user-profile",children:[(0,c.jsx)("div",{className:"user-profile-avatar",children:(0,c.jsx)("img",{className:"user-profile-avatar-img",src:N,alt:"User Icon"})}),(0,c.jsxs)("div",{className:"user-profile-container",children:[(0,c.jsx)(x,{text:"Mail",value:""}),(0,c.jsx)(x,{text:"MetaMask address",value:""})]}),(0,c.jsx)(j,{text:"Рейтинг",value:null}),(0,c.jsx)(j,{text:"Заработано токенов",value:r}),(0,c.jsx)(v,{})]})]})})]}),document.querySelector("body"))},y=a.p+"src/assets/images/dollar.64b0074163a9d2a2989c996f591ead7e.svg",C=a.p+"src/assets/images/list.69e987461b6e2d7ce0e7974fa25b33ac.svg",w=a.p+"src/assets/images/signIn.d7b2767eb26d859e4b1fae7865e7358b.svg",S=()=>{const e=(0,t.useContext)(M);if(!e)throw new Error("Header must be used within a BalanceProvider");const{balance:s,userSignIn:a}=e,[n,r]=(0,t.useState)(""),[l,o]=(0,t.useState)(!1),d=e=>{n?(o(!0),setTimeout((()=>{r(""),o(!1)}),300)):r(e)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{className:"header",children:(0,c.jsxs)("div",{className:"header-inner",children:[a&&(0,c.jsxs)("ul",{className:"menu-list",children:[(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)(i.k2,{className:"menu-link",to:"/Games",children:"Мини-игры"})}),(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)(i.k2,{className:"menu-link",to:"/Questions",children:"FAQ"})}),(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)("span",{className:"menu-link",onClick:()=>d("players"),children:"Топ игроки"})}),(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)("span",{className:"menu-link",onClick:()=>d("missions"),children:"Миссии"})})]}),(0,c.jsx)("div",{className:"logo",style:a?{display:"absolute",left:"50%",transform:"translateX(-50%) translateY(5%)"}:{display:"block"},children:(0,c.jsx)("span",{className:"logo-text",children:"Sigma Rule"})}),a&&(0,c.jsxs)("div",{className:"user-info",children:[(0,c.jsxs)("button",{className:"user-info-btn",onClick:()=>d("profile"),children:[(0,c.jsx)("img",{className:"user-info-img",src:y,alt:"User"}),(0,c.jsx)("span",{className:"user-info-text",children:s})]}),(0,c.jsxs)("button",{className:"user-info-btn user-info-btn-2",onClick:()=>d("profile"),children:[(0,c.jsx)("img",{className:"user-info-img user-info-img-2",src:C,alt:"User"}),(0,c.jsx)("span",{className:"user-info-text",children:"Profile"})]})]}),!a&&(0,c.jsxs)(i.k2,{className:"reg-btn",to:"Registration",children:[(0,c.jsx)("img",{className:"reg-img",src:w,alt:"Reg Button Icon"}),(0,c.jsx)("span",{className:"reg-text",children:"Sign In"})]})]})}),n&&(0,c.jsx)(k,{isVisible:n,toggleVisibility:d,isAnimating:l})]})};var I=a(767);const B=()=>{const{pathname:e}=(0,I.zy)();return(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},O=a.p+"src/assets/images/background.2adc4a483d8e3eca9cd7c5643f456087.jpg",M=t.createContext(null),U=({userSignIn:e,setUserSignIn:s})=>{const[a,n]=(0,t.useState)(0);return(0,t.useEffect)((()=>{document.title="Главная",console.log(a,e);const c=r.get("Cookie");if(c)try{const e=JSON.parse(c);n(e.balance),s(e.userSignIn)}catch(e){console.error("Ошибка при парсинге cookie:",e)}console.log(a,e)}),[]),(0,t.useEffect)((()=>{console.log(a,e);const s={userSignIn:e,balance:a};r.set("Cookie",JSON.stringify(s),{path:"/",expires:31536e3,sameSite:"strict"}),console.log(a,e)}),[a]),(0,c.jsxs)(M.Provider,{value:{balance:a,setBalance:n,userSignIn:e,setUserSignIn:s},children:[(0,c.jsx)("div",{className:"wallpaper",style:{backgroundImage:`url(${O})`}}),(0,c.jsx)(S,{}),(0,c.jsxs)("main",{className:"main",children:[(0,c.jsx)(B,{}),(0,c.jsx)(f,{})]})]})}}}]);