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
const { sectors, selectSector, getSectors } = useSector();
//const { stocks, selectStock, getStocks } = useStock();
const { getFinancials } = useFinancial();

onMounted(() => {
  getSectors().then((res: any) => {
    sectors.value = res;
  });
});

const onClick = (sector: ISector) => {
  selectSector.value = sector;
  //selectStock.value = undefined;
  getFinancials();
  if (sector == undefined) return;
  //getStocks(sector.sectorCode).then((res: any) => {
  //  stocks.value = res;
  //});
};
</script>
