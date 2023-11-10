<template>
  <Row class="h-screen text-sm bg-neutral-800 text-neutral-400">
    <Sector />
    <Stock />
    <Column class="flex-grow">
      <MarketType />
      <Search />
      <Articel><slot /></Articel>
    </Column>
  </Row>
</template>
