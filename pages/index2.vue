<template>
  <div class="flex flex-col h-full relative">
    <div
      class="flex-grow overflow-auto scrollbar-hide scrollbar scrollbar-w scrollbar-h"
    >
      <div
        class="absolute flex items-center justify-center h-full w-full text-stone-400 backdrop-blur"
        v-if="financialsLoading"
      >
        <div class="loading">loading...</div>
      </div>
      <table class="min-w-full">
        <thead class="sticky top-0">
          <tr class="bg-neutral-900">
            <th
              class="hover:bg-neutral-600 hover:text-neutral-200 px-3 py-1 whitespace-nowrap cursor-pointer"
              v-for="field in extractedFinancials_filedlist"
              @click="onClickFiled(field)"
            >
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody>
          <TR
            :financial="financial"
            v-for="(financial, index) in extractedFinancials"
            class="hover:bg-neutral-600 hover:text-neutral-200"
            :class="{ 'bg-neutral-900': index % 2 !== 0 }"
          />
          <!-- 나머지 행들 -->
        </tbody>
      </table>
    </div>
    <Page class="h-7" v-if="useFinancial().totalPage.value > 1" />
  </div>
</template>
<script setup lang="ts">
const { financials, financialsLoading } = useFinancial();
const sortField = ref<string>("");
const sortFieldIsAscending = ref<any>({
  year: false,
  sales: false,
  operatingprofit: false,
  netincome: false,
  operatingprofitratio: false,
  netprofitratio: false,
  prevsales: false,
  prevoperatingprofit: false,
  prevnetincome: false,
  prevoperatingprofitratio: false,
  prevnetprofitratio: false,
  saleschange: false,
  operatingprofitchange: false,
  netincomechange: false,
  operatingprofitratiochange: false,
  netprofitratiochange: false,
  trdDd: false,
  isuAbbrv: false,
  isuSrtCd: false,
  mktNm: false,
  mmendClsprc: false,
  hgstClsprc: false,
  lwstClsprc: false,
  isuStd: false,
  isuKurt: false,
  coskew: false,
  isuBeta: false,
  isuAmibud: false,
  isuZeros: false,
  mmAccTrdvol: false,
  avgAccTrdvol: false,
  mmAccTrdval: false,
  avgAccTrdval: false,
  mmendclsprcchange: false,
  code: false,
  symbolCode: false,
  name: false,
  sectorCode: false,
  sectorName: false,
  nextmmendclsprc: false,
});

const extractedFinancials = computed(() => {
  // sortField가 없으면 financials.value를 그대로 반환
  return financials.value
    .map((financial) => {
      const {
        mktNm,
        sectorName,
        name,
        year,
        prevnetprofitratio,
        saleschange,
        operatingprofitchange,
        netincomechange,
        operatingprofitratiochange,
        netprofitratiochange,
        mmendclsprcchange,
      } = financial;
      return {
        mktNm,
        sectorName,
        name,
        year,
        prevnetprofitratio,
        saleschange,
        operatingprofitchange,
        netincomechange,
        operatingprofitratiochange,
        netprofitratiochange,
        mmendclsprcchange,
      };
    })
    .sort((a: any, b: any) => {
      if (sortField.value == "") {
        return 0;
      }
      if (
        typeof a[sortField.value] === "number" &&
        typeof b[sortField.value] === "number"
      ) {
        return sortFieldIsAscending.value[sortField.value]
          ? a[sortField.value] - b[sortField.value]
          : b[sortField.value] - a[sortField.value];
      } else {
        return sortFieldIsAscending.value[sortField.value]
          ? a[sortField.value].localeCompare(b[sortField.value])
          : b[sortField.value].localeCompare(a[sortField.value]);
      }
    });
});

const extractedFinancials_filedlist = computed(() => {
  let fieldList: string[] = [];
  if (extractedFinancials.value.length > 0) {
    fieldList = Object.keys(extractedFinancials.value[0]).map(
      (field) => fieldNames[field] || field
    );
  }

  return fieldList;
});

const fieldNames: { [key: string]: string } = {
  year: "연도",
  sales: "매출",
  operatingprofit: "영업이익",
  netincome: "순이익",
  operatingprofitratio: "영업이익률",
  netprofitratio: "순이익률",
  prevsales: "이전 매출",
  prevoperatingprofit: "이전 영업이익",
  prevnetincome: "이전 순이익",
  prevoperatingprofitratio: "이전 영업이익률",
  prevnetprofitratio: "이전 순이익률",
  saleschange: "매출 변동",
  operatingprofitchange: "영업이익 변동",
  netincomechange: "순이익 변동",
  operatingprofitratiochange: "영업이익률 변동",
  netprofitratiochange: "순이익률 변동",
  trdDd: "거래일",
  isuAbbrv: "종목 약어",
  isuSrtCd: "종목 코드",
  mktNm: "시장 이름",
  mmendClsprc: "월말 종가",
  hgstClsprc: "최고 종가",
  lwstClsprc: "최저 종가",
  isuStd: "표준 편차",
  isuKurt: "첨도",
  coskew: "왜도",
  isuBeta: "베타",
  isuAmibud: "아미후드 계수",
  isuZeros: "제로 수",
  mmAccTrdvol: "월 누적 거래량",
  avgAccTrdvol: "평균 누적 거래량",
  mmAccTrdval: "월 누적 거래액",
  avgAccTrdval: "평균 누적 거래액",
  mmendclsprcchange: "월말 종가 변동",
  code: "코드",
  symbolCode: "심볼 코드",
  name: "이름",
  sectorCode: "섹터 코드",
  sectorName: "섹터 이름",
  nextmmendclsprc: "다음 월말 종가",
};

const onClickFiled = (field: string) => {
  sortField.value = reversedFieldNames[field];
  sortFieldIsAscending.value[sortField.value] =
    !sortFieldIsAscending.value[sortField.value];
};

const reversedFieldNames = Object.entries(fieldNames).reduce(
  (obj: any, [key, value]) => {
    obj[value] = key;
    return obj;
  },
  {}
);
</script>
