import { ref } from 'vue';
import { useFetch } from '~/composables/api/fetch';

interface IResponseBody {
  [index: number]: number;
  method: 'getEventsFromUserCalendar';
  module: 'data';
}

export function useUserEventsId() {
  const { data, error, isLoading, doFetch } = useFetch<IResponseBody>('/udata/data/getEventsFromUserCalendar.json');

  const userEventsId = ref<number[]>([]);

  async function loadUserEventsId() {
    await doFetch();

    if (data.value) {
      const isNumber = (item: number | string): item is number => typeof item === 'number';

      userEventsId.value = Object.values(data.value).filter(isNumber);
    } else if (error.value) {
      console.log('Ошибка загрузки событий пользователя: ', error.value);
    }
  }

  // тестовые данные
  // eslint-disable-next-line no-magic-numbers
  userEventsId.value = [ 2233, 2234, 2238, 2232, 2237, 2569 ];

  return { userEventsId, userEventsIdIsLoading: isLoading, loadUserEventsId };
}
