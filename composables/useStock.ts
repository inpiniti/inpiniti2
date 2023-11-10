import { useStorage } from "@vueuse/core";
import IStock from "@/interface/IStock";

export const useStock = () => {
  const stocks = useStorage<IStock[]>("stocks", []);
  const selectStock = useState<IStock>("selectStock", () => <IStock>{});
  const getStocks = async (sectorCode: string) => {
    return useApi().get({
      url: `/daum/crawling/Stocks/${sectorCode}`,
    });
  };
  return {
    stocks,
    selectStock,
    getStocks,
  };
};
