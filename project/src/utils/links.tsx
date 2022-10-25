export enum PageLink {
  main = '/',
  signIn = '/login',
  myList = '/myList',
  film = '/films/:id',
  addReview = '/films/:id/review',
  player = '/player/:id'
}

export function getMovieLink(movieId: number): string {
  return PageLink.film.replace(':id', movieId.toString());
}

export function getAddReviewLink(movieId: number): string {
  return PageLink.addReview.replace(':id', movieId.toString());
}

export function getPlayerLink(playerId: string): string {
  return PageLink.player.replace(':id', playerId);
}
