<script setup lang="ts">
import options from './options'
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="security-part" v-for="item in options" :key="item.title">
        <div class="title">{{ item.title }}<span>(全系标配)</span></div>
        <div
          class="list"
          :class="{ 'multiple-columns': item.children.length > 1 }"
        >
          <div v-for="(children, index) in item.children" :key="index">
            <div class="name" v-for="name in children" :key="name">
              {{ name }}
            </div>
          </div>
        </div>
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
      display: flex;
      justify-content: space-between;
      margin-top: 3.4rem;

      &.multiple-columns {
        width: 54.5rem;
      }

      .name {
        font-size: 1.4rem;
        font-weight: 200;
        line-height: 2.8rem;
        margin-bottom: 1.6rem;
      }
    }
  }
}
</style>