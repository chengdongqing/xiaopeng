<script setup lang="ts">
import { computed } from 'vue'
import { displayValue, isSameValue } from './helpers.ts'
import { ModelItemProps } from './index'

const props = defineProps<{
  models: ModelItemProps[]
  hiddenSameValueRow: boolean
  name: string
  index: number
  index1: number
  index2: number
}>()

const isSame = computed(() => {
  return isSameValue(
    props.models,
    props.hiddenSameValueRow,
    props.index,
    props.index1,
    props.index2
  )
})
</script>

<template>
  <tr v-if="!hiddenSameValueRow || !isSame">
    <td v-html="name" />
    <td
      :colspan="isSame ? models.length : undefined"
      v-for="(_, index3) in isSame ? 1 : models.length"
      :key="index3"
    >
      {{ displayValue(models, index, index1, index2, index3) }}
    </td>
  </tr>
</template>