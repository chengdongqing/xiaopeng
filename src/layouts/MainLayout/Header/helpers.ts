import usePageScrolled from '@/hooks/usePageScrolled.ts'
import { computed, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'

export function useCarVisible() {
  const isCarsVisible = ref(false)
  const timer = ref<NodeJS.Timer>()

  function handleVisibleChange(visible = true) {
    if (visible) {
      clearTimeout(timer.value)
      isCarsVisible.value = true
    } else {
      timer.value = setTimeout(() => {
        isCarsVisible.value = false
      }, 100)
    }
  }

  return [isCarsVisible, handleVisibleChange] as const
}

export function useDarkTheme(isCarsVisible: Ref<boolean>) {
  const isScrolled = usePageScrolled()
  const route = useRoute()

  return computed(() => {
    return (
      isCarsVisible.value ||
      (route.path === '/' && isScrolled.value) ||
      route.path === '/stores'
    )
  })
}

export function useIsOtherPage() {
  const route = useRoute()
  const paths = ['', 'g6', 'p7i', 'g9', 'p7', 'p5', 'g3i', 'stores'].map((item) => {
    return `/${item}`
  })

  return computed(() => {
    return !paths.includes(route.path)
  })
}
