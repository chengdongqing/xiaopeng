import { onMounted, onUnmounted, ref } from 'vue'

export default function usePageScrolled() {
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

  return isScrolled
}
