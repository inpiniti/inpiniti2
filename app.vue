<template>
  <NuxtExample dir="routing/pages" :nav="nav" current-route>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtExample>
  <PolitePopup />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const router = useRouter();

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Parent (index)", to: "/parent" },
  { label: "Parent (b)", to: "/parent/b" },
  {
    label: "Keyed child",
    onClick: () =>
      router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`),
  },
  {
    label: "Non-Keyed child",
    onClick: () =>
      router.push(`/parent/static-${(Math.random() * 100).toFixed()}`),
  },
];

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
