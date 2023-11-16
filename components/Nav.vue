<template>
  <ButtonList
    title="주식 분석 하는 인공지능 'INPINITI'"
    :list="pageList"
    :selected="selectedPage"
    buttonLabel="title"
    :isAll="false"
    :isRow="true"
    @click="onClick"
  >
    <font-awesome-icon :icon="['fas', 'money-bill-trend-up']" />
  </ButtonList>
</template>
<script setup lang="ts">
const pageList = ref<{ title: string; page: string }[]>([
  { title: "재무재표 리스트", page: "/" },
  { title: "AI 모듈 리스트", page: "/ai_modules" },
]);

const selectedPage = useState<{ title: string; page: string }>(
  "selectedPage",
  () => pageList.value[0]
);

const onClick = (newPage: { title: string; page: string }) => {
  selectedPage.value = newPage;
  useRouter().push(newPage.page);
};
</script>
