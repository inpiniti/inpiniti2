<template>
  <div class="section flex items-center bg-neutral-900">
    <div class="px-1">MarketType</div>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-neutral-700': marketType === 'KOSPI',
        'text-neutral-300': marketType === 'KOSPI',
      }"
      @click="onClick('KOSPI')"
    >
      <p>KOSPI</p>
    </button>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-neutral-700': marketType === 'KOSDAQ',
        'text-neutral-300': marketType === 'KOSDAQ',
      }"
      @click="onClick('KOSDAQ')"
    >
      <p>KOSDAQ</p>
    </button>
  </div>
</template>
<script setup lang="ts">
const { financials, getFinancials } = useFinancial();

const marketType = useState<"KOSPI" | "KOSDAQ" | undefined>("marketType");

const onClick = (market_type: "KOSPI" | "KOSDAQ" | undefined) => {
  marketType.value = market_type;
  getFinancials().then((res: any) => {
    financials.value = res;
  });
};
</script>
<style scoped lang="scss">
.section {
  flex-shrink: 0;
  overflow: hidden;
}
</style>
