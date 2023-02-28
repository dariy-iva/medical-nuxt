import { defineStore } from 'pinia';
import { ref } from 'vue';
// import axios from 'axios';
import IUser from '~/types/User';

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({
    id: 0,
    type: '',
    shortName: '',
    fullName: '',
    avatar: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    deliveryAddress: '',
    livingIndex: '',
    livingCity: '',
    livingStreet: '',
    livingHouse: '',
    livingBuilding: '',
    livingFlat: ''
  });

  function _setUserType(type: string): void {
    user.value.type = type;
  }

  function _setUserShortName(name: string): void {
    user.value.shortName = name;
  }

  function _setUserFullName(name: string): void {
    user.value.fullName = name;
  }

  function _setUserAvatar(avatar: string): void {
    user.value.avatar = avatar;
  }

  function _setUserSecondaryData(userData: IUser): void {
    const {
      email,
      phone,
      city,
      country,
      deliveryAddress,
      livingIndex,
      livingCity,
      livingStreet,
      livingHouse,
      livingBuilding,
      livingFlat
    } = userData;

    user.value.email = email;
    user.value.phone = phone;
    user.value.city = city;
    user.value.country = country;
    user.value.deliveryAddress = deliveryAddress;
    user.value.livingIndex = livingIndex;
    user.value.livingCity = livingCity;
    user.value.livingStreet = livingStreet;
    user.value.livingHouse = livingHouse;
    user.value.livingBuilding = livingBuilding;
    user.value.livingFlat = livingFlat;
  }

  function loadUserWelcome(): void {
    // axios
    //   .get('/users/welcome.json')
    //   .then(res => {
    //     if (res.data?.user?.type) {
    //       _setUserType(res.data.user.type);
    //     }
    //   })
    //   .catch(err => console.log('Ошибка загрузки приветственных данных пользователя: ', err));

    const type = 'sv';

    _setUserType(type);
  }

  function loadUserShortName(): void {
    // axios
    //   .get('/udata//users/getUserHeaderData.json')
    //   .then(res => {
    //     if (res.data) {
    //       const { fname = '', lname = '' } = res.data;
    //       const userName = `${fname} ${lname}`;
    //       _setUserShortName(userName);
    //     }
    //   })
    //   .catch(err => console.log('Ошибка загрузки имени пользователя: ' + err));

    const shortName = 'Иван Иванов';

    _setUserShortName(shortName);
  }

  function loadUserFullName(): void {
    // axios
    //   .get(`/udata/users/getUserInfoForProfilePage/${user.value.id}/personal.json`)
    //   .then(res => {
    //     if (res.data) {
    //       const fio = res.data?.fio?.value ?? '';
    //       _setUserFullName(fio);
    //     }
    //   })
    //   .catch(err => console.log('Ошибка загрузки ФИО пользователя: ', err));

    const shortName = 'Иван Иванович Иванов';

    _setUserFullName(shortName);
  }

  function loadUserAvatar(): void {
    // axios
    //   .get(`/udata/users/getUserAvatar/${user.value.id}/90.json`)
    //   .then(res => {
    //     if (res.data) {
    //       const imageSrc = res.data?.src ?? '';
    //       _setUserAvatar(imageSrc);
    //     }
    //   })
    //   .catch(err => console.log('Ошибка загрузки аватара пользователя: ' + err));

    const avatar =
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60';

    _setUserAvatar(avatar);
  }

  function loadUserSecondaryInfo(): void {
    // axios
    //   .get(`/udata/users/getUserInfoForProfilePage/${user.value.id}/.json`)
    //   .then(res => {
    //     if (res.data) {
    //       const userData = {
    //         email: res.data?.main_email?.value ?? '',
    //         phone: res.data?.phone?.value ?? '',
    //         city: res.data?.city?.value ?? '',
    //         country: res.data?.country?.value ?? '',
    //         deliveryAddress: res.data?.delivery_address?.value ?? '',
    //         livingIndex: res.data?.living_index?.value ?? '',
    //         livingCity: res.data?.living_city?.value ?? '',
    //         livingStreet: res.data?.living_street?.value ?? '',
    //         livingHouse: res.data?.living_house?.value ?? '',
    //         livingBuilding: res.data?.living_building?.value ?? '',
    //         livingFlat: res.data?.living_flat?.value ?? ''
    //       };
    //
    //       _setUserSecondaryData(userData);
    //     }
    //   })
    //   .catch(err => console.log('Ошибка загрузки дополнительных данных пользователя: ' + err));

    const userData = {
      email: 'ms2030@inetstudio.ru',
      phone: '',
      city: 'Москва',
      country: 'Россия',
      deliveryAddress: '192239, Москва, 1',
      livingBuilding: '',
      livingCity: 'Москва',
      livingFlat: '',
      livingHouse: '1',
      livingIndex: '192239',
      livingStreet: ''
    };

    _setUserSecondaryData(userData);
  }

  return {
    user,
    loadUserShortName,
    loadUserFullName,
    loadUserAvatar,
    loadUserSecondaryInfo,
    loadUserWelcome
  };
});
