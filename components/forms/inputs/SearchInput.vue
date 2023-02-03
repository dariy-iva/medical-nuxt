<template>
  <el-form name="searchForm" :class="`search-form ${formClass || ''}`">
    <el-input
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
    </el-input>
  </el-form>
</template>

<script>
export default {
  name: "SearchInput",

  props: {
    formClass: String
  },

  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
.search-form {
  &__submit {
    min-width: 80px;
    min-height: 100%;
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