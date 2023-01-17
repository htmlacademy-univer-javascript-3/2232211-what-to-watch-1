import { GenreList } from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { Movie } from '../../types/movie';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { getFilteredMovieItems } from '../../utils/functions';
import { useEffect } from 'react';
import { ALL_GENRES_TAB } from '../../store/slices/active-tab-slice';
import { resetMoviesToViewCount } from '../../store/slices/movies-slice';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const { moviesToViewCount } = useAppSelector((state) => state.movies);
  const { activeTab } = useAppSelector((state) => state.activeTab);

  const filteredByGenreMovies = getFilteredMovieItems({
    movies,
    onFilter: (movie) => activeTab === ALL_GENRES_TAB || movie.genre === activeTab,
    maxCount: moviesToViewCount
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetMoviesToViewCount());
  }, [dispatch]);

  return (
    <>
      <GenreList movies={movies} />

      <div className='catalog__films-list'>
        {filteredByGenreMovies}
      </div>

      <div className='catalog__more'>
        {filteredByGenreMovies.length >= moviesToViewCount && <ShowMoreButton />}
      </div>
    </>
  );
}
