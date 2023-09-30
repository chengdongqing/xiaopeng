<script setup lang="ts">
import XIcon from '@/components/Icons/X.vue'
</script>

<template>
  <div>
    <img
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p1.jpg"
      alt=""
      class="banner"
    />

    <div class="content-wrapper">
      <div>
        <XIcon class="x" />
        <div class="title">
          <span class="en">SEPA2.0</span>「扶摇」全域智能进化架构
        </div>
      </div>
      <div class="subtitle">
        重新定义高端智能电动汽车标准<br />
        为用户带来更安全、舒适、节能、极致的驾乘体验
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.content-wrapper {
  position: absolute;
  top: 16rem;
  left: 0;
  right: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .x {
    z-index: 1;
    width: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, -50%);
  }

  .title {
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    margin-bottom: 1.6rem;
  }

  .subtitle {
    font-size: 1.6rem;
    font-weight: 200;
    letter-spacing: 0.4rem;
    line-height: 1.75;
  }
}
</style>