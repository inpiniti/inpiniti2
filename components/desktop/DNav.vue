<template>
  <div class="lg:flex hidden flex-col h-full w-24 py-4 shrink-0">
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
</template>
<script setup lang="ts">
const nav = ref("");
const link = (newNav: string) => {
  nav.value = newNav;
  console.log(nav.value);
  useRouter().push(`/${newNav}`);
};
</script>
