import { reactive } from 'vue'

const STORAGE_KEY = 'wdm_notebook_global'

// 全局共享数据：响应式单例，站内任意页面/组件 import 后读写
export const globalData = reactive<Record<string, string>>({})

// 由主题 enhanceApp 调用一次：优先用 URL 查询参数初始化（vue-web 传入），
// 并镜像到 sessionStorage；无参数时（如刷新后）从 sessionStorage 恢复
export function initGlobalDataFromQuery() {
  const fromQuery = Object.fromEntries(new URLSearchParams(window.location.search))
  if (Object.keys(fromQuery).length > 0) {
    Object.assign(globalData, fromQuery)
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(globalData))
    } catch {
      // sessionStorage 不可用时忽略
    }
    return
  }
  try {
    const cached = window.sessionStorage.getItem(STORAGE_KEY)
    if (cached) Object.assign(globalData, JSON.parse(cached))
  } catch {
    // sessionStorage 不可用时忽略
  }
}
