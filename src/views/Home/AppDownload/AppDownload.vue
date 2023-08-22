<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import contents from './contents.ts'
</script>

<template>
  <div class="container">
    <TitleBar title="即刻下载小鹏APP" subtitle="探索小鹏世界，更多精彩呈现" />

    <div class="qrcode-wrapper">
      <img
        class="img"
        src="https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg"
        alt="二维码"
      />
    </div>
    <div class="remark">扫码下载</div>
    <div class="info">
      <p>版本： Andorid 4.33.0/iOS 4.33.0</p>
      <p>
        <a
          href="https://www.xiaopeng.com/help/privacy.html?currentContentId=4267"
          target="_blank"
        >
          隐私政策
        </a>
        |
        <a href="https://www.xiaopeng.com/content/3867.html" target="_blank">
          权限说明
        </a>
        |
        <a
          href="https://dl.xiaopeng.com/xp-app/apk/gw32W/XP_MobileAPP_Android_gw32W.apk"
          target="_blank"
        >
          下载32位版本
        </a>
      </p>
    </div>

    <Grid columns="3" item-width="41.8rem" gap="3.2rem">
      <div class="content-item" v-for="item in contents" :key="item.name">
        <ScalableImage :src="item.pictureUrl" />
        <div class="name">{{ item.name }}</div>
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-background);
  padding-bottom: 12rem;
  text-align: center;
}

.qrcode-wrapper {
  margin: -8.7rem auto 0;
  width: 15.4rem;
  height: 15.4rem;
  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: #fff;

  .img {
    width: 100%;
    height: 100%;
    border: 0.2rem solid var(--color-primary);
  }
}

.remark {
  color: #666;
  font-size: 1.4rem;
  margin-top: 0.8rem;
}

.info {
  color: #666;
  font-size: 1.2rem;
  margin-top: 1.6rem;
  margin-bottom: 4.8rem;

  :is(a) {
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
}

.content-item .name {
  position: absolute;
  bottom: 2.4rem;
  left: 3.2rem;
  font-size: 1.6rem;
  font-weight: 200;
  color: #fff;
}
</style>