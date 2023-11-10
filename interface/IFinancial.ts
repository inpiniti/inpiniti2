export default interface IFinancial {
  year: string; // 연도
  sales: string; // 매출
  operatingprofit: string; // 영업이익
  netincome: string; // 순이익
  operatingprofitratio: string; // 영업이익률
  netprofitratio: string; // 순이익률
  prevsales: string; // 이전 매출
  prevoperatingprofit: string; // 이전 영업이익
  prevnetincome: string; // 이전 순이익
  prevoperatingprofitratio: string; // 이전 영업이익률
  prevnetprofitratio: string; // 이전 순이익률
  saleschange: string; // 매출 변동
  operatingprofitchange: string; // 영업이익 변동
  netincomechange: string; // 순이익 변동
  operatingprofitratiochange: string; // 영업이익률 변동
  netprofitratiochange: string; // 순이익률 변동
  trdDd: string; // 거래일
  isuAbbrv: string; // 종목 약어
  isuSrtCd: string; // 종목 코드
  mktNm: string; // 시장 이름
  mmendClsprc: string; // 월말 종가
  hgstClsprc: string; // 최고 종가
  lwstClsprc: string; // 최저 종가
  isuStd: string; // 표준 편차
  isuKurt: string; // 첨도
  coskew: string; // 왜도
  isuBeta: string; // 베타
  isuAmibud: string; // 아미후드 계수
  isuZeros: number; // 제로 수
  mmAccTrdvol: number; // 월 누적 거래량
  avgAccTrdvol: number; // 평균 누적 거래량
  mmAccTrdval: number; // 월 누적 거래액
  avgAccTrdval: number; // 평균 누적 거래액
  mmendclsprcchange: string; // 월말 종가 변동
  code: string; // 코드
  symbolCode: string; // 심볼 코드
  name: string; // 이름
  sectorCode: string; // 섹터 코드
  sectorName: string; // 섹터 이름
  nextmmendclsprc: string; // 다음 월말 종가
}
