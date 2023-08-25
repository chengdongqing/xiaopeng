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
    <video v-if="src.endsWith('.mp4')" :src="src" autoplay muted loop />
    <img v-else :src="src" :alt="alt" />
  </div>
</template>

<style scoped>
.img-wrapper {
  border-radius: 0.4rem;
  overflow: hidden;

  :is(video),
  :is(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;

    &:hover {
      transform: scale(v-bind(scale));
    }
  }
}
</style>
