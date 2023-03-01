<template>
  <div
    v-if="!eventsAllIsLoading & !userEventsIdIsLoading"
    class="events"
  >
    <ul class="events__list">
      <li
        v-for="event in eventsForRender"
        :key="`event-${event.id}`"
      >
        <EventsListItem :event-data="event" />
      </li>
    </ul>

    <ButtonLoadMore
      v-if="!isMaxContent"
      :on-click="loadMoreEventsAll"
    />
  </div>

  <PreLoader v-else />
</template>

<script setup lang="ts">
import { useRoute } from '@nuxtjs/composition-api';
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import EventsListItem from '~/components/EventsListItem.vue';
import ButtonLoadMore from '~/components/ui/ButtonLoadMore.vue';
import PreLoader from '~/components/ui/PreLoader.vue';
import { useEventsAll } from '~/composables/api/eventsAll';
import { useUserEventsId } from '~/composables/api/userEventsId';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { loadUserWelcome } = userStore;

const { userEventsId, userEventsIdIsLoading, loadUserEventsId } =
  useUserEventsId();
const {
  eventsAll,
  isMaxContent,
  eventsAllIsLoading,
  loadEventsAll,
  loadMoreEventsAll
} = useEventsAll(0);

const route = useRoute();

const eventsForRender = computed(() => {
  return eventsAll.value.map(item => {
    const isRecorded = userEventsId.value.includes(item.id);

    return {
      isRecorded,
      ...item
    };
  });
});

onMounted(async () => {
  await loadEventsAll();
  await loadUserEventsId();

  const isCabinetLocation = route.value.name === 'cabinet';

  if (isCabinetLocation && !user.value.type) {
    loadUserWelcome();
  }
});
</script>

<style scoped lang="scss">
.events {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media (max-width: 767px) {
  .events {
    gap: 24px;

    &__list {
      grid-template-columns: 1fr;
      grid-column-gap: 0;
      grid-row-gap: 16px;
    }
  }
}
</style>
