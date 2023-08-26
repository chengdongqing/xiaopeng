<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Logo from '@/components/Icons/Logo.vue'
import usePageScrolled from '@/hooks/usePageScrolled.ts'
import { formatAmount } from '@/utils'

defineProps<{
  id: string
  name: string
  price: number | string
}>()

const visible = usePageScrolled()
</script>

<template>
  <div class="header-bar" :class="{ active: visible }">
    <div class="side">
      <RouterLink to="/" style="display: flex">
        <Logo class="logo" />
      </RouterLink>
      <div class="name">{{ name }}</div>
      <div class="divider" />
      <div class="price">全国建议零售价 ¥{{ formatAmount(price) }} 起</div>
    </div>

    <div class="side">
      <a class="configuration">参数配置</a>
      <Button class="btn">立即订购</Button>
      <Button class="btn right">预约试驾</Button>
    </div>
  </div>
</template>

<style scoped>
.header-bar {
  z-index: 99;
  position: fixed;
  top: -5.6rem;
  left: 0;
  right: 0;
  height: 5.6rem;
  padding: 0 5rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem solid rgba(0, 0, 0, 0.05);
  background-color: #fff;

  &.active {
    top: 0;
  }

  .side {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
  }

  .logo {
    width: 4rem;
  }

  .name {
    margin-left: 1.6rem;
  }

  .divider {
    width: 0.1rem;
    height: 1.6rem;
    background-color: #e2e2e2;
    margin: 0 0.8rem;
  }

  .configuration {
    font-size: 1.4rem;
    margin-right: 2.4rem;
    cursor: pointer;
  }

  .btn {
    width: 9rem;
    height: 3.6rem;
    font-size: 1.4rem;
    padding: 0;

    &.right {
      margin-left: 0.8rem;
      background-color: #000;
      color: #fff;
    }
  }
}
</style>