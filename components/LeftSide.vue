<template>
  <div class="left-side">nav</div>
</template>
<script setup lang="ts">
const { sectors, pending, error, list } = useSector();
onMounted(() => {
  list();
});
</script>
<style scoped lang="scss">
.left-side-item {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: var(--theme-color);
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: var(--hover-menu-bg);
  }
}
</style>
