interface IGeo {
  lat: string;
  long: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  phone?: string;
  email: string;
  website?: string;
  address?: IAddress;
  company?: ICompany;
}

export interface UserFeatureState {
  Users: {
    list: IUser[];
    isLoading: boolean;
    error:string;
  }
}

export const UsersInitialState = {
    list: [] as IUser[],
    isLoading: true,
    error:'',
}
