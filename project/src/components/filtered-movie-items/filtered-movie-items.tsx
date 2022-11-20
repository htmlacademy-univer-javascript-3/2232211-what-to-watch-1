import { Movie } from '../../types/movie';
import { MovieItem } from '../movie-item/movie-item';
import { getMovieLink } from '../../utils/links';

interface FilteredMovieItemsProps {
  movies: Movie[];
  filter: (movie: Movie) => boolean;
  maxCount?: number;
}

export function FilteredMovieItems({movies, filter, maxCount}: FilteredMovieItemsProps) {
  let movieItems = movies
    .filter(filter)
    .map((movie) => (
      <MovieItem
        key={movie.id}
        videoLink={movie.videoLink}
        posterImage={movie.posterImage}
        width='280'
        height='175'
        name={movie.name}
        href={getMovieLink(movie.id)}
      />
    ));

  if (maxCount && maxCount > 0) {
    movieItems = movieItems.slice(0, maxCount);
  }

  return (
    <div className='catalog__films-list'>
      {movieItems}
    </div>
  );
}
