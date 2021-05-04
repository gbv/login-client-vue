var e=Object.defineProperty,n=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,t=(n,l,o)=>l in n?e(n,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[l]=o;import{d as u,r as a,a as r,i as s,w as c,c as i,b as d,e as p,v,f as g,g as m,t as b,h as w,o as f,j as k,k as y,l as L,L as U,m as h}from"./vendor.45d8dce4.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((l,u)=>{const a=new URL(e,o);if(self[n].moduleMap[a])return l(self[n].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${n}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){u(new Error(`Failed to import: ${e}`)),t(s)},onload(){l(self[n].moduleMap[a]),t(s)}});document.head.appendChild(s)})),self[n].moduleMap={}}}("/login-client-vue/dev/assets/");const C=u({name:"App",setup(){const e=a("localhost:3004"),n=a(!1),l=a(""),o=r(s("login"));return o.connect(e.value,{ssl:n.value}),c((()=>o.user),(e=>{l.value=e&&e.name||""})),{url:e,ssl:n,name:l,login:o}}}),O=d("h1",null," login-client-vue ",-1),j=d("b",null,"Connection:",-1),x=d("br",null,null,-1),R=d("br",null,null,-1),T=d("label",{for:"sslCheckbox"},"SSL",-1),S=d("br",null,null,-1),I=d("b",null,"Status:",-1),M=d("br",null,null,-1),E=d("br",null,null,-1),N=d("br",null,null,-1),P=d("br",null,null,-1),W=d("br",null,null,-1),$={key:0},_=d("br",null,null,-1),V=d("br",null,null,-1),F={key:1},A=d("br",null,null,-1),B={key:2};C.render=function(e,n,l,o,t,u){const a=k("user-status");return f(),i("main",null,[O,d("section",null,[d("p",null,[j,x,p(d("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.url=n),type:"text",placeholder:"Login Server URL (without protocol)"},null,512),[[v,e.url]]),R,p(d("input",{id:"sslCheckbox","onUpdate:modelValue":n[2]||(n[2]=n=>e.ssl=n),type:"checkbox"},null,512),[[g,e.ssl]]),T,S,d("button",{onClick:n[3]||(n[3]=n=>e.login.connect(e.url,{ssl:e.ssl}))}," Connect ")]),d("p",null,[I,M,m(" Connected: "+b(e.login.connected),1),E,m(" Logged in: "+b(e.login.loggedIn),1),N,m(" User: "+b(e.login.user&&e.login.user.name),1),P,m(" Token: "+b(e.login.token?"✅":"❌"),1),W,e.login.loggedIn?(f(),i("span",$,[p(d("input",{"onUpdate:modelValue":n[4]||(n[4]=n=>e.name=n),type:"text",placeholder:"Name"},null,512),[[v,e.name]]),d("button",{onClick:n[5]||(n[5]=n=>e.login.setName(e.name))}," Set name "),_,d("button",{onClick:n[6]||(n[6]=n=>e.login.openLogoutWindow())}," Logout "),V])):(f(),i("span",F,[d("button",{onClick:n[7]||(n[7]=n=>e.login.openLoginWindow())}," Login "),A])),e.login.connected?(f(),i("span",B,[d("button",{onClick:n[8]||(n[8]=n=>e.login.disconnect())}," Disconnect ")])):w("",!0)])]),d(a)])};const D=u({name:"UserStatus",setup(){const e=s("login");return{login:r(e)}}});D.render=function(e,n,l,o,t,u){return f(),i("a",null,b(e.login.user?e.login.user.name:"login"),1)},D.install=e=>{e.component(D.name,D)};const q=a(!1),z=y(q),G=a(null),H=y(G),J=L((()=>null!==H.value)),K=a(null),Q=y(K),X=a([]),Y=y(X),Z=a(null),ee=y(Z),ne=a(null),le=y(ne);let oe;const te=U.events,ue=U.errors;function ae(e,n={}){K.value&&K.value.connected&&K.value.disconnect(),K.value=new U(e,n),K.value.connect(),K.value.addEventListener(null,(e=>{var n;switch(n=e.type,re.window&&re.eventType==n&&setTimeout((()=>{re.window&&re.window.close(),re.window=null}),100),e.type){case te.connect:q.value=!0;break;case te.disconnect:q.value=!1;break;case te.login:G.value=e.user;break;case te.logout:G.value=null,ne.value=null;break;case te.update:G.value=e.user;break;case te.providers:X.value=e.providers;break;case te.about:Z.value=e;break;case te.token:ne.value=e.token,clearTimeout(oe),oe=setTimeout((()=>{ne.value=null}),1e3*e.expiresIn)}}))}const re={window:null,eventType:null};const se={connected:z,user:H,loggedIn:J,connect:ae,disconnect:function(){K.value&&K.value.connected&&K.value.disconnect()},client:Q,providers:Y,about:ee,token:le,events:te,errors:ue,setName:function(e){Q.value&&Q.value.setName(e)},openLoginWindow:function(e){if(!Q.value||!Q.value.connected)return;const n=Y.value.find((({id:n})=>e===n)),l=n&&n.loginURL||ee.value&&ee.value.baseUrl+"login/";l&&(re.window=window.open(l),re.eventType=te.login)},openLogoutWindow:function(){if(!Q.value||!Q.value.connected)return;const e=ee.value&&ee.value.baseUrl+"logout/";e&&(re.window=window.open(e),re.eventType=te.logout)}};var ce=((e,u)=>{for(var a in u||(u={}))n.call(u,a)&&t(e,a,u[a]);if(l)for(var a of l(u))o.call(u,a)&&t(e,a,u[a]);return e})({install:(e,t={})=>{var{url:u}=t,a=((e,t)=>{var u={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(u[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&o.call(e,a)&&(u[a]=e[a]);return u})(t,["url"]);u&&ae(u,a),e.provide("login",se),e.use(D)}},se);h(C).use(ce).mount("#app");