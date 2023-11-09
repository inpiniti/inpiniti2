<template>
  <div class="column">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
