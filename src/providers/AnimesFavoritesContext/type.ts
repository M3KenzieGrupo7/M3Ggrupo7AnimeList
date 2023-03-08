export interface IIdFavoritesUser {
  id: number;
}

export interface IIdFavoritesAnime {
  id: number;
}

export interface IFavoriteAnimes {
  userId: number;
  animesIds: number[];
  id?: number;
}
