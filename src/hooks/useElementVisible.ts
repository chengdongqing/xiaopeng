import { ref, Ref, watch } from 'vue'

export default function useElementVisible(
  target: HTMLElement | Ref<HTMLElement>,
  threshold = 0.2
) {
  const visible = ref(false)

  watch(
    () => {
      const element = target instanceof HTMLElement ? target : target.value

      function unobserve() {
        if (element) {
          observer.unobserve(element)
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const { isIntersecting } = entries[0]
          visible.value = isIntersecting
        },
        { threshold }
      )
      if (element) {
        observer.observe(element)
      }

      return unobserve
    },
    () => [target, threshold]
  )

  return visible
}
