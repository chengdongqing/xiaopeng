import { ref } from 'vue'

export default function useThrottle(
  fn: (...args: unknown[]) => void,
  interval = 200
) {
  const timer = ref<NodeJS.Timer>()

  return (...args: unknown[]) => {
    if (!timer.value) {
      timer.value = setTimeout(() => {
        timer.value = undefined
        fn(...args)
      }, interval)
    }
  }
}
