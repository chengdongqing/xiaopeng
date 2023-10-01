<script setup lang="ts">
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import * as Swiper from '@/components/Swiper'
import { ref } from 'vue'

defineProps<{
  options: {
    title?: string
    description?: string
    pictureUrl: string
    videoUrl?: string
    dataItems?: {
      name: string
      value: number
      unit?: string
    }[]
    descriptions?: string[]
  }[]
}>()

const emits = defineEmits<{
  change: [index: number]
}>()

const swiperRef = ref()
const current = ref(0)
</script>

<template>
  <div class="card-swiper">
    <Swiper.Container
      card
      ref="swiperRef"
      :duration="1000"
      :autoplay="false"
      @change="
        (index) => {
          current = index
          emits('change', index)
        }
      "
    >
      <Swiper.Item v-for="(item, index) in options" :key="item.title">
        <video
          v-if="item.videoUrl && index === current"
          :src="item.videoUrl"
          autoplay
          muted
          loop
        />
        <img v-else :src="item.pictureUrl" alt="" />

        <div class="content-wrapper">
          <div v-if="item.title" class="title" v-html="item.title" />
          <div
            v-if="item.description"
            class="description"
            v-html="item.description"
          />
          <NameValueGroup
            v-if="item.dataItems"
            :options="item.dataItems"
            style="justify-content: center; gap: 6.6rem"
          />
          <div v-if="item.descriptions" class="descriptions">
            <div
              class="description-item"
              v-for="desc in item.descriptions"
              :key="desc"
            >
              {{ desc }}
            </div>
          </div>
        </div>
      </Swiper.Item>
    </Swiper.Container>
    <Swiper.ButtonGroup
      :swiper-ref="swiperRef"
      offset="14%"
      :left-visible="current > 0"
      :right-visible="current < options.length - 1"
    />
  </div>
</template>

<style scoped>
.card-swiper {
  padding: 12rem 0;

  :is(img),
  :is(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content-wrapper {
    position: absolute;
    bottom: 4rem;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;

    .title {
      font-weight: 200;
      font-size: 1.8rem;
      line-height: 2.5rem;
      white-space: pre-wrap;
      letter-spacing: 0.6rem;
    }

    .description {
      margin-top: 0.8rem;
      font-weight: 200;
      font-size: 1.4rem;
      line-height: 2.6rem;
      color: #fff;
      left: 0.2rem;
      white-space: pre-wrap;
    }

    .descriptions {
      display: flex;
      align-items: center;

      .description-item {
        flex: 1;
        color: #fff;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 200;
        letter-spacing: 0.2rem;
        white-space: pre-wrap;

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0.2rem;
          height: 3rem;
          background-color: hsla(0, 0%, 100%, 0.4);
        }

        &:last-child::after {
          width: 0;
        }
      }
    }
  }
}
</style>