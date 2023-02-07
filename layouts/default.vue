<template>
  <div class="app">
    <TheHeader />

    <main class="content wrapper">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  name: 'Default',

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding-top: 64px;
  padding-bottom: 64px;
  flex-grow: 1;
}

@media (max-width: 767px) {
  .content {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style>
