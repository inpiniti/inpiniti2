<template>
  <div
    class="flex lg:flex-col flex-row lg:w-40 w-full overflow-y-scroll scrollbar scrollbar-w scrollbar-h flex-shrink-0"
  >
    <div class="px-3 py-1 sticky top-0 left-0 bg-neutral-900 z-10">
      {{ title }}
    </div>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 whitespace-nowrap sticky top-7 px-3"
      :class="{
        'bg-neutral-600': selected == undefined,
        'text-neutral-200': selected == undefined,
      }"
      @click="emit('click', undefined)"
    >
      ALL
    </button>
    <button
      class="hover:bg-neutral-600 hover:text-neutral-200 py-1 whitespace-nowrap px-3"
      :class="{
        'bg-neutral-600': selected == item,
        'text-neutral-200': selected == item,
        'bg-neutral-900': index % 2 !== 0 && selected != item,
      }"
      @click="emit('click', item)"
      v-for="(item, index) in list"
    >
      <p>
        {{ buttonLabel ? item[buttonLabel] : item }}
      </p>
    </button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["click"]);

const props = defineProps<{
  title: string;
  buttonLabel?: string;
  list: Array<any>;
  selected: any;
}>();
</script>
