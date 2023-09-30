<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'
import { options } from './resources.ts'
</script>

<template>
  <div class="container">
    <div class="card">
      <div v-for="item in options" :key="item.title">
        <div class="title">{{ item.title }}<span>(全系标配)</span></div>
        <Grid
          class="list"
          :columns="Math.min(item.children.length, 2)"
          gap="6.4rem"
        >
          <div
            class="column-item"
            v-for="(child, index) in item.children"
            :key="index"
          >
            <template v-if="!Array.isArray(child)">
              <div class="subtitle">{{ child.title }}</div>
              <div class="name" v-for="name in child.children" :key="name">
                {{ name }}
              </div>
            </template>
            <div class="name" v-else v-for="name in child" :key="name">
              {{ name }}
            </div>
          </div>
        </Grid>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #2a2f33;
  padding: 8rem 0 12rem;

  .card {
    width: 132rem;
    margin: auto;
    padding: 8rem 14rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.138),
      rgba(0, 0, 0, 0.3)
    );
    display: flex;
    justify-content: space-between;
    color: #fff;

    .title {
      font-size: 2.4rem;
      font-weight: 200;
      line-height: 3.4rem;
      letter-spacing: 0.4rem;

      :is(span) {
        margin-left: 0.8rem;
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 0.2rem;
        color: hsla(0, 0%, 100%, 0.4);
      }
    }

    .list {
      margin-top: 3.4rem;
      font-size: 1.4rem;

      .subtitle {
        line-height: 2.8rem;
        margin-bottom: 1.2rem;
      }

      .name {
        color: hsla(0, 0%, 100%, 0.6);
        font-size: 1.4rem;
        font-weight: 200;
        line-height: 2.8rem;
        margin-bottom: 1.2rem;
      }
    }
  }
}
</style>