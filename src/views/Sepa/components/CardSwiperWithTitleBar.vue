<script setup lang="ts">
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { ref } from 'vue'

defineProps<{
  titles: {
    title: string
    subtitle: string
  }[]
  options: {
    title?: string
    description?: string
    pictureUrl: string
    videoUrl?: string
    dataItems?: {
      name: string
      value: number
      unit?: string
    }[]
    descriptions?: string[]
  }[]
}>()

const current = ref(0)
const last = ref(0)

function handleSwiperChange(index: number) {
  current.value = index
  setTimeout(() => {
    last.value = index
  }, 500)
}
</script>

<template>
  <div style="padding-bottom: 12rem">
    <div class="titles-container">
      <TitleBar
        v-for="(item, index) in titles"
        :key="item.title"
        :title="item.title"
        :subtitle="item.subtitle"
        class="title-item"
        :class="{
          visible: index === current,
          last: index === last
        }"
      />
    </div>

    <CardSwiper
      :options="options"
      @change="handleSwiperChange"
      style="padding: 0"
    />
  </div>
</template>

<style scoped>
.titles-container {
  height: 27.6rem;

  .title-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transform: translateY(10rem);
    transition: 0.4s linear;

    &.last {
      transform: translateY(0);
    }

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>