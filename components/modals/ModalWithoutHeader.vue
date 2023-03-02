<template>
  <ElDialog
    :visible.sync="visibleSync"
    :show-close="false"
    class="modal-without-header"
    :custom-class="`modal-without-header__container ${className || ''}`"
    :destroy-on-close="true"
    :center="true"
  >
    <slot />
  </ElDialog>
</template>

<script setup lang="ts">
import { computed, Ref } from 'vue';

const props = defineProps<{
  isVisible: Ref<boolean>;
  toggleIsVisible: void;
  className?: string;
}>();

const visibleSync = computed({
  get() {
    return props.isVisible;
  },
  set() {
    props.toggleIsVisible();
  }
});
</script>

<style lang="scss">
.modal-without-header {
  display: flex;

  &__container {
    margin: auto !important;
  }

  & .el-dialog__header {
    display: none;
  }

  & .el-dialog__body {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
