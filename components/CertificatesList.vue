<template>
  <ul
    v-if="!certificatesIsLoading"
    class="certificates"
  >
    <li
      v-for="certificate in certificates"
      :key="`certificate-${certificate.link_to_download_pdf}`"
      class="certificates__item"
    >
      <CertificatesListItem :certificate="certificate" />
    </li>
  </ul>

  <PreLoader v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CertificatesListItem from '~/components/CertificatesListItem.vue';
import PreLoader from '~/components/ui/PreLoader.vue';
import { useUserCertificates } from '~/composables/api/userCertificates';

const { certificates, certificatesIsLoading, loadUserCertificates } =
  useUserCertificates();

onMounted(async () => {
  await loadUserCertificates();
});
</script>

<style scoped lang="scss">
.certificates {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 767px) {
  .certificates {
    row-gap: 16px;
    column-gap: 8px;
    justify-content: center;

    &__item {
      max-width: 327px;
      width: 100%;
    }
  }
}
</style>
