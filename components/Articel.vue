<template>
  <div class="articel"><slot /></div>
</template>
<style scoped lang="scss">
.articel {
  flex-grow: 1;
  background-color: var(--theme-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
}
</style>
