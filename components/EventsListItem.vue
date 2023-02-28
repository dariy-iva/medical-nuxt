<template>
  <article class="event-card container-shadow-light">
    <div class="event-card__date-time">
      <time class="event-card__date">{{ eventData.date }}</time>

      <time
        v-if="!eventData.finished"
        class="event-card__time"
      >{{
        eventData.time
      }}</time>

      <p
        v-else
        class="event-card__time"
      >
        Завершено
      </p>
    </div>

    <div class="event-card__image-block">
      <NuxtLink
        :to="eventData.link"
        class="event-card__link"
      />

      <span
        v-if="eventData.online"
        class="event-card__label"
      > Онлайн </span>

      <img
        :src="eventData.image.desktop.src"
        :alt="eventData.image.alt"
        class="event-card__image"
      >
    </div>

    <div class="event-card__content">
      <p
        class="event-card__title"
        v-html="eventData.title"
      />

      <p class="event-card__location">
        {{ eventData.address }}
      </p>
    </div>

    <div class="event-card__controls">
      <div
        :class="`event-card__controls-top ${
          !eventData.webinar || eventData.finished
            ? 'event-card__controls-top__fill'
            : ''
        }`"
      >
        <NuxtLink
          class="button button_color_blue-light"
          :to="eventData.link"
        >
          Подробнее
        </NuxtLink>

        <a
          v-if="eventData.webinar && !eventData.finished"
          :href="eventData.webinar"
          class="button button_color_blue-light"
        >
          К мероприятию
        </a>
      </div>

      <div class="event-card__controls-bottom">
        <event-add-to-calendar
          v-if="!eventData.finished"
          :event-id="eventData.id"
          :show-delete-event-btn="deleteEventBtnIsVisible"
          :is-recorded="eventData.isRecorded"
          @afterAddToCalendar="loadUserEventsId"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/UserStore';
import { useUserEventsId } from '~/composables/api/userEventsId';
import IEvent from '~/types/Event';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const { loadUserEventsId } = useUserEventsId();

defineProps<{
  eventData: IEvent;
}>();

const deleteEventBtnIsVisible = computed((): boolean => {
  return user.value.type === 'sv';
});
</script>

<style scoped lang="scss">
.event-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: var(--general-background-color);

  &__date-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 24px;
  }

  &__date {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
  }

  &__time {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }

  &__image-block {
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  &__image {
    display: block;
    width: 100%;
    aspect-ratio: 10 / 5.1;
    object-position: center;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &__label {
    position: absolute;
    top: 30px;
    left: 20px;
    padding: 0 8px;
    background-color: var(--label-color);
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--general-background-color);
  }

  &__content {
    margin-top: 20px;
    padding: 0 24px;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
  }

  &__location {
    margin-top: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-color-light);
  }

  &__controls {
    margin-top: auto;
    padding: 24px;

    .el-button + .el-button {
      margin-left: 0;
    }
  }

  &__controls-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;

    &__fill {
      grid-template-columns: 1fr;
      grid-column-gap: 0;
    }

    a.link--blue {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 8px;
    }
  }

  &__controls-bottom {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 10px;

    .el-button {
      width: 100%;
    }
  }
}

@media (max-width: 767px) {
  .event-card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    &__date-time {
      padding: 11px 16px;
    }

    &__date {
      font-size: 18px;
    }

    &__time {
      font-size: 13px;
    }

    &__content {
      margin-top: 10px;
      padding: 0 16px;
    }

    &__location {
      font-size: 13px;
    }

    &__controls {
      padding: 16px;
    }
  }
}
</style>
