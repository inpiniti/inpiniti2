<template>
  <div
    class="rounded-full flex items-center justify-center"
    :class="{
      'h-8 w-8 text-xs': size == 'xs',
      'h-9 w-9 text-sm': size == 'sm',
      'h-10 w-10 text-lg': size == 'lg',
      'h-11 w-11 text-xl': size == 'xl',
      'bg-blue-400 text-white': type == 'regular',
      'bg-white text-blue-400': type == 'solid',
    }"
  >
    <font-awesome-icon :icon="['fas', icon]" />
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  icon: string;
  size: "xs" | "sm" | "lg" | "xl";
  type: "solid" | "regular";
}>();
</script>
