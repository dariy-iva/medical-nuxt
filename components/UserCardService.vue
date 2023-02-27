<template>
  <article
    :class="`user-service ${
      isPoints ? 'user-service_content_points' : ''
    } user-service_content_${keyLink}`"
  >
    <a
      v-if="cardData.link"
      :href="cardData.link"
      class="user-service__link"
    />

    <span
      v-else
      class="user-service__link"
    />

    <p
      :class="isPoints ? `user-service__${keyLink}-name` : 'user-service__name'"
    >
      {{ cardData.name }}
    </p>

    <p
      :class="
        isPoints
          ? `user-service__${keyLink}-description`
          : 'user-service__description'
      "
    >
      {{ cardData.text }}
    </p>
  </article>
</template>

<script setup lang="ts">
import INavLinks from '~/types/NavLinks';
interface ICardData {
  link?: string;
  name?: string;
  text?: string;
  children?: INavLinks;
}

defineProps<{
  cardData: ICardData;
  keyLink: string;
  isPoints: boolean;
}>();
</script>

<style scoped lang="scss">
.user-service {
  position: relative;
  width: 284px;
  height: 160px;
  border-radius: 8px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  overflow: hidden;

  &:not(&_content_history) {
    color: var(--text-color);
  }

  &:not(&_content_points) {
    padding: 24px;
  }

  &_content_history,
  &_content_gifts {
    padding: 35px 24px 24px;
  }

  &_content_points {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &_content_history {
    position: relative;
    background-color: transparent;
    background-image: url("@/assets/images/icons/account_tools/calculator.svg");
    background-size: 91px 114px;
    background-position: bottom right;
    color: var(--general-background-color);
  }

  &_content_history::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(93.39deg, #00acc2 0.51%, #0086c0 101.37%);
  }

  &_content_gifts {
    background-color: #f2f8f9;
    background-image: url("@/assets/images/icons/account_tools/barter.svg");
    background-size: 104px 114px;
    background-position: bottom right;
  }

  &_content_promocode {
    padding: 46px 24px;
    background-color: #f5f5f5;
    background-image: url("@/assets/images/icons/account_tools/promocode.svg");
    background-size: 169px 159px;
    background-position: bottom right;
  }

  &_content_myClinicalCases {
    background-color: #f0f1f6;
    background-image: url("@/assets/images/icons/account_tools/observations.svg");
    background-size: 152px 128px;
    background-position: bottom -9px right -59px;
  }

  &_content_clinicalCases {
    background-color: #fef7e7;
    background-image: url("@/assets/images/icons/account_tools/bank.svg");
    background-size: 125px 125px;
    background-position: bottom -6px right -26px;
  }

  &_content_patients {
    background-color: #f8f2f2;
    background-image: url("@/assets/images/icons/account_tools/patients.svg");
    background-size: 124px 124px;
    background-position: bottom -5px right -30px;
  }

  &_content_help {
    background-color: #f2f8f9;
    background-image: url("@/assets/images/icons/account_tools/help.svg");
    background-size: 127.5px 119px;
    background-position: bottom right -34px;
  }

  &_content_observations {
    background-color: #eff8f0;
    background-image: url("@/assets/images/icons/account_tools/researches.svg");
    background-size: 97px 115px;
    background-position: bottom right -5px;
  }

  &_content_telemedicine {
    background-color: #faf1e7;
    background-image: url("@/assets/images/icons/account_tools/telemedicine.svg");
    background-size: 114px 110.5px;
    background-position: bottom 1px right -22px;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__name,
  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__name {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
  }

  &__history-name,
  &__gifts-name {
    margin-bottom: 22px;
  }

  &__history-name {
    font-weight: 700;
    font-size: 60px;
    line-height: 0.53;
  }

  &__gifts-name {
    font-weight: 700;
    font-size: 40px;
    line-height: 0.8;
  }

  &__promocode-name {
    max-width: 174px;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.21;
    letter-spacing: -0.3px;
  }

  &__description {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.31;
  }

  &__description:not(&__card_content_telemedicine &__description) {
    max-width: 211px;
  }

  &__card_content_telemedicine &__description {
    max-width: 222px;
  }

  &__history-description,
  &__gifts-description {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
  }
}

@media (max-width: 767px) {
  .user-service {
    max-width: 159px;

    &:not(&_content_points) {
      padding: 16px 8px;
      height: 131px;
      background-position: bottom 6px right 5px;
    }

    &_content_points {
      height: 106px;
      padding-bottom: 17px;
      padding-right: 8px;
      padding-left: 8px;
      justify-content: space-between;
    }

    &_content_history {
      padding-top: 22px;
      background-size: 63.5px 84px;
      background-position: bottom right -10px;
    }

    &_content_gifts {
      padding-top: 17px;
      background-size: 79px 87px;
      background-position: bottom right -14px;
    }

    &_content_promocode {
      padding: 29px 8px;
      background-size: 130px 118px;
      background-position: bottom right -17px;
    }

    &_content_myClinicalCases {
      background-size: 50px 42px;
    }

    &_content_clinicalCases {
      background-size: 50px 50px;
    }

    &_content_patients {
      background-size: 50px 50px;
    }

    &_content_help {
      background-size: 47px 44px;
    }

    &_content_observations {
      background-size: 42px 50px;
    }

    &_content_telemedicine {
      background-size: 50px 48.5px;
    }

    &__name {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 1.14;
      letter-spacing: 0.1px;
    }

    &__history-name,
    &__gifts-name {
      margin-bottom: 0;
    }

    &__history-name {
      font-size: 46px;
      line-height: 0.7;
    }

    &__gifts-name {
      font-size: 18px;
      line-height: 1.33;
    }

    &__promocode-name {
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: 0.8px;
    }

    &__description {
      -webkit-line-clamp: 4;
    }

    &__description {
      font-size: 11px;
      line-height: 1.27;
    }

    &__description:not(&__card_content_telemedicine &__description),
    &__card_content_telemedicine &__description {
      max-width: 100%;
    }

    &__history-description,
    &__gifts-description {
      font-size: 14px;
      line-height: 1.14;
      letter-spacing: -0.3px;
    }
  }
}

@media (max-width: 375px) {
  .user-service {
    width: 100%;
  }
}
</style>
