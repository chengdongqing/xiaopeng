<script setup lang="ts">
import options from './options.ts'
</script>

<template>
  <div class="container">
    <div class="row" v-for="item in options" :key="item.title">
      <video
        v-if="item.src.endsWith('.mp4')"
        :src="item.src"
        autoplay
        muted
        loop
      />
      <img v-else :src="item.src" alt="" />

      <div class="content-wrapper">
        <div class="title" v-html="item.title" />
        <div class="description" v-html="item.description" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 8rem 0;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  :is(video),
  :is(img) {
    width: 64rem;
    height: 48rem;
    object-fit: cover;
    border-radius: 0.4rem;
  }

  .content-wrapper {
    width: 60rem;
    margin-left: 8rem;

    .title {
      font-size: 3.2rem;
      letter-spacing: 0.4rem;
      margin-bottom: 3.2rem;
    }

    .description {
      color: #666;
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>