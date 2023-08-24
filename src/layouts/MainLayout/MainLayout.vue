<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './Footer.vue'
import Header from './Header/Header.vue'
import ToolBar from './ToolBar.vue'

// 切换页面后自动滚动到顶部
const route = useRoute()
watch(
  () => route.path,
  () => {
    window.scrollTo({
      top: 0
    })
  }
)
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <ToolBar />
</template>