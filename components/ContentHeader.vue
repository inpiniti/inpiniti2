<template>
  <div class="content-wrapper-header">
    <div class="content-wrapper-context">
      <h3 class="img-content">
        <svg viewBox="0 0 512 512">
          <path
            d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
            fill="#d6355b"
            data-original="#ff468c"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
            fill="#d6355b"
            data-original="#d72878"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
            fill="#2e000a"
            data-original="#700029"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
            fill="#2e000a"
            data-original="#4d0e06"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
            fill="#d6355b"
            data-original="#ff468c"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
            fill="#d6355b"
            data-original="#d72878"
          />
        </svg>
        {{ industrie.sectorName }} ({{ industrie.code }})
      </h3>
      <div class="content-text">
        {{ industrie.sectorIntro }}
      </div>
      <button class="content-button">
        {{ industrie.change == "RISE" ? "+" : "-"
        }}{{ industrie.changePrice }}원 ({{ industrie.changeRate }}%)
      </button>
    </div>
    <img
      class="content-wrapper-img"
      src="https://assets.codepen.io/3364143/glass.png"
      alt=""
    />
  </div>
</template>
<script setup lang="ts">
interface IIndustrie {
  symbolCode: string;
  code: string;
  sectorCode: string;
  sectorName: string;
  date: string;
  market: string;
  change: string;
  changePrice: number;
  changeRate: number;
  tradePrice: number;
  prevClosingPrice: number;
  accTradeVolume: number;
  accTradePrice: number;
  sectorIntro: string;
  upperLimit: number;
  lowerLimit: number;
  rise: number;
  fall: number;
  even: number;
}

const industrie = ref<IIndustrie>({
  symbolCode: "KRD020020198",
  code: "KRD020020198",
  sectorCode: "002",
  sectorName: "전기,전자",
  date: "2023-09-01",
  market: "KOSPI",
  change: "RISE",
  changePrice: 507.56,
  changeRate: 0.0190213501,
  tradePrice: 27191.26,
  prevClosingPrice: 26683.7,
  accTradeVolume: 71830,
  accTradePrice: 4010497,
  sectorIntro:
    "반도체 및 관련 제품, 반도체 장비 제조업체. SoC(System on Chip), LoC(Lap on Chip) 관련 업체, 반도체 소재 및 반도체 생산용 제품을 전문적으로 생산하는 전자재료 생산업체나 반도체 클린룸 장비 제조업체를 포함",
  upperLimit: 2,
  lowerLimit: 0,
  rise: 120,
  fall: 24,
  even: 4,
});
</script>
