<template>
  <div class="main-page">
    <section class="main-page__section">
      <CalendarBanner/>
    </section>
  </div>
</template>

<script setup lang="ts">
import CalendarBanner from '~/components/CalendarBanner.vue';
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  gap: 64px;

  &__section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}

@media (max-width: 767px) {
  .main-page {
    gap: 24px;

    &__section {
      gap: 16px;
    }
  }
}
</style>
