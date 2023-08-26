<script setup lang="ts">
import * as Swiper from '@/components/Swiper'
import TabsBar from '@/components/TabsBar/TabsBar.vue'
import { ref } from 'vue'

defineProps<{
  options: {
    title: string
    description: string
    src: string
  }[]
}>()

const current = ref(0)
const swiperRef = ref()

function handleChange(index: number) {
  current.value = index
  swiperRef.value.goTo(index)
}
</script>

<template>
  <div class="tabs-swiper">
    <Swiper.Container ref="swiperRef" :autoplay="false" @change="handleChange">
      <Swiper.Item v-for="item in options" :key="item.title">
        <video
          v-if="item.src.endsWith('.mp4')"
          :src="item.src"
          autoplay
          muted
          loop
        />
        <img v-else :src="item.src" alt="" />
      </Swiper.Item>
    </Swiper.Container>

    <TabsBar
      class="tabs-bar"
      dark-theme
      :current="current"
      :options="options"
      @change="handleChange"
    />
  </div>
</template>

<style scoped>
.tabs-swiper {
  :is(video),
  :is(img) {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .tabs-bar {
    width: 96rem;
    position: absolute;
    left: 50%;
    bottom: 4rem;
    transform: translateX(-50%);
  }
}
</style>