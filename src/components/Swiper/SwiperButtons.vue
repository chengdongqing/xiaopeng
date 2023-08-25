<script setup lang="ts">
withDefaults(
  defineProps<{
    swiperRef: any
    offset?: string
    leftVisible?: boolean
    rightVisible?: boolean
  }>(),
  {
    offset: '5%',
    leftVisible: true,
    rightVisible: true
  }
)
</script>

<template>
  <div v-show="leftVisible" class="swiper-btn left" @click="swiperRef.toPrev" />
  <div
    v-show="rightVisible"
    class="swiper-btn right"
    @click="swiperRef.toNext"
  />
</template>

<style scoped>
.swiper-btn {
  position: absolute;
  top: 50%;
  width: 8rem;
  height: 8rem;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: 0.3s;

  &.left {
    left: v-bind(offset);
    transform: translateY(-50%);
  }

  &.right {
    right: v-bind(offset);
    transform: translateY(-50%) rotate(180deg);
  }

  &::after {
    content: '';
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAwTDQuNCAxOCAyMiAzNmgtNC40TDAgMTggMTcuNiAwSDIyeiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg==);
    background-size: contain;
    width: 2rem;
    height: 3.2rem;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
