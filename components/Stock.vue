<template>
  <ButtonList
    title="Stock"
    buttonLabel="name"
    :list="stocks"
    :selected="selectStock"
    @click="onClick"
  />
</template>
<script setup lang="ts">
import type { IStock } from "~/interface/IStock";

const { stocks, selectStock } = useStock();
const { financials, getFinancials } = useFinancial();

const onClick = (stock: IStock) => {
  selectStock.value = stock;
  getFinancials().then((res: any) => {
    financials.value = res;
  });
};
</script>
