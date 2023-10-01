import useThrottle from '@/hooks/useThrottle.ts'
import { capitalizeFirstLetter } from '@/utils'
import { computed, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ConfigurationProps, ModelItemProps } from './index'

export function useConfigurations(current: Ref<number>) {
  const name = ref('')
  const configs = ref<ConfigurationProps[]>([])
  const remarks = ref<string[]>([])

  const router = useRouter()
  const { params } = useRoute()

  const id = params.id as string
  import(`./configs/${id}.ts`)
    .then((res) => {
      name.value = res.name || capitalizeFirstLetter(id)
      configs.value = res.configs
      remarks.value = res.remarks
    })
    .catch(() => router.replace('/'))

  const models = computed(() => {
    return configs.value[current.value]?.children
  })

  return {
    name,
    configs,
    remarks,
    models
  }
}

export function useActiveNav(configs: Ref<ConfigurationProps[]>) {
  const activeNav = ref(0)
  const rows = ref<HTMLTableRowElement[]>([])

  watch(
    () => configs.value,
    () => {
      setTimeout(() => {
        rows.value = Array.from(document.querySelectorAll('.table .title'))
      }, 1000)
    }
  )

  const onPageScroll = useThrottle(() => {
    rows.value.forEach((item, index) => {
      if (
        document.documentElement.scrollTop >=
        (item as HTMLTableRowElement).offsetTop
      ) {
        activeNav.value = index
      }
    })
  })

  onMounted(() => {
    window.addEventListener('scroll', onPageScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onPageScroll)
  })

  return activeNav
}

export function displayValue(
  models: ModelItemProps[],
  index: number,
  index1: number,
  index2: number,
  index3: number
) {
  const { value, optional } =
    models[index3].children[index].children[index1].children[index2]

  if (typeof value === 'string') {
    return value
  }
  if (value) {
    return '●'
  }
  if (!value && optional) {
    if (typeof optional === 'number') {
      return `○+${optional}`
    }
    return '○'
  }
  return '—'
}

export function isSameValue(
  models: ModelItemProps[],
  hiddenSameValueRow: boolean,
  index: number,
  index1: number,
  index2: number
) {
  if (models.length <= 1) return false

  const arr =
    models.map((item) => {
      return item.children[index].children[index1].children[index2]
    }) || []

  if (typeof arr[0].value === 'boolean' && !hiddenSameValueRow) {
    return false
  }
  return arr.every((item: any) => {
    return (
      item.value === arr[0].value &&
      (typeof item.value !== 'boolean' || item.optional === arr[0].optional)
    )
  })
}
