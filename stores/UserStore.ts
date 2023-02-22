import { defineStore } from 'pinia';
import { ref } from 'vue';
import IUser from '~/types/User';

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({
    id: 0,
    shortName: '',
    fullName: '',
    avatar: ''
  });

  function _setUserShortName(name: string): void {
    user.value.shortName = name;
  }

  function _setUserFullName(name: string): void {
    user.value.fullName = name;
  }

  function _setUserAvatar(avatar: string): void {
    user.value.avatar = avatar;
  }

  function loadUserShortName(): void {
    const shortName = 'Иван Иванов';

    _setUserShortName(shortName);
  }

  function loadUserFullName(): void {
    const shortName = 'Иван Иванович Иванов';

    _setUserFullName(shortName);
  }

  function loadUserAvatar(): void {
    const avatar =
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60';

    _setUserAvatar(avatar);
  }

  return { user, loadUserShortName, loadUserFullName, loadUserAvatar };
});
