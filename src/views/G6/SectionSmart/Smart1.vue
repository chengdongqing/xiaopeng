<script setup lang="ts">
import NameDescriptionGroup from '@/components/NameDescriptionGroup/NameDescriptionGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="下一代智能电动汽车"
      subtitle="率先实现更高阶的全场景智驾，更先进、更可靠、更好用"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p9-1.jpg"
    />
    <NameDescriptionGroup
      :options="[
        {
          name: 'XNGP',
          description: '智能辅助驾驶系统'
        },
        {
          name: 'Xmart OS 4.0',
          description: '车载智能系统'
        }
      ]"
      class="content-wrapper"
    />
  </div>
</template>

<style scoped>
.content-wrapper {
  width: 50.4rem;
  position: absolute;
  left: 50%;
  bottom: 6.4rem;
  transform: translateX(-50%);
}
</style>