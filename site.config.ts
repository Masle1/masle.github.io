import { defineSiteConfig } from 'valaxy'


export default defineSiteConfig({
  url: 'https://masle.top',
  favicon: "https://cdn.jsdelivr.net/gh/masle1/masle.github.io@main/pages/img/favicon.png",
  lang: 'zh-CN',
  title: 'Masle的小客栈',
  subtitle: 'Every cloud has a silver lining.',
  description: '一起向着未来奔跑和冒险吧',
  author: {
    name: 'Masle',
    avatar:'https://cdn.jsdelivr.net/gh/masle1/masle.github.io@main/pages/Masle.jpg',
    status: {
      emoji: '😣',
    },
  },
  mediumZoom: { enable: true },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 1848177368',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Za9jFukCPbkaeCcPEm-v282XOq5PD4fs&noverify=0',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/YunYouJun',
    //   icon: 'i-ri-github-line',
    //   color: '#6e5494',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: '网易云音乐',
      link: 'http://music.163.com/m/user/home?id=550725539',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/389049232',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:Masle04@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],
  // mediumZoom: {
  //   enable: true,
  // },
  search: {
    enable: true,
    type: 'fuse',
  },
  // 启用评论
  comment: {
    enable: true
  },
  // 设置 valaxy-addon-waline 配置项
  // addons: [
  //   addonWaline({
  //     serverURL: 'https://walineaa.vercel.app/',
  //   }),
  // ],  
  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://masle.gitee.io/maslebloglib/picture/%E8%B5%9E%E8%B5%8F/%E6%94%AF%E4%BB%98%E5%AE%9D.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://masle.gitee.io/maslebloglib/picture/%E8%B5%9E%E8%B5%8F/QQ.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://masle.gitee.io/maslebloglib/picture/%E8%B5%9E%E8%B5%8F/%E5%BE%AE%E4%BF%A1.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})


