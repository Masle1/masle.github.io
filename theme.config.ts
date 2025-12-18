import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  banner: {
    enable: true,
    title: ['Masle','的','小','客','栈'],
    cloud: {
      enable: true,
    },
  },

  // notice: {
  //   enable: true,
  //   content: '开启新征程',
  // },

  menu: {
    custom: {
      title: '',
      url: '/sub/',
      icon: 'i-ri-notification-3-line'
    }
  },
  nav: [
    { text: 'menu.posts', link: '/posts/', icon: 'i-ri-article-line' },
    { text: '我的小伙伴们', link: '/links/', icon: 'i-ri-open-arm-line' },
    { text: '博客订阅及留言板', link: '/sub/', icon: 'i-ri-notification-2-line' },
  ],
  pages: [
    {
      name: '我的小伙伴们',
      url: '/links/',
      icon: 'i-ri-open-arm-line',
      color: 'dodgerblue',
    },
    {
      name: '博客订阅及留言板',
      url: '/sub/',
      icon: 'i-ri-notification-2-line',
      color: 'dodgerblue',
    },
  ],
  bg_image: {
    enable: true,
    url: "https://testingcf.jsdelivr.net/gh/masle1/masle.github.io@main/pages/background.jpg",	// 白日模式背景
    dark: "",	// 夜间模式背景
  },
  footer: {
    since: 2021,
    beian: {
      enable: false,
      icp: '苏ICP备17038157号',
    },
  },
})
