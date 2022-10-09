import { ReactNode } from 'react';

interface MovieButtonProps {
  icon?: ReactNode;
  children?: ReactNode;
  moviesListCount?: number;
}

export default function MovieButton({icon, children, moviesListCount}: MovieButtonProps) {
  return (
    <button className='btn film-card__button' type='button'>
      {icon}
      {children}
      {moviesListCount !== undefined && <span className='film-card__count'>{moviesListCount}</span>}
    </button>
  );
}
