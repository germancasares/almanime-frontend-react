import Anime from 'types/anime';

export type State = {
  animes: Anime[];
  meta: {
    count: number,
  }
};