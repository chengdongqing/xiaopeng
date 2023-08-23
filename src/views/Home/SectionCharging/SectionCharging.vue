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
      title="全场景充电服务"
      subtitle="遍布全国的补能网络，贴心的自营充电服务，让鹏友没有里程焦虑"
    />

    <Grid columns="3" item-width="41.8rem" gap="3.2rem">
      <div class="service-item" v-for="item in services" :key="item.name">
        <ScalableImage :src="item.pictureUrl" />
        <div class="content-wrapper">
          <div class="name">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </Grid>

    <div class="bottom">
      <Button arrow>了解充电服务</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-background);
  padding-top: 8rem;
  padding-bottom: 12rem;
}

.service-item {
  &:first-child {
    grid-row: span 2;
  }

  &:hover {
    .content-wrapper .description {
      display: unset;
    }
  }

  .content-wrapper {
    position: absolute;
    left: 0;
    bottom: 2.2rem;
    margin: 0 3.2rem;
    color: #fff;

    .name {
      margin-bottom: 1rem;
      letter-spacing: 0.2rem;
      font-weight: 400;
      font-size: 1.8rem;
    }

    .description {
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: none;
    }
  }
}

.bottom {
  margin-top: 6rem;
  text-align: center;
}
</style>