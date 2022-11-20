import { AllGenresTab, GenreList } from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/store-helpers';
import { FilteredMovieItems } from '../../components/filtered-movie-items/filtered-movie-items';
import { Movie } from '../../types/movie';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const { activeTab } = useAppSelector((state) => state);

  return (
    <>
      <GenreList movies={movies} />

      <FilteredMovieItems
        movies={movies}
        filter={(movie) => activeTab === AllGenresTab || movie.genre === activeTab}
      />
    </>
  );
}
