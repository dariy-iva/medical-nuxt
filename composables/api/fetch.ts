import { ref } from 'vue';
import axios from 'axios';

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);

  axios(url)
    .then(res => (data.value = res.data))
    .catch(err => (error.value = err));

  return { data, error };
}
