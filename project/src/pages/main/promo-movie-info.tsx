import type { Movie } from '../../types/movie';
import MovieButton from '../../components/buttons/movie-button';
import PlayIcon from '../../components/icons/play-icon';
import { getPlayerLink } from '../../utils/links';
import { useNavigate } from 'react-router-dom';
import MyListButton from '../../components/buttons/my-list-button';
import { useAppDispatch } from '../../hooks/store-helpers';
import { updatePromoMovieWithoutLoadingAction } from '../../store/slices/promo-movie-slice';

interface SelectedMovieInfoProps {
  promoMovie: Movie;
}

export default function PromoMovieInfo({
  promoMovie,
}: SelectedMovieInfoProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const updateMovieWithoutLoadingHandler = async () => {
    await dispatch(updatePromoMovieWithoutLoadingAction());
  };

  return (
    <>
      <div className='film-card__bg'>
        <img src={promoMovie.backgroundImage} alt={promoMovie.name}/>
      </div>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={promoMovie.posterImage} alt={`${promoMovie.name} poster`} width='218' height='327'/>
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{promoMovie.name}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{promoMovie.genre}</span>
              <span className='film-card__year'>{promoMovie.released}</span>
            </p>

            <div className='film-card__buttons'>
              <MovieButton icon={<PlayIcon/>} onClick={() => navigate(getPlayerLink(promoMovie.id))}>
                Play
              </MovieButton>
              <MyListButton
                movie={promoMovie}
                updateMovieWithoutLoadingHandler={updateMovieWithoutLoadingHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
