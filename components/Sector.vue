<template>
  <div class="sector flex flex-col overflow-y-scroll w-40">
    <div class="px-3 py-1 sticky top-0 bg-neutral-900">Sector</div>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-800 py-1 whitespace-nowrap sticky top-7"
      :class="{
        'bg-neutral-700': selectSector.sectorCode == undefined,
        'text-neutral-300': selectSector.sectorCode == undefined,
      }"
      @click="onClick(<ISector>{})"
    >
      ALL
    </button>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 whitespace-nowrap"
      :class="{
        'bg-neutral-700': selectSector.sectorCode === sector.sectorCode,
        'text-neutral-300': selectSector.sectorCode === sector.sectorCode,
        'bg-neutral-900': index % 2 == 0,
      }"
      @click="onClick(sector)"
      v-for="(sector, index) in sectors"
    >
      {{ sector.sectorName }}
    </button>
  </div>
</template>
<script setup lang="ts">
import ISector from "@/interface/ISector";
import IStock from "@/interface/IStock";
const { sectors, selectSector, getSectors } = useSector();
const { stocks, selectStock, getStocks } = useStock();
const { financialsFilter } = useFinancial();

onMounted(() => {
  getSectors().then((res: any) => {
    sectors.value = res;
  });
});

const onClick = (sector: ISector) => {
  if (sector == undefined) return;
  selectSector.value = sector;
  selectStock.value = <IStock>{};
  financialsFilter();
  getStocks(sector.sectorCode).then((res: any) => {
    stocks.value = res;
  });
};
</script>
<style scoped lang="scss">
.sector {
  display: flex;
  flex-shrink: 0;
  scrollbar-width: none;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

.sector::-webkit-scrollbar {
  display: initial;
  width: 1px;
}
.sector::-webkit-scrollbar-thumb {
  background-color: rgb(14 165 233);
}
.sector::-webkit-scrollbar-track {
  background-color: black;
}
</style>
