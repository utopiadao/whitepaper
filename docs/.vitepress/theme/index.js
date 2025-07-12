import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 乌托邦视觉主题
import './utopia-theme.css'
// Element Plus 乌托邦主题
import './element-utopia.css'
// 水印样式
import './watermark.css'

// 导入组件
import Layout from './Layout.vue'
import ParticlesBackground from '../components/ParticlesBackground.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {
    // 使用 Element Plus
    app.use(ElementPlus)
    
    // 注册所有 Element Plus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    
    
    // 注册全局组件
    app.component('ParticlesBackground', ParticlesBackground)
    
    // 路由守卫
    router.onBeforeRouteChange = (to) => {
      // 可以在这里添加页面切换动画或分析
    }
  }
}