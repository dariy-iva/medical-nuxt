import { computed, ref } from 'vue';
import axios from 'axios';
import IEvent from '~/types/Event';

interface IResponseBody {
  builder: string;
  curr_page: 0;
  items: {
    [index: number]: IEvent;
  };
  method: string;
  module: string;
  parent_id: number;
  per_page: number;
  total: number;
  view: string;
}

export function useEventsAll(pageId: number) {
  const url = `/udata//content/getPagesData/${pageId}/EventPageBuilder/EventsPageView/.json`;

  const eventsAll = ref<IEvent[]>([]);
  const perPage = ref(0);
  const total = ref(0);
  const currPage = ref(0);
  const eventsAllIsLoading = ref(false);

  const loadedItems = computed((): number => {
    const mathLoaded = (currPage.value + 1) * perPage.value;

    return Math.min(Math.max(mathLoaded, 0), total.value);
  });

  const isMaxContent = computed((): boolean => {
    return loadedItems.value >= total.value;
  });

  async function loadEventsAll(options = {}) {
    eventsAllIsLoading.value = true;

    await axios
      .get(url, options)
      .then((res: { data: IResponseBody }) => {
        eventsAll.value = eventsAll.value.concat(Object.values(res.data.items).reverse());
        perPage.value = res.data.per_page;
        total.value = res.data.total;
      })
      .catch(err => console.log('Ошибка загрузки ближайших событий: ', err))
      .finally(() => {
        eventsAllIsLoading.value = false;
      });
  }

  async function loadMoreEventsAll() {
    ++currPage.value;

    const options = {
      params: {
        p: currPage.value
      }
    };

    await loadEventsAll(options);
  }

  eventsAll.value = [
    {
      address:
        'Москва, ул. Смоленская д 5, отель «Золотое Кольцо» зал Ярославль',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej',
      anons: '',
      city: 'Москва',
      content:
        '<p>Очень подробна лекция о самой интересной теме и самых частых вопросов экспертам. Мы давно думали, кто бы мог рассказать ее максиально подробно, понятно и интересно</p>',
      content_image: {
        alt: '',
        src: '/images/pic/events/590x300_card03.jpg'
      },
      date: '19 ноября 2020',
      finished: true,
      id: 103,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: {
          alt: '',
          src: false
        }
      },
      link: '/events1/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej/',
      name: 'Уникальная Школа «Здоровье женщины 40+: междисциплинарный подход» для врачей ',
      online: null,
      parent: 21,
      place_map: null,
      preview_bar_color_class: '',
      speaker: {
        employment: 'доктор медицинских наук',
        name: 'Наталья Гусева'
      },
      time: '09:00 — 18:00',
      title:
        'Уникальная Школа «Здоровье женщины 40+: междисциплинарный подход» для врачей ',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    },
    {
      address: 'Москва, онлайн',
      alias: 'zoom-co',
      anons: '',
      city: 'Москва',
      content:
        '<p>Денис Владимирович разберет клинические случаи, присланные Вами и поделится своими навыками практикующего врача и тактикой ведения пациентов с атопическим дерматитом.</p>\r\n<p style="text-align: left;">&nbsp;</p>\r\n<p>Ждем встречи с Вами и надеямся, что Вы плодотворно и интересно проведете время!</p>\r\n<p style="text-align: left;">&nbsp;</p>\r\n<p><span style="text-decoration: underline;"><span style="color: #000000;"><strong><a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3JzNjlwYTY4M2hzZ2cxaXJhMW11ajk5aWUgZWR1Y2F0aW9uLmxycEBt&amp;tmsrc=education.lrp%40gmail.com" target="_blank" rel="noopener" style="color: #000000; text-decoration: underline;">ДОБАВИТЬ В КАЛЕНДАРЬ</a></strong></span></span></p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '9 апреля 2021',
      finished: true,
      id: 1801,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/ordinator/single-event-block/zoom-co/',
      name: 'ZOOM конференция: «Разбор клинических случаев пациентов с атопическим дерматитом»',
      online: null,
      parent: 1800,
      place_map: null,
      preview_bar_color_class: '',
      speaker: {
        name: 'Денис Владимирович Заславский',
        employment: 'доктор медицинских наук'
      },
      time: '15:00 — 16:00',
      title:
        'ZOOM конференция: <br/>«Разбор клинических случаев пациентов с атопическим дерматитом»',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    },
    {
      address:
        'Санкт-Петербург, ул. Смоленская д 5, отель «Золотое Кольцо» зал Ярославль',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej1',
      anons: '',
      city: 'Санкт-Петербург',
      content:
        '<p>Очень подробна лекция о самой интересной теме и самых частых вопросов экспертам. Мы давно думали, кто бы мог рассказать ее максиально подробно, понятно и интересно</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '8 января 2021',
      finished: true,
      id: 424,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/events1/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej1/',
      name: 'Уникальная Школа «Здоровье женщины 40+: междисциплинарный подход» для врачей ',
      online: null,
      parent: 21,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'Наталья Гусева',
        employment: 'доктор медицинских наук'
      },
      time: '09:00 — 18:00',
      title:
        'Уникальная Школа «Здоровье женщины 40+: междисциплинарный подход» для врачей ',
      visible_in_menu: true,
      webinar: 'https://afisha.timepad.ru/',
      wrapper_class: null
    },
    {
      address: 'Онлайн',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej2',
      anons: '',
      city: null,
      content:
        '<p>Ведущие спикеры дерматологии, фармации и эксперты в области онлайн-медицины поделятся с вами последними данными научных исследований, расскажут об экспертизе брендов La Roche-Posay, VICHY, DERCOS и новинках на рынке дермакосметики.</p>\r\n<p>Аравийская Е.А., д.м.н., профессор; Эрнандес Е.И., к.б.н., биофизик; Круглова Л.С., д.м.н., профессор; Галлямова Ю.А., д.м.н., профессор; Зайцева О.В., д.м.н., профессор; Шарова А.А., к.м.н., косметолог; Иконникова Е.В., к.м.н., дерматокосметолог; Голдобина М.В., врач-дерматолог, косметолог; Немятых О.Д., д.фарм.н., профессор; Демченко Д.Д., к.фарм.н., доцент; Басакина И.И., к.фарм.н., доцент и д</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '10 ноября 2022',
      finished: true,
      id: 2232,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej2/',
      name: 'ACD 2022. Торжественное открытие конгресса',
      online: 1,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        employment: 'доктор медицинских наук',
        name: 'Ведущие спикеры дерматологии, фармации и эксперты в области онлайн-медицины'
      },
      time: '10:00 — 16:00',
      title: 'ACD 2022. Торжественное открытие конгресса',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    },
    {
      address: '',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej4',
      anons: '',
      city: null,
      content:
        '<p>Очень подробна лекция о самой интересной теме и самых частых вопросов экспертам. Мы давно думали, кто бы мог рассказать ее максиально подробно, понятно и интересно</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '12 ноября 2022',
      finished: true,
      id: 2234,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej4/',
      name: 'Онлайн-конгресс ACD. Меланома и кожная токсичность',
      online: null,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'Наталья Гусева',
        employment: 'доктор медицинских наук'
      },
      time: '10:00 — 14:00 МСК',
      title: 'Онлайн-конгресс ACD. Меланома и кожная токсичность',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    },
    {
      address: 'Онлайн',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej3',
      anons: '',
      city: null,
      content:
        '<p>Поговорим с ведущими специалистами в областях дерматологии, аллергологии и педиатрии о профилактике аллергических заболеваний, ведении самых маленьких пациентов с различными заболеваниями кожи, а также о терапии акне и других дерматозов у подростков.</p>\r\n<p>Захарова И.Н., д.м.н., профессор; Пампура А.Н., д.м.н., профессор; Зайцева О.В., д.м.н., профессор; Тамразова О.Б., д.м.н., дерматовенеролог; Заплатников А.Л., д.м.н., профессор; Новик Г.А., д.м.н., профессор; Заславский Д.В., д.м.н., профессор; Феденко Е.С., д.м.н., профессор; Решетникова Т.Б., д.м.н., дерматовенеролог.</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '11 ноября 2022',
      finished: true,
      id: 2233,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej3/',
      name: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      online: null,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'ведущими специалистами в областях дерматологии, аллергологии и педиатрии ',
        employment: null
      },
      time: '10:00 — 15:30',
      title: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      visible_in_menu: true,
      webinar: 'https://events.loreal.com.ru/dermbeauty',
      wrapper_class: null
    },
    {
      address: 'Онлайн',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej5',
      anons: '',
      city: null,
      content:
        '<p>Поговорим с ведущими специалистами в областях дерматологии, аллергологии и педиатрии о профилактике аллергических заболеваний, ведении самых маленьких пациентов с различными заболеваниями кожи, а также о терапии акне и других дерматозов у подростков.</p>\r\n<p>Захарова И.Н., д.м.н., профессор; Пампура А.Н., д.м.н., профессор; Зайцева О.В., д.м.н., профессор; Тамразова О.Б., д.м.н., дерматовенеролог; Заплатников А.Л., д.м.н., профессор; Новик Г.А., д.м.н., профессор; Заславский Д.В., д.м.н., профессор; Феденко Е.С., д.м.н., профессор; Решетникова Т.Б., д.м.н., дерматовенеролог.</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '11 ноября 2022',
      finished: true,
      id: 2237,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej5/',
      name: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      online: null,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'ведущими специалистами в областях дерматологии, аллергологии и педиатрии ',
        employment: null
      },
      time: '10:00 — 15:30',
      title: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      visible_in_menu: true,
      webinar: 'https://events.loreal.com.ru/dermbeauty',
      wrapper_class: null
    },
    {
      address: 'Онлайн',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej6',
      anons: '',
      city: null,
      content:
        '<p>Поговорим с ведущими специалистами в областях дерматологии, аллергологии и педиатрии о профилактике аллергических заболеваний, ведении самых маленьких пациентов с различными заболеваниями кожи, а также о терапии акне и других дерматозов у подростков.</p>\r\n<p>Захарова И.Н., д.м.н., профессор; Пампура А.Н., д.м.н., профессор; Зайцева О.В., д.м.н., профессор; Тамразова О.Б., д.м.н., дерматовенеролог; Заплатников А.Л., д.м.н., профессор; Новик Г.А., д.м.н., профессор; Заславский Д.В., д.м.н., профессор; Феденко Е.С., д.м.н., профессор; Решетникова Т.Б., д.м.н., дерматовенеролог.</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1628062699790-7c45262b82b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '11 ноября 2022',
      finished: true,
      id: 2238,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1628062699790-7c45262b82b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej6/',
      name: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      online: null,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'ведущими специалистами в областях дерматологии, аллергологии и педиатрии ',
        employment: null
      },
      time: '10:00 — 15:30',
      title: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    },
    {
      address: 'Онлайн',
      alias:
        'unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej7',
      anons: '',
      city: null,
      content:
        '<p>Поговорим с ведущими специалистами в областях дерматологии, аллергологии и педиатрии о профилактике аллергических заболеваний, ведении самых маленьких пациентов с различными заболеваниями кожи, а также о терапии акне и других дерматозов у подростков.</p>\r\n<p>Захарова И.Н., д.м.н., профессор; Пампура А.Н., д.м.н., профессор; Зайцева О.В., д.м.н., профессор; Тамразова О.Б., д.м.н., дерматовенеролог; Заплатников А.Л., д.м.н., профессор; Новик Г.А., д.м.н., профессор; Заславский Д.В., д.м.н., профессор; Феденко Е.С., д.м.н., профессор; Решетникова Т.Б., д.м.н., дерматовенеролог.</p>',
      content_image: {
        src: 'https://images.unsplash.com/photo-1628062699790-7c45262b82b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        alt: ''
      },
      date: '11 ноября 2022',
      finished: true,
      id: 2239,
      image: {
        desktop: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1628062699790-7c45262b82b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        mobile: { src: false, alt: '' }
      },
      link: '/all/events/unikalnaya-shkola-zdorove-zhenwiny-40-mezhdisciplinarnyj-podhod-dlya-vrachej7/',
      name: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      online: null,
      parent: 2231,
      place_map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLonden%2C%20Verenigd%20Koninkrijk!5e0!3m2!1snl!',
      preview_bar_color_class: '',
      speaker: {
        name: 'ведущими специалистами в областях дерматологии, аллергологии и педиатрии ',
        employment: null
      },
      time: '10:00 — 15:30',
      title: 'Онлайн-конгресс ACD. Дерматозы детей и подростков',
      visible_in_menu: true,
      webinar: null,
      wrapper_class: null
    }
  ];
  perPage.value = 10;
  total.value = 9;

  return {
    eventsAll,
    isMaxContent,
    eventsAllIsLoading,
    loadEventsAll,
    loadMoreEventsAll
  };
}
