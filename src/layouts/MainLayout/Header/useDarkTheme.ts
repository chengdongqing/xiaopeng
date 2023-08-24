import usePageScrolled from '@/hooks/usePageScrolled.ts'
import { computed, Ref } from 'vue'

export default function useDarkTheme(
  isCarsVisible: Ref<boolean>,
  isChangeThemeOnScroll: Ref<boolean>
) {
  const isScrolled = usePageScrolled()

  return computed(() => {
    return (
      isCarsVisible.value || (isChangeThemeOnScroll.value && isScrolled.value)
    )
  })
}
