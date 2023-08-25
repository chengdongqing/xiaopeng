import { Ref } from 'vue'

export default function useIndexSwitch({
  current,
  count,
  isNext
}: {
  count: number
  current: Ref<number>
  isNext: Ref<boolean>
}) {
  function toNext() {
    isNext.value = true
    if (current.value < count - 1) {
      current.value++
    } else {
      current.value = 0
    }
  }

  function toPrev() {
    isNext.value = false
    if (current.value > 0) {
      current.value--
    } else {
      current.value = count - 1
    }
  }

  function goTo(index: number) {
    if (index < 0 || index > count - 1) return

    isNext.value = index > current.value
    current.value = index
  }

  return { toNext, toPrev, goTo }
}
