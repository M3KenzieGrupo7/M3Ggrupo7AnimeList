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
  name?: string;
  animesIds?: number[];
  amountAnimes?: number;
  id?: number;
}
