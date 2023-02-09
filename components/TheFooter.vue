<template>
  <footer class="footer">
    <div class="footer__level footer__level_up">
      <div class="footer__contacts wrapper">
        <h3 class="footer__title">
          Свяжитесь с нами, если возникнут вопросы
        </h3>

        <p class="footer__work-time">
          По будням с 8:00 до 19:00 по московскому времени
        </p>

        <a
          href="tel:88005114387"
          class="footer__phone"
        >8 (800) 511-43-87</a>

        <a
          href="mailto:dashann@mail.ru?subject=Вопрос&body=Привет!"
          class="footer__mail blue-button"
        >Написать нам
        </a>
      </div>
    </div>

    <div class="footer__level">
      <div class="footer__rights-info wrapper">
        <p class="footer__copy">
          &copy;&nbsp;2022, Loreal Dermatological Beauty
        </p>

        <p class="footer__notification">
          Информация предназначена только для&nbsp;специалистов здравоохранения
        </p>

        <p class="footer__policy">
          <a
            href="#"
            target="_blank"
          >Политика конфиденциальности</a>
          <a
            href="#"
            target="_blank"
          >Правила пользования сайтом</a>
        </p>
      </div>
    </div>

    <div class="footer__menu container-shadow">
      <ul class="footer__menu-list">
        <li
          v-for="(link, key) in navLinks"
          :key="`footer-link-${key}`"
        >
          <NuxtLink
            :to="link.link"
            :class="`footer__menu-link`"
            active-class="footer__menu-link_active"
          >
            <span
              :class="`footer__menu-icon footer__menu-icon_content_${key}`"
            />
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import {computed} from 'vue';
import {navigationLinks} from '~/utils/constants/navigationLinks';


const navLinks = computed(() => {
  const {scientificBase, products, events, cabinet} = navigationLinks;

  return {
    home: {
      name: 'Главная',
      link: '/',
    },
    scientificBase,
    products,
    events,
    account: {
      name: 'Аккаунт',
      link: cabinet.link,
    },
  };
});
</script>

<style lang="scss">
.footer {
  &__level {
    padding-top: 64px;
    padding-bottom: 64px;

    &_up {
      border: 1px solid #efefef;
    }

    &:not(&_up) {
      background-color: var(--text-color-inverse);
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--text-color);
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
  }

  &__work-time {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }

  &__phone {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
  }

  &__mail {
    max-width: 200px;
  }

  &__mail:hover {
    color: #fff;
  }

  &__rights-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    color: #000;
  }

  &__copy {
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
  }

  &__notification {
    max-width: 318px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.62;
  }

  &__policy {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.62;
  }

  &__menu {
    display: none;
  }
}

@media (max-width: 767px) {
  .footer {
    &__level {
      display: none;
    }

    &__menu {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 10000;
      padding: 9px 18px;
      display: flex;
      background-color: var(--general-background-color);
    }

    &__menu-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &__menu-link {
      min-height: 41px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-weight: 400;
      font-size: 11px;
      line-height: 1.82;
      color: var(--text-color-light);

      &:hover,
      &_active {
        color: var(--primary-color);
      }
    }

    &__menu-icon {
      mask-position: center;
      mask-size: cover;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      -webkit-mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      background-color: var(--text-color-light);
      transition: background-color 0.3s;

      &_content_home {
        width: 23px;
        height: 19px;
        mask: url("~/assets/images/icons/home_icon.svg");
        -webkit-mask-image: url("~/assets/images/icons/home_icon.svg");
      }

      &_content_scientific_base {
        width: 16px;
        height: 20px;
        mask: url("~/assets/images/icons/scientific_base_icon.svg");
        -webkit-mask-image: url("~/assets/images/icons/scientific_base_icon.svg");
      }

      &_content_products {
        width: 15px;
        height: 20px;
        mask: url("~/assets/images/icons/product_icon.svg");
        -webkit-mask-image: url("~/assets/images/icons/product_icon.svg");
      }

      &_content_events {
        width: 19px;
        height: 20px;
        mask: url("~/assets/images/icons/calendar_icon.svg");
        -webkit-mask-image: url("~/assets/images/icons/calendar_icon.svg");
      }

      &_content_account {
        width: 21px;
        height: 21px;
        mask: url("~/assets/images/icons/account_icon.svg");
        -webkit-mask-image: url("~/assets/images/icons/account_icon.svg");
      }
    }

    &__menu-link:hover &__menu-icon,
    &__menu-link_active &__menu-icon {
      background-color: var(--primary-color);
    }
  }
}
</style>
