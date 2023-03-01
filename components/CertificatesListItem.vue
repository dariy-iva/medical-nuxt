<template>
  <article class="user-certificate">
    <a
      :href="certificate.link_to_download_pdf"
      target="_blank"
      class="user-certificate__link"
    />

    <img
      :src="certificate.image.src"
      :alt="certificate.name"
      class="user-certificate__image"
    >

    <p class="user-certificate__date">
      {{ certificate.date }}
    </p>
  </article>
</template>

<script setup lang="ts">
interface ICertificate {
  date: string;
  image: {
    alt?: string;
    src: string;
  };
  link_to_download_pdf: string;
  message?: string;
  name: string;
  path_to_jpg?: string;
  path_to_pdf?: string;
}

defineProps<{
  certificate: ICertificate;
}>();
</script>

<style scoped lang="scss">
.user-certificate {
  position: relative;
  padding: 12px;
  width: 284px;
  border-radius: 8px;
  background-color: #f2f8f9;
  color: #00acc2;
  box-sizing: border-box;

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__date {
    margin-top: 12px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
  }

  &__image {
    display: block;
    width: 100%;
    height: 178px;
    object-position: center;
    object-fit: cover;
  }
}

@media (max-width: 767px) {
  .user-certificate {
    max-width: 327px;
    width: 100%;

    &__image {
      height: 203px;
    }
  }
}
</style>
