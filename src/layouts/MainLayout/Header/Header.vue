<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import { computed, ref } from 'vue'
import { menus, subMenus } from '../const.ts'
import CarAnimationIcon from './CarAnimationIcon.vue'
import CarItems from './CarItems.vue'

const isDark = ref(false)
const isCarsVisible = ref(false)
const isDarkTheme = computed(() => isDark.value || isCarsVisible.value)

const timer = ref<NodeJS.Timer>()
function handleVisibleChange(visible = true) {
  if (visible) {
    clearTimeout(timer.value)
    isCarsVisible.value = true
  } else {
    timer.value = setTimeout(() => {
      isCarsVisible.value = false
    }, 100)
  }
}
</script>

<template>
  <div
    class="header"
    :class="{ 'dark-theme': isDarkTheme, 'cars-visible': isCarsVisible }"
  >
    <RouterLink to="/">
      <Logo :fill="isDarkTheme ? '#000' : '#fff'" />
    </RouterLink>

    <div class="menus">
      <div
        class="menu-item-wrapper"
        @mouseenter="handleVisibleChange"
        @mouseleave="handleVisibleChange(false)"
      >
        <CarAnimationIcon :moved="isCarsVisible" />
        <a class="menu-item">车型</a>
      </div>
      <div class="menu-item-wrapper" v-for="item in menus" :key="item.name">
        <a class="menu-item" :href="item.href" target="_blank">
          {{ item.name }}
        </a>
      </div>
      <div class="menu-item-wrapper about-us">
        <a class="menu-item">关于我们</a>
        <div class="sub-menus">
          <a
            class="sub-menu-item"
            v-for="item in subMenus"
            :key="item.name"
            :href="item.href"
            target="_blank"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>

    <div class="actions">
      <RouterLink to="/appointment" target="_blank" class="btn btn-appointment">
        预约试驾
      </RouterLink>
      <RouterLink to="/login" class="btn btn-login">登录</RouterLink>
    </div>
  </div>

  <CarItems
    :visible="isCarsVisible"
    @mouseenter="handleVisibleChange"
    @mouseleave="handleVisibleChange(false)"
  />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 5.6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.dark-theme {
    background-color: #fff;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);

    &.cars-visible {
      border-bottom: none;
    }

    .menu-item,
    .btn {
      color: #000;
      border-color: #000;
    }

    .menu-item-wrapper:hover {
      .menu-item {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

.actions {
  .btn-appointment {
    display: inline-block;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1;
    padding: 0.8rem 1.6rem;
    border: 1px solid #fff;
    border-radius: 0.4rem;
    margin-right: 3.2rem;

    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--primary-color);
      width: 0;
      border-radius: 0.4rem;
      transition: width 0.3s;
    }

    &:hover {
      color: #fff;
      border-color: transparent;

      &::after {
        width: 100%;
      }
    }
  }

  .btn-login {
    color: #fff;
    font-size: 1.4rem;

    &:hover {
      opacity: 0.6;
    }
  }
}

.menus {
  display: flex;
  align-items: center;

  .menu-item-wrapper {
    height: 5.6rem;
    display: flex;
    align-items: center;

    &.about-us:hover {
      .sub-menus {
        display: unset;
      }
    }

    &:hover .menu-item {
      color: hsla(0, 0%, 100%, 0.6);

      &::after {
        max-width: 100%;
      }
    }
  }

  .menu-item {
    margin: 0 2.8rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.4rem;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 0;
      height: 0.2rem;
      margin-bottom: 0.1rem;
      transition: max-width 0.1s ease-in-out;
      background-color: var(--primary-color);
    }
  }
}

.sub-menus {
  display: none;
  width: 11.2rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 0.8rem 0;
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  background-color: #fff;
  color: #000;

  .sub-menu-item {
    padding: 1.2rem 2.1rem;
    display: inline-block;
    font-size: 1.4rem;
    width: 100%;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>