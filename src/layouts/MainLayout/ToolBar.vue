<script setup lang="ts">
import useThrottle from '@/hooks/useThrottle.ts'
import { onMounted, onUnmounted, ref } from 'vue'

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const visible = ref(false)
const onPageScroll = useThrottle(() => {
  visible.value = window.scrollY > document.documentElement.scrollHeight * 0.1
})
onMounted(() => {
  window.addEventListener('scroll', onPageScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onPageScroll)
})
</script>

<template>
  <div class="tool-bar" v-show="visible">
    <div class="btn-goTop" @click="goTop" />
  </div>
</template>

<style scoped>
.tool-bar {
  position: fixed;
  right: 4.8rem;
  bottom: 9.6rem;
  z-index: 99;

  .btn-goTop {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIuNSIgeT0iLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcgMjhsNy02LjIzTDMxIDI4di0yLjMzNmwtNy02LjIzLTcgNi4yM1YyOHoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=);
    background-size: cover;
    cursor: pointer;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    opacity: 0.6;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }
}
</style>