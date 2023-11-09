<template>
  <div class="aside flex flex-col flex-grow">
    <div class="flex flex-row items-center bg-slate-900">
      <button
        class="hover:bg-slate-700 py-1 px-3 whitespace-nowrap"
        :class="{
          'bg-slate-600': marketType === 'kospi',
          'bg-slate-900': marketType != 'kospi',
        }"
        @click="marketType = 'kospi'"
      >
        <p
          class="text-sm font-normal"
          :class="{
            'text-slate-200': marketType === 'kospi',
            'text-slate-500': marketType != 'kospi',
          }"
        >
          kospi
        </p>
      </button>
      <button
        class="hover:bg-slate-700 py-1 px-3 whitespace-nowrap"
        :class="{
          'bg-slate-600': marketType === 'kosdaq',
          'bg-slate-900': marketType != 'kosdaq',
        }"
        @click="marketType = 'kosdaq'"
      >
        <p
          class="text-sm font-normal"
          :class="{
            'text-slate-200': marketType === 'kosdaq',
            'text-slate-500': marketType != 'kosdaq',
          }"
        >
          kosdaq
        </p>
      </button>
    </div>
    <div class="flex gap-1 items-center bg-gray-950 text-gray-400">
      <p class="px-2">년도</p>
      <select
        class="hover:bg-gray-600 bg-gray-700 text-gray-200 outline-none px-3 py-1"
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
        class="hover:bg-gray-600 bg-gray-700 text-gray-200 outline-none px-3 py-1"
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
      <button
        class="h-7 hover:bg-gray-600 bg-gray-700 text-gray-200 px-3"
        @click="submit"
      >
        조회
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const { financials, getFinancials } = useFinancial();
const marketType = useState<"kospi" | "kosdaq">("marketType");
const year = ref<string>("2023");
const month = ref<string>("1");
const yyyy_mm = useState<string>("yyyy_mm", () => "2023.01");
const submit = () => {
  yyyy_mm.value = `${year.value}.${month.value.padStart(2, "0")}`;
  alert(`${marketType.value} ${yyyy_mm.value}`);
  getFinancials().then((res: any) => {
    financials.value = res;
  });
};
</script>
