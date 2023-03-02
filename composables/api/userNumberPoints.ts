import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/UserStore';
import { useFetch } from '~/composables/api/fetch';

interface IResponseBody {
  [index: number]: {
    int: string;
    rel: string;
    float: number;
    full_name: string;
  };
  points_all: {
    full_name: string;
    float: number;
  };
  method: 'getUserPoints';
  module: 'users';
}

export function useUserNumberPoints() {
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);

  const url = `/udata/users/getUserPoints/${user.value.id}.json`;

  const { data, error, doFetch } = useFetch<IResponseBody>(url);

  const numberPoints = ref(0);

  async function loadNumberPoints() {
    await doFetch();

    if (data.value) {
      numberPoints.value = data.value?.points_all?.float ?? 0;
    } else if (error.value) {
      console.log('Ошибка загрузки баллов пользователя: ', error.value);
    }
  }

  // тестовые данные
  numberPoints.value = 250;

  return { numberPoints, loadNumberPoints };
}
