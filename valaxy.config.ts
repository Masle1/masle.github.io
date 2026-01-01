import { defineValaxyConfig } from 'valaxy';
import type { UserThemeConfig } from 'valaxy-theme-yun';
import { addonWaline } from "valaxy-addon-waline";
import { addonAlgolia } from 'valaxy-addon-algolia'
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
  

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
    addons: [
     addonWaline({
       // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
       serverURL: 'https://waline.masle.top/',
     }),
  ],


  unocss: {
    shortcuts: [
      {
        'bg-base': 'bg-white dark:bg-black',
        'color-base': 'text-black dark:text-white',
        'border-base': 'border-[#8884]',
      },
    ],
    rules: [
      ['theme-text', { color: '#4b4b4b' }],
    ],
  },
})


