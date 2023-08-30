import { onMounted, onUnmounted, Ref } from 'vue'
import { SwiperProps } from './index.ts'

export function useSwiperPlay(
  props: SwiperProps,
  toNext: (clearTime: boolean) => void
) {
  let timer: NodeJS.Timer

  function startPlay() {
    if (props.autoplay) {
      timer = setInterval(() => {
        toNext(false)
      }, props.interval)
    }
  }

  function pausePlay() {
    clearInterval(timer)
  }

  function resetPlay() {
    pausePlay()
    startPlay()
  }

  onMounted(() => {
    startPlay()
  })
  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    startPlay,
    pausePlay,
    resetPlay
  }
}

export function useIndexSwitch(
  {
    current,
    count,
    isNext
  }: {
    current: Ref<number>
    count: Ref<number>
    isNext: Ref<boolean>
  },
  resetPlay: () => void
) {
  function toNext(clearTimer = true) {
    clearTimer && resetPlay()

    isNext.value = true
    current.value = (current.value + 1) % count.value
  }

  function toPrev(clearTimer = true) {
    clearTimer && resetPlay()

    isNext.value = false
    current.value = (current.value - 1 + count.value) % count.value
  }

  function goTo(index: number) {
    if (index < 0 || index > count.value - 1) return
    resetPlay()

    isNext.value = index > current.value
    current.value = index
  }

  return { toNext, toPrev, goTo }
}
