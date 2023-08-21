import { computed, onMounted, onUnmounted, Ref, ref } from 'vue'

export default function useDarkTheme(isCarsVisible: Ref<boolean>) {
  const isScrolled = ref(false)

  function handleScroll() {
    isScrolled.value = window.scrollY > 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return computed(() => isScrolled.value || isCarsVisible.value)
}
