<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Logo from '@/components/Icons/Logo.vue'
import { menus, subMenus } from '../const.ts'
import CarAnimationIcon from './CarAnimationIcon.vue'
import CarItems from './CarItems.vue'
import { useCarVisible, useDarkTheme, useIsOtherPage } from './helpers.ts'

const [isCarsVisible, onVisibleChange] = useCarVisible()
const isDarkTheme = useDarkTheme(isCarsVisible)
const isOtherPage = useIsOtherPage()
</script>

<template>
  <div class="header-background" v-if="isOtherPage" />
  <div
    class="header"
    :class="{ 'dark-theme': isDarkTheme, 'cars-visible': isCarsVisible }"
  >
    <RouterLink to="/">
      <Logo
        :fill="isDarkTheme ? '#000' : '#fff'"
        style="width: 3.5rem; height: 1.8rem"
      />
    </RouterLink>

    <div class="menus">
      <div
        class="menu-item-wrapper"
        @mouseenter="onVisibleChange(true)"
        @mouseleave="onVisibleChange(false)"
      >
        <CarAnimationIcon :active="isCarsVisible" />
        <a class="menu-item">车型</a>
      </div>
      <div class="menu-item-wrapper" v-for="item in menus" :key="item.name">
        <RouterLink class="menu-item" :to="item.href">
          {{ item.name }}
        </RouterLink>
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
      <Button class="btn btn-appointment" color="#fff">预约试驾</Button>
      <a class="btn btn-login">登录</a>
    </div>
  </div>

  <CarItems
    :visible="isCarsVisible"
    @mouseenter="onVisibleChange"
    @mouseleave="onVisibleChange(false)"
  />
</template>

<style scoped>
.header-background {
  z-index: 10;
  position: sticky;
  top: 0;
  height: 5.6rem;
  background: linear-gradient(135deg, #999, #666);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 98;
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
  .btn {
    cursor: pointer;
  }

  .btn-appointment {
    font-size: 1.4rem;
    height: unset;
    padding: 0.6rem 1.6rem;
    margin-right: 3.2rem;
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
  padding-left: 12rem;

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
      background-color: var(--color-primary);
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