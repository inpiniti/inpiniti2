import ISector from "@/interface/ISector";
import { useStorage } from "@vueuse/core";

export const useSector = () => {
  const sectors = useStorage<ISector[]>("sectors", []);
  const selectSector = useState<ISector>("select_sector", () => <ISector>{});
  const getSectors = async () => {
    return useApi().get({
      url: "/daum/crawling/Industries",
    });
  };
  return {
    sectors,
    selectSector,
    getSectors,
  };
};
