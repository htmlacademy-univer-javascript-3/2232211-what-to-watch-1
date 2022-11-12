export enum PageLink {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found'
}

export function getMovieLink(movieId: number): string {
  return PageLink.Film.replace(':id', movieId.toString());
}

export function getAddReviewLink(movieId: number): string {
  return PageLink.AddReview.replace(':id', movieId.toString());
}

export function getPlayerLink(playerId: string): string {
  return PageLink.Player.replace(':id', playerId);
}
