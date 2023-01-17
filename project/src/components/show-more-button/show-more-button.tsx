import { useAppDispatch } from '../../hooks/store-helpers';
import { showMoreMoviesToView } from '../../store/slices/movies-slice';

export default function ShowMoreButton() {
  const dispatch = useAppDispatch();

  const showMoreMovies = () => {
    dispatch(showMoreMoviesToView());
  };

  return (
    <button className='catalog__button' type='button' onClick={showMoreMovies}>
      Show more
    </button>
  );
}
