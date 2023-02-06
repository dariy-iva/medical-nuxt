<template>
  <header class="header container-shadow">
    <div class="wrapper header__wrapper">
      <div class="header__row">
        <NuxtLink to="/" class="header__logo"/>

        <SearchInput formClass="header__search"/>
      </div>

      <div class="header__row">
        <nav class="header__nav">
          <NuxtLink
            :to="navigationLinks.scientific_base.link"
            class="header__nav-link tab"
            active-class="tab_active"
          >
            <span class="header__link-icon"/>

            {{ navigationLinks.scientific_base.name }}
          </NuxtLink>

          <NuxtLink
            :to="navigationLinks.products.link"
            class="header__nav-link tab"
            active-class="tab_active"
          >
            {{ navigationLinks.products.name }}
          </NuxtLink>

          <NuxtLink
            :to="navigationLinks.events.link"
            class="header__nav-link tab"
            active-class="tab_active"
          >
            {{ navigationLinks.events.name }}
          </NuxtLink>
        </nav>

        <button
          type="button"
          @click="toggleDrawerMenuStatus"
          class="header__menu-button"
          aria-label="открыть меню"
        >
          <span/>
        </button>
      </div>
    </div>

    <DrawerMenu :isOpen="drawerMenuIsOpen" :onClose="toggleDrawerMenuStatus"/>
  </header>
</template>

<script>
import {navigationLinks} from "~/utils/constants/navigationLinks";
import SearchInput from "~/components/forms/inputs/SearchInput.vue";
import DrawerMenu from "~/components/DrawerMenu.vue";

export default {
  name: "Header",

  components: {
    SearchInput,
    DrawerMenu
  },

  data() {
    return {
      drawerMenuIsOpen: false
    }
  },

  computed: {
    navigationLinks() {
      return navigationLinks;
    }
  },

  methods: {
    toggleDrawerMenuStatus() {
      this.drawerMenuIsOpen = !this.drawerMenuIsOpen;
      console.log(this.drawerMenuIsOpen)
    }
  }
}
</script>

<style lang="scss">
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
    -webkit-mask: url("~/assets/images/logo/loreal_logo.svg") center / cover no-repeat;
    background-color: #000;
  }

  &__search {
    flex-grow: 1;
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
    mask: url("~/assets/images/icons/scientific_base_icon.svg") center / cover no-repeat;
    -webkit-mask: url("~/assets/images/icons/scientific_base_icon.svg") center / cover no-repeat;
    background-color: var(--text-color-extralight);
    transition: background-color .3s;
  }

  &__nav-link:hover &__link-icon, &__nav-link.tab_active &__link-icon {
    background-color: var(--primary-color);
  }

  &__menu-button {
    width: 30px;
    height: 18px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    box-sizing: border-box;
    transition: border-color .3s;

    &:hover, &:hover span {
      border-color: var(--primary-color);
    }

    & span {
      display: block;
      width: 100%;
      border-top: 2px solid #000;
      transition: border-color .3s;
    }
  }
}

@media (max-width: 767px) {
  .header {
    padding: 8px 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, .1);

    &__wrapper {
      flex-direction: row;
      gap: 16px;
    }

    &__row:first-child {
      flex-grow: 1;
    }

    &__logo {
      display: none;
    }

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