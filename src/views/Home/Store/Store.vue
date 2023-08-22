<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="container">
    <img
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/service-center.jpg"
      class="background"
      alt=""
    />

    <div class="content">
      <TitleBar
        title="小鹏门店"
        subtitle="小鹏门店为您提供便捷、舒适的购车及售后体验"
        color="#fff"
      >
        <a
          class="btn-wrapper"
          href="https://www.xiaopeng.com/pengmetta.html"
          target="_blank"
        >
          <Button color="#fff" arrow arrow-color="#fff"> 查看全国门店</Button>
        </a>
      </TitleBar>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}

.background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .btn-wrapper {
    display: inline-block;
    margin-top: 3.2rem;
  }
}
</style>