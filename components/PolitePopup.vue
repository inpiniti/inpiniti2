<template>
  <div
    v-if="visible"
    class="fixed bottom-0 right-0 z-50 rounded-md bg-white p-4 shadow-lg md:bottom-5 md:right-5"
  >
    <span>May I show you something cool?</span>
    <div class="mt-4 flex gap-4">
      <button @click="onClickOk">OK</button>
      <button @click="onClickClose">Nah, thanks</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setClosed, visible } = usePolitePopup();

const onClickOk = async () => {
  setClosed();
  navigateTo("/newsletter");
};

const onClickClose = () => {
  setClosed();
};
</script>
