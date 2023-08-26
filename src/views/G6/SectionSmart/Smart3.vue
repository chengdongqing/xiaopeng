<script setup lang="ts">
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import { perceptionVideos } from './resources.ts'
</script>

<template>
  <TabsSwiper :options="perceptionVideos" />
</template>