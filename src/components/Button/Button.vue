<script setup>
defineProps({
  color: String
})
</script>

<template>
  <button class="btn" :style="{ color, borderColor: color }">
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
  color: #fff;
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  border: 1px solid #fff;
  border-radius: 0.4rem;
  background-color: transparent;
  cursor: pointer;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    inset: 0;
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
