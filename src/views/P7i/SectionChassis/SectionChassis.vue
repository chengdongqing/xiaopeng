<script setup lang="ts">
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="功能美学，忠于纯粹"
      subtitle="超跑级的前后轴荷比"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p5.jpg"
      static
    />
    <div class="bottom">
      <NameValueGroup
        :options="[
          { name: '超薄电池', value: 110, unit: 'mm' },
          { name: '超低重心', value: 460, unit: 'mm' }
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
.bottom {
  width: 42.9rem;
  position: absolute;
  bottom: 6.4rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>