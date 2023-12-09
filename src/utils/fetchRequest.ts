type FetchDataResponse<T> = Promise<T | { message: string; error: true }>;

export const fetchRequest = <T>(...params: Parameters<typeof fetch>): FetchDataResponse<T> =>
  fetch(...params)
    .then((response) => response.json() as Promise<T>)
    .catch((error) => {
      return { message: error, error: true };
    });
