<template>
  <div class="row">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: var(--theme-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
}
</style>
