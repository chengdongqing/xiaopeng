<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { ref } from 'vue'
import cars from './cars.ts'

const props = withDefaults(
  defineProps<{
    id?: string
    title?: string
    subtitle?: string
  }>(),
  {
    title: '预约试驾',
    subtitle: '试乘试驾小鹏汽车，真实体验小鹏产品及服务'
  }
)

const index = cars.findIndex((item) => item.id === props.id)
const current = ref(index > -1 ? index : 0)

function handleCarChange(e: Event) {
  current.value = Number((e.target as HTMLSelectElement)?.value)
}
</script>

<template>
  <div class="container">
    <TitleBar :title="title" :subtitle="subtitle" />

    <div class="main">
      <div class="images-wrapper">
        <img
          v-for="(item, index) in cars"
          :key="item.name"
          :alt="item.name"
          :src="item.pictureUrl"
          :class="{ active: current === index }"
          class="img"
        />
      </div>

      <form class="form" @submit.prevent="">
        <select
          v-if="props.id === undefined"
          class="form-item select"
          name="model"
          :value="current"
          @change="handleCarChange"
        >
          <option v-for="(item, index) in cars" :key="item.name" :value="index">
            {{ item.name }}
          </option>
        </select>
        <select class="form-item select" name="address">
          <option>小鹏汽车广州新塘万达广场体验中心</option>
        </select>
        <input class="form-item input" placeholder="手机" name="phoneNumber" />
        <div>
          <input
            class="form-item input"
            placeholder="验证码"
            name="verificationCode"
          />
          <button class="btn-code" type="button">获取验证码</button>
        </div>
        <div class="privacy-wrapper">
          <label>
            <input type="checkbox" name="privacy" />
            我已仔细阅读并同意
          </label>
          《
          <a
            target="_blank"
            href="https://www.xiaopeng.com/content/4015.html"
            style="text-decoration: underline"
          >
            小鹏汽车用户隐私政策
          </a>
          》
        </div>
        <Button class="btn-submit" color="#fff" arrow>立即预约</Button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 6.4rem;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.images-wrapper {
  width: 91.2rem;
  height: 51.3rem;

  .img {
    position: absolute;
    top: 0;
    right: -5rem;
    width: 100%;
    height: 100%;
    opacity: 0;

    &.active {
      transition: 0.8s;
      opacity: 1;
      right: 0;
    }
  }
}

.form {
  width: 40rem;

  .form-item {
    width: 100%;
    height: 4.4rem;
    font-size: 1.6rem;
    border: none;
    border-bottom: 0.1rem solid #f0f0f0;
    margin-bottom: 1.6rem;

    &.select {
      cursor: pointer;
    }

    &.input {
      transition: 0.3s;
      caret-color: var(--color-primary);

      &::placeholder {
        color: #999;
      }

      &:focus {
        border-color: var(--color-primary);
      }
    }
  }

  .btn-code {
    position: absolute;
    top: 0;
    right: 1.6rem;
    height: 4.4rem;
    font-size: 1.6rem;
    color: #999;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  .privacy-wrapper {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 1.4rem;

    :is(label) {
      display: flex;
      align-items: center;
      cursor: pointer;

      :is(input[type='checkbox']) {
        width: 1.8rem;
        height: 1.8rem;
        border: 0.1rem solid #666;
        border-radius: 50%;
        margin-right: 0.8rem;
        appearance: none;
        cursor: pointer;

        &:checked {
          border: none;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI0E0Q0U0QyIvPjxwYXRoIGQ9Ik0xMi4zNTYgNi4yNjdhLjk4OC45ODggMCAwIDEgMS4zNy4wMThjLjM1LjM1LjM2NC44OTYuMDQ4IDEuMjYybC0uMDY3LjA3LTUuNDExIDUuMTE2YS45ODguOTg4IDAgMCAxLTEuMzUgMGwtLjA2Ny0uMDctMi42NTMtMy4wNzdhLjkyNC45MjQgMCAwIDEgLjEyLTEuMzI3Ljk4OS45ODkgMCAwIDEgMS4yOTcuMDQ2bC4wNjguMDcgMS45ODIgMi4zIDQuNjYzLTQuNDA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==);
          background-size: contain;
        }
      }
    }
  }

  .btn-submit {
    width: 100%;
    margin-top: 4rem;
    font-weight: 200;
    background-color: #000;
  }
}
</style>