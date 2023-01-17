import MovieButton from './movie-button';
import InListIcon from '../icons/in-list-icon';
import AddIcon from '../icons/add-icon';
import { Movie } from '../../types/movie';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { setFavoriteMovieAction } from '../../store/slices/favorite-movies-slice';
import { getToken } from '../../services/token';
import { useNavigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';

interface MyListButtonProps {
  movie: Movie;
  onUpdateMovieWithoutLoading: () => Promise<void>;
}

export default function MyListButton({movie, onUpdateMovieWithoutLoading}: MyListButtonProps) {
  const { favoriteMovies, favoriteMoviesLoading } = useAppSelector((state) => state.favoriteMovies);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [myListButtonClick, setMyListButtonClick] = useState(false);

  const handleMyListClick = async () => {
    if (!getToken()) {
      // in case user is not authorized
      navigate(PageLink.SignIn);
      return;
    }

    setMyListButtonClick(true);
    await dispatch(setFavoriteMovieAction(({
      movieId: movie.id,
      status: (Number(!movie.isFavorite))
    })));
    await onUpdateMovieWithoutLoading();
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
