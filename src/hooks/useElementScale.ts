import { onMounted, onUnmounted, Ref, ref } from 'vue'

export default function useElementScale(
  element: Ref<HTMLElement>,
  initialScale = 70,
  heightFactor = 0.7
) {
  const scale = ref(initialScale)

  function handlePageScroll() {
    const { top, height } = element.value?.getBoundingClientRect()
    const scrollProgress = Math.min(
      Math.max((window.innerHeight - top) / (height * heightFactor), 0),
      1
    )
    scale.value = initialScale + (100 - initialScale) * scrollProgress
  }

  onMounted(() => {
    window.addEventListener('scroll', handlePageScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handlePageScroll)
  })

  return scale
}
