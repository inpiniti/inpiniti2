<template>
  <div
    class="flex lg:flex-row flex-col overflow-hidden h-screen text-sm bg-neutral-800 text-neutral-400"
  >
    <MarketType />
    <Sector />
    <Column class="flex-grow">
      <MonthYearPicker />
      <Search />
      <Articel><slot /></Articel>
    </Column>
  </div>
</template>
