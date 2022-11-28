import { useAppDispatch } from '../../hooks/store-helpers';
import { showMoreMoviesToView } from '../../store/slices/movies-slice';

export default function ShowMoreButton() {
  const dispatch = useAppDispatch();

  const showMoreHandler = () => {
    dispatch(showMoreMoviesToView());
  };

  return (
    <button className='catalog__button' type='button' onClick={showMoreHandler}>
      Show more
    </button>
  );
}
