<template>
  <el-drawer
    v-model="drawerModel"
    :destroy-on-close="true"
    size="auto"
    :append-to-body="true"
    class="drawer-menu"
  >
    <el-menu
      :default-openeds="activeGroups"
      class="drawer-menu__menu"
    >
      <template v-for="link in navigationLinks">
        <el-sub-menu v-if="link.children" :index="link.link.replace('/', '')">
          <template #title>
             <span>{{ link.name }}</span>
          </template>
          <el-menu-item
            v-for="subLink in link.children"
            :key="`subLink-${subLink.name}`"
            :index="subLink.link.replace('/', '')"
            class="drawer-menu__second-level-link"
          >
            <NuxtLink
              :to="subLink.link"
            >
              {{ subLink.name }}
            </NuxtLink>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item
          v-else
          :index="link.link.replace('/', '')"
          class="drawer-menu__first-level-link"
        >
          <NuxtLink
            :to="link.link"
          >
            {{ link.name }}
          </NuxtLink>
        </el-menu-item>
      </template>
    </el-menu>
  </el-drawer>
</template>

<script>
import {navigationLinks} from "~/utils/constants/navigationLinks";

export default {
  name: "DrawerMenu",

  props: {
    isOpen: Boolean,
    onClose: Function
  },

  data() {
    return {
      activeGroups: ['cabinet']
    }
  },

  computed: {
    drawerModel: {
      get() {
        return this.isOpen
      },
      set() {
        this.onClose();
      }
    },

    navigationLinks() {
      const {
        cabinet,
        clinical_cases,
        products,
        gifts_pro,
        scientific_base,
        telemedicine,
        events,
        feedback,
        calendar
      } = navigationLinks;

      return [
        {
          name: cabinet.name,
          link: cabinet.link,
          children: Object.values(cabinet.children)
        },
        clinical_cases,
        {
          name: products.name,
          link: products.link,
          children: [
            {
              name: products.name,
              link: products.link,
            },
            ...Object.values(products.children)
          ]
        },
        gifts_pro,
        scientific_base,
        telemedicine,
        {
          name: events.name,
          link: events.link,
          children: [
            {
              name: 'Ближайшие',
              link: events.link,
            },
            {
              name: events.children.events_archive.name.split(' ')[0],
              link: events.children.events_archive.link,
            },
            events.children.webinars
          ]
        },
        feedback,
        calendar,
      ]
    }
  }
}
</script>

<style lang="scss">
.drawer-menu {

  & .el-drawer__header {
    margin: 0;
    padding: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .1);

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

  & &__menu {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: none;

    & .el-menu-item, & a{
      color: var(--text-color);
    }

    & .el-menu-item:hover, & a:hover, & .el-sub-menu__title:hover {
      color: var(--primary-color);
    }

    & .el-sub-menu__title, & .drawer-menu__first-level-link {
      height: auto;
      padding: 0!important;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
    }

    & .el-menu-item:hover, & .el-sub-menu__title:hover {
      background: none;
    }

    & .el-sub-menu__title::after {
      margin-left: auto;
      content: '';
      width: 21px;
      height: 10px;
      background: url("~/assets/images/icons/arrow_icon.svg") center / cover no-repeat;
      rotate: 180deg;
      transition: rotate .4s;
    }

    & .el-sub-menu.is-opened .el-sub-menu__title::after {
      rotate: 0deg;
    }

    & .el-sub-menu__icon-arrow {
      display: none;
    }

    & .el-menu--inline {
      padding-left: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    & .drawer-menu__second-level-link {
      padding: 0!important;
      height: auto;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.43;
    }

    & .drawer-menu__second-level-link:first-child {
      padding-top: 12px!important;
    }
  }
}

@media (max-width: 767px) {
  .drawer-menu {

    & .el-drawer__body {
      padding: 24px;
      width: 100vw;
    }
  }
}
</style>