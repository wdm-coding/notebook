<script setup lang='ts'>
  import { jumpLink } from '@/utils/getUrl'
  import { useRouter, useData } from 'vitepress'
  const { isDark } = useData()
  const router = useRouter()
  defineOptions({
    name: 'Header'
  })
  const jumpHandle = (path: string) => {
    router.go(path)
  }
</script>


<template>
  <div class='header_wrap' :class="{'header_wrap_dark': isDark}">
    <div class='header_nav'>
      <div @click='jumpHandle("/notebook/")'>首页</div>
      <div @click='jumpHandle("/notebook/company/cs")'>城市大数据</div>
      <div @click='jumpHandle("/notebook/company/dcp")'>区域功能节点</div>
      <div @click='jumpHandle("/notebook/workHour")'>工作任务</div>
    </div>
    <div class='right_action'>
      <div class='theme_switch' @click='isDark = !isDark'>
        切换
      </div>
      <div class='back_btn' @click='jumpLink("/")'>返回</div>
      </div>
  </div>
</template>


<style lang='scss' scoped>
  .header_wrap{
    background-color: var(--vp-local-search-bg);
    width: 100%;
    height: 60px;
    box-shadow: 0 0 10px var(--vp-local-search-result-border);
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 999 !important;
    .header_nav{
      display: flex;
      align-items: center;
    }
    .header_nav div{
      margin-right: 20px;
      color: var(--vp-carbon-ads-text-color);
      cursor: pointer;
    }
    .right_action{
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 20px;
      .back_btn, .theme_switch{
        cursor: pointer;
      }
    }
  }
</style>
