<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'

withDefaults(
  defineProps<{
    options: {
      title: string
      subtitle: string
      src: string
    }[]
    itemWidth?: string
  }>(),
  {
    itemWidth: '48rem'
  }
)
</script>

<template>
  <Grid
    :columns="options.length"
    gap="3.2rem"
    :item-width="itemWidth"
    class="image-cards-row"
  >
    <div v-for="item in options" :key="item.title">
      <ScalableImage :src="item.src" />
      <div class="title" v-html="item.title" />
      <div class="subtitle" v-html="item.subtitle" />
    </div>
  </Grid>
</template>

<style scoped>
.image-cards-row {
  padding-top: 14.4rem;
  padding-bottom: 12rem;

  .title {
    font-size: 1.8rem;
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    letter-spacing: 0.2rem;
    line-height: 2rem;
  }

  .subtitle {
    font-size: 1.4rem;
    color: #666;
    letter-spacing: 0.2rem;
  }
}
</style>