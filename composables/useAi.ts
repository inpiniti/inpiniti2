import type { IPredict } from "~/interface/IPredict";

export const useAi = () => {
  const ailoading = useState<boolean>("ailoading", () => false);
  const predictloading = useState<boolean>("predictloading", () => false);
  const predictlist = useState<IPredict[]>("predictlist", () => []);
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
  const predict = async (
    algorithm: string,
    market: string,
    analysis_period: string
  ) => {
    predictloading.value = true;
    return await useApi()
      .get({
        url: `/ai/predict/${algorithm}/${market}/${analysis_period}`,
      })
      .then((res: any) => {
        predictlist.value = res;
      })
      .finally(() => {
        predictloading.value = false;
      });
  };
  return {
    ailoading,
    predictloading,
    predictlist,
    learning,
    predict,
  };
};
