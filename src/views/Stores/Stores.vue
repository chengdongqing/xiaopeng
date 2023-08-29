<script setup lang="ts">
import AMap from '@/components/AMap/AMap.vue'
import { createApp, ref, watch } from 'vue'
import StorePopover from './StorePopover.vue'
import stores from './stores.ts'

const mapRef = ref<{ map: any }>()

watch(
  () => mapRef.value?.map,
  (map) => {
    const infoWindow = new window.AMap.InfoWindow({
      isCustom: true,
      closeWhenClickMap: true
    })

    const markers = stores.map((item) => {
      const marker: any = new window.AMap.Marker({
        position: new window.AMap.LngLat(item.lng, item.lat),
        content: '<div class="map-marker"/>'
      })

      let lastMarker: any
      marker.on('click', async () => {
        if (lastMarker) {
          marker.setContent('<div class="map-marker"/>')
        }
        lastMarker = marker
        map.panTo(marker.getPosition())
        marker.setContent('<div class="map-marker active"/>')
        const content = document.createElement('div')
        const app = createApp(StorePopover, {
          ...item,
          infoWindow
        })
        app.mount(content)
        setTimeout(() => {
          infoWindow.setContent(content)
          infoWindow.open(map, marker.getPosition())
          infoWindow.on('close', () => {
            marker.setContent('<div class="map-marker"/>')
            app.unmount()
          })
        })
      })
      return marker
    })

    // 加载点聚合插件
    map.plugin(['AMap.MarkerClusterer'], () => {
      new window.AMap.MarkerClusterer(map, markers, {
        zoomOnClick: true,
        renderClusterMarker({ marker, count }: { marker: any; count: number }) {
          marker.setContent(`<div class="map-marker-cluster">${count}</div>`)
        }
      })
      map.setFitView(markers)
    })
  }
)
</script>

<template>
  <div class="container">
    <AMap ref="mapRef" />
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: calc(100vh - 5.6rem);
  margin-top: 5.6rem;

  :deep(.map-marker-cluster) {
    height: 5.2rem;
    width: 4.4rem;
    line-height: 4.4rem;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    background: url(https://xps01.xiaopeng.com/www/public/img/map-icon.85f503ad.png)
      no-repeat 50%;
    background-size: cover;
  }

  :deep(.map-marker) {
    height: 4.2rem;
    width: 4.2rem;
    background: url(https://xps01.xiaopeng.com/www/public/img/store-icon.3b0ff808.png)
      no-repeat 50%;
    background-size: cover;
    transition: 0.1s;
  }

  :deep(.map-marker).active,
  :deep(.map-marker):hover {
    width: 6.2rem;
    height: 7.2rem;
    transform: translateX(-0.9rem) translateY(-2.5rem);
    background-image: url(https://xps01.xiaopeng.com/www/public/img/store-active-icon.f19a706f.png);
  }

  :deep(.amap-info) {
    transform: translate(1.4rem, -6.8rem);
  }

  :deep(.amap-info-contentContainer).bottom-center {
    padding-bottom: 0;
  }
}
</style>