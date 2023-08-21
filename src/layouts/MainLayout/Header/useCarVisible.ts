import { ref } from 'vue'

export default function useCarVisible() {
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
