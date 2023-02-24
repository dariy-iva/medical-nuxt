<template>
  <div :class="`user-photo user-photo_size_${isMini ? 'mini' : 'max'}`">
    <UserAvatar class-name="user-photo__radius" />

    <ElUpload
      class="user-photo__input"
      action=""
      accept="image/x-png,image/gif,image/jpeg"
      :limit="1"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChangeAvatar"
    >
      <span
        :class="`round-button user-photo__edit-avatar user-photo__edit-avatar_size_${
          isMini ? 'mini' : 'max'
        }`"
      />
    </ElUpload>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useUserStore } from '~/stores/UserStore';

import UserAvatar from '~/components/UserAvatar.vue';

const userStore = useUserStore();

const { loadUserAvatar } = userStore;

interface Props {
  isMini?: boolean;
}

withDefaults(defineProps<Props>(), {
  isMini: false
});

function handleChangeAvatar(file: File): void {
  const reader = new FileReader();

  reader.readAsDataURL(file.raw);

  reader.onload = e => {
    const uploadAvatarUrl = e.target?.result ?? '';
    uploadAvatarUrl && uploadAvatar(uploadAvatarUrl);
  };
}

function uploadAvatar(imageData: string | ArrayBuffer): void {
  axios
    .post('/udata/users/setAvatar/.json', imageData)
    .then(res => {
      if (res.data.success) {
        loadUserAvatar();
      }
    })
    .catch(err => {
      console.log('Ошибка отправки данных аватара: ' + err);
    });
}
</script>

<style scoped lang="scss">
.user-photo {
  position: relative;

  &_size_mini {
    width: 100px;
    height: 100px;
  }

  &_size_max {
    width: 150px;
    height: 150px;
  }

  &__radius {
    width: 100%;
    height: 100%;
  }

  &__edit-avatar {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    &::before,
    &::after {
      position: absolute;
      content: "";
      display: inline-block;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }

  &__edit-avatar_size_mini {
    width: 26.7px;
    height: 26.7px;

    &::before {
      width: 14px;
      border-top: 3px solid #fff;
    }

    &::after {
      height: 14px;
      border-left: 3px solid #fff;
    }
  }

  &__edit-avatar_size_max {
    width: 40px;
    height: 40px;

    &::before {
      width: 21px;
      border-top: 4px solid #fff;
    }

    &::after {
      height: 21px;
      border-left: 4px solid #fff;
    }
  }

  &__input {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
  }
}

@media (max-width: 767px) {
  .user-photo {
    &_size_mini,
    &_size_max {
      width: 80px;
      min-width: 80px;
      height: 80px;
    }

    &__edit-avatar_size_mini,
    &__edit-avatar_size_max {
      width: 24px;
      height: 24px;
    }

    &__edit-avatar_size_mini::before,
    &__edit-avatar_size_mini::after,
    &__edit-avatar_size_max::before,
    &__edit-avatar_size_max::after {
      border-width: 2px;
    }

    &__edit-avatar_size_mini::before,
    &__edit-avatar_size_max::before {
      width: 13px;
    }

    &__edit-avatar_size_mini::after,
    &__edit-avatar_size_max::after {
      height: 13px;
    }
  }
}
</style>
