<template>
  <div class="header flex bg-zinc-800 overflow-x-scroll">
    <button
      class="hover:bg-zinc-700 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-zinc-600': selectSector.sectorCode === sector.sectorCode,
        'bg-zinc-800': selectSector.sectorCode != sector.sectorCode,
      }"
      @click="onClick(sector)"
      v-for="sector in sectors"
    >
      <p
        class="text-sm font-normal"
        :class="{
          'text-zinc-200': selectSector.sectorCode === sector.sectorCode,
          'text-zinc-500': selectSector.sectorCode != sector.sectorCode,
        }"
      >
        {{ sector.sectorName }}
      </p>
    </button>
    <template v-if="sectors == undefined || sectors.length == 0">
      <div class="py-1 px-3">
        <p class="text-white text-sm font-normal">데이터 불러오는 중...</p>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import ISector from "@/interface/ISector";
const { sectors, selectSector, getSectors } = useSector();
const { stocks, getStocks } = useStock();
onMounted(() => {
  getSectors().then((res: any) => {
    sectors.value = res;
  });
});
const onClick = (sector: ISector) => {
  selectSector.value = sector;
  getStocks(sector.sectorCode).then((res: any) => {
    stocks.value = res;
  });
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  flex-shrink: 0;
  scrollbar-width: none;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

.header::-webkit-scrollbar {
  display: initial;
  height: 1px;
}
.header::-webkit-scrollbar-thumb {
  background-color: rgb(56, 189, 248);
}
.header::-webkit-scrollbar-track {
  background-color: black;
}
</style>
