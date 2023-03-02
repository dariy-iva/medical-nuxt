import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IModal {
  isOpen: boolean;
}

export const useModalsStore = defineStore('modals', () => {
  const modals = ref<{ [index: string]: IModal }>({
    promocodeModal: {
      isOpen: false
    }
  });

  function toggleVisibilityPromocodeModal(): void {
    modals.value.promocodeModal.isOpen = !modals.value.promocodeModal.isOpen;
  }

  return {
    modals,
    toggleVisibilityPromocodeModal
  };
});
