<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import X from '@/components/Icons/X.vue'
</script>

<template>
  <div class="container">
    <div style="height: 100%">
      <video
        src="https://xps02.xiaopeng.com/cms/material/video/2023/06-29/video_20230629100416_00416.mp4"
        class="video"
        autoplay
        muted
        loop
      />
      <div class="content-wrapper">
        <X class="x" />
        <div class="title">
          小鹏<span class="en">G6 </span> 超智驾轿跑<span class="en">SUV</span>
          <br />
          成熟登场
        </div>
        <div class="btn-group">
          <Button class="btn" color="#fff" arrow arrow-color="#fff">
            了解G6
          </Button>
          <Button class="btn right" color="#fff" arrow> 预约试驾 </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  position: absolute;
  left: 15%;
  top: 30%;

  .x {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    left: 0;
    top: 0;
    transform: translate(-100%, -30%);
  }

  .title {
    color: #fff;
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    margin-bottom: 1.6rem;
    line-height: 1.5;

    .en {
      font-family: BasisGrotesque-Regular, serif;
    }
  }
}

.btn-group {
  .btn {
    margin-top: 1.6rem;
    margin-right: 2rem;

    &.right {
      background-color: #fff;
      color: #000;

      .icon {
        color: var(--color-primary);
      }

      &:hover .icon {
        color: #fff;
      }
    }

    .icon {
      margin-left: 0.4rem;
    }
  }
}
</style>