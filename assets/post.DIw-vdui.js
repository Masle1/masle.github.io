import{p as k,u as U,x as w,b as z,y as A,c as D,h as F,e as M,f as N}from"./app.Bv7zMMVZ.js";import"./chunks/@vueuse/motion.aGHiSQ0l.js";import{L as y,J as h,aa as s,ac as _,ae as a,af as u,A as o,ag as i,ab as m,a9 as H,Z as r,al as p,at as j,aj as x,P as I}from"./framework.D0MQy0Os.js";import{u as E}from"./chunks/vue-i18n.Dbm4lf-z.js";import{_ as J}from"./YunSponsor.vue_vue_type_style_index_0_lang.Ci3BAutA.js";import{_ as O,a as W,b as Z}from"./YunPostMeta.vue_vue_type_script_setup_true_lang.DCxgjh_z.js";import{d as C}from"./chunks/dayjs.i0BUjmvK.js";import"./chunks/vue-router.Or6vPvH8.js";import"./chunks/pinia.vZnlQ-iY.js";import"./chunks/nprogress.MTuYNGdb.js";import"./index.CIZSko6L.js";import"./animation.CbwFzMrz.js";const q={class:"post-copyright"},G={class:"post-copyright-author"},K={key:0,class:"post-copyright-link"},Q=["href","title"],X={class:"post-copyright-license"},ee=["innerHTML"],te=y({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:t}=E(),n=k(),l=n.value.license.type==="zero"?"1.0":"4.0",f=n.value.license.type==="zero"?"publicdomain":"licenses",g=h(()=>{const c=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${f}/${n.value.license.type}/${l}/deed.${c}`}),d=h(()=>e("post.copyright.license_content",[`<a href="${g.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${l}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(c,$)=>(s(),_("ul",q,[a("li",G,[a("strong",null,u(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,u(o(n).author.name),1)]),c.url?(s(),_("li",K,[a("strong",null,u(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:c.url,target:"_blank",title:o(e)("post.copyright.link")},u(decodeURI(c.url)),9,Q)])):i("v-if",!0),a("li",X,[a("strong",null,u(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:d.value},null,8,ee)])]))}}),oe={class:"inline-flex",text:"sm",py:"1"},ne={key:1,mx:"2"},se=y({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,t)=>{const n=O,l=W;return s(),_("div",oe,[e.frontmatter.categories?(s(),m(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):i("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),_("span",ne)):i("v-if",!0),e.frontmatter.tags?(s(),m(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):i("v-if",!0)])}}}),he=y({__name:"post",setup(v){const e=k(),t=U(),n=w(),l=h(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),f={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:C(t.value.date||"").toDate(),dateModified:C(t.value.updated||"").toDate()},g=t.value.image||t.value.cover;return g&&(f.image=g),z(A(f)),(d,c)=>{const $=D,b=Z,Y=se,L=J,P=te,V=H("RouterView"),S=F,B=M,R=N;return s(),_(I,null,[r(B,null,{default:p(()=>[r($),r(V,null,{default:p(({Component:T})=>[(s(),m(j(T),null,{"main-header-after":p(()=>[r(b,{frontmatter:o(t)},null,8,["frontmatter"]),r(Y,{class:"mt-2",frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":p(()=>[l.value?(s(),m(L,{key:0,m:"t-6"})):i("v-if",!0),o(t).copyright||o(t).copyright!==!1&&o(e).license.enabled?(s(),m(P,{key:1,url:o(n),m:"y-4"},null,8,["url"])):i("v-if",!0)]),"aside-custom":p(()=>[x(d.$slots,"aside-custom")]),_:2},1024))]),_:3}),r(S)]),_:3}),r(R)],64)}}});export{he as default};