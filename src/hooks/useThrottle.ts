import { ref } from 'vue'

export default function useThrottle<T>(
  fn: (...args: unknown[]) => Promise<T>,
  interval = 200
) {
  const timer = ref<NodeJS.Timer>()

  return (...args: unknown[]) => {
    return new Promise<T>((resolve) => {
      if (!timer.value) {
        timer.value = setTimeout(() => {
          timer.value = undefined
          resolve(fn(...args))
        }, interval)
      }
    })
  }
}
