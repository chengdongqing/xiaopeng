<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'

defineProps<{
  id: string
  name: string
  options?: {
    name: string
    value: number
    unit: string
  }[]
}>()
</script>

<template>
  <div class="endurance-bottom-bar">
    <NameValueGroup v-if="options" :options="options" class="left" />
    <div class="right">
      <RouterLink :to="`/configurations/${id}`">
        <Button arrow color="#fff" arrow-color="#fff">{{ name }}配置表</Button>
      </RouterLink>
      <Button arrow class="btn-right">里程计算器</Button>
    </div>
  </div>
</template>

<style scoped>
.endurance-bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6.4rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .left {
    width: 41.4rem;
    margin-right: 14rem;
  }

  .right .btn-right {
    margin-left: 1.6rem;
    background-color: #fff;
    border-color: #fff;
  }
}
</style>