<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, ref, shallowRef } from 'vue'

declare global {
  interface Window {
    AMap: any
  }
}

const containerRef = ref()
const map = shallowRef()

onMounted(() => {
  AMapLoader.load({
    key: '4ab053278e0ef0451e6dc044314d58ae',
    version: '1.4.15'
  }).then((AMap) => {
    map.value = new AMap.Map(containerRef.value, {
      mapStyle: 'light'
    })
  })
})

defineExpose({
  map
})
</script>

<template>
  <div ref="containerRef" id="map-container" />
</template>

<style scoped>
#map-container {
  width: 100%;
  height: 100%;
}
</style>