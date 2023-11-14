<template>
  <div class="flex-shrink-0 overflow-hidden flex items-center gap-1">
    <div class="px-1">MonthYearPicker</div>
    <p class="px-2">년도</p>
    <select
      class="h-7 hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-700 text-neutral-300 outline-none px-3 py-1"
      v-model="year"
      @change="submit"
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
      @change="submit"
    >
      <option
        v-for="year in Array.from({ length: 12 }, (_, i) => i + 1)"
        :key="year"
      >
        {{ year }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
const { financials, getFinancials } = useFinancial();

const year = ref<string>("2023");
const month = ref<string>("1");

const submit = () => {
  useSearch().yyyy_mm.value = `${year.value}.${month.value.padStart(2, "0")}`;
  getFinancials().then((res: any) => {
    financials.value = res;
  });
};
</script>
