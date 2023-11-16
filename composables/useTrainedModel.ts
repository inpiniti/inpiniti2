import type { ITrainedModel } from "@/interface/ITrainedModel";

export const useTrainedModel = () => {
  const trainedModels = useState<ITrainedModel[]>("trainedModels", () => []);
  const trainedModelsLoading = useState<boolean>(
    "trainedModelsLoading",
    () => false
  );

  const getTrainedModels = async () => {
    trainedModelsLoading.value = true;
    return useApi()
      .get({
        url: `/db/trained_model`,
      })
      .then((res: any) => {
        trainedModels.value = res;
      })
      .finally(() => {
        trainedModelsLoading.value = false;
      });
  };
  return {
    trainedModels,
    trainedModelsLoading,
    getTrainedModels,
  };
};
