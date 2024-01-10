<template>
  <UCard class="flex flex-col">
    <template #header class="shrink-0">
      <Placeholder class="h-8 flex justify-between">
        <p>INPINITI ORICON</p>
        <div class="flex gap-4">
          <ULink
            to="/oricon/table"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            ><font-awesome-icon :icon="['fas', 'table-list']" />
            table
          </ULink>
          <ULink
            to="/oricon/chart"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            ><font-awesome-icon :icon="['fas', 'chart-line']" />
            chart
          </ULink>
        </div>
      </Placeholder>
    </template>

    <div class="overflow-auto grow-[1]">
      <NuxtPage />
    </div>
  </UCard>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

definePageMeta({
  layout: "empty",
});
</script>
