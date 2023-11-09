import ISector from "@/interface/ISector";

export const useFinancial = () => {
  const financials = useState<ISector[]>("financials", () => []);
  const yyyy_mm = useState<string>("yyyy_mm", () => "2023.01");
  const getFinancials = async () => {
    return useApi().get({
      url: `/db/financials/${yyyy_mm.value}`,
    });
  };
  return {
    financials,
    getFinancials,
  };
};
