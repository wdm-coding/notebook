<script setup lang='ts'>
  import DefaultTheme from 'vitepress/theme'
  const { Layout } = DefaultTheme
  defineOptions({
    name: 'NotebookLayout'
   })
</script>


<template>
  <Layout>
  </Layout>
</template>


<style module>
  .layout_wrap{
    padding: 20px;
  }
</style>
