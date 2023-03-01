import INavLinks from '~/types/NavLinks';

interface IUserService {
  link?: string;
  name?: string;
  text?: string;
  children?: INavLinks;
}

export default IUserService;
