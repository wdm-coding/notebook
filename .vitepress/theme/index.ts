import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext, Theme } from 'vitepress'
import Layout from '@/components/Layout/index.vue'
import installRouter from '@/router'
import './custom.scss'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }: EnhanceAppContext) {
    installRouter(router)
  }
} satisfies Theme