import IImage from '~/types/Image';

interface ICertificate {
  date: string;
  image: IImage;
  link_to_download_pdf: string;
  message: string | HTMLElement;
  name: string;
  path_to_jpg: string;
  path_to_pdf: string;
}

export default ICertificate;
