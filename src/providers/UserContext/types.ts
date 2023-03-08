export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  password?: number;
  nickname: string;
  avatar: string;
  background: string;
  id: number;
}
export interface IFavoriteAnime {
  userId: number;
  animesIds: number[];
  id?: number;
}
export interface IDataUser {
  accessToken: string;
  user: IUser;
}
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IRegisterFormValues {
  name: string;
  nickname: string;
  background: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface IEditFormValues {
  name?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

export interface IIdUser {
  id: number;
}
