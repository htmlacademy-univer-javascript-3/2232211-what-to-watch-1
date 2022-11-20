import { AllGenresTab, GenreList } from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/store-helpers';
import { FilteredMovieItems } from '../../components/filtered-movie-items/filtered-movie-items';
import { Movie } from '../../types/movie';
import { getFilteredMovieItems } from '../../utils/functions';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const { activeTab } = useAppSelector((state) => state);

  const filteredByGenreMovies = getFilteredMovieItems({
    movies,
    filter: (movie) => activeTab === AllGenresTab || movie.genre === activeTab,
    maxCount: moviesToViewCount
  });

  return (
    <>
      <GenreList movies={movies} />

      <div className='catalog__films-list'>
        {filteredByGenreMovies}
      </div>
    </>
  );
}
