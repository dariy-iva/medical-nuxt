<template>
  <header class="header container-shadow">
    <div class="wrapper header__wrapper">
      <div class="header__row">
        <NuxtLink
          to="/"
          class="header__logo"
        />

        <SearchInput form-class="header__search" />

        <div class="header__user-info">
          <p
            v-if="user.shortName"
            class="header__user-name"
          >
            {{ user.shortName }}
          </p>

          <img
            v-if="user.avatar"
            :src="user.avatar"
            alt="аватар пользователя"
            class="header__user-avatar"
          >

          <div
            v-else
            class="header__user-avatar header__user-avatar_icon"
          />

          <div class="header__cabinet-popover">
            <ul class="header__cabinet-links container-shadow">
              <li
                v-for="(link, key) in userCabinetLinks"
                :key="`header-link-${key}`"
              >
                <NuxtLink
                  :to="link.link"
                  class="header__cabinet-link"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header__row">
        <nav class="header__nav">
          <NuxtLink
            v-for="(link, key) in navLinks"
            :key="`header-link-${key}`"
            :to="link.link"
            class="header__nav-link tab"
            active-class="tab_active"
          >
            <span
              v-if="key === 'scientificBase'"
              class="header__link-icon"
            />

            {{ link.name }}
          </NuxtLink>
        </nav>

        <button
          type="button"
          class="header__menu-button"
          aria-label="открыть меню"
          @click="toggleDrawerMenuStatus"
        >
          <span />
        </button>
      </div>
    </div>

    <TheSidebar
      :is-open="drawerMenuIsOpen"
      :on-close="toggleDrawerMenuStatus"
    />
  </header>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { navigationLinks } from '~/utils/constants/navigationLinks';
import { useUserStore } from '~/stores/UserStore';

import SearchInput from '~/components/forms/inputs/SearchInput.vue';
import TheSidebar from '~/components/TheSidebar.vue';
import INavLinks from '~/types/NavLinks';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);
const { loadUserShortName, loadUserAvatar } = userStore;

const drawerMenuIsOpen = ref(false);

const navLinks = computed<INavLinks>(() => {
  const { scientificBase, products, events } = navigationLinks;

  return {
    scientificBase,
    products,
    events
  };
});

const userCabinetLinks = computed<INavLinks>(() => {
  const { cabinet, logout } = navigationLinks;

  return {
    cabinet,
    logout
  };
});

function toggleDrawerMenuStatus(): void {
  drawerMenuIsOpen.value = !drawerMenuIsOpen.value;
}

onMounted(() => {
  loadUserShortName();
  loadUserAvatar();
});
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  &__logo {
    display: flex;
    width: 199px;
    height: 44px;
    mask: url("~/assets/images/logo/loreal_logo.svg") center / cover no-repeat;
    -webkit-mask: url("~/assets/images/logo/loreal_logo.svg") center / cover
      no-repeat;
    background-color: #000;
  }

  &__search {
    flex-grow: 1;
  }

  &__user-info {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }

  &__user-name {
    max-width: 210px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
    color: var(--text-color);
  }

  &__user-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;

    &_icon {
      background: url("@/assets/images/icons/avatar_icon.svg") center / cover
        no-repeat var(--text-color-inverse);
    }
  }

  &__cabinet-popover {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 20;
    padding-top: 10px;
    width: 285px;
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
  }

  &__user-info:hover &__cabinet-popover {
    visibility: visible;
    opacity: 1;
  }

  &__cabinet-links {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: var(--general-background-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  &__cabinet-link {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #353535;
  }

  &__nav {
    display: flex;
    gap: 32px;
  }

  &__nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  }

  &__link-icon {
    display: flex;
    width: 16px;
    height: 20px;
    mask: url("~/assets/images/icons/scientific_base_icon.svg") center / cover
      no-repeat;
    -webkit-mask: url("~/assets/images/icons/scientific_base_icon.svg") center /
      cover no-repeat;
    background-color: var(--text-color-extralight);
    transition: background-color 0.3s;
  }

  &__nav-link:hover &__link-icon,
  &__nav-link.tab_active &__link-icon {
    background-color: var(--primary-color);
  }

  &__menu-button {
    width: 30px;
    height: 18px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    box-sizing: border-box;
    transition: border-color 0.3s;

    &:hover,
    &:hover span {
      border-color: var(--primary-color);
    }

    & span {
      display: block;
      width: 100%;
      border-top: 2px solid #000;
      transition: border-color 0.3s;
    }
  }
}

@media (max-width: 1023px) {
  .header {
    &__logo {
      display: none;
    }

    &__user-info {
      order: -1;
    }

    &__user-name {
      display: none;
    }

    &__cabinet-popover {
      left: 0;
    }
  }
}

@media (max-width: 767px) {
  .header {
    padding: 8px 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

    &__wrapper {
      flex-direction: row;
      gap: 16px;
    }

    &__row:first-child {
      flex-grow: 1;
    }

    &__user-info,
    &__nav {
      display: none;
    }

    &__menu-button {
      width: 24px;
      border-width: 1.5px;

      & span {
        border-width: 1.5px;
      }
    }
  }
}
</style>
