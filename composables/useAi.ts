export const useAi = () => {
  const ailoading = useState<boolean>("ailoading", () => false);
  const learning = async (
    algorithm: string,
    market: string,
    analysis_period: string
  ) => {
    ailoading.value = true;
    return await useApi()
      .get({
        url: `/ai/learning/${algorithm}/${market}/${analysis_period}`,
      })
      .then((res: any) => {
        alert(res);
      })
      .finally(() => {
        ailoading.value = false;
      });
  };
  return {
    ailoading,
    learning,
  };
};
