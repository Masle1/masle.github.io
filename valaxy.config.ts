import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";

// import { addonLightGallery } from 'valaxy-addon-lightgallery';

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]


/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  
<<<<<<< HEAD
  // addons: [
  //   addonComponents(),
  //   addonWaline({
  //     serverURL: "https://walineaa.vercel.app/",		// Waline服务链接
  //     locale: {
  //       placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
  //     },
  //     comment: true,
  //     pageview: true
  //   }),
  // ],
=======
  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://walineaa.vercel.app/",		// Waline服务链接
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
      },
      comment: true,
      pageview: true
    }),
  ],
>>>>>>> parent of 4f3c257 (update valaxy)

  themeConfig: {
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
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'dodgerblue',
      },
      {
        name: '网站监视器',
        url: 'https://status.masle.top/',
        icon: 'i-ri-computer-line',
        color: '&#xEBCA;',
      },
    ],
    bg_image: {
      enable: true,
      url: "https://cdn.jsdelivr.net/gh/masle1/masle.github.io@main/pages/background.jpg",	// 白日模式背景
      dark: "https://masle.gitee.io/maslebloglib/picture/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2/dark%20.jpg",	// 夜间模式背景
    },
    footer: {
      since: 2021,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})



