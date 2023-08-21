<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#fff'
  }
})
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  z-index: 0;
  width: 15rem;
  height: 4.4rem;
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
    background-color: var(--primary-color);
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
  }
}
</style>
