<script setup lang="ts">
defineProps<{
  options: {
    title: string
    description: string
    src: string
    children?: {
      name: string
      value: string
      unit: string
    }[]
  }[]
  defaultReverse?: boolean
}>()
</script>

<template>
  <div class="waterfall-flow">
    <div
      class="row"
      :class="{ 'default-reverse': defaultReverse }"
      v-for="item in options"
      :key="item.title"
    >
      <video
        v-if="item.src.endsWith('.mp4')"
        :src="item.src"
        autoplay
        muted
        loop
      />
      <img v-else :src="item.src" alt="" />

      <div class="content-wrapper">
        <div class="title" v-html="item.title" />
        <div class="description" v-html="item.description" />
        <div class="content" v-if="item.children">
          <div
            class="content-item"
            v-for="child in item.children"
            :key="child.name"
          >
            <div class="name">{{ child.name }}</div>
            <div class="value">
              {{ child.value }} <span class="unit">{{ child.unit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.waterfall-flow {
  padding: 8rem 0;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 0;

    &:nth-child(2n),
    &.default-reverse {
      flex-direction: row-reverse;

      .content-wrapper {
        margin-left: 0;
        margin-right: 8rem;
      }
    }

    :is(video),
    :is(img) {
      width: 64rem;
      height: 48rem;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .content-wrapper {
      width: 60rem;
      margin-left: 8rem;

      .title {
        font-size: 3.2rem;
        white-space: pre-wrap;
        letter-spacing: 0.4rem;
        margin-bottom: 3.2rem;
      }

      .description {
        color: #666;
        font-size: 1.6rem;
        white-space: pre-wrap;
        letter-spacing: 0.2rem;
      }

      .content {
        margin-top: 8rem;
        display: flex;

        .content-item {
          width: 15.3rem;

          .name {
            color: #666;
            font-size: 1.6rem;
            margin-bottom: 0.8rem;
          }

          .value {
            color: #000;
            font-size: 4rem;

            .unit {
              color: #666;
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
}
</style>