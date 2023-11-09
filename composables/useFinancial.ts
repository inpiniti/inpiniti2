import IFinancial from "@/interface/IFinancial";

export const useFinancial = () => {
  const financials = useState<IFinancial[]>("financials", () => []);
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
