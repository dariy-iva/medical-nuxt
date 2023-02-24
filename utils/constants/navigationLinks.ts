import INavLinks from '~/types/NavLinks';

export const navigationLinks: INavLinks = {
  home: {
    name: 'Главная',
    link: '/'
  },

  allergy: {
    name: 'Практические пункты аллергологии',
    link: '/prakticheskie-voprosy-allergologii'
  },

  cabinet: {
    name: 'Личный кабинет',
    link: '/cabinet',
    children: {
      gifts: {
        name: 'ГифтсПро',
        link: '/cabinet/gifts'
      },

      myClinicalCases: {
        name: 'Мои наблюдения',
        link: '/cabinet/my-observations/my-clinical-cases'
      },

      onlineRecommend: {
        name: 'Телемедицина',
        link: '/cabinet/online-recommend'
      },

      points: {
        name: 'Баллы',
        link: '/cabinet/points'
      },

      profile: {
        name: 'Профиль',
        link: '/cabinet/profile'
      }
    }
  },

  clinicalCases: {
    name: 'Банк клинических случаев',
    link: '/clinical-cases'
  },

  events: {
    name: 'Мероприятия',
    link: '/events'
  },

  eventsArchive: {
    name: 'Прошедшие мероприятия',
    link: '/arkhive'
  },

  feedback: {
    name: 'Связаться с командой ACD',
    link: '/feedback'
  },

  forPatients: {
    name: 'Материалы для пациентов',
    link: '/for-patients'
  },

  logout: {
    name: 'Выход',
    link: '/users/logout'
  },

  lrp: {
    name: '',
    link: '/lrp',
    children: {
      about: {
        name: 'О бренде LA ROCHE-POSAY',
        link: '/lrp/about'
      },

      calendar: {
        name: 'Научный календарь',
        link: '/lrp/calendar'
      }
    }
  },

  observations: {
    name: 'Обсервационные исследования',
    link: '/observations'
  },

  onlineCongress: {
    name: 'Онлайн-конгресс ACD',
    link: '/all/onlajn-kongress-acd',
    children: {
      dermatitis: {
        name: 'Атопический дерматит',
        link: '/all/onlajn-kongress-acd/atopicheskij-dermatit'
      },

      acneJuniors: {
        name: 'Акне у подростков',
        link: '/all/onlajn-kongress-acd/akne-u-podrostkov-mezhdisciplinarnyj-podhod'
      },

      patientsTeenagers: {
        name: 'Особенности ведения пациентов-тинейджеров',
        link: '/all/onlajn-kongress-acd/osobennosti-vedeniya-pacientov-tinejdzherov'
      },

      dermatoses: {
        name: 'Дерматозы у взрослых',
        link: '/all/onlajn-kongress-acd/dermatozy-vzroslyh'
      },
      oncology: {
        name: 'Онкология',
        link: '/all/onlajn-kongress-acd/onkologiya'
      },
      patientsMenopause: {
        name: 'Ведение пациенток в климактерическом периоде',
        link: '/all/onlajn-kongress-acd/vedenie-pacientok-v-klimaktericheskom-periode'
      },
      innovationsCosmetic: {
        name: 'Иновационные молекулы в косметике',
        link: '/all/onlajn-kongress-acd/innovacionnye-molekuly-v-kosmetike'
      }
    }
  },

  practitionerSkills: {
    name: 'В помощь врачу',
    link: '/practitioner-skills'
  },

  products: {
    name: 'Продукты',
    link: '/products'
  },

  reviews: {
    name: 'Отзывы',
    link: '/experience-exchange'
  },

  scientificBase: {
    name: 'Научная база',
    link: '/scientific-base',
    children: {
      video: {
        name: 'Видео',
        link: '/scientific-base?material=video'
      },

      articles: {
        name: 'Статьи',
        link: '/scientific-base?material=articles'
      },

      trainings: {
        name: 'Онлайн-тренинги',
        link: '/scientific-base?material=trainings'
      },

      atlases: {
        name: 'Атласы',
        link: '/scientific-base?material=atlases'
      },

      tests: {
        name: 'Тесты',
        link: '/scientific-base?material=tests'
      }
    }
  },

  stableGrowth: {
    name: 'Устойчивое развитие',
    link: '/all/stable-growth'
  },

  telemedicine: {
    name: 'Телемедицина',
    link: '/telemedicine'
  },

  quiz: {
    name: 'Опросы',
    link: '/quiz'
  },

  vichy: {
    name: '',
    link: '/vichy',
    children: {
      about: {
        name: 'О бренде VICHY',
        link: '/vichy/about'
      },

      dercosAcademy: {
        name: 'Dercos Academia',
        link: '/vichy/dercos_academy'
      },

      neovadiol: {
        name: 'Neovadiol',
        link: '/vichy/neovadiol'
      },

      syvorotki: {
        name: 'Сыворотки',
        link: '/vichy/syvorotki'
      },

      trichology: {
        name: 'Лекторий по трихологии',
        link: '/vichy/lektorij-po-trihologii'
      },

      trichoscopy: {
        name: 'Школа Трихоскопии',
        link: '/vichy/trichoscopy2-lectures'
      }
    }
  },

  webinar: {
    name: 'Прямой эфир',
    link: '/all/webinar'
  }
};
