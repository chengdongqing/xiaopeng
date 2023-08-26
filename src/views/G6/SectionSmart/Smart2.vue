<script setup lang="ts">
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { XNGPSlides } from './resources.ts'
</script>

<template>
  <TitleBar title="XNGP全场景智能辅助驾驶" />
  <SlideSwiper :options="XNGPSlides" style="padding-top: 0" />
</template>