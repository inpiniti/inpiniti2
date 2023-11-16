<template>
  <div class="flex flex-col h-full relative">
    <div
      class="flex-grow overflow-auto scrollbar-hide scrollbar scrollbar-w scrollbar-h"
    >
      <div
        class="absolute flex items-center justify-center h-full w-full text-stone-400 backdrop-blur"
        v-if="trainedModelsLoading"
      >
        <div class="loading">loading...</div>
      </div>
      <table class="min-w-full">
        <thead class="sticky top-0">
          <tr class="bg-neutral-900">
            <th
              class="hover:bg-neutral-600 hover:text-neutral-200 px-3 py-1 whitespace-nowrap cursor-pointer"
              v-for="field in trainedModelKeys"
            >
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody>
          <TR
            :financial="financial"
            v-for="(financial, index) in trainedModels"
            class="hover:bg-neutral-600 hover:text-neutral-200"
            :class="{ 'bg-neutral-900': index % 2 !== 0 }"
          />
          <!-- 나머지 행들 -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const { trainedModels, trainedModelsLoading, getTrainedModels } =
  useTrainedModel();
const trainedModelKeys = computed(() => {
  let result: string[] = [];
  if (trainedModels.value.length > 0) {
    result = Object.keys(trainedModels.value[0]);
  }
  return result;
});
onMounted(() => {
  getTrainedModels();
});
</script>
