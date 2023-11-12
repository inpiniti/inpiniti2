import type { IStock } from "@/interface/IStock";
import { useStorage } from "@vueuse/core";

export const useStock = () => {
  const stocks = useStorage<IStock[]>("stocks", []);
  const selectStock = useState<IStock | undefined>(
    "selectStock",
    () => undefined
  );
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
