import{d as v,ak as m,r as h,K as y,b as s,c as o,L as i,f as _,e,F as f,ai as k,p as C,i as g,t as x,k as S}from"./entry.73597e00.js";const c=t=>(C("data-v-2497269e"),t=t(),g(),t),b={key:0,class:"copied"},w=c(()=>e("div",{class:"scrim"},null,-1)),B=c(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},L=c(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},j=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),n=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",b,I)):_("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[L,e("span",N,x(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",V," Click to copy ")):_("",!0)]))}});const D=S(j,[["__scopeId","data-v-2497269e"]]);export{D as default};
