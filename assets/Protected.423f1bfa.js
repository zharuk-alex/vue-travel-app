var c=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(o,t,e)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,u=(o,t)=>{for(var e in t||(t={}))_.call(t,e)&&i(o,e,t[e]);if(s)for(var e of s(t))g.call(t,e)&&i(o,e,t[e]);return o},l=(o,t)=>m(o,p(t));import{_ as h,i as R,N as f,e as y,f as b,o as v,c as E,b as r,t as k,g as w,h as D}from"./index.2321fac0.js";const C={data:()=>({username:window.USER}),methods:{logout(){window.USER=null,this.$router.push({name:"Home",hash:"#logout"})},async triggerRouterError(){const o=await this.$router.push("/protected");R(o,f.duplicated)&&(console.log(o.to),console.log(o.from))},addDynamicRoute(){this.$router.addRoute({name:"dynamic",path:"/dynamic/:id",component:()=>y(()=>import("./User.76e5f5d4.js"),["assets/User.76e5f5d4.js","assets/index.2321fac0.js","assets/index.3e0d44be.css"]),props:o=>l(u({},o.params),{userId:parseInt(o.params.id)})}),this.$router.push({name:"dynamic",params:{id:Math.floor(Math.random()*100)}})}}},N=r("button",{class:"btn"},"Invoces",-1),I=r("span",null," | ",-1),x=r("span",null," | ",-1),B=r("span",null," | ",-1);function P(o,t,e,S,T,a){const d=b("router-link");return v(),E("div",null,[r("h1",null,"Greetings, "+k(o.username),1),w(d,{to:{name:"invoices"}},{default:D(()=>[N]),_:1}),I,r("button",{class:"btn",onClick:t[0]||(t[0]=(...n)=>a.logout&&a.logout(...n))},"Logout"),x,r("button",{class:"btn",onClick:t[1]||(t[1]=(...n)=>a.triggerRouterError&&a.triggerRouterError(...n))}," Trigger Router Error "),B,r("button",{class:"btn",onClick:t[2]||(t[2]=(...n)=>a.addDynamicRoute&&a.addDynamicRoute(...n))},"Add Dynamic Route")])}var F=h(C,[["render",P]]);export{F as default};