<template>
  <ElDrawer
    :visible.sync="drawerModel"
    :destroy-on-close="true"
    size="auto"
    :append-to-body="true"
    class="drawer-menu"
  >
    <ElMenu
      :default-openeds="activeGroups"
      class="drawer-menu__menu"
    >
      <template v-for="(link, key) in navLinks">
        <ElSubmenu
          v-if="link.children"
          :key="`drawer-group-${key}`"
          :index="key"
        >
          <template #title>
            <span>{{ link.name }}</span>
          </template>

          <ElMenuItem
            v-for="(subLink, key) in link.children"
            :key="`subLink-${key}`"
            :index="key"
            class="drawer-menu__second-level-link"
          >
            <NuxtLink :to="subLink.link">
              {{ subLink.name }}
            </NuxtLink>
          </ElMenuItem>
        </ElSubmenu>

        <ElMenuItem
          v-else
          :key="`drawer-link-${key}`"
          :index="key"
          class="drawer-menu__first-level-link"
        >
          <NuxtLink :to="link.link">
            {{ link.name }}
          </NuxtLink>
        </ElMenuItem>
      </template>
    </ElMenu>
  </ElDrawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { navigationLinks } from '~/utils/constants/navigationLinks';
import NavLinks from '~/types/NavLinks';

interface Props {
  isOpen: boolean;
  onClose: void;
}

const props = defineProps<Props>();

const activeGroups = ref([ 'cabinet' ]);

const drawerModel = computed({
  get: () => props.isOpen,
  set: () => props.onClose()
});

const navLinks = computed<NavLinks>(() => {
  const {
    cabinet,
    clinicalCases,
    products,
    giftsPro,
    scientificBase,
    telemedicine,
    events,
    feedback,
    calendar
  } = navigationLinks;

  return {
    cabinet: {
      name: cabinet.name,
      link: cabinet.link,
      children: {
        observation: cabinet.children?.observation,
        patients: cabinet.children?.patients,
        practitionerSkills: cabinet.children?.practitionerSkills
      }
    },
    clinicalCases,
    products: {
      name: products.name,
      link: products.link,
      children: {
        products: {
          name: products.name,
          link: products.link
        },
        reviews: products.children?.reviews,
        quiz: products.children?.quiz
      }
    },
    giftsPro,
    scientificBase,
    telemedicine,
    events: {
      name: events.name,
      link: events.link,
      children: {
        events: {
          name: 'Ближайшие',
          link: events.link
        },
        eventsArchive: {
          name: 'Прошедшие',
          link: events.children?.eventsArchive.link
        },
        webinars: events.children?.webinars
      }
    },
    feedback,
    calendar
  };
});
</script>

<style lang="scss">
.drawer-menu {
  & .el-drawer__header {
    margin: 0;
    padding: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

    & .el-drawer__close-btn {
      width: 16px;
      height: 16px;
    }

    & .el-drawer__close svg {
      color: var(--text-color);
    }
  }

  & .el-drawer__body {
    padding: 32px;
    width: 437px;
    box-sizing: border-box;
  }

  & ul.el-menu::before,
  & ul.el-menu::after {
    display: none;
  }

  & &__menu {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: none;

    & .el-menu-item,
    & a {
      color: var(--text-color);
    }

    & .el-menu-item:hover,
    & a:hover,
    & .el-submenu__title:hover {
      color: var(--primary-color);
    }

    & .el-submenu__title {
      display: flex;
      align-items: center;
    }

    & .el-submenu__title,
    & .drawer-menu__first-level-link {
      height: auto;
      padding: 0 !important;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
    }

    & .el-menu-item:hover,
    & .el-submenu__title:hover {
      background: none;
    }

    & .el-submenu__title::after {
      margin-left: auto;
      content: "";
      display: inline-block;
      width: 21px;
      height: 10px;
      background: url("~/assets/images/icons/arrow_icon.svg") center / cover
        no-repeat;
      rotate: 180deg;
      transition: rotate 0.4s;
    }

    & .el-submenu.is-opened .el-submenu__title::after {
      rotate: 0deg;
    }

    & .el-submenu__icon-arrow {
      display: none;
    }

    & .el-menu--inline {
      padding-left: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    & .drawer-menu__second-level-link {
      padding: 0 !important;
      height: auto;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.43;
    }

    & .drawer-menu__second-level-link:first-child {
      padding-top: 12px !important;
    }
  }
}

@media (max-width: 767px) {
  .drawer-menu {
    & .el-drawer__body {
      padding: 24px 24px 107px;
      width: 100vw;
    }
  }
}
</style>
