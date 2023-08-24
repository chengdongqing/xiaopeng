import usePageScrolled from '@/hooks/usePageScrolled.ts'
import { computed, Ref } from 'vue'

export default function useDarkTheme(
  isCarsVisible: Ref<boolean>,
  isChangeThemeOnScroll: Ref<boolean>
) {
  const isScrolled = usePageScrolled()

  return computed(() => {
    return (
      isChangeThemeOnScroll.value && (isScrolled.value || isCarsVisible.value)
    )
  })
}
