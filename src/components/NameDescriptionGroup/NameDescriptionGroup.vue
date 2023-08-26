<script setup lang="ts">
defineProps<{
  options: {
    name: string
    description: string
  }[]
}>()
</script>

<template>
  <div class="name-description-group">
    <div v-for="item in options" :key="item.name" class="item">
      <div class="name" v-html="item.name" />
      <div class="description" v-html="item.description" />
    </div>
  </div>
</template>

<style scoped>
.name-description-group {
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #fff;

  .item {
    flex-shrink: 0;

    .name {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }

    .description {
      margin-top: 1.6rem;
      opacity: 0.8;
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 2.4rem;
    }
  }
}
</style>
