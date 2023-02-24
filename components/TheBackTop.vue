<template>
  <ElBacktop
    :visibility-height="300"
    :right="null"
    :bottom="null"
    class="back-top"
  >
    <div class="back-top__icon" />
  </ElBacktop>
</template>

<style scoped lang="scss">
.back-top {
  &.el-backtop {
    bottom: 150px;
    right: 40px;
    width: 48px;
    height: 48px;
    background-color: var(--primary-color);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:hover {
      background-color: var(--primary-light-color);
    }
  }

  &__icon {
    width: 16px;
    height: 8px;
    mask: url("@/assets/images/icons/arrow_icon.svg") center / cover no-repeat;
    -webkit-mask: url("@/assets/images/icons/arrow_icon.svg") center / cover
      no-repeat;
    background-color: var(--general-background-color);
  }
}

@media (max-width: 767px) {
  .back-top.el-backtop {
    bottom: 100px;
    right: 23px;
  }
}
</style>
