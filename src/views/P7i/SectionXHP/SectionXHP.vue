<script setup lang="ts">
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="container">
    <TitleBar
      title="X-HP2.0智能热管理系统<sup>5</sup>"
      subtitle="智能分配，高效节能"
    />

    <div class="main">
      <img
        alt=""
        src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p22.jpg"
        class="img"
      />

      <div class="content-wrapper">
        <NameValueGroup
          :options="[
            { name: '冬季续航提升', value: 15, unit: '%' },
            { name: '制冷量提升', value: 88.9, unit: '%' },
            { name: '电池散热能力提升', value: 100, unit: '%' },
            { name: '充电功率提升', value: 90, unit: '%' }
          ]"
          dark-theme
          class="items"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 12rem;
}

.main {
  width: 132rem;
  margin: auto;

  .img {
    width: 100%;
    height: 58rem;
  }

  .content-wrapper {
    height: 16.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);

    .items {
      width: 99.7rem;
    }
  }
}
</style>