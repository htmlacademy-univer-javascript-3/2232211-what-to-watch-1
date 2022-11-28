export enum ApiRoutes {
  Movies = '/films',
  Promo = '/promo',
  Comments = '/comments/:movieId',
}

export function getCommentsLink(movieId: string): string {
  return ApiRoutes.Comments.replace(':movieId', movieId);
}
