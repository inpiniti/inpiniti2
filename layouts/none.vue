<template>
  <div class="h-screen w-7xl mx-auto flex flex-row bg-blue-50 justify-center">
    <div class="flex flex-col h-full w-24 py-4">
      <div class="py-2 px-4 font-bold text-xl">
        <font-awesome-icon :icon="['fas', 'apple-whole']" /> IFA
      </div>
      <div
        class="py-2 px-4 cursor-pointer"
        :class="nav === '' ? 'bg-blue-400 text-white rounded-r-xl' : ''"
        @click="link('')"
      >
        수집
      </div>
      <div
        class="py-2 px-4 cursor-pointer"
        :class="nav === 'learning' ? 'bg-blue-400 text-white rounded-r-xl' : ''"
        @click="link('learning')"
      >
        학습
      </div>
      <div
        class="py-2 px-4 cursor-pointer"
        :class="nav === 'analysis' ? 'bg-blue-400 text-white rounded-r-xl' : ''"
        @click="link('analysis')"
      >
        분석
      </div>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
const nav = ref("");
const link = (newNav: string) => {
  nav.value = newNav;
  useRouter().push(`/${newNav}`);
};
</script>
