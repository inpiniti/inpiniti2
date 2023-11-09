<template>
  <div class="aside flex flex-col gap-1 p-1">
    <div class="flex flex-row gap-1 items-center">
      <div class=""><p class="text-sm font-normal">aside1</p></div>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header1</p>
      </button>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header2</p>
      </button>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header3</p>
      </button>
    </div>
    <div class="flex gap-1 items-center">
      <div class=""><p class="text-sm font-normal">aside2</p></div>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header1</p>
      </button>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header2</p>
      </button>
      <button class="bg-sky-500 hover:bg-sky-700 rounded-lg py-1 px-3">
        <p class="text-white text-sm font-normal">header3</p>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.aside {
  flex: 1;
  background-color: var(--theme-color);
  border: 1px solid var(--border-color);
}
</style>
