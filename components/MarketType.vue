<template>
  <div class="section flex items-center bg-neutral-900">
    <div class="px-1">MarketType</div>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-neutral-700': marketType === 'KOSPI',
        'text-neutral-300': marketType === 'KOSPI',
      }"
      @click="marketType = 'KOSPI'"
    >
      <p>KOSPI</p>
    </button>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-neutral-700': marketType === 'KOSDAQ',
        'text-neutral-300': marketType === 'KOSDAQ',
      }"
      @click="marketType = 'KOSDAQ'"
    >
      <p>KOSDAQ</p>
    </button>
  </div>
</template>
<script setup lang="ts">
const marketType = useState<"KOSPI" | "KOSDAQ">("marketType");
</script>
<style scoped lang="scss">
.section {
  flex-shrink: 0;
  overflow: hidden;
}
</style>
