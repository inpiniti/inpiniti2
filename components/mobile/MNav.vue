<template>
  <div
    class="absolute top-0 left-0 flex-col h-full w-1/2 p-4 shrink-0 bg-white z-10 rounded-r-xl shadow-2xl gap-2"
    :class="navOpen ? 'flex' : 'hidden'"
  >
    <div class="pb-2 font-bold text-xl flex items-center justify-between">
      <div><font-awesome-icon :icon="['fas', 'apple-whole']" /> IFA</div>
      <div
        class="px-2 rounded-lg w-fit cursor-pointer"
        @click="$emit('update:navOpen', false)"
      >
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
    </div>
    <div
      class="py-2 px-4 cursor-pointer text-blue-400 w-full"
      :class="nav === '' ? 'bg-blue-400 text-white rounded-xl' : ''"
      @click="link('')"
    >
      <font-awesome-icon
        class="text-blue-300 pr-1"
        :icon="['fas', 'temperature-empty']"
      />
      수집
    </div>
    <div
      class="py-2 px-4 cursor-pointer text-blue-400 w-full"
      :class="nav === 'learning' ? 'bg-blue-400 text-white rounded-xl' : ''"
      @click="link('learning')"
    >
      <font-awesome-icon
        class="text-blue-300 pr-1"
        :icon="['fas', 'temperature-half']"
      />
      학습
    </div>
    <div
      class="py-2 px-4 cursor-pointer text-blue-400 w-full"
      :class="nav === 'analysis' ? 'bg-blue-400 text-white rounded-xl' : ''"
      @click="link('analysis')"
    >
      <font-awesome-icon
        class="text-blue-300 pr-1"
        :icon="['fas', 'temperature-three-quarters']"
      />
      분석
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const nav = ref("");
//const navOpen = useState("navOpen", () => false);
const link = (newNav: string) => {
  nav.value = newNav;
  useRouter().push(`/${newNav}`);
  //navOpen.value = false;
};
const props = defineProps<{
  navOpen?: boolean;
}>();
</script>
