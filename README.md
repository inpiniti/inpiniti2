# inpiniti2: AI 기반 주식/재무 데이터 분석 서비스

inpiniti2는 Nuxt3 기반의 웹 애플리케이션으로, 인공지능(AI)을 활용한 주식 및 재무 데이터 분석 서비스를 제공합니다.

## 주요 기능 및 구성

- **재무 데이터 분석**  
  - 종목별 연도별 재무 지표(매출, 영업이익, 순이익, 영업이익률, 순이익률 등)와 변동값, 시장 정보(KOSPI, KOSDAQ), 업종, 종목 코드 등을 관리 및 분석합니다.
  - 월말 종가, 최고/최저 종가, 표준편차, 왜도, 베타값 등 통계적 지표도 포함됩니다.

- **AI 기반 예측 및 학습**  
  - 여러 알고리즘을 선택해 시장, 기간별로 데이터를 학습시키고, 예측 결과를 제공합니다.
  - 예측 결과는 매출, 영업이익, 순이익, 월말 종가 등 다양한 지표의 향후 변동을 포함합니다.

- **데이터 수집 및 관리**  
  - Dart, Daum 등 외부 API로부터 실시간 데이터 수집 기능을 제공합니다.

- **UI 및 페이지 구성**  
  - 재무재표 리스트, AI 모듈 리스트 등 주요 메뉴를 제공하며, 직관적인 UI로 시장, 기간, 알고리즘을 선택하여 분석을 시작할 수 있습니다.

- **주요 기술 스택**  
  - Frontend: Nuxt3, Vue.js, TypeScript
  - 스타일: Tailwind CSS
  - API 연동: useApi 커스텀 훅 활용

## 활용 예시

1. **종목별 재무 정보 필터링 및 분석**
   - 시장(KOSPI/KOSDAQ), 업종 코드 등으로 데이터 필터링 및 페이징 처리
2. **AI 모델 학습/예측 기능**
   - 알고리즘, 시장, 분석 기간 선택 → 학습/예측 API 호출
3. **외부 데이터 수집**
   - DART, Daum 등 주요 재무 및 주가 데이터 실시간 수집

---

## 개발/설치 안내

### 의존성 패키지 설치

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### 개발 서버 실행

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

### 프로덕션 빌드

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

### 프로덕션 빌드 미리보기

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

자세한 배포 방법은 [Nuxt 공식 배포 문서](https://nuxt.com/docs/getting-started/deployment)를 참고하세요.