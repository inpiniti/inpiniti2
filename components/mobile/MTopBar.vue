<template>
  <div class="lg:hidden flex w-full items-center p-3 gap-3">
    <div class="shrink-0 px-2 py-1 cursor-pointer" @click="navOpen = true">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div class="grow-[1] flex flex-row gap-4 items-center h-fit">수집</div>
    <div class="shrink-0 flex flex-row gap-4 items-center h-fit">
      <div class="flex flex-col items-end">
        <div class="text-xs text-gray-400 font-thin">aaa@gmail.com</div>
        <div>홍길동님</div>
      </div>
      <div
        class="w-8 h-8 bg-blue-400 rounded-full overflow-hidden text-white flex justify-center text-3xl pt-2"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const navOpen = useState("navOpen", () => false);
</script>
