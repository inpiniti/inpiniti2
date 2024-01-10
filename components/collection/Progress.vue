<template>
  <div class="w-full bg-white p-4 rounded-3xl flex flex-col gap-2">
    <div class="flex flex-row gap-4 items-center">
      <div
        class="flex items-center justify-center bg-blue-400 rounded-full text-white w-10 h-10"
      >
        <font-awesome-icon :icon="['fas', 'vector-square']" />
      </div>
      <div>
        <div class="font-bold text-xl">수집중인 {{ title }}</div>
        <div>{{ name }}</div>
      </div>
    </div>
    <div class="grow-[1] flex flex-col gap-1">
      <div class="flex flex-row justify-between text-xs">
        <div>{{ currentIndex }} {{ title }}</div>
        <div>총 {{ totalCount }} {{ title }}</div>
      </div>
      <div class="bg-blue-100 w-full rounded-xl flex items-center">
        <div
          class="bg-blue-400 rounded-xl flex items-center justify-center text-white whitespace-nowrap"
          :style="{ width: sectorCollectionRate + '%' }"
        >
          {{ sectorCollectionRate }} %
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  title: string;
  name: string;
  currentIndex: number;
  totalCount: number;
}>();

const sectorCollectionRate = computed(() => {
  if (props.currentIndex == undefined || props.totalCount == undefined) {
    return 0;
  } else {
    return Math.round((props.currentIndex / props.totalCount) * 100);
  }
});
</script>
