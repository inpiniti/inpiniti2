<template>
  <div
    class="h-full overflow-auto relative scrollbar-hide scrollbar scrollbar-w scrollbar-h"
  >
    <div
      class="absolute top-0, bottom-0, left-0, right-0 flex items-center justify-center h-full w-full text-stone-400"
      :class="{ 'backdrop-blur': financialsLoading }"
      v-if="financialsLoading"
    >
      <div class="loading">loading...</div>
    </div>
    <table class="min-w-full">
      <thead class="sticky top-0">
        <tr class="hover:bg-neutral-600 hover:text-neutral-200 bg-neutral-900">
          <th
            class="px-3 py-1 whitespace-nowrap"
            v-for="field in financial_filed"
          >
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <TR
          :financial="financial"
          v-for="(financial, index) in filterFinancials"
          class="hover:bg-neutral-600 hover:text-neutral-200"
          :class="{ 'bg-neutral-900': index % 2 !== 0 }"
        />
        <!-- 나머지 행들 -->
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const financial_filed = ref<string[]>([
  "연도",
  "매출",
  "영업이익",
  "순이익",
  "영업이익률",
  "순이익률",
  "이전 매출",
  "이전 영업이익",
  "이전 순이익",
  "이전 영업이익률",
  "이전 순이익률",
  "매출 변동",
  "영업이익 변동",
  "순이익 변동",
  "영업이익률 변동",
  "순이익률 변동",
  "거래일",
  "종목 약어",
  "종목 코드",
  "시장 이름",
  "월말 종가",
  "최고 종가",
  "최저 종가",
  "표준 편차",
  "첨도",
  "왜도",
  "베타",
  "아미후드 계수",
  "제로 수",
  "월 누적 거래량",
  "평균 누적 거래량",
  "월 누적 거래액",
  "평균 누적 거래액",
  "월말 종가 변동",
  "코드",
  "심볼 코드",
  "이름",
  "섹터 코드",
  "섹터 이름",
  "다음 월말 종가",
]);
const { filterFinancials, financialsLoading } = useFinancial();
</script>
