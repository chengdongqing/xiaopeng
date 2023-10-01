<script setup lang="ts">
import useElementScale from '@/hooks/useElementScale.ts'
import { padStartZero } from '@/utils'
import { onMounted, ref } from 'vue'

const canvasRef = ref()
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let images: HTMLImageElement[] = []
let current = 0

onMounted(async () => {
  // 加载所有图片
  const promises = []
  for (let i = 0; i <= 47; i++) {
    promises.push(
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image()
        const id = padStartZero(i)
        img.src = `https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/sequence/fuyao_000${id}.jpg`
        img.onload = () => {
          resolve(img)
        }
        img.onerror = () => {
          reject()
        }
      })
    )
  }
  images = await Promise.all(promises)

  canvas = canvasRef.value as HTMLCanvasElement
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  // 默认绘制第一张图片
  ctx.drawImage(images[current], 0, 0)
})

function handleScroll(e: WheelEvent) {
  if (!canvas || !ctx || images.length < 48) return

  // 是否向下滚动
  const goDown = e.deltaY > 0
  // 当前图片索引在0-47之间则阻止默认行为
  if ((goDown && current < 47) || (!goDown && current > 0)) {
    e.preventDefault()

    if (goDown) {
      current++
    } else {
      current--
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images[current], 0, 0)
  }
}

const containerRef = ref()
const scale = useElementScale(containerRef)
</script>

<template>
  <div class="container" ref="containerRef">
    <div
      :style="{
        width: `${scale}%`,
        height: `${scale}%`
      }"
    >
      <div
        class="title"
        :style="{
          transform: `translate3d(0, ${100 - scale}px, 0)`,
          opacity: scale / 100
        }"
      >
        小鹏智能的速度与加速度，遥遥领先
      </div>

      <canvas
        ref="canvasRef"
        class="canvas"
        width="1920"
        height="1080"
        @wheel="handleScroll"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    z-index: 1;
    position: absolute;
    top: 12rem;
    left: 0;
    right: 0;
    text-align: center;
    font-family: HYYakuHei, serif;
    font-size: 3.2rem;
    letter-spacing: 0.4rem;
    color: #fff;
  }

  .canvas {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
}
</style>