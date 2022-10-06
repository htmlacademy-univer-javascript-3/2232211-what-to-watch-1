export interface CatalogGenreProps {
  genre: string;
  isActive?: boolean;
}

export function CatalogGenreItem({genre, isActive}: CatalogGenreProps) {
  return (
    <li className={`catalog__genres-item ${isActive && 'catalog__genres-item--active'}`}>
      <a href='#' className='catalog__genres-link'>{genre}</a>
    </li>
  );
}
