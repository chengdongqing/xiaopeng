<script setup lang="ts">
import { formatAmount } from '@/utils/index.ts'
import { ModelItemProps } from './index'
import TableRow from './TableRow.vue'

defineProps<{
  models: ModelItemProps[]
  hiddenSameValueRow: boolean
}>()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <td />
        <td v-for="item in models" :key="item.subModelName">
          {{ item.subModelName }}
        </td>
      </tr>
      <tr class="price">
        <td>全国建议零售价</td>
        <td v-for="item in models" :key="item.subModelName">
          ¥{{ formatAmount(item.price) }}
        </td>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in models[0].children" :key="item.title">
        <tr class="title">
          <td :colspan="models.length + 1">
            {{ item.title }} <b :id="item.title" style="top: -28rem" />
          </td>
        </tr>
        <template v-for="(item1, index1) in item.children" :key="item1.title">
          <tr class="subtitle" v-if="item1.title">
            <td :colspan="models.length + 1">{{ item1.title }}</td>
          </tr>
          <template v-for="(item2, index2) in item1.children" :key="item2.name">
            <TableRow
              :models="models"
              :hidden-same-value-row="hiddenSameValueRow"
              :name="item2.name"
              :index="index"
              :index1="index1"
              :index2="index2"
            />
          </template>
        </template>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  border-spacing: 0;
  border-collapse: collapse;

  :is(thead) {
    position: sticky;
    top: 16.6rem;
    z-index: 2;
    background-color: #fff;

    :is(td) {
      color: #303030;
      font-size: 1.8rem !important;
    }
  }

  :is(tr) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #e6e6e8;
    }

    &.title {
      position: sticky;
      top: 26.4rem;
      z-index: 1;
      height: 6rem;
      background-color: #f8f8f8;

      :is(td) {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }

    &.subtitle :is(td) {
      font-size: 1.6rem;
      font-weight: 500;
    }

    &:deep(:is(td)) {
      padding: 1.2rem 2.4rem;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }

    &:deep(:is(td):first-child) {
      width: 25%;
      white-space: pre-wrap;
    }

    &:deep(:is(td):not(:first-child)) {
      text-align: center;
    }

    &.price {
      :is(td):not(:first-child) {
        color: var(--color-primary);
        font-size: 1.6rem;
      }
    }
  }
}
</style>