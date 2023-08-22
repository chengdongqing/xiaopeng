<script setup>
import ReserveForm from '@/components/ReserveForm/ReserveForm.vue'
import AboutUs from './AboutUs/AboutUs.vue'
import AfterSale from './AfterSale/AfterSale.vue'
import AppDownload from './AppDownload/AppDownload.vue'
import CarBanners from './CarBanners/CarBanners.vue'
import ChargingService from './ChargingService/ChargingService.vue'
import NewsCenter from './NewsCenter/NewsCenter.vue'
import RotatingCars from './RotatingCars/RotatingCars.vue'
import Store from './Store/Store.vue'
</script>

<template>
  <CarBanners />
  <RotatingCars />
  <ChargingService />
  <AfterSale />
  <AboutUs />
  <NewsCenter />
  <Store />
  <ReserveForm />
  <AppDownload />
</template>