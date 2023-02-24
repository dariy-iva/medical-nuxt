<template>
  <div
    :class="`user-avatar ${className || ''} ${
      !user.avatar ? 'user-avatar_not-image' : ''
    }`"
  >
    <img
      v-if="user.avatar"
      :src="user.avatar"
      alt="аватар пользователя"
      class="user-avatar__image"
    >
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { loadUserAvatar } = userStore;

interface Props {
  className: string;
}

withDefaults(defineProps<Props>(), {
  className: ''
});

onMounted(() => {
  !user.value.avatar && loadUserAvatar();
});
</script>

<style scoped lang="scss">
.user-avatar {
  border-radius: 50%;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &_not-image {
    background: url("@/assets/images/icons/avatar_icon.svg") center / cover
      no-repeat var(--text-color-inverse);
  }
}
</style>
