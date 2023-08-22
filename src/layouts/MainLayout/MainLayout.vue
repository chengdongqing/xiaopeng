<script setup>
import Footer from './Footer.vue'
import Header from './Header/Header.vue'
import ToolBar from './ToolBar.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <ToolBar />
</template>