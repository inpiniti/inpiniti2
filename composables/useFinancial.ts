import type { IFinancial } from "@/interface/IFinancial";

export const useFinancial = () => {
  const filterFinancials = useState<IFinancial[]>("filterFinancials", () => []);
  const financials = useState<IFinancial[]>("financials", () => []);
  const financialsLoading = useState<boolean>("financialsLoading", () => false);

  const financialsFilter = () => {
    filterFinancials.value = financials.value.filter(
      (financial: IFinancial) => {
        return (
          (useState<"KOSPI" | "KOSDAQ">("marketType").value == undefined ||
            financial.mktNm ==
              useState<"KOSPI" | "KOSDAQ">("marketType").value) &&
          (useSector().selectSector.value?.sectorCode == undefined ||
            financial.sectorCode ==
              useSector().selectSector.value?.sectorCode) &&
          (useStock().selectStock.value?.symbolCode == undefined ||
            financial.symbolCode == useStock().selectStock.value?.symbolCode)
        );
      }
    );
  };

  const getFinancials = async () => {
    financialsLoading.value = true;
    return useApi()
      .post({
        url: `/db/financials`,
        body: {
          year: useSearch().yyyy_mm.value,
          mktNm: useState<"KOSPI" | "KOSDAQ">("marketType").value,
          name: useSearch().search_word.value,
          sectorCode: useSector().selectSector.value?.sectorCode,
          symbolCode: useStock().selectStock.value?.symbolCode,
        },
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
