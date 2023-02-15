<template>
  <article class="calendar-banner">
    <h3 class="calendar-banner__title">
      Научный календарь La&nbsp;Roche-Posay
    </h3>

    <p class="calendar-banner__text">
      Ознакомьтесь с самыми актуальными материалами по сезонным нозологиям от ведущих спикеров дерматологии.
    </p>

    <NuxtLink
      to="#"
      class="calendar-banner__button button"
    >
      К материалам
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.calendar-banner {
  padding: 64px 86px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-image:
      url("~/assets/images/backgrounds/products_background.webp"),
      linear-gradient(84.9deg, var(--tertiary-color) 24.65%, var(--general-background-color) 136.83%);
  background-repeat: no-repeat;
  background-size: 56.7%, cover;
  background-position: bottom right, center;
  border-radius: 8px;

  &__title {
    max-width: 561px;
    font-weight: 700;
    font-size: 54px;
    line-height: 1.19;
    text-transform: uppercase;
    color: var(--general-background-color);
  }

  &__text {
    max-width: 447px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    color: var(--general-background-color);
  }

  &__button {
    max-width: 200px;
    color: var(--primary-color);
    background-color: var(--general-background-color);

    &:hover {
      background-color: var(--secondary-color);
    }
  }
}

@media (max-width: 767px) {
  .calendar-banner {
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-image: linear-gradient(84.9deg, var(--tertiary-color) 70%, var(--general-background-color) 130%);
    background-size: cover;
    background-position: center;

    &__title {
      max-width: 100%;
      font-size: 36px;
    }

    &__text {
      max-width: 100%;
      //font-size: 18px;
    }
  }
}
</style>
