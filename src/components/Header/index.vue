<script setup lang='ts'>
  import { jumpLink } from '@/utils/getUrl'
  import { useRouter } from 'vitepress'
  const router = useRouter()
  defineOptions({
    name: 'Header'
  })
  const jumpHandle = (path: string) => {
    router.go(path)
  }
</script>


<template>
  <div class='header_wrap'>
    <div class='header_nav'>
      <div @click='jumpHandle("/notebook/")'>首页</div>
      <div @click='jumpHandle("/notebook/company/cs")'>城市大数据</div>
      <div @click='jumpHandle("/notebook/company/dcp")'>区域功能节点</div>
      <div @click='jumpHandle("/notebook/workHour")'>工作任务</div>
    </div>
    <div class='back_btn' @click='jumpLink("/")'>返回</div>
  </div>
</template>


<style lang='scss' scoped>
  .header_wrap{
    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    height: 60px;
    box-shadow: 0 0 10px rgba(252, 252, 252, 0.1);
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
      color: #fff;
      cursor: pointer;
    }
    .back_btn{
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
