import MovieButton from './movie-button';
import InListIcon from '../icons/in-list-icon';
import AddIcon from '../icons/add-icon';
import { Movie } from '../../types/movie';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { setFavoriteMovieAction } from '../../store/slices/favorite-movies-slice';

interface MyListButtonProps {
  movie: Movie;
  updateMovieWithoutLoadingHandler: () => Promise<void>;
}

export default function MyListButton({movie, updateMovieWithoutLoadingHandler}: MyListButtonProps) {
  const { favoriteMovies, favoriteMoviesLoading } = useAppSelector((state) => state.favoriteMovies);
  const dispatch = useAppDispatch();
  const [myListButtonClick, setMyListButtonClick] = useState(false);

  const handleMyListClick = async () => {
    setMyListButtonClick(true);
    await dispatch(setFavoriteMovieAction(({
      movieId: movie.id,
      status: (Number(!movie.isFavorite))
    })));
    await updateMovieWithoutLoadingHandler();
    setMyListButtonClick(false);
  };

  return (
    <MovieButton
      icon={movie.isFavorite ? <InListIcon /> : <AddIcon/>}
      moviesListCount={favoriteMovies?.length ?? 0}
      onClick={handleMyListClick}
      loading={myListButtonClick || favoriteMoviesLoading}
    >
      My list
    </MovieButton>
  );
}
