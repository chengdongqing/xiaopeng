<script setup lang="ts">
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="container">
    <TitleBar
      title="装下一家人的快乐"
      subtitle="2890mm长轴距，带上爱的一切满载出发"
      color="#fff"
    />
  </div>

  <ShrinkableBanner
    title="装下一家人的快乐"
    subtitle="2890mm长轴距，带上爱的一切满载出发"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p8-new.jpg"
    static
  />
</template>

<style scoped>
.container {
  height: 100vh;
  background: url('https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p8-new.jpg')
    center no-repeat;
  background-size: cover;
}
</style>