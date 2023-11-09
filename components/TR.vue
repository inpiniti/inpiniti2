<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{ financial.year }}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ financial.sales }}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        >{{ financial.operatingprofit }}</span
      >
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ financial.netincome }}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ financial.operatingprofitratio }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ financial.netprofitratio }}</td>
  </tr>
</template>
<script setup lang="ts">
import IFinancial from "@/interface/IFinancial";
const props = defineProps<{
  financial: IFinancial;
}>();
</script>
