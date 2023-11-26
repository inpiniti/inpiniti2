<template>
  <div
    class="cursor-pointer py-2 px-4 rounded-xl shadow-xl"
    :class="{
      'bg-white text-blue-400 hover:bg-blue-400 hover:text-white': !selected,
      'bg-blue-400 text-white hover:bg-white hover:text-blue-400': selected,
    }"
  >
    {{ text }}
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  text: String,
  selected: Boolean,
});
</script>
