import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
// import { addonWaline } from 'valaxy-addon-waline'

// import { addonComponents } from "valaxy-addon-components";
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
    // bg_image: {
    //   enable: true,
    //   url: "https://xxx.xxxx",	// 白日模式背景
    //   dark: "https://xxx.xxxx",	// 夜间模式背景
    // },
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



