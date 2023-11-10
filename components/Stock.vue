<template>
  <div class="stock flex flex-col overflow-y-scroll w-40">
    <div class="px-3 py-1 sticky top-0 bg-neutral-900">Stock</div>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 whitespace-nowrap"
      :class="{
        'bg-neutral-700': selectStock?.code === stock.code,
        'text-neutral-300': selectStock?.code === stock.code,
        'bg-neutral-900': index % 2 !== 0,
      }"
      @click="onClick(stock)"
      v-for="(stock, index) in stocks"
    >
      <p>
        {{ stock.name }}
      </p>
    </button>
  </div>
</template>
<script setup lang="ts">
import IStock from "~/interface/IStock";

const { stocks, selectStock } = useStock();
const { financialsFilter } = useFinancial();

const onClick = (stock: IStock) => {
  selectStock.value = stock;
  financialsFilter();
};
</script>
<style scoped lang="scss">
.stock {
  flex-shrink: 0;
}

.stock::-webkit-scrollbar {
  display: initial;
  width: 1px;
}
.stock::-webkit-scrollbar-thumb {
  background-color: rgb(14 165 233);
}
.stock::-webkit-scrollbar-track {
  background-color: black;
}
</style>
