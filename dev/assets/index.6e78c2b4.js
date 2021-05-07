var e=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable;import{d as o,r as t,w as r,c as i,a,b as u,e as s,v as c,f as d,g,t as p,h as v,F as b,i as w,j as m,o as f,k as h,l as k,L as y,m as L,n as U,p as C,q as S,s as I}from"./vendor.d5a5b190.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((l,r)=>{const i=new URL(e,o);if(self[n].moduleMap[i])return l(self[n].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${n}.moduleMap['${i}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){r(new Error(`Failed to import: ${e}`)),t(u)},onload(){l(self[n].moduleMap[i]),t(u)}});document.head.appendChild(u)})),self[n].moduleMap={}}}("/login-client-vue/dev/assets/");const O="coli-conc.gbv.de/login/",E=!0,R=o({name:"App",setup(){const e=new URLSearchParams(window.location.search),n=t(e.get("server")||O),l=t(e.has("ssl")?"true"===e.get("ssl"):E),o=t(""),i=w("login");return i.connect(n.value,{ssl:l.value}),r((()=>i.user),(e=>{o.value=e&&e.name||""})),{url:n,ssl:l,name:o,login:i,version:"0.2.4",commit:"e696557",branch:"dev",connect(){i.connect(n.value,{ssl:l.value});const e=new URLSearchParams(window.location.search);e.set("server",n.value),e.set("ssl",l.value),window.history.replaceState({},"",`${window.location.href.replace(window.location.search,"")}?${e.toString()}`)}}}}),$=g(" Slot before:"),j=a("br",null,null,-1),T=a("br",null,null,-1),W=a("br",null,null,-1),_=a("hr",null,null,-1),x=a("hr",null,null,-1),P=g(" Slot after:"),B=a("br",null,null,-1),M=a("br",null,null,-1),N=a("br",null,null,-1),F=a("div",{style:{clear:"both"}},null,-1),V=a("h1",null," login-client-vue ",-1),D=a("b",null,"Connection:",-1),q=a("br",null,null,-1),A=a("br",null,null,-1),G=a("label",{for:"sslCheckbox"},"SSL",-1),H=a("br",null,null,-1),z=a("b",null,"Status:",-1),J=a("br",null,null,-1),K=a("br",null,null,-1),Q=a("br",null,null,-1),X=a("br",null,null,-1),Y=a("br",null,null,-1),Z={key:0},ee=a("br",null,null,-1),ne=a("br",null,null,-1),le={key:1},oe=a("br",null,null,-1),te={key:2},re=a("hr",null,null,-1),ie=a("br",null,null,-1),ae=a("a",{href:"https://github.com/gbv/login-client-vue"}," Documentation on GitHub ",-1);R.render=function(e,n,l,o,t,r){const w=m("user-status");return f(),i(b,null,[a("nav",null,[a(w,{style:{float:"right"}},{before:u((({connected:e,loggedIn:n,user:l})=>[a("p",null,[$,j,g(" Connected: "+p(e),1),T,g(" Logged in: "+p(n),1),W,g(" User: "+p(l?"Object":"null"),1)]),_])),after:u((({connected:e,loggedIn:n,user:l})=>[x,a("p",null,[P,B,g(" Connected: "+p(e),1),M,g(" Logged in: "+p(n),1),N,g(" User: "+p(l?"Object":"null"),1)])])),_:1}),F]),a("main",null,[V,a("section",null,[a("p",null,[D,q,s(a("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.url=n),type:"text",placeholder:"Login Server URL (without protocol)"},null,512),[[c,e.url]]),A,s(a("input",{id:"sslCheckbox","onUpdate:modelValue":n[2]||(n[2]=n=>e.ssl=n),type:"checkbox"},null,512),[[d,e.ssl]]),G,H,a("button",{onClick:n[3]||(n[3]=(...n)=>e.connect&&e.connect(...n))}," Connect ")]),a("p",null,[z,J,g(" Connected: "+p(e.login.connected),1),K,g(" Logged in: "+p(e.login.loggedIn),1),Q,g(" User: "+p(e.login.user&&e.login.user.name),1),X,g(" Token: "+p(e.login.token?"✅":"❌"),1),Y,e.login.loggedIn?(f(),i("span",Z,[s(a("input",{"onUpdate:modelValue":n[4]||(n[4]=n=>e.name=n),type:"text",placeholder:"Name"},null,512),[[c,e.name]]),a("button",{onClick:n[5]||(n[5]=n=>e.login.setName(e.name))}," Set name "),ee,a("button",{onClick:n[6]||(n[6]=n=>e.login.openLogoutWindow())}," Logout "),ne])):(f(),i("span",le,[a("button",{onClick:n[7]||(n[7]=n=>e.login.openLoginWindow())}," Login "),oe])),e.login.connected?(f(),i("span",te,[a("button",{onClick:n[8]||(n[8]=n=>e.login.disconnect())}," Disconnect ")])):v("",!0)])]),re,a("footer",null,[g(" login-client-vue v"+p(e.version)+" ("+p(e.branch)+" - "+p(e.commit)+")",1),ie,ae])])],64)};const ue=t(!1),se=h(ue),ce=t(null),de=h(ce),ge=k((()=>null!==de.value)),pe=t(null),ve=h(pe),be=t([]),we=h(be),me=t(null),fe=h(me),he=t(null),ke=h(he);let ye;const Le=t(null),Ue=h(Le),Ce=y.events,Se=y.errors;function Ie(e,n={}){pe.value&&pe.value.disconnect(),pe.value=new y(e,n),pe.value.connect(),pe.value.addEventListener(null,(e=>{var n;switch(n=e.type,Oe.window&&Oe.eventType==n&&setTimeout((()=>{Oe.window&&Oe.window.close(),Oe.window=null}),100),e.type){case Ce.connect:ue.value=!0;break;case Ce.disconnect:ue.value=!1;break;case Ce.login:ce.value=e.user;break;case Ce.logout:ce.value=null,he.value=null;break;case Ce.update:ce.value=e.user;break;case Ce.providers:be.value=e.providers;break;case Ce.about:me.value=e;break;case Ce.token:he.value=e.token,clearTimeout(ye),ye=setTimeout((()=>{he.value=null}),1e3*e.expiresIn);break;case Ce.error:Le.value=e.error}}))}const Oe={window:null,eventType:null};const Ee={connected:se,user:de,loggedIn:ge,connect:Ie,disconnect:function(){pe.value&&pe.value.connected&&pe.value.disconnect()},client:ve,providers:we,about:fe,token:ke,events:Ce,errors:Se,setName:function(e){ve.value&&ve.value.setName(e)},openLoginWindow:function({id:e,redirect:n=!1}={}){if(!ve.value||!ve.value.connected)return;const l=ve.value._about,o=we.value.find((({id:n})=>e===n)),t=o&&o.loginURL||l&&l.baseUrl+"login/";t&&(n?window.location.href=`${t}?redirect_uri=${encodeURIComponent(window.location.href)}`:(Oe.window=window.open(t),Oe.eventType=Ce.login))},openLogoutWindow:function({redirect:e=!1}={}){if(!ve.value||!ve.value.connected)return;const n=ve.value._about,l=n&&n.baseUrl+"logout/";l&&(e?window.location.href=`${l}?redirect_uri=${encodeURIComponent(window.location.href)}`:(Oe.window=window.open(l),Oe.eventType=Ce.logout))},openBaseWindow:function(){if(!ve.value)return;const e=ve.value._about,n=e&&e.baseUrl;n&&window.open(n)},lastError:Ue},Re=L(Ee);Re.install=(o,t={})=>{var{url:r}=t,i=((o,t)=>{var r={};for(var i in o)e.call(o,i)&&t.indexOf(i)<0&&(r[i]=o[i]);if(null!=o&&n)for(var i of n(o))t.indexOf(i)<0&&l.call(o,i)&&(r[i]=o[i]);return r})(t,["url"]);r&&Ie(r,i),o.provide("login",h(Ee)),o.provide("login-refs",Ee)};const $e=o({name:"UserStatus",props:{redirect:{type:Boolean,default:!1}},setup:()=>({login:w("login")})}),je={class:"user-status"},Te=a("span",{class:"carret-down"},"▼",-1),We={class:"user-status-dropdown"},_e={key:0},xe=g(" Error: "),Pe=g(" Please check your internet connection. "),Be=g(" Third-party cookies are blocked in your browser which means that a connection to the server can't be established. "),Me=g(" There seems to be an issue with the server. Please try again later. "),Ne=g(" Unknown error. Please try again later. "),Fe=a("hr",null,null,-1),Ve=a("p",null," Sign in via ",-1),De=a("hr",null,null,-1),qe={style:{"overflow-wrap":"break-word"}},Ae=g(" Open Login Server "),Ge={style:{"font-weight":"normal"}},He=a("br",null,null,-1);$e.render=function(e,n,l,o,t,r){return f(),i("div",je,[a("a",{href:"",class:{"user-status-disconnected":!e.login.connected},onClick:n[1]||(n[1]=U((n=>e.login.connected&&(e.login.loggedIn?e.login.openBaseWindow():e.login.openLoginWindow({redirect:e.redirect}))),["prevent"]))},[g(p(e.login.loggedIn?e.login.user.name:"Sign in")+" ",1),Te],2),a("div",We,[C(e.$slots,"before",{connected:e.login.connected,loggedIn:e.login.loggedIn,user:e.login.user}),e.login.connected?e.login.loggedIn?(f(),i(b,{key:1},[a("p",null," Signed in as "+p(e.login.user.name)+". ",1),Fe,a("ul",null,[a("li",null,[a("a",{href:"",onClick:n[2]||(n[2]=U((n=>e.login.openLogoutWindow()),["prevent"]))}," Sign out ")])])],64)):(f(),i(b,{key:2},[Ve,a("ul",null,[(f(!0),i(b,null,S(e.login.providers,(n=>(f(),i("li",{key:n.id},[a("a",{href:"",onClick:U((l=>e.login.openLoginWindow({id:n.id,redirect:e.redirect})),["prevent"])},[n.image?(f(),i("img",{key:0,src:n.image},null,8,["src"])):v("",!0),g(" "+p(n.name),1)],8,["onClick"])])))),128))])],64)):(f(),i("p",_e,[xe,e.login.lastError instanceof e.login.errors.NoInternetConnectionError?(f(),i(b,{key:0},[Pe],64)):e.login.lastError instanceof e.login.errors.ThirdPartyCookiesBlockedError?(f(),i(b,{key:1},[Be],64)):e.login.lastError instanceof e.login.errors.ServerConnectionError?(f(),i(b,{key:2},[Me],64)):(f(),i(b,{key:3},[Ne],64))])),e.login.client&&e.login.client.about&&e.login.client.about.baseUrl?(f(),i(b,{key:3},[De,a("ul",null,[a("li",qe,[a("a",{href:"",onClick:n[3]||(n[3]=U((n=>e.login.openBaseWindow()),["prevent"]))},[Ae,a("small",Ge,[He,g("at "+p(e.login.client.about.baseUrl),1)])])])])],64)):v("",!0),C(e.$slots,"after",{connected:e.login.connected,loggedIn:e.login.loggedIn,user:e.login.user})])])},$e.install=e=>{e.component($e.name,$e)},I(R).use(Re).use($e).mount("#app");
