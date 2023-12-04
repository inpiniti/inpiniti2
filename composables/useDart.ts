export const useDart = () => {
  const dartloading = useState<boolean>("dartloading", () => false);
  const dartlist = useState<any[]>("dartlist", () => []);
  const get_data = async (market: string, analysis_period: string) => {
    dartloading.value = true;
    return await useApi()
      .get({
        url: `/dart/get_data/${market}/${analysis_period}`,
      })
      .then((res: any) => {
        dartlist.value = res;
      })
      .finally(() => {
        dartloading.value = false;
      });
  };

  const collect_data = async () => {
    return await useApi().get({
      url: `/dart/collect_data`,
    });
  };

  return {
    dartloading,
    dartlist,
    get_data,
    collect_data,
  };
};
