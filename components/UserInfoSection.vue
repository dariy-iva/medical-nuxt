<template>
  <section :class="`user-info user-info_size_${isMini ? 'mini' : 'max'}`">
    <UserAvatarWithEdit :is-mini="isMini" />

    <div class="user-info__data">
      <p class="user-info__name">
        {{ user.fullName }}
      </p>

      <p
        v-if="!isMini"
        class="user-info__contacts"
      >
        <span
          v-if="user.city"
          class="user-info__city"
        >{{ user.city }}</span>

        <span v-if="user.phone">{{ user.phone }}</span>

        <span v-if="user.email">{{ user.email }}</span>
      </p>

      <NuxtLink
        v-if="!isMini"
        :to="profileLink"
        class="user-info__edit-info"
      >
        Изменить данные<span class="user-info__link-text">&nbsp;и пароль</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { navigationLinks } from '~/utils/constants/navigationLinks';
import UserAvatarWithEdit from '~/components/UserAvatarWithEdit.vue';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);
const { loadUserFullName, loadUserSecondaryInfo } = userStore;

interface Props {
  isMini?: boolean;
}

withDefaults(defineProps<Props>(), {
  isMini: false
});

const profileLink = computed<string>(() => {
  const { cabinet } = navigationLinks;

  return cabinet.children?.profile?.link ?? '';
});

onMounted(() => {
  !user.value.fullName && loadUserFullName();
  !user.value.email && loadUserSecondaryInfo();
});
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  gap: 32px;
  box-sizing: border-box;

  &_size_mini {
    align-items: center;
  }

  &_size_max {
    padding-bottom: 64px;
    border-bottom: 1px solid #efefef;
  }

  &__data {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    color: #000;
  }

  &__contacts {
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #8c8c8c;
  }

  &__city {
    text-transform: capitalize;
  }

  &__edit-info {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
}

@media (max-width: 767px) {
  .user-info {
    &_size_mini {
      gap: 24px;
    }

    &_size_max {
      gap: 16px;
      align-items: center;
      flex-direction: column;
      padding-bottom: 0;
      border-bottom: none;
    }

    &_size_mini &__name {
      font-size: 18px;
    }

    &_size_max &__data {
      align-items: center;
      text-align: center;
    }

    &__contacts {
      font-size: 13px;
      line-height: 1.3;
    }

    &__link-text {
      display: none;
    }
  }
}
</style>
