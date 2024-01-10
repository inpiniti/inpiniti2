<template>
  <div
    class="bg-blue-400 p-4 w-full relative overflow-hidden lg:h-72 flex flex-col rounded-3xl justify-between lg:gap-0 gap-4"
  >
    <img
      class="lg:hidden block absolute lg:w-40 w-44 z-10 right-0 top-0"
      src="/anya1.png"
    />
    <img
      class="hidden lg:block absolute lg:w-40 w-44 z-10 right-0 top-0"
      src="/anya2.png"
    />
    <div>
      <div class="text-xs text-white">
        인피니티 파이넨셜 어날리시스 (inpiniti financial analysis)
      </div>
      <div class="text-xl text-white font-bold">
        수집 시작 버튼을 눌러 데이터를 수집해주세요.
      </div>
    </div>
    <div class="flex gap-2 flex-col">
      <button
        class="px-4 py-2 w-fit bg-white rounded-xl shadow-xl text-blue-400"
        @click="startCollection"
      >
        수집 시작
      </button>
    </div>
  </div>
</template>
