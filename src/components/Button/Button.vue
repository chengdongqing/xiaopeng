<script setup lang="ts">
import ArrowRight from '@/components/Icons/ArrowRight.vue'

defineProps({
  color: {
    type: String,
    default: '#000'
  },
  arrow: {
    type: Boolean,
    default: false
  },
  arrowColor: {
    type: String,
    default: 'var(--color-primary)'
  }
})
</script>

<template>
  <button class="btn">
    <slot />
    <ArrowRight v-if="arrow" :style="[{ color: arrowColor }]" class="icon" />
  </button>
</template>

<style scoped>
.btn {
  z-index: 0;
  height: 4.4rem;
  padding: 0 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: v-bind(color);
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  border: 0.1rem solid v-bind(color);
  border-radius: 0.4rem;
  background-color: transparent;
  cursor: pointer;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--color-primary);
    width: 0;
    border-radius: 0.4rem;
    transition: width 0.3s;
  }

  &:hover {
    color: #fff !important;
    border-width: 0;

    &::after {
      width: 100%;
    }

    .icon {
      color: #fff !important;
    }
  }

  .icon {
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>