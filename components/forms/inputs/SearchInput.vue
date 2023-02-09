<template>
  <ElForm
    name="searchForm"
    :class="`search-form ${formClass}`"
  >
    <ElInput
      v-model="search"
      type="search"
      required
      placeholder="Поиск"
    >
      <template #append>
        <button
          type="submit"
          class="blue-button search-form__submit"
          aria-label="поиск"
        />
      </template>
    </ElInput>
  </ElForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  formClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  formClass: ''
});

const search = ref('');
</script>

<style lang="scss">
.search-form {
  &__submit {
    min-width: 80px;
    min-height: 44px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-image: url("~/assets/images/icons/search_icon.svg");
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (max-width: 767px) {
  .search-form {
    &__submit {
    }
  }
}
</style>
