import ISector from "@/interface/ISector";

export const useSector = () => {
  const sectors = useState<ISector[]>("sectors", () => []);
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
