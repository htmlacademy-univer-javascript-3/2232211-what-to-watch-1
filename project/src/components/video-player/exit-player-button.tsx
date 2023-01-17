import { Link, useNavigate } from 'react-router-dom';
import { getMovieLink } from '../../services/api-routes';

const ExitPlayerButton = ({movieId}: {movieId: string}) => {
  const navigate = useNavigate();

  return (
    <Link
      to={getMovieLink(movieId)}
      className='player__exit'
      onClick={() => navigate(-1)}
    >
      Exit
    </Link>
  );
};

export default ExitPlayerButton;
