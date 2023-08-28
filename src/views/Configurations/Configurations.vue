<script setup lang="ts">
import { capitalizeFirstLetter } from '@/utils'
import { ref } from 'vue'
import ConfigsTable from './ConfigsTable.vue'
import { useActiveNav, useConfigurations } from './helpers.ts'

const current = ref(0)
const hiddenSameValueRow = ref(false)

const { id, configs, remarks, models } = useConfigurations(current)
const activeNav = useActiveNav(configs)

const name = capitalizeFirstLetter(id)
document.title = `小鹏${name}参数配置、小鹏${name}内饰、多少钱 | 小鹏汽车`
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div class="top-bar">
        <div class="title">
          <span>{{ name }}</span> 配置表
        </div>
        <div class="models">
          <div
            class="model-item"
            :class="{ active: index === current }"
            v-for="(item, index) in configs"
            :key="item.modelName"
            @click="current = index"
          >
            {{ item.modelName }}
          </div>
        </div>
        <div />
      </div>
      <div class="filter-bar">
        <label>
          <input type="checkbox" v-model="hiddenSameValueRow" />
          隐藏相同配置
        </label>
      </div>
    </div>
  </div>

  <template v-if="models">
    <div class="navs">
      <a
        class="nav-item"
        :class="{ active: index === activeNav }"
        :href="`#${item.title}`"
        v-for="(item, index) in models[0].children"
        :key="item.title"
        @click="activeNav = index"
      >
        {{ item.title }}
      </a>
    </div>

    <div class="table-wrapper">
      <ConfigsTable
        :models="models"
        :hidden-same-value-row="hiddenSameValueRow"
      />
      <div class="remarks">
        <p>备注：</p>
        <p>● 标准配置 ○ 选装配置 - 无此配置</p>
        <p v-for="item in remarks" :key="item">{{ item }}</p>
        <br /><br />
        <p>*全国建议零售价格仅针对私人购买，不含非私人购买或用于营运的车辆；</p>
        <p>
          *车型配置信息仅适用于一定生产月内生产的相应车型，不同生产月内生产的车型配置信息亦可能不同。电池续航里程及充电时间仅供参考，受实际使用情况影响而变化。配置表仅作为参考，实际情况应以销售店实际销售车辆为准；
        </p>
        <p>*除特别标注外，表中性能参数值均在标准配置状态下测试得出；</p>
        <p>
          *智能辅助驾驶系统无法应对所有交通、天气与路况。驾驶员必须始终注意观察当前交通状况，如果智能辅助驾驶系统未能提供适当的转向辅助或者保持适当的车距与车速，则需要驾驶员主动干预。请阅读车主手册中有关此功能的所有章节，了解该功能的限制情况。驾驶员在使用功能前应意识到这些限制情况。在交通状况复杂多变、冰雪雨路面湿滑天气、道路积水或烂泥路面、能见度较差、崎岖山路或高速路入口出口等情况下，请谨慎使用。
        </p>
      </div>
    </div>
  </template>
</template>

<style scoped>
.header {
  position: fixed;
  top: 5.6rem;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #fff;

  .wrapper {
    width: 80%;
    margin: auto;
  }
}

.top-bar {
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e6e6e8;
  background-color: #fff;
  z-index: 1;

  .title {
    color: #303030;
    font-size: 1.8rem;
    line-height: 3.4rem;

    :is(span) {
      font-family: FuturaBT-BoldItalic, serif;
      font-weight: 700;
      font-size: 2.2rem;
      margin-right: 0.4rem;
    }
  }

  .models {
    display: flex;

    .model-item {
      color: #999;
      font-size: 1.8rem;
      padding: 0 4.8rem;
      cursor: pointer;
      line-height: 5.2rem;

      &.active {
        color: #303030;
        border-bottom: 0.2rem solid #303030;
      }
    }
  }
}

.filter-bar {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
  padding-bottom: 1rem;

  :is(input[type='checkbox']) {
    width: 1.6rem;
    height: 1.6rem;
    border: 0.1rem solid #666;
    border-radius: 0.2rem;
    margin-right: 0.8rem;
    appearance: none;
    cursor: pointer;

    &:checked {
      border: none;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzVBOTYwQSIgZmlsbC1vcGFjaXR5PSIuNyIvPjxwYXRoIGQ9Ik0xMy4zNTYgNy4yNjdhLjk4OC45ODggMCAwIDEgMS4zNy4wMThjLjM1LjM1LjM2NC44OTYuMDQ4IDEuMjYybC0uMDY3LjA3LTUuNDExIDUuMTE2YS45ODguOTg4IDAgMCAxLTEuMzUgMGwtLjA2Ny0uMDctMi42NTMtMy4wNzdhLjkyNC45MjQgMCAwIDEgLjEyLTEuMzI3Ljk4OS45ODkgMCAwIDEgMS4yOTcuMDQ2bC4wNjguMDcgMS45ODIgMi4zIDQuNjYzLTQuNDA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==);
      background-size: contain;
    }
  }

  :is(label) {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
  }
}

.navs {
  position: fixed;
  top: 16rem;
  left: 10%;
  margin-top: 6rem;
  margin-left: 1.8rem;

  .nav-item {
    display: block;
    margin-bottom: 1.6rem;
    color: #999;
    font-size: 1.2rem;
    padding-left: 1.2rem;
    border-left: 0.2rem solid #fff;

    &.active {
      color: #000;
      border-color: var(--color-primary);
    }
  }
}

.table-wrapper {
  display: flex;
  flex-direction: column;
  margin: 10.6rem 10% 10rem 24%;
}

.remarks {
  margin-top: 6rem;
  font-size: 1.4rem;
}
</style>