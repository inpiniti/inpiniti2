<template>
  <tr>
    <td
      class="px-3 py-1 whitespace-nowrap"
      v-for="(value, key, index) in financial"
      :key="key"
    >
      {{ value }}
    </td>
  </tr>
</template>
<script setup lang="ts">
import type { IFinancial } from "@/interface/IFinancial";
const props = defineProps<{
  financial: IFinancial;
}>();
</script>
