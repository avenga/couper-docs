import{d as f,t as p,b as d,j as c,k as l,l as m,u as y,h as v}from"./entry-d9816149.mjs";var g=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:e}=p(r),a=d(()=>{var n;return typeof((n=e.value)==null?void 0:n.params)=="function"?e.value.params():e.value}),{data:t,refresh:u}=await c(`content-navigation-${m(a.value)}`,()=>l(a.value));return{data:t,refresh:u}},render(r){var o;const e=y(),{query:a,data:t,refresh:u}=r,n=(s,i)=>v("pre",null,JSON.stringify({message:"You should use slots with <ContentNavigation>",slot:s,data:i},null,2));return(e==null?void 0:e.empty)&&(!t||!(t!=null&&t.length))?((o=e==null?void 0:e.empty)==null?void 0:o.call(e,{query:a,...this.$attrs}))||n("empty",{query:a,data:t}):e!=null&&e.default?e.default({navigation:t,refresh:u,...this.$attrs}):n("default",t)}});export{g as default};
