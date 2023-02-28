interface IUser {
  id?: number;
  type?: string;
  shortName?: string;
  fullName?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  city?: string;
  country?: string;
  deliveryAddress?: string;
  livingIndex?: string;
  livingCity?: string;
  livingStreet?: string;
  livingHouse?: string;
  livingBuilding?: string;
  livingFlat?: string;
}

export default IUser;
