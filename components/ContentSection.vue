<template>
  <div class="content-section">
    <div class="content-section-title">{{ industrie.sectorName }} 종목</div>
    <ul>
      <ContentSectionItem />

      <li class="adobe-product">
        <div class="products">
          <svg viewBox="0 0 52 52" style="border: 1px solid #b65a0b">
            <g xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                fill="#261400"
                data-original="#6d4c13"
              />
              <path
                d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                fill="#e6d2c0"
                data-original="#ffbd2e"
              />
            </g>
          </svg>
          Illustrator
        </div>

        <span class="status">
          <span class="status-circle"></span>
          Update Available</span
        >
        <div class="button-wrapper">
          <button class="content-button status-button">Update this app</button>
          <div class="pop-up">
            <div class="pop-up__title">
              Update This App
              <svg
                class="close feather feather-x-circle"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
              </svg>
            </div>
            <div class="pop-up__subtitle">
              Adjust your selections for advanced options as desired before
              continuing. <a href="#">Learn more</a>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="check1" class="checkbox" />
              <label for="check1"
                >Import previous settings and preferences</label
              >
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="check2" class="checkbox" />
              <label for="check2">Remove old versions</label>
            </div>
            <div class="content-button-wrapper">
              <button class="content-button status-button open close">
                Cancel
              </button>
              <button class="content-button status-button">Continue</button>
            </div>
          </div>
          <div class="menu">
            <button class="dropdown">
              <ul>
                <li><a href="#">Go to Discover</a></li>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Uninstall</a></li>
              </ul>
            </button>
          </div>
        </div>
      </li>
      <li class="adobe-product">
        <div class="products">
          <svg viewBox="0 0 52 52" style="border: 1px solid #c75deb">
            <g xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                fill="#3a3375"
                data-original="#3a3375"
              />
              <path
                d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                fill="#e4d1eb"
                data-original="#e7adfb"
              />
            </g>
          </svg>
          After Effects
        </div>
        <span class="status">
          <span class="status-circle green"></span>
          Updated</span
        >
        <div class="button-wrapper">
          <button class="content-button status-button open">Open</button>
          <div class="menu">
            <button class="dropdown">
              <ul>
                <li><a href="#">Go to Discover</a></li>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Uninstall</a></li>
              </ul>
            </button>
          </div>
        </div>
      </li>
    </ul>
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
