<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'

defineProps<{
  options: {
    title: string
    subtitle: string
    iconUrl: string
  }[]
}>()
</script>

<template>
  <div class="voice-v2">
    <div class="voice-title">全场景语音2.0</div>
    <Grid columns="4" item-width="29.4rem" gap="3.6rem">
      <div class="feature-item" v-for="item in options" :key="item.title">
        <img :src="item.iconUrl" alt="" class="icon" />
        <div>
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.voice-v2 {
  position: absolute;
  bottom: 20rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;

  .voice-title {
    font-size: 3.2rem;
    font-weight: 300;
    margin-bottom: 2.2rem;
    letter-spacing: 0.2rem;
  }

  .feature-item {
    height: 16rem;
    padding: 3.6rem 2.4rem 0;
    border: 0.1rem solid hsla(0, 0%, 100%, 0.15);
    border-radius: 0.4rem;
    display: flex;

    &:hover {
      background-color: hsla(0, 0%, 85%, 0.1);
    }

    .icon {
      width: 5.6rem;
      height: 5.6rem;
      margin-right: 2rem;
    }

    .title {
      font-size: 1.6rem;
      line-height: 1.1;
    }

    .subtitle {
      opacity: 0.8;
      font-size: 1.4rem;
      font-weight: 200;
      margin-top: 0.8rem;
      line-height: 2.6rem;
      white-space: pre-wrap;
    }
  }
}
</style>