import { AllGenresTab, GenreList } from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { Movie } from '../../types/movie';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { getFilteredMovieItems } from '../../utils/functions';
import { useEffect } from 'react';
import { resetMoviesToViewCount } from '../../store/action';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const { activeTab, moviesToViewCount } = useAppSelector((state) => state);

  const filteredByGenreMovies = getFilteredMovieItems({
    movies,
    filter: (movie) => activeTab === AllGenresTab || movie.genre === activeTab,
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
