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
  overflow: hidden;
}
</style>
