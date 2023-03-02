import { ref } from 'vue';
import ICertificate from '~/types/Certificate';
import { useFetch } from '~/composables/api/fetch';

interface IResponseBody {
  items: {
    [index: number]: ICertificate;
  };
  method: 'getUserCertificates';
  module: 'data';
}

export function useUserCertificates() {
  const certificates = ref<ICertificate[]>([]);

  const { data, error, isLoading, doFetch } = useFetch<IResponseBody>('/udata//data/getUserCertificates.json');

  async function loadUserCertificates() {
    await doFetch();

    if (data.value) {
      certificates.value = Object.values(data.value?.items ?? {});
    } else if (error.value) {
      console.log('Ошибка загрузки сертификатов пользователя: ', error.value);
    }
  }

  // тестовые данные
  certificates.value = [
    {
      date: '03.11.2021',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      link_to_download_pdf:
        'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      message:
        '<p class="popup-title">Благодарим за участие в Онлайн-конгрессе ACD!</p>\r\n<p class="popup-text">Ваш сертификат участника уже загружен в личный кабинет, где Вы можете его скачать.</p>',
      name: 'Онлайн-конгресс ACD',
      path_to_jpg: '',
      path_to_pdf: ''
    },
    {
      date: '03.11.2021',
      image: {
        alt: '',
        src: 'https://plus.unsplash.com/premium_photo-1661573078797-2126237e4de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      link_to_download_pdf:
        'https://plus.unsplash.com/premium_photo-1661573078797-2126237e4de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      message:
        '<p>Ваш сертификат участника уже загружен в личный кабинет, где Вы можете его скачать.</p>',
      name: 'Школа дерматоскопии: Базовый уровень',
      path_to_jpg: '',
      path_to_pdf: ''
    },
    {
      date: '03.11.2021',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1618546421236-3c6f5f78add2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      link_to_download_pdf:
        'https://images.unsplash.com/photo-1618546421236-3c6f5f78add2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      message:
        '<p>Школа дерматоскопии: Продвинутый уровень. Ваш сертификат участника уже загружен в личный кабинет, где Вы можете его скачать.</p>',
      name: 'Школа дерматоскопии: Продвинутый уровень',
      path_to_jpg: '',
      path_to_pdf: ''
    },
    {
      date: '03.11.2021',
      image: {
        alt: '',
        src: 'https://plus.unsplash.com/premium_photo-1661572884737-b618629cab2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      link_to_download_pdf:
        'https://plus.unsplash.com/premium_photo-1661572884737-b618629cab2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      message: '<p>Школа трихоскопии: Базовый уровень.&nbsp;</p>',
      name: 'Школа трихоскопии: Базовый уровень',
      path_to_jpg: '',
      path_to_pdf: ''
    }
  ];

  return { certificates, certificatesIsLoading: isLoading, loadUserCertificates };
}
