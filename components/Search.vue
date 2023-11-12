<template>
  <div class="section flex items-center gap-1">
    <div class="px-1">Search</div>
    <p class="px-2">년도</p>
    <select
      class="h-7 hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 outline-none px-3 py-1"
      v-model="year"
      @change="yyyy_mm = `${year}.${month.padStart(2, '0')}`"
    >
      <option
        v-for="year in Array.from(
          { length: 2023 - 2021 + 1 },
          (_, i) => 2023 - i
        )"
        :key="year"
      >
        {{ year }}
      </option>
    </select>
    <p class="px-2">월</p>
    <select
      class="h-7 hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 outline-none px-3 py-1"
      v-model="month"
      @change="yyyy_mm = `${year}.${month.padStart(2, '0')}`"
    >
      <option
        v-for="year in Array.from({ length: 12 }, (_, i) => i + 1)"
        :key="year"
      >
        {{ year }}
      </option>
    </select>
    <input
      type="text"
      class="h-7 outline-none hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 px-3 py-1"
      v-model="search_word"
    />
    <button
      class="h-7 hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 outline-none px-3 py-1"
      @click="submit"
    >
      조회
    </button>
    <div class="px-3">
      {{ filterFinancials.length }} / {{ financials.length }}
    </div>
  </div>
</template>
<script setup lang="ts">
const { financials, filterFinancials, getFinancials, financialsFilter } =
  useFinancial();

const year = ref<string>("2023");
const month = ref<string>("1");
const yyyy_mm = useState<string>("yyyy_mm", () => "2023.01");
const search_word = useState<string>("search_word", () => "");

const submit = () => {
  useSearch().yyyy_mm.value = `${year.value}.${month.value.padStart(2, "0")}`;
  getFinancials()
    .then((res: any) => {
      financials.value = res;
    })
    .finally(() => {
      financialsFilter();
    });
};
</script>
<style scoped lang="scss">
.section {
  flex-shrink: 0;
  overflow: hidden;
}
</style>
