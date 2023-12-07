<template>
  <div class="h-screen w-full bg-blue-50">
    <div
      class="lg:max-w-screen-xl lg:mx-auto w-screen h-screen overflow-hidden flex lg:flex-row flex-col justify-center"
    >
      <DNav />
      <MNav />
      <div
        class="flex flex-col lg:gap-4 grow-[1] h-screen lg:pl-4 lg:py-4 w-full"
      >
        <MTopBar />
        <DTopBar />
        <slot />
      </div>
    </div>
  </div>
</template>
