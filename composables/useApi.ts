export const useApi = () => {
  const { api } = useRuntimeConfig().public;

  return {
    get: async ({ url, body }: { url: string; body?: any; fail?: any }) => {
      const response = await fetch(`${api}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      return new Promise<void>(async (resolve, reject) => {
        if (response.status != 200) {
          reject();
        } else {
          const resData = await response.json();
          resolve(resData);
        }
      });
    },
  };
};
