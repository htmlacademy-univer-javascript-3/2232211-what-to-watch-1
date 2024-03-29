export enum PageLink {
  Main = '/',
  SignIn = '/login',
  SignOut = '/logout',
  MyList = '/myList',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/notFound'
}

export function getMovieLink(movieId: number): string {
  return PageLink.Film.replace(':id', movieId.toString());
}

export function getAddReviewLink(movieId: number): string {
  return PageLink.AddReview.replace(':id', movieId.toString());
}

export function getPlayerLink(movieId: number): string {
  return PageLink.Player.replace(':id', movieId.toString());
}
