import { ref, Ref, unref } from 'vue';
import axios from 'axios';

export function useFetch<T>(
  url: string | Ref<string>,
  queryString: string | Ref<string> = ''
) {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const isLoading = ref(false);
  let fetchController: any = null;

  const urlWithQuery = queryString
    ? unref(url) + '?' + unref(queryString)
    : unref(url);

  async function doFetch(options: any = {}) {
    isLoading.value = true;

    if (fetchController) {
      fetchController.cancel('Operation canceled by the user.');
    }

    const CancelToken = axios.CancelToken;
    fetchController = CancelToken.source();
    options.cancelToken = fetchController.token;

    await axios(urlWithQuery, options)
      .then(res => {
        data.value = res.data;
        isLoading.value = false;
        fetchController = null;
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          // error.value = 'Request canceled' + err.message;
          // eslint-disable-next-line no-useless-return
          return;
        } else {
          error.value = err;
          isLoading.value = false;
          fetchController = null;
        }
      });
  }

  return { data, error, isLoading, doFetch };
}
