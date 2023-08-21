<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import news from './news.ts'
</script>

<template>
  <div class="container">
    <TitleBar title="咨讯中心" subtitle="官方资讯，了解小鹏汽车最新动态" />

    <Grid columns="3" item-width="41.8rem" gap="3.2rem">
      <a
        class="news-item"
        v-for="item in news"
        :key="item.title"
        :href="item.href"
        target="_blank"
      >
        <ScalableImage :src="item.pictureUrl" class="img" />
        <div class="title">{{ item.title }}</div>
      </a>
    </Grid>

    <div class="bottom">
      <a href="https://www.xiaopeng.com/news/choiceness" target="_blank">
        <Button arrow>了解更多</Button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 8rem;
  padding-bottom: 12rem;
}

.news-item {
  &:hover .title {
    opacity: 0.6;
  }

  .img {
    height: 31.4rem;
    margin-bottom: 2.4rem;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    letter-spacing: 0.2rem;
    transition: 0.3s;
  }
}

.bottom {
  margin-top: 6rem;
  text-align: center;
}
</style>