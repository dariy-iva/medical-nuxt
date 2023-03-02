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

      <UserServicesList
        :services-data="pointsCardsData"
        :is-points="true"
      />
    </section>

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои инструменты
      </h2>

      <UserServicesList
        :services-data="servicesCardsData"
        :is-points="false"
      />
    </section>

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои сертификаты
      </h2>

      <CertificatesList />
    </section>

    <section class="user-index-page__section">
      <h2 class="user-index-page__title">
        Мои мероприятия
      </h2>

      <EventsList />
    </section>

    <ModalWithoutHeader
      :toggle-is-visible="toggleVisibilityPromocodeModal"
      :is-visible="modals.promocodeModal.isOpen"
      class-name="user-index-page__modal"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import UserInfoSection from '~/components/UserInfoSection.vue';
import UserServicesList from '~/components/UserServicesList.vue';
import CertificatesList from '~/components/CertificatesList.vue';
import EventsList from '~/components/EventsList.vue';
import ModalWithoutHeader from '~/components/modals/ModalWithoutHeader.vue';
import { navigationLinks } from '~/utils/constants/navigationLinks';
import { useModalsStore } from '~/stores/ModalsStore';
import { useUserNumberPoints } from '~/composables/api/userNumberPoints';

const modalStore = useModalsStore();
const { modals } = storeToRefs(modalStore);
const { toggleVisibilityPromocodeModal } = modalStore;

const { numberPoints, loadNumberPoints } = useUserNumberPoints();

const pointsCardsData = computed(() => {
  const { cabinet } = navigationLinks;
  const maxNumber = 9999;

  return {
    history: {
      link: cabinet?.children?.points.link ?? '',
      name: `${numberPoints.value > maxNumber ? '9999+' : numberPoints.value}`,
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

onMounted(async () => {
  await loadNumberPoints();
});
</script>

<style lang="scss">
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

  &__modal {
    padding: 24px;
    width: 460px;
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

    &__modal {
      padding: 16px;
      width: 72%;
    }
  }
}
</style>
