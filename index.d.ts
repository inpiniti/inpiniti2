export { IIndustrie };

declare module "nuxt/schema" {
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
  }
}
