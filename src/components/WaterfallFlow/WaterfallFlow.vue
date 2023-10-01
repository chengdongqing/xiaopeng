<script setup lang="ts">
defineProps<{
  options: {
    note?: string
    title: string
    description?: string
    src: string
    dataItems?: {
      name: string
      value: string
      unit: string
    }[]
    descriptions?: {
      title?: string
      description: string
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
        <div class="note" v-if="item.note" v-html="item.note" />
        <div class="title" v-html="item.title" />
        <div
          class="description"
          v-if="item.description"
          v-html="item.description"
        />
        <div class="data-items" v-if="item.dataItems">
          <div
            class="data-item"
            v-for="child in item.dataItems"
            :key="child.name"
          >
            <div class="name">{{ child.name }}</div>
            <div class="value">
              {{ child.value }} <span class="unit">{{ child.unit }}</span>
            </div>
          </div>
        </div>
        <template v-for="child in item.descriptions" :key="child.description">
          <div v-if="child.title" class="child-title">{{ child.title }}</div>
          <div class="child-description">{{ child.description }}</div>
        </template>
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

      .note {
        color: #666;
        font-size: 1.6rem;
        white-space: pre-wrap;
        letter-spacing: 0.2rem;
        margin-bottom: 1.6rem;
      }

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

      .data-items {
        margin-top: 8rem;
        display: flex;

        .data-item {
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

      .child-title {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 1.3;
        letter-spacing: 0.4rem;
        margin-bottom: 0.8rem;
      }

      .child-description {
        color: #666;
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 2.8rem;
        letter-spacing: 0.4rem;
        margin-bottom: 2.4rem;
        white-space: pre-wrap;
      }
    }
  }
}
</style>