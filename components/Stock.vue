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
const { financialsFilter } = useFinancial();

const onClick = (stock: IStock) => {
  selectStock.value = stock;
  financialsFilter();
};
</script>
