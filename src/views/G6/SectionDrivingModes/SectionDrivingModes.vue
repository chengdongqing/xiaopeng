<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import modes from './modes.ts'
</script>

<template>
  <div class="container">
    <TitleBar
      title="<span class='en'>5</span>种驾驶模式随心换，轻松驾驭各种天气和路况"
    />

    <div class="modes">
      <div class="mode-item" v-for="item in modes" :key="item.name">
        <img :src="item.iconUrl" alt="" class="icon" />
        <div class="name" v-html="item.name" />
        <div class="description">{{ item.description }}</div>
      </div>
    </div>

    <div class="bottom">
      <Button arrow>预约试驾</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 12rem;
  text-align: center;
}

.modes {
  max-width: 140rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  .mode-item {
    flex: 1;
    height: 23.2rem;
    min-width: 44.2rem;
    border-radius: 1rem;
    background-color: var(--color-background);
    display: grid;
    justify-items: center;
    align-content: center;

    .icon {
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1.6rem;
    }

    .name {
      font-size: 1.8rem;
      margin-bottom: 0.4rem;
    }

    .description {
      font-size: 1.4rem;
      color: #b3b3b3;
    }
  }
}

.bottom {
  margin-top: 6.4rem;
  text-align: center;
}
</style>