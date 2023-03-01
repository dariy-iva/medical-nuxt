import { ref } from 'vue';
import axios from 'axios';

export function useFetch(url: string, queryString: string = '', options = {}) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const urlWithQuery = queryString ? url + '?' + queryString : url;

  async function doFetch() {
    isLoading.value = true;

    await axios(urlWithQuery, options)
      .then(res => (data.value = res.data))
      .catch(err => (error.value = err))
      .finally(() => {
        isLoading.value = false;
      });
  }

  return { data, error, doFetch };
}
