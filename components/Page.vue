<template>
  <ButtonList
    class="w-full bg-neutral-800"
    :list="generatePageNumbers"
    :selected="page"
    @click="onClick"
    :isRow="true"
    :isAll="false"
  />
</template>
<script setup lang="ts">
const page = ref<number>(1);

// 페이지 번호를 배열로 만들어주는 함수
const generatePageNumbers = computed((): number[] => {
  const new_total_page = useFinancial().totalPage.value;
  return Array.from({ length: new_total_page }, (_, i) => i + 1);
});

const onClick = (newPage: number) => {
  page.value = newPage;
  useFinancial().getFinancials(page.value);
};
</script>
