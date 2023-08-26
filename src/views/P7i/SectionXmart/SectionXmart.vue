<script setup lang="ts">
import ChipIcon from '@/assets/chip.svg'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="<span class='en'>Xmart OS 4.0</span>车载智能系统"
      subtitle="座舱体验更迅捷、更自由"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p13.jpg"
    />
    <div class="bottom">
      <img :src="ChipIcon" alt="" class="icon" />
      <div class="name">高通骁龙8155P车规级芯片</div>
    </div>
  </div>
</template>

<style scoped>
.bottom {
  position: absolute;
  bottom: 6.4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  .icon {
    width: 5.6rem;
    height: 5.6rem;
  }

  .name {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 200;
    margin-top: 1.6rem;
  }
}
</style>