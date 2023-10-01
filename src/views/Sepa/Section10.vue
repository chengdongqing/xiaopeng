<script setup lang="ts">
import CarFooter from '@/components/CarFooter/CarFooter.vue'
</script>

<template>
  <CarFooter car-id="g6" :over-height="false">
    <template v-slot:remarks>
      <p>
        *如无特殊说明，以上页面显示数据均来源于小鹏实验室，仅供参考，实际表现因各车型具体配置、车辆状况等因素有所差异，以实际使用为准。
      </p>
      <p>
        *以上页面仅作功能展示，具体车型配置请留意小鹏汽车官方和销售门店，以最终实际交付车辆的情况为准。
      </p>
      <p>*页面显示“唯一”统计截止至2023年4月16日。</p>
      <p>
        1.数据来源于小鹏实验室，为搭载4C电芯特定车型使用小鹏S4超快充桩实验得出的CLTC表显续航里程，实际表现可能有所差异。
      </p>
    </template>
  </CarFooter>
</template>