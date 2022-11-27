export enum ApiRoutes {
  Movies = '/films',
  Promo = '/promo',
  Comments = '/comments/:movieId',
  Login = '/login',
  Logout = '/logout',
}

export function getCommentsLink(movieId: string): string {
  return ApiRoutes.Comments.replace(':movieId', movieId);
}
