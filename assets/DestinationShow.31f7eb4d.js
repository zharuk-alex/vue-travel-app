import{_ as u,f as t,o as s,c as r,g as o,b as n,t as _,s as f,l as k,F as B,m as b,n as y,h as C}from"./index.a690c5c5.js";const $={props:{experience:{type:Object,required:!0}}},w={class:"card"},E={class:"card__text"};function I(a,i,c,p,m,e){const d=t("BaseImage");return s(),r("div",w,[o(d,{src:c.experience.image,alt:c.experience.name},null,8,["src","alt"]),n("span",E,_(c.experience.name),1)])}var G=u($,[["render",I]]);const N={},D={class:"go-back"};function S(a,i){return s(),r("span",D,[n("button",{onClick:i[0]||(i[0]=c=>a.$router.back())},"go back")])}var V=u(N,[["render",S],["__scopeId","data-v-082c90a8"]]);const q={props:{id:{type:Number,required:!0}},components:{ExperienceCard:G,GoBack:V},computed:{destination(){return f.destinations.find(a=>a.id==this.id)},experiances(){return this.destination.experiances}},mounted(){console.log("/vue-travel-app/")},methods:{}},F={key:0,class:"destination"},j={class:"destination-details"},L={class:"experiences"},O={class:"cards"};function T(a,i,c,p,m,e){const d=t("GoBack"),x=t("BaseImage"),h=t("ExperienceCard"),v=t("router-link"),g=t("router-view");return s(),r("div",null,[e.destination?(s(),r("section",F,[n("h1",null,_(e.destination.name),1),o(d),n("div",j,[o(x,{src:e.destination.image,alt:e.destination.name},null,8,["src","alt"]),n("p",null,_(e.destination.description),1)])])):k("",!0),n("section",L,[n("h2",null,"Top Experiences in "+_(e.destination.name),1),n("div",O,[(s(!0),r(B,null,b(e.destination.experiences,l=>(s(),y(v,{key:l.slug,to:{name:"experience.show",params:{experienceSlug:l.slug}}},{default:C(()=>[o(h,{experience:l},null,8,["experience"])]),_:2},1032,["to"]))),128))]),o(g)])])}var A=u(q,[["render",T]]);export{A as default};