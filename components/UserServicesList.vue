<template>
  <ul class="user-services">
    <li
      v-for="(card, key) in servicesData"
      :key="`service-${key}`"
      class="user-services__item"
    >
      <UserServicesListItem
        :card-data="card"
        :key-link="key"
        :is-points="isPoints"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import UserServicesListItem from '~/components/UserServicesListItem.vue';
import IUserService from '~/types/props/UserService';

defineProps<{
  servicesData: { [index: string]: IUserService };
  isPoints: boolean;
}>();
</script>

<style scoped lang="scss">
.user-services {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 767px) {
  .user-services {
    row-gap: 16px;
    column-gap: 8px;
  }
}

@media (max-width: 375px) {
  .user-services__item {
    width: calc(50% - 4px);
  }
}
</style>
