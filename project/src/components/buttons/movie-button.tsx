import React, { ReactNode, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';
import LoadingIcon from '../icons/loading-icon';

type MovieButtonProps = PropsWithChildren<{
  icon?: ReactNode;
  moviesListCount?: number;
  onClick?: () => void;
  loading?: boolean;
}>

export default function MovieButton({icon, children, moviesListCount, onClick, loading}: MovieButtonProps) {
  const navigate = useNavigate();

  const handleMoviesListCountClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    navigate(PageLink.MyList);
    e.stopPropagation();
  };

  return (
    <button className='btn film-card__button' type='button' onClick={onClick} disabled={loading}>
      {loading ? <LoadingIcon /> : icon}
      {children}
      {moviesListCount !== undefined && (
        <span
          className='film-card__count'
          onClick={handleMoviesListCountClick}
        >
          {moviesListCount}
        </span>
      )}
    </button>
  );
}
