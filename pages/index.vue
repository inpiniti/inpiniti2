<template>
  <div class="py-4 flex flex-col gap-4 grow-[1] h-screen pl-4">
    <div class="flex w-full gap-4 shrink-0">
      <div class="flex flex-col gap-4 overflow-hidden relative w-full">
        <img class="absolute bg-img-1 w-80 z-10" src="/anya1.webp" />
        <div class="flex flex-row gap-4 items-center">
          <div
            class="bg-white rounded-md text-xs p-2 gap-4 flex items-center h-full grow-[1]"
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
        <div
          class="bg-blue-400 p-4 h-72 flex flex-col rounded-3xl relative justify-between"
        >
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
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div>수집 프로그래스</div>
      <div class="flex gap-4">
        <div class="w-full bg-white p-4 rounded-3xl flex flex-col gap-2">
          <div class="flex flex-row gap-4 items-center">
            <div
              class="flex items-center justify-center bg-blue-400 rounded-full text-white w-10 h-10"
            >
              <font-awesome-icon :icon="['fas', 'vector-square']" />
            </div>
            <div>
              <div class="font-bold text-xl">수집중인 업종</div>
              <div>{{ collectionStatus?.sectorName }}</div>
            </div>
          </div>
          <div class="grow-[1] flex flex-col gap-1">
            <div class="flex flex-row justify-between text-xs">
              <div>{{ collectionStatus?.sectorCurrentIndex }} secter</div>
              <div>총 {{ collectionStatus?.sectorTotalCount }} sector</div>
            </div>
            <div class="bg-blue-100 w-full rounded-xl flex items-center">
              <div
                class="bg-blue-400 rounded-xl flex items-center justify-center text-white whitespace-nowrap"
                :style="{ width: sectorCollectionRate + '%' }"
              >
                {{ sectorCollectionRate }} %
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-white p-4 rounded-3xl flex flex-col gap-2">
          <div class="flex flex-row gap-4 items-center">
            <div
              class="flex items-center justify-center bg-blue-400 rounded-full text-white w-10 h-10"
            >
              <font-awesome-icon :icon="['fas', 'vector-square']" />
            </div>
            <div>
              <div class="font-bold text-xl">수집중인 종목</div>
              <div>{{ collectionStatus?.stockName }}</div>
            </div>
          </div>
          <div class="grow-[1] flex flex-col gap-1">
            <div class="flex flex-row justify-between text-xs">
              <div>{{ collectionStatus?.stockCurrentIndex }} secter</div>
              <div>총 {{ collectionStatus?.stockTotalCount }} sector</div>
            </div>
            <div class="bg-blue-100 w-full rounded-xl flex items-center">
              <div
                class="bg-blue-400 rounded-xl flex items-center justify-center text-white whitespace-nowrap"
                :style="{ width: stockCollectionRate + '%' }"
              >
                {{ stockCollectionRate }} %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex overflow-hidden grow-[1]">
      <img class="bg-img-3 absolute w-96" src="/anya3.png" />
      <div class="flex w-full gap-52">
        <div class="whitespace-nowrap text-xs px-4">수집된 데이터 리스트</div>
        <div
          class="w-full flex flex-col gap-4 overflow-y-scroll scrollbar-hide px-4 bg-white rounded-xl"
        >
          <template v-if="!!dartlist">
            <div
              class="w-full bg-blue-400 text-white hover:bg-white hover:text-blue-400 p-4 rounded-xl flex gap-4 shadow-xl cursor-pointer"
              @click="modalopen = true"
              v-for="l in dartlist"
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
</template>
<script setup lang="ts">
import { io } from "socket.io-client";
const socket = io("http://localhost:5001");

const modalopen = ref(false);

const { dartlist, get_data } = useDart();

const collectionStatus = ref<{
  sectorCurrentIndex: number;
  sectorName: string;
  sectorTotalCount: number;
  stockCurrentIndex: number;
  stockName: string;
  stockTotalCount: number;
}>({
  sectorCurrentIndex: 0,
  sectorName: "수집전",
  sectorTotalCount: 87,
  stockCurrentIndex: 0,
  stockName: "수집전",
  stockTotalCount: 100,
});

const sectorCollectionRate = computed(() => {
  if (!collectionStatus.value) return 0;
  return Math.round(
    (collectionStatus.value.sectorCurrentIndex /
      collectionStatus.value.sectorTotalCount) *
      100
  );
});

const stockCollectionRate = computed(() => {
  if (!collectionStatus.value) return 0;
  return Math.round(
    (collectionStatus.value.stockCurrentIndex /
      collectionStatus.value.stockTotalCount) *
      100
  );
});

onMounted(async () => {
  // 소캣 연결
  socket.on("connect", () => {
    console.log("소켓 연결");
  });

  // 소켓으로 메시지 수신
  socket.on("message", (data) => {
    collectionStatus.value = data;
  });

  await get_data("all", "all");
});

const startCollection = () => {
  useDart().collect_data();
};

definePageMeta({
  layout: "none",
});
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
