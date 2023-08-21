import { Ref } from 'vue'

export default function useVideoPlay(videoRef: Ref<HTMLVideoElement>) {
  function onFullscreenChange() {
    if (!document.fullscreenElement) {
      videoRef.value?.pause()
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }

  return function handleVideoPlay() {
    const video = videoRef.value as HTMLVideoElement
    video.currentTime = 0
    video.play()
    video.requestFullscreen()
    document.addEventListener('fullscreenchange', onFullscreenChange)
  }
}
