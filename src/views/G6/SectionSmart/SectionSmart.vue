<script setup lang="ts">
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import Slider from '@/components/Slider/Slider.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { XNGPSlides } from './resources.ts'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="下一代智能电动汽车"
      subtitle="率先实现更高阶的全场景智驾，更先进、更可靠、更好用"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p9-1.jpg"
    />
    <div class="content-wrapper">
      <div>
        <div class="title">XNGP</div>
        <div class="subtitle">智能辅助驾驶系统</div>
      </div>
      <div>
        <div class="title">Xmart OS 4.0</div>
        <div class="subtitle">车载智能系统</div>
      </div>
    </div>
  </div>

  <div>
    <TitleBar title="XNGP全场景智能辅助驾驶" />
    <Slider :options="XNGPSlides" />
  </div>
</template>

<style scoped>
.content-wrapper {
  width: 50.4rem;
  position: absolute;
  left: 50%;
  bottom: 6.4rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #fff;

  .title {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  .subtitle {
    margin-top: 1.6rem;
    opacity: 0.8;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.4rem;
  }
}
</style>