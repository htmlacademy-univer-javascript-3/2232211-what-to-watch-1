export enum ApiRoutes {
  Movies = '/films',
  Movie = '/films/:movieId',
  SimilarMovies = '/films/:movieId/similar',
  Promo = '/promo',
  Comments = '/comments/:movieId',
  Login = '/login',
  Logout = '/logout',
}

export function getCommentsLink(movieId: string): string {
  return ApiRoutes.Comments.replace(':movieId', movieId);
}

export function getMovieLink(movieId: string): string {
  return ApiRoutes.Movie.replace(':movieId', movieId);
}

export function getSimilarMoviesLink(movieId: string): string {
  return ApiRoutes.SimilarMovies.replace(':movieId', movieId);
}
