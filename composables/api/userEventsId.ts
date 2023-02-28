import { ref } from 'vue';
import axios from 'axios';

export function useUserEventsId() {
  const userEventsId = ref<number[]>([]);

  async function loadUserEventsId() {
    await axios
      .get('/udata/data/getEventsFromUserCalendar.json')
      .then(res => {
        if (res.data) {
          userEventsId.value = Object.values(res.data);
        }
      })
      .catch(err => console.log('Ошибка загрузки событий пользователя: ', err));
  }

  // eslint-disable-next-line no-magic-numbers
  userEventsId.value = [ 2233, 2234, 2238, 2232, 2237, 2569 ];

  return { userEventsId, loadUserEventsId };
}
