<template>
  <div class="preloader">
    <div class="preloader__circle" />

    <p class="preloader__text">
      {{ loadingText }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  loadingText: string;
}

withDefaults(defineProps<Props>(), {
  loadingText: 'Загрузка'
});
</script>

<style scoped lang="scss">
.preloader {
  padding: 100px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  user-select: none;
  box-sizing: border-box;

  &__circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 3px solid transparent;
    border-left-color: var(--primary-color);
    animation: circle-animation 0.6s linear infinite;
  }

  &__text {
    color: var(--text-color-light);
    font-size: 12px;
    text-align: center;
  }
}
</style>
