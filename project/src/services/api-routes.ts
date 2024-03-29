export enum ApiRoutes {
  Movies = '/films',
  Movie = '/films/:movieId',
  SimilarMovies = '/films/:movieId/similar',
  Promo = '/promo',
  Comments = '/comments/:movieId',
  Login = '/login',
  Logout = '/logout',
  AddComment = '/comments/:movieId',
  FavoriteMovies = '/favorite',
  SetFavoriteMovie = '/favorite/:movieId/:status'
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

export function getAddCommentLink(movieId: string): string {
  return ApiRoutes.AddComment.replace(':movieId', movieId);
}

export function getSetFavoriteMovieLink(movieId: string, status: string): string {
  return ApiRoutes.SetFavoriteMovie.replace(':movieId', movieId).replace(':status', status);
}
