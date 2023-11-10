import IFinancial from "@/interface/IFinancial";

export const useFinancial = () => {
  const filterFinancials = useState<IFinancial[]>("filterFinancials", () => []);
  const financialsFilter = () => {
    filterFinancials.value = financials.value.filter(
      (financial: IFinancial) => {
        return (
          (useState<"KOSPI" | "KOSDAQ">("marketType").value == undefined ||
            financial.mktNm ==
              useState<"KOSPI" | "KOSDAQ">("marketType").value) &&
          (useSector().selectSector.value.sectorCode == undefined ||
            financial.sectorCode ==
              useSector().selectSector.value.sectorCode) &&
          (useStock().selectStock.value.symbolCode == undefined ||
            financial.symbolCode == useStock().selectStock.value.symbolCode)
        );
      }
    );
  };
  const financials = useState<IFinancial[]>("financials", () => []);
  const financialsLoading = useState<boolean>("financialsLoading", () => false);
  const yyyy_mm = useState<string>("yyyy_mm", () => "2023.01");
  const getFinancials = async () => {
    financialsLoading.value = true;
    return useApi()
      .get({
        url: `/db/financials/${yyyy_mm.value}`,
      })
      .finally(() => {
        financialsLoading.value = false;
      });
  };
  return {
    financials,
    filterFinancials,
    financialsLoading,
    getFinancials,
    financialsFilter,
  };
};
