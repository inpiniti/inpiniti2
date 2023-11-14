<template>
  <div class="flex-shrink-0 overflow-hidden flex items-center gap-1">
    <div class="px-1">Search</div>
    <input
      type="text"
      class="h-7 outline-none hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 px-3 py-1"
      v-model="search_word"
      @keyup.enter="submit"
    />
    <button
      class="h-7 hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 outline-none px-3 py-1"
      @click="submit"
    >
      조회
    </button>
  </div>
</template>
<script setup lang="ts">
const { financials, getFinancials } = useFinancial();

const search_word = useState<string>("search_word", () => "");

const submit = () => {
  getFinancials().then((res: any) => {
    financials.value = res;
  });
};
</script>
