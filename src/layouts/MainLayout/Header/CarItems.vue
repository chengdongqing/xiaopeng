<script setup lang="ts">
import { carItems } from '../const.ts'

defineProps<{
  visible: boolean
}>()
</script>

<template>
  <div class="car-items" :class="{ visible }">
    <div class="wrapper">
      <RouterLink
        class="car-item"
        v-for="item in carItems"
        :key="item.name"
        :to="item.href"
      >
        <img :src="item.imageUrl" :alt="item.name" class="image" />
        <div class="name">{{ item.name }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.car-items {
  z-index: 9;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &.visible {
    top: 5.6rem;
    transform: translateY(0);
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: min(77vw, 146.4rem);
    margin: 6.1rem auto 2.1rem;

    .car-item {
      padding: 0 3.2rem 4rem;
      text-align: center;

      .image {
        width: 18rem;
      }

      .name {
        font-size: 1.6rem;
        color: rgba(0, 0, 0, 0.9);
        transition: color 0.3s ease-in-out;
      }

      &:hover {
        .name {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>