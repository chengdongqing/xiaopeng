<script setup lang="ts">
defineProps<{
  options: {
    title: string
    description: string
  }[]
  current: number
  darkTheme?: boolean
}>()

const emit = defineEmits<{
  change: [index: number]
}>()
</script>

<template>
  <div class="tabs-bar" :class="{ dark: darkTheme }">
    <div class="title-wrapper">
      <div
        class="title"
        :class="{ active: index === current }"
        v-for="(item, index) in options"
        :key="item.title"
        @click="emit('change', index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="description" v-html="options[current].description" />
  </div>
</template>

<style scoped>
.tabs-bar {
  &.dark {
    .title-wrapper .title {
      color: #fff;
      opacity: 0.6;

      &.active {
        color: #fff;
        opacity: 1;
      }

      &::after {
        background-color: hsla(0, 0%, 100%, 0.4);
      }
    }

    .description {
      color: hsla(0, 0%, 100%, 0.6);
    }
  }

  .title-wrapper {
    display: flex;
    text-align: center;

    .title {
      flex: 1;
      letter-spacing: 0.2rem;
      margin-bottom: 1.6rem;
      padding-top: 4rem;
      padding-bottom: 2rem;
      color: #999;
      font-size: 1.8rem;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s;

      &.active {
        color: #000;
        font-weight: 500;

        &::after {
          background-color: var(--color-primary);
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.2rem;
        background-color: #e4e4e4;
      }
    }
  }

  .description {
    height: 6.8rem;
    margin-top: 2.4rem;
    text-align: center;
    color: #666;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
  }
}
</style>
