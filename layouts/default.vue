<template>
  <div
    class="flex lg:flex-row flex-col flex-grow overflow-hidden h-screen text-sm bg-neutral-800 text-neutral-400"
  >
    <MarketType />
    <Sector />
    <Stock />
    <Column class="flex-grow">
      <MonthYearPicker />
      <Search />
      <Articel><slot /></Articel>
    </Column>
  </div>
</template>
