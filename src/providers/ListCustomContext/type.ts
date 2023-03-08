export interface ICustomList {
  userId: number;
  name: string;
  animesIds: number[];
  amountAnimes: number;
  id?: number;
}

export interface IIdAnimeCustomList {
  id: number;
}

export interface ICustomListEdit {
  userId: number;
  name?: string;
  animesIds?: number[];
  amountAnimes?: number;
  id?: number;
}
