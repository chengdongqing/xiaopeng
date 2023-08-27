<script setup lang="ts">
import { capitalizeFirstLetter, formatAmount } from '@/utils'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ConfigurationProps } from './index.ts'

const configurations = ref<ConfigurationProps[]>([])
const remarks = ref<string[]>([])
const current = ref(0)

const { params } = useRoute()
const id = params.id as string
const path = `./options/${id}.ts`
import(path).then((res) => {
  configurations.value = res.configurations
  remarks.value = res.remarks
})

const models = computed(() => {
  return configurations.value[current.value]?.children
})

function displayValue({
  value,
  optional
}: {
  value: string | boolean
  optional: boolean | number
}) {
  if (typeof value === 'string') {
    return value
  }
  if (value) {
    return '●'
  }
  if (!value && optional) {
    if (typeof optional === 'number') {
      return `○+${optional}`
    }
    return '○'
  }
  return '—'
}

function isSameValue(index: number, index1: number, index2: number) {
  const arr: any[] =
    models.value?.map((item) => {
      return index2 === undefined
        ? item.children[index].children[index1]
        : item.children[index].children[index1].children[index2]
    }) || []

  if (typeof arr[0].value === 'boolean') {
    return false
  }
  return arr?.every((item: any) => item.value === arr[0].value)
}
</script>

<template>
  <div class="container" v-if="models">
    <div class="header">
      <div class="title">
        <span>{{ capitalizeFirstLetter(id) }}</span> 配置表
      </div>
      <div class="models">
        <div class="model-item active">580</div>
        <div class="model-item">755</div>
        <div class="model-item">700</div>
      </div>
      <div />
    </div>

    <div class="filter-bar">
      <label><input type="checkbox" /> 隐藏相同配置</label>
    </div>

    <div class="main">
      <div class="navs">
        <a
          class="nav-item"
          :class="{ active: index === 1 }"
          :href="`#${item.title}`"
          v-for="(item, index) in models[0].children"
          :key="item.title"
        >
          {{ item.title }}
        </a>
      </div>
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <td />
              <td v-for="item in models" :key="item.subModelName">
                {{ item.subModelName }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="price">
              <td>全国建议零售价</td>
              <td v-for="item in models" :key="item.subModelName">
                ¥{{ formatAmount(item.price) }}
              </td>
            </tr>
            <template
              v-for="(item, index) in models[0].children"
              :key="item.title"
            >
              <tr class="title" :id="item.title">
                <td :colspan="models.length + 1">{{ item.title }}</td>
              </tr>
              <template
                v-for="(item1, index1) in item.children"
                :key="item1.title || item1.name"
              >
                <template v-if="item1.children">
                  <tr class="subtitle">
                    <td :colspan="models.length + 1">{{ item1.title }}</td>
                  </tr>
                  <tr
                    v-for="(item2, index2) in item1.children"
                    :key="item2.name"
                  >
                    <td v-html="item2.name" />
                    <template v-if="isSameValue(index, index1, index2)">
                      <td :colspan="models.length">
                        {{
                          displayValue(
                            models[0].children[index].children[index1].children[
                              index2
                            ]
                          )
                        }}
                      </td>
                    </template>
                    <td
                      v-else
                      v-for="(_, index3) in models.length"
                      :key="index3"
                    >
                      {{
                        displayValue(
                          models[index3].children[index].children[index1]
                            .children[index2]
                        )
                      }}
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td v-html="item1.name" />
                  <template v-if="isSameValue(index, index1)">
                    <td :colspan="models.length">
                      {{
                        displayValue(models[0].children[index].children[index1])
                      }}
                    </td>
                  </template>
                  <td v-else v-for="(_, index2) in models.length" :key="index2">
                    {{
                      displayValue(
                        models[index2].children[index].children[index1]
                      )
                    }}
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>

        <div class="remarks">
          <p>备注：</p>
          <p>● 标准配置 ○ 选装配置 - 无此配置</p>
          <p v-for="item in remarks" :key="item">{{ item }}</p>
          <br /><br />
          <p>
            *全国建议零售价格仅针对私人购买，不含非私人购买或用于营运的车辆；
          </p>
          <p>
            *车型配置信息仅适用于一定生产月内生产的相应车型，不同生产月内生产的车型配置信息亦可能不同。电池续航里程及充电时间仅供参考，受实际使用情况影响而变化。配置表仅作为参考，实际情况应以销售店实际销售车辆为准；
          </p>
          <p>*除特别标注外，表中性能参数值均在标准配置状态下测试得出；</p>
          <p>
            *智能辅助驾驶系统无法应对所有交通、天气与路况。驾驶员必须始终注意观察当前交通状况，如果智能辅助驾驶系统未能提供适当的转向辅助或者保持适当的车距与车速，则需要驾驶员主动干预。请阅读车主手册中有关此功能的所有章节，了解该功能的限制情况。驾驶员在使用功能前应意识到这些限制情况。在交通状况复杂多变、冰雪雨路面湿滑天气、道路积水或烂泥路面、能见度较差、崎岖山路或高速路入口出口等情况下，请谨慎使用。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  margin: auto;
}

.header {
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

  :is(label) {
    display: flex;
    gap: 0.4rem;
    cursor: pointer;
  }
}

.main {
  display: flex;

  .navs {
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
    flex: 1;
    padding-left: 12rem;
  }

  .table {
    align-self: flex-start;
    border-collapse: collapse;

    :is(thead) :is(td) {
      color: #303030;
      font-size: 1.8rem !important;
    }

    :is(tr) {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #e6e6e8;
      }

      :is(td) {
        padding: 1.2rem 2.4rem;
        font-size: 1.4rem;

        &:not(:first-child) {
          width: 40%;
          text-align: center;
        }
      }

      &.price {
        :is(td):not(:first-child) {
          color: var(--color-primary);
          font-size: 1.6rem;
        }
      }

      &.title {
        height: 6rem;
        background-color: #f8f8f8;

        :is(td) {
          font-size: 1.8rem;
          font-weight: bold;
        }
      }

      &.subtitle :is(td) {
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
}

.remarks {
  margin: 6rem 0 8rem;
  font-size: 1.4rem;
}
</style>