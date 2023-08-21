<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt?: string
    scale?: number
  }>(),
  {
    scale: 1.2
  }
)
</script>

<template>
  <div class="img-wrapper">
    <img :src="src" :alt="alt" class="img" />
  </div>
</template>

<style scoped>
.img-wrapper {
  border-radius: 0.4rem;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    transition: 0.3s;

    &:hover {
      transform: scale(v-bind(scale));
    }
  }
}
</style>
