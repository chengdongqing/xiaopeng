import usePageScrolled from '@/hooks/usePageScrolled.ts'
import { computed, Ref } from 'vue'
import { useRoute } from 'vue-router'

const paths = ['g6', 'p7i', 'g9', 'p7', 'p5', 'g3i']

export default function useDarkTheme(isCarsVisible: Ref<boolean>) {
  const isScrolled = usePageScrolled()

  const route = useRoute()
  const isChangeThemeOnScroll = computed(() => {
    return !paths.includes(route.path.slice(1))
  })

  return computed(() => {
    return (
      isCarsVisible.value || (isChangeThemeOnScroll.value && isScrolled.value)
    )
  })
}
