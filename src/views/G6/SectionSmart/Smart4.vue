<script setup lang="ts">
import FullSceneVoiceV2 from '@/components/FullSceneVoiceV2/FullSceneVoiceV2.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import { voiceOptions } from './resources.ts'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="Xmart OS 4.0 车载智能系统"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p12-new.jpg"
      static
      style="height: 132.6rem; min-height: 120vh"
    />

    <FullSceneVoiceV2 :options="voiceOptions" style="bottom: 6.4rem" />
  </div>
</template>