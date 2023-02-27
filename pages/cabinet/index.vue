<template>
  <div class="user-index-page">
    <UserInfoSection />

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои баллы

        <ElTooltip
          effect="light"
          content="Инструкция по обмену баллов"
          placement="right"
        >
          <a
            href="https://dermatologicalbeauty.loreal.com.ru/files/giftspro.pdf"
            target="_blank"
            class="round-button user-index-page__question"
          >?</a>
        </ElTooltip>
      </h2>

      <ul class="user-index-page__services-list">
        <li
          v-for="(card, key) in pointsCardsData"
          :key="`service-${key}`"
          class="user-index-page__services-item"
        >
          <UserCardService
            :card-data="card"
            :key-link="key"
            :is-points="true"
          />
        </li>
      </ul>
    </section>

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои инструменты
      </h2>

      <ul class="user-index-page__services-list">
        <li
          v-for="(card, key) in servicesCardsData"
          :key="`service-${key}`"
          class="user-index-page__services-item"
        >
          <UserCardService
            :card-data="card"
            :key-link="key"
            :is-points="false"
          />
        </li>
      </ul>
    </section>

    <section
      v-if="certificates.length"
      class="user-index-page__section"
    >
      <h2 class="user-index-page__title">
        Мои сертификаты
      </h2>

      <ul class="user-index-page__services-list">
        <li
          v-for="certificate in certificates"
          :key="`certificate-${certificate.link_to_download_pdf}`"
          class="user-index-page__certificate-item"
        >
          <UserCardCertificate :certificate="certificate" />
        </li>
      </ul>
    </section>

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои мероприятия
      </h2>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import UserInfoSection from '~/components/UserInfoSection.vue';
import UserCardService from '~/components/UserCardService.vue';
import UserCardCertificate from '~/components/UserCardCertificate.vue';
import { navigationLinks } from '~/utils/constants/navigationLinks';
import { useUserCertificates } from '~/composables/api/userCertificates';
import { useUserNumberPoints } from '~/composables/api/userNumberPoints';

const { certificates } = useUserCertificates();
const { numberPoints } = useUserNumberPoints();

const pointsCardsData = computed(() => {
  const { cabinet } = navigationLinks;

  return {
    history: {
      link: cabinet?.children?.points.link ?? '',
      name: `${numberPoints.value > 9999 ? '9999+' : numberPoints.value}`,
      text: 'История начислений'
    },
    gifts: {
      ...cabinet?.children?.gifts,
      text: 'Обменять баллы'
    },
    promocode: {
      name: 'Ввести промокод'
    }
  };
});

const servicesCardsData = computed(() => {
  const {
    cabinet,
    clinicalCases,
    forPatients,
    practitionerSkills,
    observations
  } = navigationLinks;

  return {
    myClinicalCases: {
      ...cabinet?.children?.myClinicalCases,
      text: 'Сохраняйте фото своих пациентов и отзывы о продуктах'
    },
    clinicalCases: {
      ...clinicalCases,
      text: 'Изучайте кейсы коллег'
    },
    patients: {
      ...forPatients,
      text: 'Скачивайте и отправляйте памятки через мессенджеры'
    },
    help: {
      ...practitionerSkills,
      text: 'Смотрите видео и скачивайте интересные материалы'
    },
    observations: {
      ...observations,
      text: 'Участвуйте в исследованиях для тестирования продуктов'
    },
    telemedicine: {
      ...cabinet?.children?.onlineRecommend,
      text: 'Рекомендуйте пациентам продукты во время онлайн-консультаций'
    }
  };
});
</script>

<style scoped lang="scss">
.user-index-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__title {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    color: var(--text-color);
  }

  &__question {
    margin-left: 16px;
    width: 24px;
    height: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    color: #fff;
  }

  &__services-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .user-index-page {
    gap: 16px;

    &__section {
      gap: 16px;
    }

    &__question {
      margin-left: auto;
    }

    &__services-list {
      row-gap: 16px;
      column-gap: 8px;
    }

    &__certificate-item {
      max-width: 327px;
      width: 100%;
    }
  }
}

@media (max-width: 375px) {
  .user-index-page__services-item {
    width: calc(50% - 4px);
  }
}
</style>
