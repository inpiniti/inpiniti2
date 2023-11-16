<template>
  <div
    class="flex flex-col overflow-hidden h-screen text-sm bg-neutral-800 text-neutral-400"
  >
    <Nav />
    <div
      class="flex lg:flex-row flex-col overflow-y-scroll scrollbar scrollbar-w scrollbar-h flex-grow"
    >
      <MarketType />
      <Sector />
      <Column class="flex-grow">
        <MonthYearPicker />
        <Search />
        <Articel><slot /></Articel>
      </Column>
    </div>
  </div>
</template>
<script setup lang="ts">
// id, `algorithm`, accuracy
</script>
