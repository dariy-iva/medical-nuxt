<template>
  <button
    type="button"
    :disabled="isLoading"
    :class="`button button_color_blue-light load-more-button ${
      isLoading ? 'load-more-button_loading' : ''
    }`"
    aria-label="загрузить больше материала"
    @click="handleButtonClick"
  >
    <span class="load-more-button__text">Посмотреть еще</span>

    <i
      v-if="isLoading"
      class="el-icon-loading"
    />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  onClick: void;
}>();

const isLoading = ref(false);

async function handleButtonClick() {
  isLoading.value = true;

  await props.onClick();

  isLoading.value = false;
}
</script>

<style scoped lang="scss">
.load-more-button.button {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: ". text icon";
  align-items: center;
  gap: 12px;
}

.load-more-button__text {
  grid-area: text;
}

.el-icon-loading {
  grid-area: icon;
  justify-self: start;
  font-size: 20px;
}
</style>
