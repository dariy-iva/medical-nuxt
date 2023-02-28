import IImage from '~/types/Image';

interface IEvent {
  address: string;
  alias: string;
  anons: string;
  city: string | null;
  content: string | HTMLElement;
  content_image: IImage;
  date: string;
  finished: boolean;
  id: number;
  image: {
    desktop: IImage;
    mobile: IImage | { src: boolean; alt: string };
  };
  link: string;
  name: string;
  online: 1 | null;
  parent: number;
  place_map: string | null;
  preview_bar_color_class: '';
  speaker: {
    name: string;
    employment: string | null;
  };
  time: string;
  title: string;
  visible_in_menu: boolean;
  webinar: string | null;
  wrapper_class: string | null;
  isRecorded?: boolean;
}

export default IEvent;
