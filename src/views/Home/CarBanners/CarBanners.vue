<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Grid from '@/components/Grid/Grid.vue'
import XIcon from '@/components/Icons/X.vue'
import * as Swiper from '@/components/Swiper'
import { ref } from 'vue'

const current = ref(0)
const swiperRef = ref()
</script>

<template>
  <div>
    <Swiper.Container
      ref="swiperRef"
      :interval="8000"
      v-model:current="current"
      style="height: 100vh"
    >
      <Swiper.Item>
        <div style="height: 100%">
          <video
            src="https://xps02.xiaopeng.com/cms/material/video/2023/06-29/video_20230629100416_00416.mp4"
            class="video"
            autoplay
            muted
            loop
          />
          <div class="content-wrapper">
            <XIcon class="x" />
            <div class="title">
              小鹏<span class="en">G6 </span>
              <span>超智驾轿跑<span class="en">SUV</span></span>
              <br />
              成熟登场
            </div>
            <div class="btn-group">
              <Button class="btn" color="#fff" arrow arrow-color="#fff">
                了解G6
              </Button>
              <Button class="btn right" color="#fff" arrow>预约试驾</Button>
            </div>
          </div>
        </div>
      </Swiper.Item>
      <Swiper.Item>
        <div style="height: 100%">
          <video
            src="https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4"
            class="video"
            autoplay
            muted
            loop
          />
          <div class="content-wrapper">
            <XIcon class="x" />
            <div class="title">
              全新<span class="en">P7i</span>
              <br />
              超智能轿跑
            </div>
            <div class="btn-group">
              <Button class="btn" color="#fff" arrow arrow-color="#fff">
                了解P7i
              </Button>
              <Button class="btn right" color="#fff" arrow>预约试驾</Button>
            </div>
          </div>
        </div>
      </Swiper.Item>
      <Swiper.Item>
        <div style="height: 100%">
          <video
            src="https://xps02.xiaopeng.com/cms/material/video/2023/01-06/video_20230106135720_85074.mp4"
            class="video"
            autoplay
            muted
            loop
          />
          <div class="content-wrapper">
            <XIcon class="x" />
            <div class="title">
              小鹏<span class="en">G9</span>
              <br />
              超快充全智能<span class="en">SUV</span>
            </div>
            <div class="btn-group">
              <Button class="btn" color="#fff" arrow arrow-color="#fff">
                了解G9
              </Button>
              <Button class="btn right" color="#fff" arrow>预约试驾</Button>
            </div>
          </div>
        </div>
      </Swiper.Item>
    </Swiper.Container>

    <Grid columns="4" gap="0.4rem" class="dots">
      <div
        class="dot-item"
        v-for="(_, index) in 3"
        :key="index"
        @click="swiperRef.goTo(index)"
      >
        <div :class="['line', { active: index === current }]" />
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.dots {
  position: absolute;
  bottom: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  .dot-item {
    width: 4.4rem;
    height: 4.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    .line {
      width: 4rem;
      height: 0.3rem;
      background-color: hsla(0, 0%, 100%, 0.3);
      transform: skewX(-30deg);

      &.active {
        background-color: var(--color-primary);
      }
    }
  }
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  position: absolute;
  left: 15%;
  top: 30%;

  .x {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    left: 0;
    top: 0;
    transform: translate(-100%, -30%);
  }

  .title {
    color: #fff;
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    margin-bottom: 1.6rem;
    line-height: 1.5;

    .en {
      font-family: BasisGrotesque-Regular, serif;
    }
  }
}

.btn-group {
  .btn {
    margin-top: 1.6rem;
    margin-right: 2rem;

    &.right {
      background-color: #fff;
      color: #000;

      .icon {
        color: var(--color-primary);
      }

      &:hover .icon {
        color: #fff;
      }
    }

    .icon {
      margin-left: 0.4rem;
    }
  }
}
</style>