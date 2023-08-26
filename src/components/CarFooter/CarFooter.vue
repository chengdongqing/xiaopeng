<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'
import ReserveForm from '@/components/ReserveForm/ReserveForm.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import { ref } from 'vue'
import { options1 } from './resources.ts'

defineProps<{
  carIndex: number
}>()

const showMore = ref(false)
</script>

<template>
  <ReserveForm :value="carIndex" />

  <Grid class="p1" columns="2" item-width="64.4rem" gap="3.2rem">
    <a
      v-for="item in options1"
      :key="item.title"
      :href="item.href"
      target="_blank"
    >
      <ScalableImage :src="item.src" />
      <div class="content-wrapper">
        <div class="title">{{ item.title }}</div>
        <div class="subtitle">{{ item.subtitle }}</div>
      </div>
    </a>
  </Grid>

  <div class="p2">
    <div class="wrapper">
      <img
        alt=""
        src="https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/phone2.png"
        class="phone"
      />
      <div class="right">
        <div class="content-wrapper">
          <div>
            <div class="title">即刻下载小鹏APP</div>
            <div class="subtitle">探索小鹏世界，更多精彩呈现</div>
          </div>
          <div class="info">
            <p>版本： Andorid 4.33.0/iOS 4.33.0</p>
            <p style="margin-top: 0.8rem">
              <a
                href="https://www.xiaopeng.com/help/privacy.html?currentContentId=4267"
                target="_blank"
              >
                隐私政策
              </a>
              |
              <a
                href="https://www.xiaopeng.com/content/3867.html"
                target="_blank"
              >
                权限说明
              </a>
              |
              <a
                href="https://dl.xiaopeng.com/xp-app/apk/gw32W/XP_MobileAPP_Android_gw32W.apk"
                target="_blank"
              >
                下载32位版本
              </a>
            </p>
          </div>
        </div>
        <div class="code-wrapper">
          <img
            src="https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="p3">
    <div
      class="content"
      :style="{ maxHeight: showMore ? undefined : '14.4rem' }"
    >
      <slot name="remarks" />
    </div>
    <div class="btn-showMore" @click="showMore = !showMore">
      {{ !showMore ? '展开更多' : '收起' }}
      <ArrowRight class="icon" :class="{ active: showMore }" />
    </div>
  </div>
</template>

<style scoped>
.p1 {
  padding: 12rem 0;

  .content-wrapper {
    position: absolute;
    bottom: 3.2rem;
    left: 3.2rem;
    letter-spacing: 0.2rem;
    color: #fff;

    .title {
      font-size: 1.8rem;
    }

    .subtitle {
      opacity: 0.6;
      margin-top: 0.8rem;
      font-size: 1.6rem;
    }
  }
}

.p2 {
  background-color: var(--color-background);

  .wrapper {
    width: 132rem;
    height: 44rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .phone {
      width: 33rem;
      height: 37rem;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .right {
      display: flex;
      align-items: center;

      .content-wrapper {
        height: 16rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        margin-right: 4rem;
        text-align: right;

        .title {
          margin-bottom: 1.6rem;
          font-family: HYYakuHei, serif;
          font-size: 3.2rem;
          letter-spacing: 0.4rem;
        }

        .subtitle {
          font-size: 1.6rem;
          letter-spacing: 0.2rem;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.75;
        }

        .info {
          margin-top: 1.6rem;
          font-size: 1.2rem;
          color: #666;

          :is(a) {
            transition: opacity 0.1s ease-in-out;

            &:hover {
              opacity: 0.6;
            }
          }
        }
      }

      .code-wrapper {
        padding: 0.7rem;
        border-radius: 0.4rem;

        :is(img) {
          border: 0.2rem solid var(--color-primary);
        }
      }
    }
  }
}

.p3 {
  line-height: 1.6;
  color: #999;
  padding-top: 4.8rem;
  padding-bottom: 4rem;

  .content {
    width: 132rem;
    margin: auto;
    overflow: hidden;

    &:deep(:is(p)) {
      margin: 0.4rem 0;
      font-size: 1.2rem;
      font-weight: 200;
    }
  }

  .btn-showMore {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.4rem;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    .icon {
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0.4rem;
      transition: 0.3s;
      transform: rotate(90deg);

      &.active {
        transform: rotate(270deg);
      }
    }
  }
}
</style>