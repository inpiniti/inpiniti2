import type { ISector } from "@/interface/ISector";
import { useStorage } from "@vueuse/core";

export const useSector = () => {
  const sectors = useStorage<ISector[]>("sectors", []);
  const selectSector = useState<ISector | undefined>(
    "select_sector",
    () => undefined
  );
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
