<template>
  <div class="nav flex bg-zinc-900 overflow-x-scroll">
    <button
      class="hover:bg-stone-700 py-1 px-3 whitespace-nowrap"
      :class="{
        'bg-stone-600': selectStock?.code === stock.code,
        'bg-stone-900': selectStock?.code != stock.code,
      }"
      @click="selectStock = stock"
      v-for="stock in stocks"
    >
      <p
        class="text-sm font-normal"
        :class="{
          'text-stone-200': selectStock?.code === stock.code,
          'text-stone-500': selectStock?.code != stock.code,
        }"
      >
        {{ stock.name }}
      </p>
    </button>
    <template v-if="stocks == undefined || stocks.length == 0">
      <div class="py-1 px-3">
        <p class="text-white text-sm font-normal">
          업종이 선택이 되지 않았거나, 데이터를 불러오는 중입니다.
        </p>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
const { stocks, selectStock } = useStock();
</script>
<style scoped lang="scss">
.nav {
  flex-shrink: 0;
}

.nav::-webkit-scrollbar {
  display: initial;
  height: 2px;
}
.nav::-webkit-scrollbar-thumb {
  background-color: rgb(56, 189, 248);
}
.nav::-webkit-scrollbar-track {
  background-color: black;
}
</style>
