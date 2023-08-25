<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="content">
      <div class="title">智慧多场景座舱</div>
      <div class="subtitle">
        可根据用户多场景化的需求，将时间、地点、温度等环境感知设置为
        <br />
        触发条件，实施车辆功能的自定义组合，如：
      </div>
      <div class="case">
        <div class="case-title">上班场景 | 早8:00，车内温度35℃</div>
        <div class="case-steps">
          <div
            class="step-item"
            v-for="item in [
              '自动开启空调',
              '自动导航到公司',
              '播放新闻&音乐',
              '抵达公司提醒打卡',
              '...'
            ]"
            :key="item"
          >
            <b />
            {{ item }}
            <i />
          </div>
        </div>
      </div>
    </div>
    <video
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p12-new-1.mp4"
      autoplay
      muted
      loop
    />
  </div>
</template>

<style scoped>
.container {
  background-color: #000;
  padding: 14rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  color: #fff;
  margin-right: 8rem;

  .title {
    font-size: 3.2rem;
    font-weight: 200;
    letter-spacing: 0.4rem;
    margin-bottom: 1.6rem;
  }

  .subtitle {
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
  }

  .case {
    margin-top: 6.4rem;

    .case-title {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 2.8rem;
      letter-spacing: 0.1rem;
    }

    .case-steps {
      display: flex;
      align-items: center;
      margin-top: 1.6rem;

      .step-item {
        font-size: 1.4rem;
        font-weight: 200;
        color: hsla(0, 0%, 100%, 0.6);
        background-color: hsla(0, 0%, 100%, 0.15);
        padding-left: 1.2rem;
        padding-right: 0.7rem;
        margin-right: 1.8rem;
        line-height: 3.2rem;
        height: 3.2rem;

        &:last-child {
          padding-right: 1.2rem;
          line-height: 1.8;
        }

        &:not(:first-child) :is(b) {
          position: absolute;
          top: 0;
          left: -1.8rem;
          width: 1.8rem;
          height: 3.2rem;
          overflow: hidden;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: -1.2rem;
            border-color: hsla(0, 0%, 100%, 0.15) transparent;
            border-style: solid;
            border-width: 1.6rem 1.2rem;
          }
        }

        &:not(:last-child) :is(i) {
          position: absolute;
          top: 0;
          right: -1.8rem;
          width: 1.8rem;
          height: 3.2rem;
          overflow: hidden;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-color: transparent transparent transparent
              hsla(0, 0%, 100%, 0.15);
            border-style: solid;
            border-width: 1.6rem 1.2rem;
          }
        }
      }
    }
  }
}

:is(video) {
  width: 64rem;
  height: 48rem;
  border-radius: 0.4rem;
  object-fit: cover;
}
</style>