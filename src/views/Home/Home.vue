<script setup lang="ts">
import ReserveForm from '@/components/ReserveForm/ReserveForm.vue'
import Section3dCars from './Section3dCars/Section3dCars.vue'
import SectionAboutUs from './SectionAboutUs/SectionAboutUs.vue'
import SectionAfterSale from './SectionAfterSale/SectionAfterSale.vue'
import SectionAppDownload from './SectionAppDownload/SectionAppDownload.vue'
import SectionBanner from './SectionBanner/SectionBanner.vue'
import SectionCharging from './SectionCharging/SectionCharging.vue'
import SectionNews from './SectionNews/SectionNews.vue'
import SectionStore from './SectionStore/SectionStore.vue'
</script>

<template>
  <SectionBanner />
  <Section3dCars />
  <SectionCharging />
  <SectionAfterSale />
  <SectionAboutUs />
  <SectionNews />
  <SectionStore />
  <ReserveForm />
  <SectionAppDownload />
</template>