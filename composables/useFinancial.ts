import type { IFinancial } from "@/interface/IFinancial";

export const useFinancial = () => {
  const filterFinancials = useState<IFinancial[]>("filterFinancials", () => []);
  const financials = useState<IFinancial[]>("financials", () => []);
  const financialsLoading = useState<boolean>("financialsLoading", () => false);
  const totalPage = useState<number>("totalPage", () => 0);

  const financialsFilter = () => {
    filterFinancials.value = financials.value.filter(
      (financial: IFinancial) => {
        return (
          (useState<"KOSPI" | "KOSDAQ">("marketType").value == undefined ||
            financial.mktNm ==
              useState<"KOSPI" | "KOSDAQ">("marketType").value) &&
          (useSector().selectSector.value?.sectorCode == undefined ||
            financial.sectorCode == useSector().selectSector.value?.sectorCode) // &&
          //(useStock().selectStock.value?.symbolCode == undefined ||
          //  financial.symbolCode == useStock().selectStock.value?.symbolCode)
        );
      }
    );
  };

  const getFinancials = async (page: number = 1) => {
    financialsLoading.value = true;
    return useApi()
      .post({
        url: `/db/financials`,
        body: {
          year: useSearch().yyyy_mm.value,
          mktNm: useState<"KOSPI" | "KOSDAQ">("marketType").value,
          name: useSearch().search_word.value,
          sectorCode: useSector().selectSector.value?.sectorCode,
          //symbolCode: useStock().selectStock.value?.symbolCode,
          page,
        },
      })
      .then((res: any) => {
        financials.value = res.data_list;
        totalPage.value = Math.floor(res.total_count / 100) + 1;
        console.log("totalPage", totalPage.value);
      })
      .finally(() => {
        financialsLoading.value = false;
      });
  };
  return {
    financials,
    filterFinancials,
    financialsLoading,
    totalPage,
    getFinancials,
    financialsFilter,
  };
};
