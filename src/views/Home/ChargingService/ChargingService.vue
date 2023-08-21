<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import services from './services.js'
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="title">全场景充电服务</div>
      <div class="subtitle">
        遍布全国的补能网络，贴心的自营充电服务，让鹏友没有里程焦虑
      </div>
    </div>

    <div class="services-grid">
      <div class="service-item" v-for="item in services" :key="item.name">
        <img :src="item.pictureUrl" alt="" class="service-img" />
        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <Button color="#000" arrow>了解充电服务</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-background);
  padding-top: 8rem;
  padding-bottom: 12rem;
}

.header {
  padding-top: 12rem;
  padding-bottom: 6.4rem;
  text-align: center;

  .title {
    margin-bottom: 1.6rem;
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 1.6rem;
  }

  .subtitle {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.75;
  }
}

.services-grid {
  width: 132rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  .service-item {
    border-radius: 0.4rem;
    overflow: hidden;

    &:first-child {
      grid-row: span 2;
    }

    &:hover {
      .service-img {
        transform: scale(1.2);
      }

      .content .description {
        display: unset;
      }
    }

    .service-img {
      width: 100%;
      transition: 0.3s;
    }

    .content {
      position: absolute;
      left: 0;
      bottom: 2.2rem;
      margin: 0 3.2rem;
      color: #fff;

      .name {
        margin-bottom: 1rem;
        letter-spacing: 0.2rem;
        font-weight: 400;
        font-size: 1.8rem;
      }

      .description {
        font-size: 1.4rem;
        line-height: 2.2rem;
        display: none;
      }
    }
  }
}

.bottom {
  margin-top: 6rem;
  text-align: center;
}
</style>