<script setup lang="ts">
import TitleBar from '@/components/TitleBar/TitleBar.vue'

const categories = [
  {
    name: 'SEDAN',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/sedan.1648199a.svg'
  },
  {
    name: 'COUPE',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/coupe.884abc92.svg'
  },
  {
    name: 'HATCHBACK',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/hatchback.1a1bf83d.svg'
  },
  {
    name: 'WAGON',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/wagon.2ad5175d.svg'
  },
  {
    name: 'SUV',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/suv.8c3cb756.svg'
  },
  {
    name: 'MPV',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/mpv.a2a7cccd.svg'
  },
  {
    name: 'PICKUP TRUCK',
    iconUrl: 'https://xps01.xiaopeng.com/www/public/img/truck.a31ed561.svg'
  }
]
</script>

<template>
  <div style="padding-bottom: 12rem">
    <TitleBar
      title="兼容全类型产品，高端智能出行体验将是「标配」"
      subtitle="兼容轴距1,800~3,200mm，可拓展三厢轿车、两厢车、运动轿跑等全车身造型种类产品"
    />

    <div class="categories">
      <div class="category-item" v-for="item in categories" :key="item.name">
        <img :src="item.iconUrl" alt="" class="icon" />
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  width: 132rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  .category-item {
    flex: 1;
    min-width: 30rem;
    height: 24rem;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;

    .icon {
      width: 24rem;
      height: 12rem;
    }

    .name {
      font-family: BasisGrotesque-Regular, serif;
      font-size: 1.6rem;
      line-height: 2.8rem;
      letter-spacing: 0.4rem;
      color: #333;
    }
  }
}
</style>