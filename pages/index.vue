<template>
  <div class="h-screen py-4 flex flex-col gap-4 w-7xl mx-auto">
    <div class="flex w-full gap-4 shrink-0 px-4">
      <div class="flex flex-col gap-4 overflow-hidden relative w-7/12">
        <img class="absolute bg-img-1 w-80" src="/anya1.webp" />
        <div class="flex flex-row gap-4 items-center">
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
        <div class="bg-blue-400 p-4 gap-40 flex flex-col rounded-xl">
          <div>
            <div class="text-xs text-white">
              인피니티 파이넨셜 어날리시스 (inpiniti financial analysis)
            </div>
            <div class="text-xl text-white font-bold">
              인공지능으로 분석하기
            </div>
            <div class="text-xl text-white font-bold">
              시장, 기간, 알고리즘을 선택하여 분석을 시작하세요.
            </div>
          </div>
          <div class="flex gap-4">
            <button
              class="rounded-md py-2 px-4 flex gap-4 shadow-xl items-center"
              :class="
                predictloading
                  ? 'bg-gray-400 text-white'
                  : 'bg-white text-blue-400 hover:bg-blue-400 hover:text-white'
              "
              @click="predictModel"
              :disabled="predictloading"
            >
              <font-awesome-icon
                :icon="['fas', predictloading ? 'spinner' : 'play']"
                :spin="predictloading"
              />
              {{ predictloading ? "분석중..." : "분석하기" }}
            </button>
            <button
              class="rounded-md py-2 px-4 flex gap-4 shadow-xl items-center"
              :class="
                ailoading
                  ? 'bg-gray-400 text-white'
                  : 'bg-white text-blue-400 hover:bg-blue-400 hover:text-white'
              "
              @click="trainModel"
              :disabled="ailoading"
            >
              <font-awesome-icon
                :icon="['fas', ailoading ? 'spinner' : 'play']"
                :spin="ailoading"
              />
              {{ ailoading ? "학습중..." : "학습시키기" }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="border-4 border-blue-400 w-5/12 rounded-xl p-4 relative overflow-hidden flex justify-end"
      >
        <div class="flex flex-col gap-2 items-end z-10">
          <div class="text-xs">조건</div>
          <div class="font-bold">시장</div>
          <div class="flex gap-4">
            <Button
              text="all"
              :selected="시장 == 'all'"
              @click="시장 = 'all'"
            />
            <Button
              text="코스피"
              :selected="시장 == 'KOSPI'"
              @click="시장 = 'KOSPI'"
            />
            <Button
              text="코스닥"
              :selected="시장 == 'KOSDAQ'"
              @click="시장 = 'KOSDAQ'"
            />
          </div>
          <div class="font-bold">분석 기간</div>
          <div class="flex gap-4">
            <Button text="3달" :selected="기간 == '3'" @click="기간 = '3'" />
            <Button text="1년" :selected="기간 == '12'" @click="기간 = '12'" />
            <Button
              text="2015 ~"
              :selected="기간 == 'all'"
              @click="기간 = 'all'"
            />
          </div>
          <div class="font-bold flex">알고리즘</div>
          <div class="flex gap-4">
            <Button
              text="Deep Learning"
              :selected="알고리즘 == 'Deep Learning'"
              @click="알고리즘 = 'Deep Learning'"
            />
            <Button
              text="Linear"
              :selected="알고리즘 == 'Linear'"
              @click="알고리즘 = 'Linear'"
            />
            <Button
              text="Ridge"
              :selected="알고리즘 == 'Ridge'"
              @click="알고리즘 = 'Ridge'"
            />
            <Button
              text="Lasso"
              :selected="알고리즘 == 'Lasso'"
              @click="알고리즘 = 'Lasso'"
            />
          </div>
          <div class="flex gap-4">
            <Button
              text="ElasticNet"
              :selected="알고리즘 == 'ElasticNet'"
              @click="알고리즘 = 'ElasticNet'"
            />
            <Button
              text="Decision Tree"
              :selected="알고리즘 == 'Decision Tree'"
              @click="알고리즘 = 'Decision Tree'"
            />
            <Button
              text="Random Forest"
              :selected="알고리즘 == 'Random Forest'"
              @click="알고리즘 = 'Random Forest'"
            />
          </div>
        </div>
        <img class="absolute bg-img-2 w-72" src="/anya2.webp" />
      </div>
    </div>
    <div class="relative flex overflow-hidden grow-[1]">
      <img class="bg-img-3 absolute w-96" src="/anya3.png" />
      <div class="flex w-full gap-52">
        <div class="whitespace-nowrap text-xs px-4">종목 리스트</div>
        <div
          class="w-full flex flex-col gap-4 overflow-y-scroll scrollbar-hide px-4"
        >
          <template v-if="!!predictlist">
            <div
              class="w-full bg-blue-400 text-white hover:bg-white hover:text-blue-400 p-4 rounded-xl flex gap-4 shadow-xl cursor-pointer"
              @click="modalopen = true"
              v-for="l in predictlist"
            >
              <div class="whitespace-nowrap">{{ l.isu_abbrv }}</div>
              <div class="whitespace-nowrap">{{ l.isu_srt_cd }}</div>
              <div class="whitespace-nowrap">{{ l.mkt_nm }}</div>
              <div class="whitespace-nowrap">{{ l.year }}.{{ l.month }}</div>
              <div
                class="w-full bg-white relative border-2 border-white flex justify-end"
              >
                <div class="text-blue-400">10.4%</div>
                <div class="w-1/2 bg-blue-400 absolute left-0 top-0 text-white">
                  {{ l.next_mmend_clsprc_change }}%
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="modalopen"
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl p-4 backdrop-blur-xl w-1/2 h-1/2 z-20 flex flex-col gap-4"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <div class="text-xl font-bold">삼성전자</div>
        <div>005930</div>
        <div class="p-1 border text-xs">코스피</div>
      </div>
      <div
        class="w-8 h-8 hover:bg-white rounded-full cursor-pointer shadow-xl flex justify-center items-center"
        @click="modalopen = false"
      >
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
    </div>
    <div class="flex gap-4 w-full">
      <div class="flex flex-col gap-4 items-center w-4/12">
        <div class="text-blue-600 text-3xl font-bold">71,700</div>
        <div class="flex gap-4">
          <div class="flex flex-row gap-4">
            <div>전일대비</div>
            <div class="text-blue-600">-700</div>
          </div>
          <div class="text-blue-600">-0.97%</div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 w-8/12">
        <div class="flex flex-row gap-4">
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">전일</div>
            <div>72,400</div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">고가</div>
            <div class="text-red-600">72,600</div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">거래량</div>
            <div>6,394,446</div>
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">전일</div>
            <div>72,400</div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">저가</div>
            <div class="text-blue-600">72,600</div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="text-gray-600">거래량</div>
            <div>6,394,446</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IPredict } from "~/interface/IPredict";

const 시장 = ref("all");
const 기간 = ref("3");
const 알고리즘 = ref("Deep Learning");
const modalopen = ref(false);

const { learning, predict, ailoading, predictloading, predictlist } = useAi();

definePageMeta({
  layout: "none",
});

const trainModel = async () => {
  learning(알고리즘.value, 시장.value, 기간.value);
};

const predictModel = async () => {
  predict(알고리즘.value, 시장.value, 기간.value).then((res) => {
    alert("분석이 완료되었습니다.");
  });
};
</script>
<style scoped>
.w-7xl {
  width: 80rem;
}
.bg-img-1 {
  top: -100px;
  right: 0;
}
.bg-img-2 {
  top: -80px;
  left: -80px;
}
.bg-img-3 {
  top: 30px;
  left: 0;
}
</style>
