<script setup lang="ts">
import NavigationIcon from '@/assets/navigation.svg'
import RouteIcon from '@/assets/route.svg'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="container">
    <TitleBar title="智能出行，更便捷" />

    <div class="main">
      <img
        alt=""
        src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p16.jpg"
        class="img"
      />
      <div class="content-wrapper">
        <div class="item">
          <img :src="NavigationIcon" alt="" class="icon" />
          <div class="name">车道级导航增强版</div>
        </div>
        <div class="item">
          <img :src="RouteIcon" alt="" class="icon" />
          <div class="name">智能充电路线规划</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 12rem;
}

.main {
  width: 132rem;
  height: 74.2rem;
  margin: auto;

  .img {
    width: 100%;
    height: 100%;
  }

  .content-wrapper {
    width: 47.5rem;
    position: absolute;
    bottom: 8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;

    .item {
      text-align: center;

      .icon {
        width: 5.6rem;
        height: 5.6rem;
      }

      .name {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 1.5;
        margin-top: 1.6rem;
      }
    }
  }
}
</style>