<template>
  <div class="lg:flex hidden shrink-0">
    <div class="flex flex-row gap-4 items-center w-full">
      <div
        class="bg-gray-100 rounded-md text-xs p-2 gap-4 flex items-center h-full grow-[1]"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <input
          class="outline-none bg-transparent w-full"
          type="text"
          placeholder="종목을 입력해주세요."
        />
      </div>
      <div class="flex flex-row gap-4 items-center h-fit shrink-0">
        <div>
          <div class="text-xs">aaa@gmail.com</div>
          <div>홍길동님</div>
        </div>
        <div
          class="w-8 h-8 bg-blue-400 rounded-full overflow-hidden text-white flex justify-center text-3xl pt-2"
        >
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
