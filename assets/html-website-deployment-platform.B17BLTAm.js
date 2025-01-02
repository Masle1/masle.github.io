import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DCz8gmJK.js";import"./chunks/@vueuse/motion.aGHiSQ0l.js";import{f as x,a as y}from"./chunks/vue-router.Or6vPvH8.js";import{a0 as p,ab as b,al as n,A as h,aa as k,ae as t,ah as l,ag as C,aj as i}from"./framework.D0MQy0Os.js";import"./app.Bv7zMMVZ.js";import"./chunks/dayjs.i0BUjmvK.js";import"./chunks/vue-i18n.Dbm4lf-z.js";import"./chunks/pinia.vZnlQ-iY.js";import"./chunks/nprogress.MTuYNGdb.js";import"./YunComment.vue_vue_type_style_index_0_lang.C7AEzUnm.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BYcVKNgL.js";import"./post.D9HjOvNB.js";const G=x("/posts/note/html-website-deployment-platform",async s=>JSON.parse('{"title":"静态网站托管平台之碰壁记","description":"","frontmatter":{"title":"静态网站托管平台之碰壁记","date":"2021-10-13 14:54:01","updated":"2022-1-21","keywords":["gitee","github","vercel","cloudflare","静态网站","网页部署"],"tags":["静态网站","Hexo","Vercel"],"categories":["站长的小笔记"]},"headers":[{"level":2,"title":"限制条件","slug":"限制条件","link":"#限制条件","children":[]},{"level":2,"title":"部署平台","slug":"部署平台","link":"#部署平台","children":[{"level":3,"title":"Gitee","slug":"gitee","link":"#gitee","children":[]},{"level":3,"title":"Github","slug":"github","link":"#github","children":[]},{"level":3,"title":"Cloudflare","slug":"cloudflare","link":"#cloudflare","children":[]},{"level":3,"title":"Coding","slug":"coding","link":"#coding","children":[]},{"level":3,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]}]},{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"2022/1/21","slug":"_2022-1-21","link":"#_2022-1-21","children":[]}],"relativePath":"pages/posts/note/html-website-deployment-platform.md","lastUpdated":1735820388000}'),{lazy:(s,o)=>s.name===o.name}),z={__name:"html-website-deployment-platform",setup(s,{expose:o}){var g;const{data:d}=G(),u=y(),a=Object.assign(u.meta.frontmatter||{},((g=d.value)==null?void 0:g.frontmatter)||{});return u.meta.frontmatter=a,p("pageData",d.value),p("valaxy:frontmatter",a),globalThis.$frontmatter=a,o({frontmatter:{title:"静态网站托管平台之碰壁记",date:"2021-10-13 14:54:01",updated:"2022-1-21",keywords:["gitee","github","vercel","cloudflare","静态网站","网页部署"],tags:["静态网站","Hexo","Vercel"],categories:["站长的小笔记"]}}),(r,e)=>{const m=f;return k(),b(m,{frontmatter:h(a)},{"main-content-md":n(()=>[e[0]||(e[0]=t("p",null,[l("使用静态网站的一大优点，当然就是不需要购买服务器，有各大平台的page服务可以免费托管你的网站。 "),t("s",null,"对我这样的穷学生十分友好"),l("😎 但是由于各种因素，我尝试过多种网站托管平台（Gitee/"),t("s",null,"Github"),l("/Cloudflare/Conding/Vercel），最终好像也没有找到真正喜欢的。")],-1)),e[1]||(e[1]=t("blockquote",null,[t("p",null,"既然没有最喜欢的，那就找个最好用的~~")],-1)),C(" more "),e[2]||(e[2]=t("div",{class:"warning"},[t("blockquote",null,[t("p",null,"本篇具有一定的个人色彩，而且具有一定的时效性。请理性阅读")])],-1)),e[3]||(e[3]=t("h2",{id:"限制条件",tabindex:"-1"},[l("限制条件 "),t("a",{class:"header-anchor",href:"#限制条件","aria-label":'Permalink to "限制条件"'},"​")],-1)),e[4]||(e[4]=t("ul",null,[t("li",null,"无服务器"),t("li",null,"域名无备案")],-1)),e[5]||(e[5]=t("h2",{id:"部署平台",tabindex:"-1"},[l("部署平台 "),t("a",{class:"header-anchor",href:"#部署平台","aria-label":'Permalink to "部署平台"'},"​")],-1)),e[6]||(e[6]=t("h3",{id:"gitee",tabindex:"-1"},[t("a",{href:"https://gitee.com/",target:"_blank",rel:"noreferrer"},"Gitee"),l(),t("a",{class:"header-anchor",href:"#gitee","aria-label":'Permalink to "[Gitee](https://gitee.com/)"'},"​")],-1)),e[7]||(e[7]=t("hr",null,null,-1)),e[8]||(e[8]=t("p",null,"Gitee的服务器位置位于上海，速度上无疑是五个中算很快的。 在Gitee部署后，使用的是Gitee的二级域名 xxx.gitee.io 。 我刚开始入门的时候就是使用的Gitee,但是由于仓库最大容量只有500M且单个文件最大50M。官方给出的表格：",-1)),e[9]||(e[9]=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"套餐"),t("th",{style:{"text-align":"center"}},"免费版"),t("th",{style:{"text-align":"center"}},"基础版"),t("th",{style:{"text-align":"center"}},"标准版"),t("th",{style:{"text-align":"center"}},"高级版"),t("th",{style:{"text-align":"center"}},"尊享版")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"单仓库"),t("td",{style:{"text-align":"center"}},"最大 500 MB"),t("td",{style:{"text-align":"center"}},"最大 1 GB"),t("td",{style:{"text-align":"center"}},"最大 1 GB"),t("td",{style:{"text-align":"center"}},"最大 2 GB"),t("td",{style:{"text-align":"center"}},"最大 3 GB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"单文件"),t("td",{style:{"text-align":"center"}},"最大 50 MB"),t("td",{style:{"text-align":"center"}},"最大 100 MB"),t("td",{style:{"text-align":"center"}},"最大 100 MB"),t("td",{style:{"text-align":"center"}},"最大 200 MB"),t("td",{style:{"text-align":"center"}},"最大 300 MB")])])],-1)),e[10]||(e[10]=t("p",null,[l("这么多的版本，导致我已经不想要去看他的价格了。 其实Gitee劝退我还有一个比较大的原因，那就是它免费版不支持自定义域名。而且需要开通Page pro才可以自定义域名,费用是一年99。 99一年对我的作用貌似就只有自定义域名,具体可以查看官方文档："),t("a",{href:"https://gitee.com/help/articles/4228",target:"_blank",rel:"noreferrer"},"点击跳转"),l("。 但是现在就算你想要开通，那你也开不了~~ 因为Gitee已经关闭了个人用户的购买入口。")],-1)),e[11]||(e[11]=t("p",null,"由于我十分想购买个域名，所以我果断放弃Gitee。",-1)),e[12]||(e[12]=t("p",null,[l("现在Gitee作为备用站之一，虽说是备用站,但估计是我所有链接中最快的一个。 Gitee示例："),t("a",{href:"https://masle.gitee.io/",target:"_blank",rel:"noreferrer"},"masle.gitee.io")],-1)),e[13]||(e[13]=t("h3",{id:"github",tabindex:"-1"},[t("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer"},"Github"),l(),t("a",{class:"header-anchor",href:"#github","aria-label":'Permalink to "[Github](https://github.com/)"'},"​")],-1)),e[14]||(e[14]=t("hr",null,null,-1)),e[15]||(e[15]=t("p",null,[l("其实我并没有在尝试过使用Github来部署，因为我对于Github在国内的访问速度深感堪忧。 不过Github的仓库大小相比Gitee好了很多。 Github单个文件大小不能超过100M。 仓库大小在官方文档是这样解释的：“建议仓库保持较小，理想情况下小于 1 GB，强烈建议小于 5 GB。 较小的仓库克隆速度更快，使用和维护更容易。” "),t("s",null,"据说在超过5G后，你会收到Github的提醒邮件。")],-1)),e[16]||(e[16]=t("p",null,"我更多的时候再把Github作为一个托管我的博客文件的仓库，这也源于许多静态网站部署平台都支持直接使用Github直接进行部署。",-1)),e[17]||(e[17]=t("h3",{id:"cloudflare",tabindex:"-1"},[t("a",{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noreferrer"},"Cloudflare"),l(),t("a",{class:"header-anchor",href:"#cloudflare","aria-label":'Permalink to "[Cloudflare](https://dash.cloudflare.com/)"'},"​")],-1)),e[18]||(e[18]=t("hr",null,null,-1)),e[19]||(e[19]=t("p",null,"Cloudflare便是我放弃Gitee后的第一个选择。 Cloudflare支持直接使用Github的仓库进行部署，而且支持自动部署。",-1)),e[20]||(e[20]=t("blockquote",null,[t("p",null,[l("自动部署：当检测到你所绑定的仓库内容更新时，自动进行重新部署。"),t("s",null,"不用像Gitee一样还要去它的网站重新部署😓")])],-1)),e[21]||(e[21]=t("p",null,"域名方面，Cloudflare支持自定义域名，而且域名还不用备案。 Cloudflare有自己的DNS和CDN。不过他的CDN在国内被称为减速CDN。 至于为什么叫减速CDN，那我就只能说“字面意思。”",-1)),e[22]||(e[22]=t("blockquote",null,[t("p",null,[l("2021/10/13 "),t("br"),l("我放弃你了")])],-1)),e[23]||(e[23]=t("p",null,[l("Cloudflare我大概也用了两个月左右，但是它的访问速度实在堪忧。 有个很奇怪的现象，就是我连接我家路由器的时候，访问部署在Cloudflare上的站点的时候，经常会加载超时。 但是我和"),t("a",{href:"https://jonnys.top/",target:"_blank",rel:"noreferrer"},"Jonny"),l("说完后，他说他用着挺流畅啊。于是我关闭wifi用数据访问的时候，发现确实快了不少。 不过我感觉这个情况应该还有其他人会遇到，所以我放弃Cloudflare了。")],-1)),e[24]||(e[24]=t("p",null,[l("但是我还是将其作为一个备用站，毕竟我只要更新github仓库它就自动部署好了，我也不用去管他。 Cloudflare示例："),t("a",{href:"https://masle.pages.dev/",target:"_blank",rel:"noreferrer"},"masle.pages.dev")],-1)),e[25]||(e[25]=t("h3",{id:"coding",tabindex:"-1"},[t("a",{href:"https://coding.net/",target:"_blank",rel:"noreferrer"},"Coding"),l(),t("a",{class:"header-anchor",href:"#coding","aria-label":'Permalink to "[Coding](https://coding.net/)"'},"​")],-1)),e[26]||(e[26]=t("hr",null,null,-1)),e[27]||(e[27]=t("p",null,[l("Coding我也是最近才了解到。Coding支持自定义域名，不过没有备案的域名节点只能选择香港。 Coding与腾讯云结合，如何你在Coding部署，那Coding会强制你使用腾讯云的DNS和COS。 不过从这开始就违背了我们一开始所说免费搭建的原则,但是我还是想吐槽一下。 具体计费标准可以查看官方文档："),t("a",{href:"https://help.coding.net/docs/pages/price.html",target:"_blank",rel:"noreferrer"},"点击跳转"),l("。")],-1)),e[28]||(e[28]=t("blockquote",null,[t("p",null,"我变了")],-1)),e[29]||(e[29]=t("p",null,[l("看完之后，我感觉收费其实也不算贵，而且前六个月还有送免费体验的代金卷。那就试试吧，毕竟为了速度能值得了。 我将一切设置好了之后，发给"),t("a",{href:"https://jonnys.top/",target:"_blank",rel:"noreferrer"},"Jonny"),l("问他有没有感觉我的网站快了一些。他说并没有多大的区别。 于是我查了一下Coding的CDN转入到哪里，结果一看，这个CDN居然转入到国外去了。 还不如我直接使用Coding直接生成在香港节点的那个链接。")],-1)),e[30]||(e[30]=t("div",{class:"danger"},[t("blockquote",null,[t("p",null,"使用香港节点，然后使用境外cdn加速有时候国内会访问不了。需要挂上梯子才能访问")])],-1)),e[31]||(e[31]=t("p",null,"但是由于部署赠送的SSL证书是绑定在CDN的域名上，所以用香港节点直接解析这个方法行不通。 更何况使用CDN的目的就是为了让访问更快，这样一来反而还不如使用Vercel。",-1)),e[32]||(e[32]=t("p",null,"这种情况那我肯定放弃使用Coding，也许等我备案完域名我还会回来，但是现在绝对不是时候。",-1)),e[33]||(e[33]=t("h3",{id:"vercel",tabindex:"-1"},[t("a",{href:"https://vercel.com/",target:"_blank",rel:"noreferrer"},"Vercel"),l(),t("a",{class:"header-anchor",href:"#vercel","aria-label":'Permalink to "[Vercel](https://vercel.com/)"'},"​")],-1)),e[34]||(e[34]=t("hr",null,null,-1)),e[35]||(e[35]=t("p",null,"Vercel是我现在正在用的部署平台，也是我觉得目前最适合我的。我的评论区也是部署在Vercel。 Vercel和Cloudflare同样支持直接使用github进行部署。 也支持自动部署，而且每次部署完成后都会邮件提醒你。而且还支持自定义域名",-1)),e[36]||(e[36]=t("p",null,[l("速度也相较Cloudflare快了许多，具体可以看图。 "),t("img",{src:"https://testingcf.jsdelivr.net/gh/masle1/p@main/img/html-website-deployment-platform/001.jpg",alt:"网站测速比较"})],-1)),e[37]||(e[37]=t("blockquote",null,[t("p",null,"至少一年内，我不会再更换部署平台了")],-1)),e[38]||(e[38]=t("h2",{id:"对比",tabindex:"-1"},[l("对比 "),t("a",{class:"header-anchor",href:"#对比","aria-label":'Permalink to "对比"'},"​")],-1)),e[39]||(e[39]=t("blockquote",null,[t("p",null,[l("测试网站是"),t("a",{href:"http://tool.chinaz.com/speedcom",target:"_blank",rel:"noreferrer"},"站长工具"),l("，数据可能会由于节点或者时间段不同而波动，测试数据仅供参考。")])],-1)),e[40]||(e[40]=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"部署平台"),t("th",{style:{"text-align":"center"}},"最快响应/s"),t("th",{style:{"text-align":"center"}},"最慢响应/s"),t("th",{style:{"text-align":"center"}},"平均响应/s")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"Gitee"),t("td",{style:{"text-align":"center"}},"0.17"),t("td",{style:{"text-align":"center"}},"1.74"),t("td",{style:{"text-align":"center"}},"0.33")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Github"),t("td",{style:{"text-align":"center"}},"0.32"),t("td",{style:{"text-align":"center"}},"15.6"),t("td",{style:{"text-align":"center"}},"3.11")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Cloudflare"),t("td",{style:{"text-align":"center"}},"0.68"),t("td",{style:{"text-align":"center"}},"9.87"),t("td",{style:{"text-align":"center"}},"1.62")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Coding"),t("td",{style:{"text-align":"center"}},"0.36"),t("td",{style:{"text-align":"center"}},"6.93"),t("td",{style:{"text-align":"center"}},"0.97")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Vercel"),t("td",{style:{"text-align":"center"}},"0.09"),t("td",{style:{"text-align":"center"}},"9.45"),t("td",{style:{"text-align":"center"}},"0.72")])])],-1)),e[41]||(e[41]=t("p",null,"这个Coding的数据是在香港节点使用境外cdn的情况下，如何是使用的境内cdn。 那速度应该会是这所有里面最快的。",-1)),e[42]||(e[42]=t("hr",null,null,-1)),e[43]||(e[43]=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"部署平台"),t("th",{style:{"text-align":"center"}},"国内访问速度"),t("th",{style:{"text-align":"center"}},"原始域名模板"),t("th",{style:{"text-align":"center"}},"是否支持自定义域名"),t("th",{style:{"text-align":"center"}},"是否需要实名认证")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"Gitee"),t("td",{style:{"text-align":"center"}},"快"),t("td",{style:{"text-align":"center"}},"xxx.gitee.io"),t("td",{style:{"text-align":"center"}},"个人用户不支持"),t("td",{style:{"text-align":"center"}},"需要而且要求成年")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Github"),t("td",{style:{"text-align":"center"}},"慢"),t("td",{style:{"text-align":"center"}},"xxx.github.io"),t("td",{style:{"text-align":"center"}},"支持"),t("td",{style:{"text-align":"center"}},"不需要")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Cloudflare"),t("td",{style:{"text-align":"center"}},"较慢"),t("td",{style:{"text-align":"center"}},"xxx.pages.dev"),t("td",{style:{"text-align":"center"}},"支持"),t("td",{style:{"text-align":"center"}},"不需要")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Coding"),t("td",{style:{"text-align":"center"}},"中等（境外cdn）"),t("td",{style:{"text-align":"center"}},"长到无法描述"),t("td",{style:{"text-align":"center"}},"支持"),t("td",{style:{"text-align":"center"}},"需要，无年龄要求")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Vercel"),t("td",{style:{"text-align":"center"}},"中等"),t("td",{style:{"text-align":"center"}},"xxx.vercel.app"),t("td",{style:{"text-align":"center"}},"支持"),t("td",{style:{"text-align":"center"}},"不需要")])])],-1)),e[44]||(e[44]=t("h2",{id:"总结",tabindex:"-1"},[l("总结 "),t("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1)),e[45]||(e[45]=t("p",null,"需要成年：",-1)),e[46]||(e[46]=t("ul",null,[t("li",null,"如果你没有自定义域名的要求，只是想建个属于自己的博客玩玩。那极力推荐Gitee。（免费）"),t("li",null,"如果你有自定义域名的要求或者你对仓库空间有要求，而且愿意出钱购买腾讯云的cos和cdn服务！那推荐使用Coding。（收费,选择境内节点的话域名需要备案,当然如果你选择使用Coding一定要使用境内节点，不然还不如用Vercel）")],-1)),e[47]||(e[47]=t("hr",null,null,-1)),e[48]||(e[48]=t("p",null,"不需要成年：",-1)),e[49]||(e[49]=t("ul",null,[t("li",null,"可以选择用Vercel来部署，github来当做仓库。支持自定义域名。（免费，域名不用备案）")],-1)),e[50]||(e[50]=t("hr",null,null,-1)),e[51]||(e[51]=t("p",null,[l("如果Vercel接下来的有让我难以接受的缺点，那我会再成年后换成Coding。 "),t("s",null,"如果不出大问题估计是不会换了"),t("s",null,"白嫖万岁")],-1)),e[52]||(e[52]=t("p",null,"end.",-1)),e[53]||(e[53]=t("h2",{id:"_2022-1-21",tabindex:"-1"},[l("2022/1/21 "),t("a",{class:"header-anchor",href:"#_2022-1-21","aria-label":'Permalink to "2022/1/21"'},"​")],-1)),e[54]||(e[54]=t("p",null,[l("经过一段时间的使用，Vercel还是很快的，而且稳定。可能是我还没遇到被墙的时候，然后反而是在境内的Gitee挂了好几次。具体大家可以进去我的监视器看看："),t("a",{href:"https://status.masle.top/",target:"_blank",rel:"noreferrer"},"https://status.masle.top/")],-1))]),"main-header":n(()=>[i(r.$slots,"main-header")]),"main-header-after":n(()=>[i(r.$slots,"main-header-after")]),"main-nav":n(()=>[i(r.$slots,"main-nav")]),"main-content-before":n(()=>[i(r.$slots,"main-content-before")]),"main-content":n(()=>[i(r.$slots,"main-content")]),"main-content-after":n(()=>[i(r.$slots,"main-content-after")]),"main-nav-before":n(()=>[i(r.$slots,"main-nav-before")]),"main-nav-after":n(()=>[i(r.$slots,"main-nav-after")]),comment:n(()=>[i(r.$slots,"comment")]),footer:n(()=>[i(r.$slots,"footer")]),aside:n(()=>[i(r.$slots,"aside")]),"aside-custom":n(()=>[i(r.$slots,"aside-custom")]),default:n(()=>[i(r.$slots,"default")]),_:3},8,["frontmatter"])}}};export{z as default,G as usePageData};