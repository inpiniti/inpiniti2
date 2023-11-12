<template>
  <ButtonList
    title="Sector"
    buttonLabel="sectorName"
    :list="sectors"
    :selected="selectSector"
    @click="onClick"
  />
</template>
<script setup lang="ts">
import type { ButtonList } from "#build/components";
import type { ISector } from "@/interface/ISector";
import type { IStock } from "@/interface/IStock";
const { sectors, selectSector, getSectors } = useSector();
const { stocks, selectStock, getStocks } = useStock();
const { financialsFilter } = useFinancial();

onMounted(() => {
  getSectors().then((res: any) => {
    sectors.value = res;
  });
});

const onClick = (sector: ISector) => {
  selectSector.value = sector;
  selectStock.value = undefined;
  if (sector == undefined) return;
  financialsFilter();
  getStocks(sector.sectorCode).then((res: any) => {
    stocks.value = res;
  });
};
</script>
