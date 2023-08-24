<script setup lang="ts">
import { provide, ref } from 'vue'
import Footer from './Footer.vue'
import Header from './Header/Header.vue'
import { MainLayoutInjectionKey } from './index.ts'
import ToolBar from './ToolBar.vue'

const isChangeThemeOnScroll = ref(true)
provide(MainLayoutInjectionKey, {
  isChangeThemeOnScroll,
  setChangeThemeOnScroll(change: boolean) {
    isChangeThemeOnScroll.value = change
  }
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <ToolBar />
</template>