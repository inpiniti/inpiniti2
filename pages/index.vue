<template>
  <div class="index">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="sticky top-0 bg-gray-100">
        <tr>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Phone
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 overflow-y-auto max-h-64">
        <TR v-for="financial in financials" />
        <!-- 나머지 행들 -->
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const { financials } = useFinancial();
</script>
