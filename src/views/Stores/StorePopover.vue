<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  storeName: string
  pictureUrl: string
  address: string
  telephone: string
  serviceTelephone: string
  businessHours: string
  weekendBusinessHours: string
  types: number[]
  status: number
  infoWindow: any
}>()

const isOpeningSoon = computed(() => props.status === 3)
const pictureUrl = computed(() =>
  isOpeningSoon.value
    ? 'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg'
    : props.pictureUrl
)
const types = computed(() => {
  const typesMap: Record<number, string> = {
    1: 'experience-center',
    2: 'service-center',
    3: 'delivery-center'
  }
  return props.types.map((item) => typesMap[item])
})

function formatTime(value: string) {
  return value
    .split('-')
    .map((item) => item.slice(0, -3))
    .join('-')
}
</script>

<template>
  <div class="container" :class="{ 'opening-soon': isOpeningSoon }">
    <div class="icon-close" @click="infoWindow.close" />

    <div class="content-wrapper">
      <img alt="" :src="pictureUrl" class="picture" />
      <div>
        <div class="name">{{ storeName }}</div>
        <div class="info">{{ address }}</div>
        <div class="info">
          营业时间：{{ formatTime(businessHours) }} (工作日),
          {{ formatTime(weekendBusinessHours) }} (周末)
        </div>
        <div class="info">
          <span v-if="telephone">
            销售热线：<a :href="`tel:${telephone}`">{{ telephone }}</a>
          </span>
          <span v-if="serviceTelephone">
            服务热线：<a :href="`tel:${serviceTelephone}`">{{
              serviceTelephone
            }}</a>
          </span>
        </div>
        <div class="labels">
          <div class="label opening-soon" v-if="isOpeningSoon" />
          <div
            class="label"
            :class="[item]"
            v-for="item in types"
            :key="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 75rem;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.7rem 0 rgba(0, 0, 0, 0.32);

  &::after {
    width: 1.5rem;
    height: 1.5rem;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 2px 2px 5px -4px #000;
    transform: translate(-50%, 0.6rem) rotate(55deg) skew(20deg);
  }

  &.opening-soon {
    width: 60rem;

    .content-wrapper .picture {
      width: 21.8rem;
      height: 16.4rem;
    }
  }
}

.icon-close {
  position: absolute;
  top: 19px;
  right: 13px;
  z-index: 1;
  height: 30px;
  width: 30px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAAwElEQVR42u2Xuw2EMBBEJ6AFu07KoByntAFuhsgXXIB0EodZ70enm5d7nrQSyw5ACCGE/BYzCpLoZULBLBcXNFSBOqOiocjFCVWglr0aDlHRPg9S0z4LU9X2B6pr+0JNtPfBZtrv4abaa4G59txJq7f2LVqx+GvhP2Rq/1mbMcVoD2weX/HnkCds9mO/Wpk7GnbvTW2uvvstGql7DgEDde/po6wOOvaCztuggz6swkhLWxotbfKamsdqKiGEEBLBC56YmYHcBMx1AAAAAElFTkSuQmCC)
    50% no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
}

.content-wrapper {
  display: flex;

  .picture {
    width: 38.6rem;
    height: 29rem;
    object-fit: cover;
    margin-right: 2rem;
  }

  .name {
    color: #303030;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 3rem;
  }

  .info {
    &,
    :is(span) {
      color: #787878;
      font-size: 1.2rem;
      user-select: text;
      cursor: text;
    }

    :is(span) {
      margin-right: 0.2rem;
    }
  }

  .labels {
    margin-top: 1rem;
    display: flex;

    .label {
      width: 6.4rem;
      height: 2.5rem;
      margin-right: 0.4rem;
      background: 50% no-repeat;
      background-size: contain;

      &.opening-soon {
        background-image: url(https://xps01.xiaopeng.com/www/public/img/icon-status-3.f38eaf3f.png);
      }

      &.experience-center {
        background-image: url(https://xps01.xiaopeng.com/www/public/img/icon-type-1.875dc7ad.png);
      }

      &.service-center {
        background-image: url(https://xps01.xiaopeng.com/www/public/img/icon-type-2.d71f10f8.png);
      }

      &.delivery-center {
        background-image: url('https://xps01.xiaopeng.com/www/public/img/icon-type-3.ff93b18c.png');
      }
    }
  }
}
</style>