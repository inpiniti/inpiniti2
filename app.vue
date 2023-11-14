<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
  <PolitePopup />
</template>
<script setup lang="ts">
const layout = "default";

import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const setVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  };

  window.addEventListener("resize", setVh);
  setVh();

  onUnmounted(() => {
    window.removeEventListener("resize", setVh);
  });
});
</script>

<style>
.h-screen {
  height: calc(var(--vh, 1vh) * 100);
}
</style>
