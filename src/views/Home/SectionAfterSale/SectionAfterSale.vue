<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import services from './services.ts'
</script>

<template>
  <div class="container">
    <TitleBar
      title="售后服务"
      subtitle="用真诚、专业为鹏友提供便捷、愉悦的服务"
    />

    <Grid columns="3" item-width="41.8rem" gap="3.2rem">
      <div v-for="item in services" :key="item.name">
        <ScalableImage :src="item.pictureUrl" class="img" />
        <div class="name">{{ item.name }}</div>
        <div class="description">{{ item.description }}</div>
        <div class="remark" v-if="item.remark">*{{ item.remark }}</div>
      </div>
    </Grid>

    <div class="bottom">
      <Button arrow>了解售后服务</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 8rem;
  padding-bottom: 12rem;
}

.img {
  height: 31.4rem;
  margin-bottom: 2.4rem;
}

.name {
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  letter-spacing: 0.2rem;
}

.description {
  color: #666;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
}

.remark {
  color: rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  margin-top: 0.8rem;
}

.bottom {
  margin-top: 6rem;
  text-align: center;
}
</style>