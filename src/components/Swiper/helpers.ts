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
    if (clearTimer) {
      resetPlay()
    }

    isNext.value = true
    if (current.value < count.value - 1) {
      current.value++
    } else {
      current.value = 0
    }
  }

  function toPrev(clearTimer = true) {
    if (clearTimer) {
      resetPlay()
    }

    isNext.value = false
    if (current.value > 0) {
      current.value--
    } else {
      current.value = count.value - 1
    }
  }

  function goTo(index: number) {
    if (index < 0 || index > count.value - 1) return
    resetPlay()

    isNext.value = index > current.value
    current.value = index
  }

  return { toNext, toPrev, goTo }
}
