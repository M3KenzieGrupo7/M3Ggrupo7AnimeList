export interface IIdFavoritesUser {
  id: number;
}

export interface IIdFavoritesAnime {
  id: number;
}

export interface IFavoriteAnimes {
  userId: number;
  animesIds: number[];
  id: number;
}

export interface IAnimeEdittFavorite {
  name?: string;
  urlImage?: string;
  eps?: number;
  genre?: string[];
  author?: string;
  synopsis?: string;
}
