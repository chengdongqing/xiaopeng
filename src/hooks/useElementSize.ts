import { onMounted, onUnmounted, reactive, Ref } from 'vue'

export default function useElementSize(element: Ref<HTMLElement>) {
  const size = reactive({
    width: 0,
    height: 0
  })

  function getSize() {
    if (!element.value) return

    const { width, height } = element.value.getBoundingClientRect()
    size.width = width
    size.height = height
  }

  onMounted(() => {
    getSize()
    window.addEventListener('resize', getSize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', getSize)
  })

  return size
}
