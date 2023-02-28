import { ref, Ref } from 'vue';
// import axios from 'axios';
// import { storeToRefs } from 'pinia';
// import { useUserStore } from '~/stores/UserStore';

export function useUserNumberPoints(): { numberPoints: Ref<number> } {
  // const userStore = useUserStore();
  // const { user } = storeToRefs(userStore);

  const numberPoints = ref(0);

  // axios
  //   .get(`/udata/users/getUserPoints/${user.value.id}.json`)
  //   .then(res => {
  //     if (res.data.points_all.float) {
  //       numberPoints.value = res.data.points_all.float;
  //     }
  //   })
  //   .catch(err => console.log('Ошибка загрузки баллов пользователя: ', err));

  numberPoints.value = 250;

  return { numberPoints };
}
