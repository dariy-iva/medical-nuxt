export const navigationLinks = {
  scientific_base: {
    name: 'Научная база',
    link: '/scientific-base'
  },
  products: {
    name: 'Продукты',
    link: '/products',
    children: {
      reviews: {
        name: 'Отзывы о продуктах',
        link: '/products/experience-exchange'
      },
      quiz: {
        name: 'Опросы',
        link: '/products/quiz'
      },
    }
  },
  events: {
    name: 'Мероприятия',
    link: '/events',
    children: {
      events_archive: {
        name: 'Прошедшие мероприятия',
        link: '/events/arkhive'
      },
      webinars: {
        name: 'Прямой эфир',
        link: '/events/webinar'
      },
    }
  },
  cabinet: {
    name: 'Личный кабинет',
    link: '/cabinet',
    children: {
      observation: {
        name: 'Обсервационные исследования',
        link: '/cabinet/observation'
      },
      patients: {
        name: 'Материалы для пациентов',
        link: '/cabinet/for-patients'
      },
      practitioner_skills: {
        name: 'В помощь практикующему врачу',
        link: '/cabinet/practitioner-skills'
      },
    }
  },
  clinical_cases: {
    name: 'Банк клинических случаев',
    link: '/clinical-cases'
  },
  gifts_pro: {
    name: 'ГифтсПро',
    link: '/gifts-pro'
  },
  telemedicine: {
    name: 'Телемедицина',
    link: '/telemedicine'
  },
  feedback: {
    name: 'Связаться с ACD',
    link: '/zayavka'
  },
  calendar: {
    name: 'Научный календарь',
    link: '/calendar'
  },
}